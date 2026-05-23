export const mcps = [
  {
    id: 'm1', slug: 'filesystem-server',
    name: { zh: 'File System Server', en: 'File System Server' },
    description: { zh: '标准文件系统 MCP 服务，支持文件读写、目录遍历、文件监控、权限管理。', en: 'Standard filesystem MCP server supporting file read/write, directory traversal, file watching, and permission management.' },
    category: 'file-system',
    protocolVersion: '2025-03',
    serverType: 'stdio',
    modelCompatibility: ['Claude', 'GPT-4'],
    rating: 4.7, reviewCount: 2345,
    featured: true,
  },
  {
    id: 'm2', slug: 'sql-gateway',
    name: { zh: 'SQL Gateway 数据库网关', en: 'SQL Gateway' },
    description: { zh: '数据库连接 MCP 服务，支持 MySQL、PostgreSQL、SQLite，安全执行查询与事务。', en: 'Database connectivity MCP server supporting MySQL, PostgreSQL, and SQLite with safe query execution and transactions.' },
    category: 'database',
    protocolVersion: '2025-03',
    serverType: 'stdio',
    modelCompatibility: ['Claude', 'GPT-4', 'Gemini'],
    rating: 4.6, reviewCount: 1876,
    featured: false,
  },
  {
    id: 'm3', slug: 'rest-connector',
    name: { zh: 'REST Connector API 连接器', en: 'REST Connector' },
    description: { zh: '通用 REST API 连接 MCP 服务，自动生成接口调用，支持认证、限流、缓存。', en: 'Universal REST API connector MCP server with auto-generated API calls, authentication, rate limiting, and caching.' },
    category: 'api',
    protocolVersion: '2025-03',
    serverType: 'http',
    modelCompatibility: ['Claude', 'GPT-4', 'Gemini', 'Copilot'],
    rating: 4.8, reviewCount: 3456,
    featured: true,
  },
  {
    id: 'm4', slug: 'search-engine',
    name: { zh: 'Search Engine 搜索引擎', en: 'Search Engine MCP' },
    description: { zh: '搜索引擎 MCP 服务，聚合 Google、Bing、Brave 结果，支持网页抓取与内容提取。', en: 'Search engine MCP server aggregating Google, Bing, and Brave results with web scraping and content extraction.' },
    category: 'search',
    protocolVersion: '2025-03',
    serverType: 'http',
    modelCompatibility: ['Claude', 'GPT-4', 'Gemini'],
    rating: 4.5, reviewCount: 4567,
    featured: false,
  },
  {
    id: 'm5', slug: 'image-toolkit',
    name: { zh: 'Image Toolkit 图片工具包', en: 'Image Toolkit' },
    description: { zh: '图片处理 MCP 服务，支持裁剪、缩放、滤镜、OCR 文字识别、格式转换。', en: 'Image processing MCP server supporting cropping, resizing, filters, OCR text recognition, and format conversion.' },
    category: 'compute',
    protocolVersion: '2025-03',
    serverType: 'http',
    modelCompatibility: ['Claude', 'GPT-4'],
    rating: 4.4, reviewCount: 1234,
    featured: false,
  },
  {
    id: 'm6', slug: 'document-parser',
    name: { zh: 'Document Parser 文档解析', en: 'Document Parser' },
    description: { zh: '文档解析 MCP 服务，支持 PDF、Word、Excel、Markdown 解析与结构化提取。', en: 'Document parsing MCP server supporting PDF, Word, Excel, and Markdown with structured extraction.' },
    category: 'file-system',
    protocolVersion: '2025-03',
    serverType: 'stdio',
    modelCompatibility: ['Claude', 'GPT-4', 'Gemini'],
    rating: 4.6, reviewCount: 2345,
    featured: true,
  },
  {
    id: 'm7', slug: 'cache-store',
    name: { zh: 'Cache Store 缓存服务', en: 'Cache Store' },
    description: { zh: '高性能缓存 MCP 服务，支持 Redis、Memcached，提供键值存储、过期策略和原子操作。', en: 'High-performance caching MCP server supporting Redis and Memcached with key-value storage, TTL, and atomic operations.' },
    category: 'database',
    protocolVersion: '2025-03',
    serverType: 'stdio',
    modelCompatibility: ['Claude', 'GPT-4', 'Gemini', 'Copilot'],
    rating: 4.3, reviewCount: 876,
    featured: false,
  },
  {
    id: 'm8', slug: 'log-collector',
    name: { zh: 'Log Collector 日志收集', en: 'Log Collector' },
    description: { zh: '日志管理与分析 MCP 服务，采集、解析、查询多维日志数据，支持实时告警。', en: 'Log management and analysis MCP server for collecting, parsing, and querying multi-dimensional log data with real-time alerts.' },
    category: 'api',
    protocolVersion: '2025-03',
    serverType: 'http',
    modelCompatibility: ['Claude', 'GPT-4'],
    rating: 4.2, reviewCount: 654,
    featured: false,
  },
  {
    id: 'm9', slug: 'webhook-relay',
    name: { zh: 'Webhook Relay 消息转发', en: 'Webhook Relay' },
    description: { zh: 'Webhook 消息转发 MCP 服务，支持事件订阅、消息路由、重试机制和日志追踪。', en: 'Webhook message relay MCP server with event subscription, message routing, retry mechanism, and log tracing.' },
    category: 'api',
    protocolVersion: '2025-03',
    serverType: 'http',
    modelCompatibility: ['Claude', 'GPT-4', 'Gemini'],
    rating: 4.1, reviewCount: 432,
    featured: false,
  },
  {
    id: 'm10', slug: 'code-executor',
    name: { zh: 'Code Executor 代码执行', en: 'Code Executor' },
    description: { zh: '沙箱代码执行 MCP 服务，安全运行 Python、JavaScript、Shell 脚本，支持依赖管理。', en: 'Sandboxed code execution MCP server for safely running Python, JavaScript, and Shell scripts with dependency management.' },
    category: 'compute',
    protocolVersion: '2025-03',
    serverType: 'stdio',
    modelCompatibility: ['Claude', 'GPT-4', 'Copilot'],
    rating: 4.9, reviewCount: 5678,
    featured: true,
  },
]

export function localizeMCP(mcp, locale) {
  return {
    ...mcp,
    name: mcp.name[locale] || mcp.name.zh,
    description: mcp.description[locale] || mcp.description.zh,
  }
}

export function getMCPs(locale) {
  return mcps.map(m => localizeMCP(m, locale))
}

export function getMCPBySlug(slug, locale) {
  const mcp = mcps.find(m => m.slug === slug)
  return mcp ? localizeMCP(mcp, locale) : null
}
