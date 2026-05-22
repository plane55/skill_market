const supportedLocales = ['zh', 'en']
const defaultLocale = 'zh'

function detectLocale(request) {
  const header = request.headers.get('accept-language') || ''
  const lang = header.split(',')[0]?.trim()?.slice(0, 2)
  return supportedLocales.includes(lang) ? lang : defaultLocale
}

export function onRequest({ request, url, redirect }, next) {
  const { pathname } = new URL(url)

  // Already has a supported locale prefix
  const firstSegment = pathname.split('/')[1]
  if (supportedLocales.includes(firstSegment)) {
    return next()
  }

  // No locale prefix — detect and redirect
  const locale = detectLocale(request)

  // Build new path: /skills/xxx → /zh/skills/xxx,  / → /zh/
  const newPath = pathname === '/'
    ? `/${locale}/`
    : `/${locale}${pathname}`

  return redirect(newPath)
}
