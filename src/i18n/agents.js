export const agents = [
  {
    id: 'a1', slug: 'codecraft',
    name: { zh: 'CodeCraft AI 编程助手', en: 'CodeCraft AI Assistant' },
    description: { zh: '智能代码生成与调试助手，支持多语言、多框架，可自动补全、重构、审查代码。', en: 'Intelligent code generation and debugging assistant. Supports multiple languages and frameworks with auto-complete, refactoring, and code review.' },
    category: 'coding',
    modelSupport: ['GPT-4', 'Claude', 'Copilot'],
    pricing: 'freemium',
    rating: 4.8, reviewCount: 1245,
    featured: true,
  },
  {
    id: 'a2', slug: 'datapulse',
    name: { zh: 'DataPulse 数据分析', en: 'DataPulse Analytics' },
    description: { zh: '自动数据采集、清洗与分析，支持可视化报表生成，一句话完成复杂数据分析。', en: 'Automated data collection, cleaning, and analysis with visual report generation. Complete complex analysis with a single command.' },
    category: 'data',
    modelSupport: ['GPT-4', 'Claude', 'Gemini'],
    pricing: 'paid',
    rating: 4.6, reviewCount: 876,
    featured: false,
  },
  {
    id: 'a3', slug: 'writemind',
    name: { zh: 'WriteMind 创作助手', en: 'WriteMind Creator' },
    description: { zh: 'AI 驱动的内容创作助手，支持文章、文案、脚本、邮件等多种写作场景。', en: 'AI-powered content creation assistant for articles, copywriting, scripts, emails, and more.' },
    category: 'creative',
    modelSupport: ['Claude', 'GPT-4'],
    pricing: 'freemium',
    rating: 4.7, reviewCount: 2341,
    featured: true,
  },
  {
    id: 'a4', slug: 'autoflow',
    name: { zh: 'AutoFlow 工作流引擎', en: 'AutoFlow Engine' },
    description: { zh: '可视化 AI 工作流编排工具，拖拽式配置多步骤自动化任务，支持条件分支与循环。', en: 'Visual AI workflow orchestration tool. Drag-and-drop multi-step automation with conditional branching and loops.' },
    category: 'automation',
    modelSupport: ['GPT-4', 'Claude', 'Gemini', 'Copilot'],
    pricing: 'paid',
    rating: 4.5, reviewCount: 654,
    featured: false,
  },
  {
    id: 'a5', slug: 'researchpro',
    name: { zh: 'ResearchPro 研究助手', en: 'ResearchPro Assistant' },
    description: { zh: '学术研究智能助手，文献检索、论文总结、参考文献管理，加速科研全流程。', en: 'Academic research assistant for literature search, paper summarization, and reference management.' },
    category: 'productivity',
    modelSupport: ['Claude', 'GPT-4'],
    pricing: 'freemium',
    rating: 4.4, reviewCount: 543,
    featured: false,
  },
  {
    id: 'a6', slug: 'designmate',
    name: { zh: 'DesignMate 设计伙伴', en: 'DesignMate' },
    description: { zh: 'AI 设计助手，支持界面设计稿生成、配色方案推荐、设计规范检查。', en: 'AI design assistant for UI generation, color scheme recommendations, and design system validation.' },
    category: 'creative',
    modelSupport: ['GPT-4', 'Claude', 'Gemini'],
    pricing: 'free',
    rating: 4.3, reviewCount: 987,
    featured: false,
  },
  {
    id: 'a7', slug: 'marketgenius',
    name: { zh: 'MarketGenius 营销大师', en: 'MarketGenius' },
    description: { zh: 'AI 营销助手，竞品分析、用户洞察、营销文案生成、投放策略优化一站式解决。', en: 'AI marketing assistant for competitor analysis, user insights, copy generation, and campaign optimization.' },
    category: 'automation',
    modelSupport: ['Claude', 'GPT-4', 'Gemini'],
    pricing: 'paid',
    rating: 4.6, reviewCount: 1123,
    featured: true,
  },
  {
    id: 'a8', slug: 'bizanalyst',
    name: { zh: 'BizAnalyst 商业分析', en: 'BizAnalyst' },
    description: { zh: '商业智能分析助手，自动生成报表、趋势预测、异常检测，辅助决策。', en: 'Business intelligence assistant for automated reporting, trend forecasting, anomaly detection, and decision support.' },
    category: 'data',
    modelSupport: ['GPT-4', 'Claude'],
    pricing: 'paid',
    rating: 4.5, reviewCount: 432,
    featured: false,
  },
  {
    id: 'a9', slug: 'langbridge',
    name: { zh: 'LangBridge 翻译专家', en: 'LangBridge Translator' },
    description: { zh: '专业级 AI 翻译助手，支持 100+ 语言，保留语境与风格，适合商务与学术场景。', en: 'Professional-grade AI translator supporting 100+ languages with context and style preservation for business and academic use.' },
    category: 'productivity',
    modelSupport: ['Claude', 'GPT-4', 'Gemini'],
    pricing: 'free',
    rating: 4.7, reviewCount: 5678,
    featured: false,
  },
]

export function localizeAgent(agent, locale) {
  return {
    ...agent,
    name: agent.name[locale] || agent.name.zh,
    description: agent.description[locale] || agent.description.zh,
  }
}

export function getAgents(locale) {
  return agents.map(a => localizeAgent(a, locale))
}

export function getAgentBySlug(slug, locale) {
  const agent = agents.find(a => a.slug === slug)
  return agent ? localizeAgent(agent, locale) : null
}
