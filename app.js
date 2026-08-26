(() => {
  const STORAGE_KEY = 'ai-eng-skills-progress-v1';
  const data = window.LEARNING_MAP;

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }
  function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }
  function escapeHtml(str) {
    return String(str).replaceAll('&','&').replaceAll('<','<').replaceAll('>','>').replaceAll('"','"');
  }

  function render() {
    document.getElementById('roadmap-list').innerHTML = data.sections.map(sec => `
      <div class="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
        <span class="w-7 h-7 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center">${sec.num}</span>
        <div class="flex-1">
          <div class="font-medium">${escapeHtml(sec.title)}</div>
          <div class="text-xs text-slate-500">${escapeHtml(sec.roadmap)}</div>
        </div>
        <span class="text-xs text-slate-400" data-progress-label="${sec.id}">0%</span>
      </div>`).join('');

    document.getElementById('content-sections').innerHTML = data.sections.map(sec => {
      const goals = sec.goals.map(g => `
        <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
          <input type="checkbox" data-section="${sec.id}" data-id="${g.id}" class="mt-1 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
          <span class="text-sm">${escapeHtml(g.text)}</span>
        </label>`).join('');
      const resources = sec.resources.map(r => `
        <a href="${escapeHtml(r.href)}" target="_blank" rel="noopener" class="resource-card block p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-300 transition">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs px-2 py-0.5 rounded ${r.tagClass}">${escapeHtml(r.tag)}</span>
            ${r.meta ? `<span class="text-xs text-slate-400">${escapeHtml(r.meta)}</span>` : ''}
          </div>
          <div class="font-medium text-sm">${escapeHtml(r.title)}</div>
          <div class="text-xs text-slate-500 mt-1">${escapeHtml(r.desc)}</div>
        </a>`).join('');
      return `
        <section id="${sec.id}" class="section-anchor">
          <div class="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h2 class="text-xl font-bold text-slate-900">${sec.num}. ${escapeHtml(sec.title)}</h2>
                <p class="text-sm text-slate-500 mt-1">${escapeHtml(sec.blurb)}</p>
              </div>
              <span class="text-sm font-medium text-teal-700" data-section-progress="${sec.id}">0%</span>
            </div>
            <div class="space-y-3 mb-6">${goals}</div>
            <h3 class="text-sm font-semibold text-slate-700 mb-3">精选资源</h3>
            <div class="grid sm:grid-cols-2 gap-3">${resources}</div>
          </div>
        </section>`;
    }).join('');

    document.getElementById('project-list').innerHTML = data.projects.map(p => `
      <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
        <div class="font-medium">${escapeHtml(p.title)}</div>
        <div class="text-sm text-slate-500 mt-1">${escapeHtml(p.desc)}</div>
      </div>`).join('');

    const source = document.getElementById('source-link');
    source.href = data.source.url;
    source.textContent = data.source.label;
    document.getElementById('source-date').textContent = `（${data.source.date}）`;
  }

  function updateUI() {
    const progress = loadProgress();
    let totalChecked = 0, totalItems = 0;
    data.sections.forEach(sec => {
      const checks = document.querySelectorAll(`input[data-section="${sec.id}"]`);
      let checked = 0;
      checks.forEach(cb => {
        totalItems += 1;
        if (progress[cb.dataset.id]) { cb.checked = true; checked += 1; totalChecked += 1; }
        else cb.checked = false;
      });
      const pct = checks.length ? Math.round((checked / checks.length) * 100) : 0;
      document.querySelectorAll(`[data-section-progress="${sec.id}"]`).forEach(el => el.textContent = pct + '%');
      document.querySelectorAll(`[data-progress-label="${sec.id}"]`).forEach(el => el.textContent = pct + '%');
    });
    const overall = totalItems ? Math.round((totalChecked / totalItems) * 100) : 0;
    document.getElementById('overall-progress-bar').style.width = overall + '%';
    document.getElementById('overall-progress-text').textContent = overall + '%';
  }

  function bind() {
    document.querySelectorAll('input[type="checkbox"][data-section]').forEach(cb => {
      cb.addEventListener('change', () => {
        const progress = loadProgress();
        if (cb.checked) progress[cb.dataset.id] = true;
        else delete progress[cb.dataset.id];
        saveProgress(progress);
        updateUI();
      });
    });
    document.getElementById('reset-progress').addEventListener('click', () => {
      if (confirm('确定要重置所有学习进度吗？')) {
        localStorage.removeItem(STORAGE_KEY);
        updateUI();
      }
    });
    const links = document.querySelectorAll('.sidebar-link');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.sidebar-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });
    document.querySelectorAll('section[id]').forEach(sec => observer.observe(sec));
  }

  render();
  bind();
  updateUI();
})();
