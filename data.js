window.LEARNING_MAP = {
  title: "AI Engineering Skills Map",
  subtitle: "基于 Andrew Ng · 构建与部署 AI 应用",
  source: {
    label: "Andrew Ng · AI Engineering Skills Map: Building and Deploying AI Applications",
    url: "https://x.com/AndrewYNg/status/2090840747738374568",
    date: "2026-08-21"
  },
  sections: [
    {
      id: "llm",
      num: "1",
      title: "LLM Foundations",
      blurb: "理解 tokenization、生成机制、上下文取舍、采样参数、tool calling，判断模型能力边界与失败模式。",
      roadmap: "Tokenization · Context · Sampling · Tool calling",
      goals: [
        { id: "llm-1", text: "理解 Tokenization 与生成过程，能解释为什么输出不稳定" },
        { id: "llm-2", text: "掌握 Context Window 取舍、Cache、Knowledge Cutoff、Sampling 参数" },
        { id: "llm-3", text: "理解 Tool Calling 与多模态模型的使用时机" },
        { id: "llm-4", text: "能判断何时微调 / 自托管 vs 直接用 API" }
      ],
      resources: [
        { href: "https://github.com/rasbt/LLMs-from-scratch", tag: "Book + Code", tagClass: "bg-emerald-100 text-emerald-700", meta: "GitHub 100k+", title: "Build a Large Language Model (From Scratch)", desc: "Sebastian Raschka · 从零实现 GPT 风格模型" },
        { href: "https://huggingface.co/learn/llm-course", tag: "Course", tagClass: "bg-blue-100 text-blue-700", meta: "Free", title: "Hugging Face LLM Course", desc: "Transformers · Tokenizers · 完整生态" },
        { href: "https://www.deeplearning.ai/courses/", tag: "Short Courses", tagClass: "bg-blue-100 text-blue-700", meta: "", title: "DeepLearning.AI Short Courses", desc: "Prompt Engineering · ChatGPT API 等" },
        { href: "https://sebastianraschka.com/llms-from-scratch/", tag: "Companion", tagClass: "bg-purple-100 text-purple-700", meta: "", title: "Raschka 官方学习路径", desc: "章节指南 + 视频 + 练习" }
      ]
    },
    {
      id: "ml",
      num: "2",
      title: "Machine Learning Foundations",
      blurb: "掌握监督学习 / 强化学习基础，bias-variance、错误分析、数据工程 —— 这些心智模型直接迁移到 LLM 系统。",
      roadmap: "Bias/Variance · Error Analysis · 数据工程",
      goals: [
        { id: "ml-1", text: "完成 Andrew Ng Machine Learning Specialization 核心内容" },
        { id: "ml-2", text: "理解 bias / variance 权衡与错误分析流程" },
        { id: "ml-3", text: "能把传统 ML 错误分析思维迁移到 LLM 输出分析" }
      ],
      resources: [
        { href: "https://www.coursera.org/specializations/machine-learning-introduction", tag: "Specialization", tagClass: "bg-blue-100 text-blue-700", meta: "Andrew Ng", title: "Machine Learning Specialization", desc: "Coursera · Python 版 · 强烈推荐" },
        { href: "https://course.fast.ai/", tag: "Course", tagClass: "bg-blue-100 text-blue-700", meta: "Free", title: "fast.ai Practical Deep Learning", desc: "代码优先 · 实践导向" }
      ]
    },
    {
      id: "grounding",
      num: "3",
      title: "Grounding models with data",
      blurb: "从向量 RAG 到知识图谱、语义层；文档解析、分块、清洗、增量更新；决策 prompt vs 工具检索。",
      roadmap: "RAG · 知识图谱 · 语义层 · 文档管道",
      goals: [
        { id: "g-1", text: "构建基础向量 RAG 管道（文档 → embedding → 检索 → 生成）" },
        { id: "g-2", text: "掌握高级检索（Hybrid、Rerank、Sentence-window、Auto-merging）" },
        { id: "g-3", text: "对比向量索引 vs 知识图谱 vs 结构化语义层，完成选型" },
        { id: "g-4", text: "实现文档增量更新与 freshness 保障" }
      ],
      resources: [
        { href: "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/", tag: "Short Course", tagClass: "bg-blue-100 text-blue-700", meta: "Free", title: "Building & Evaluating Advanced RAG", desc: "Jerry Liu · RAG Triad 评估框架" },
        { href: "https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/", tag: "Short Course", tagClass: "bg-blue-100 text-blue-700", meta: "Free", title: "Building Agentic RAG with LlamaIndex", desc: "Router · Research Agent · 多文档" },
        { href: "https://www.deeplearning.ai/courses/retrieval-augmented-generation-rag/", tag: "Full Course", tagClass: "bg-blue-100 text-blue-700", meta: "", title: "Retrieval Augmented Generation (RAG)", desc: "DeepLearning.AI 正式 RAG 课程" },
        { href: "https://docs.llamaindex.ai/", tag: "Docs", tagClass: "bg-slate-100 text-slate-700", meta: "", title: "LlamaIndex Official Docs", desc: "最新 RAG / Agent 实践" }
      ]
    },
    {
      id: "agentic",
      num: "4",
      title: "Building agentic systems",
      blurb: "Workflow（预定义路径）vs Agent（自主决策）；工具、记忆、长会话、多 Agent、护栏与安全。",
      roadmap: "Workflow vs Agent · Tools · Memory · Multi-agent",
      goals: [
        { id: "a-1", text: "理解 Anthropic 的 Workflow vs Agent 分类与五种工作流模式" },
        { id: "a-2", text: "实现 Prompt Chaining → Routing → Orchestrator-Workers" },
        { id: "a-3", text: "构建带工具调用、记忆、fallback 的单 Agent" },
        { id: "a-4", text: "实现多 Agent 协作 + 基本护栏（输入过滤、输出校验）" }
      ],
      resources: [
        { href: "https://www.anthropic.com/research/building-effective-agents", tag: "必读", tagClass: "bg-red-100 text-red-700", meta: "Anthropic", title: "Building Effective Agents", desc: "行业标准词汇与设计原则" },
        { href: "https://github.com/anthropics/claude-cookbooks/tree/main/patterns/agents", tag: "Cookbook", tagClass: "bg-emerald-100 text-emerald-700", meta: "", title: "Claude Agents Cookbook", desc: "最小可运行示例实现" },
        { href: "https://huggingface.co/learn/agents-course", tag: "Course", tagClass: "bg-blue-100 text-blue-700", meta: "Free", title: "Hugging Face Agents Course", desc: "smolagents · LlamaIndex · LangGraph" },
        { href: "https://www.deeplearning.ai/short-courses/evaluating-ai-agents/", tag: "Short Course", tagClass: "bg-blue-100 text-blue-700", meta: "", title: "Evaluating AI Agents", desc: "Arize · 可观测性 + 组件评估" }
      ]
    },
    {
      id: "evals",
      num: "5",
      title: "Evaluation-driven development",
      blurb: "Ng 认为最重要的区分点。建立“看 traces → 错误分析 → 定义评估 → 迭代”闭环。",
      roadmap: "Traces · Error Analysis · LLM-as-Judge · 闭环",
      goals: [
        { id: "e-1", text: "收集 100+ traces 并完成手动错误分类" },
        { id: "e-2", text: "设计 binary（通过/失败）评估标准，而非 1–5 分" },
        { id: "e-3", text: "校准 LLM-as-a-Judge，测量与人类一致性" },
        { id: "e-4", text: "把评估接入开发循环，用数据驱动下一次改动" }
      ],
      resources: [
        { href: "https://hamel.dev/evals", tag: "必读", tagClass: "bg-red-100 text-red-700", meta: "Hamel Husain", title: "Your AI Product Needs Evals", desc: "领域最实用入门文章" },
        { href: "https://hamelhusain.substack.com/p/the-ultimate-ai-evals-faq-now-new", tag: "FAQ", tagClass: "bg-purple-100 text-purple-700", meta: "", title: "The Ultimate AI Evals FAQ", desc: "完整问题解答集合" },
        { href: "https://www.deeplearning.ai/short-courses/evaluating-ai-agents/", tag: "Short Course", tagClass: "bg-blue-100 text-blue-700", meta: "", title: "Evaluating AI Agents", desc: "结构化评估 + 可观测性" },
        { href: "https://github.com/explodinggradients/ragas", tag: "Tool", tagClass: "bg-emerald-100 text-emerald-700", meta: "", title: "RAGAS", desc: "RAG / Agent 自动评估框架" }
      ]
    },
    {
      id: "production",
      num: "6",
      title: "Operating in production",
      blurb: "可观测性、漂移检测、安全事件响应、回归测试、成本与延迟优化。",
      roadmap: "Observability · Drift · Cost · Security",
      goals: [
        { id: "p-1", text: "为系统添加完整 tracing 与结构化日志" },
        { id: "p-2", text: "实现基础漂移检测与质量监控" },
        { id: "p-3", text: "设计成本 / 延迟优化方案并实测" },
        { id: "p-4", text: "建立回归测试套件（含统计评估）" }
      ],
      resources: [
        { href: "https://arize.com/docs/phoenix", tag: "Tool", tagClass: "bg-emerald-100 text-emerald-700", meta: "", title: "Arize Phoenix", desc: "开源 LLM 可观测性" },
        { href: "https://langfuse.com/", tag: "Tool", tagClass: "bg-emerald-100 text-emerald-700", meta: "", title: "Langfuse", desc: "Tracing · 评估 · Prompt 管理" },
        { href: "https://www.deeplearning.ai/short-courses/", tag: "Courses", tagClass: "bg-blue-100 text-blue-700", meta: "", title: "DeepLearning.AI LLMOps 相关短课", desc: "生产部署与运维实践" },
        { href: "https://www.evidentlyai.com/ml-observability-course", tag: "Course", tagClass: "bg-blue-100 text-blue-700", meta: "Free", title: "Evidently AI Observability Course", desc: "ML / LLM 监控基础" }
      ]
    }
  ],
  projects: [
    { title: "项目 1 · 垂直领域 RAG + Agent", desc: "企业内部知识助手 / 研究助手，完整评估闭环" },
    { title: "项目 2 · 生产级可观测系统", desc: "带 tracing、监控、护栏、成本优化的完整系统" },
    { title: "项目 3 · 多 Agent 协作", desc: "Orchestrator + Workers，带记忆与安全机制" }
  ]
};
