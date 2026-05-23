export const plugins = [
  {
    id: 'p1', slug: 'web-search-pro',
    name: { zh: 'Web Search Pro', en: 'Web Search Pro' },
    description: { zh: '增强型联网搜索插件，支持多引擎聚合、实时资讯抓取、结构化结果输出。', en: 'Enhanced web search plugin with multi-engine aggregation, real-time news fetching, and structured result output.' },
    category: 'search',
    platform: ['ChatGPT', 'Claude', 'Browser'],
    version: '2.3.0',
    rating: 4.8, reviewCount: 3456,
    featured: true,
  },
  {
    id: 'p2', slug: 'file-converter',
    name: { zh: 'File Converter 全能转换', en: 'File Converter' },
    description: { zh: '文档、图片、音视频格式互转，支持 200+ 格式，保持原文件质量。', en: 'Convert documents, images, audio, and video across 200+ formats with original quality preserved.' },
    category: 'productivity',
    platform: ['ChatGPT', 'Claude', 'Chrome'],
    version: '1.8.2',
    rating: 4.5, reviewCount: 1234,
    featured: false,
  },
  {
    id: 'p3', slug: 'image-studio',
    name: { zh: 'Image Studio AI 绘画', en: 'Image Studio AI' },
    description: { zh: 'AI 图片生成与编辑插件，支持文生图、图生图、背景移除、智能扩图。', en: 'AI image generation and editing plugin supporting text-to-image, image-to-image, background removal, and outpainting.' },
    category: 'media',
    platform: ['ChatGPT', 'Claude'],
    version: '3.1.0',
    rating: 4.7, reviewCount: 5678,
    featured: true,
  },
  {
    id: 'p4', slug: 'pdf-master',
    name: { zh: 'PDF Master', en: 'PDF Master' },
    description: { zh: 'PDF 全功能处理插件，阅读、编辑、转换、合并、签名、加密一站式搞定。', en: 'Full-featured PDF processing plugin for reading, editing, converting, merging, signing, and encrypting.' },
    category: 'productivity',
    platform: ['ChatGPT', 'Claude', 'Chrome'],
    version: '2.0.1',
    rating: 4.4, reviewCount: 2345,
    featured: false,
  },
  {
    id: 'p5', slug: 'code-runner',
    name: { zh: 'Code Runner 在线执行', en: 'Code Runner' },
    description: { zh: '多语言在线代码执行插件，支持 Python、JavaScript、Go、Rust 等 40+ 语言。', en: 'Multi-language online code execution plugin supporting Python, JavaScript, Go, Rust, and 40+ languages.' },
    category: 'dev',
    platform: ['ChatGPT', 'Claude'],
    version: '4.0.0',
    rating: 4.9, reviewCount: 7890,
    featured: true,
  },
  {
    id: 'p6', slug: 'translation-hub',
    name: { zh: 'Translation Hub 翻译中心', en: 'Translation Hub' },
    description: { zh: 'AI 增强翻译插件，保留专业术语，支持文档级翻译与实时对话翻译。', en: 'AI-enhanced translation plugin with terminology preservation, document-level translation, and real-time conversation.' },
    category: 'productivity',
    platform: ['ChatGPT', 'Claude', 'Chrome', 'Browser'],
    version: '2.1.3',
    rating: 4.6, reviewCount: 4567,
    featured: false,
  },
  {
    id: 'p7', slug: 'data-viz',
    name: { zh: 'Data Viz 图表生成', en: 'Data Viz Generator' },
    description: { zh: '从数据到可视化一键生成，支持柱状图、折线图、饼图、热力图等 30+ 图表类型。', en: 'One-click visualization from data, supporting bar charts, line charts, pie charts, heatmaps, and 30+ chart types.' },
    category: 'data',
    platform: ['ChatGPT', 'Claude'],
    version: '1.5.0',
    rating: 4.3, reviewCount: 876,
    featured: false,
  },
  {
    id: 'p8', slug: 'email-composer',
    name: { zh: 'Email Composer 邮件大师', en: 'Email Composer Pro' },
    description: { zh: 'AI 邮件撰写与回复插件，智能匹配语气风格，支持多邮箱管理与模板库。', en: 'AI email writing and reply plugin with smart tone matching, multi-account management, and template library.' },
    category: 'communication',
    platform: ['ChatGPT', 'Chrome'],
    version: '1.3.0',
    rating: 4.2, reviewCount: 654,
    featured: false,
  },
]

export function localizePlugin(plugin, locale) {
  return {
    ...plugin,
    name: plugin.name[locale] || plugin.name.zh,
    description: plugin.description[locale] || plugin.description.zh,
  }
}

export function getPlugins(locale) {
  return plugins.map(p => localizePlugin(p, locale))
}

export function getPluginBySlug(slug, locale) {
  const plugin = plugins.find(p => p.slug === slug)
  return plugin ? localizePlugin(plugin, locale) : null
}
