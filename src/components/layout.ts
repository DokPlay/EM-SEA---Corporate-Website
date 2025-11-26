import { t } from '../i18n/translations'

export function Layout(content: string, lang: string, title: string, description: string): string {
  const tr = t(lang)
  const otherLang = lang === 'en' ? 'zh' : 'en'
  
  return `<!DOCTYPE html>
<html lang="${lang === 'zh' ? 'zh-Hant' : 'en'}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | EM SEA</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="mining equipment, European mining, mining machinery, Hong Kong, equipment sourcing, mining industry">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://emsea.com.hk">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${title} | EM SEA">
    <meta property="og:description" content="${description}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="${lang === 'zh' ? 'zh_HK' : 'en_US'}">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: {
                50: '#eff6ff',
                100: '#dbeafe',
                200: '#bfdbfe',
                300: '#93c5fd',
                400: '#60a5fa',
                500: '#3b82f6',
                600: '#2563eb',
                700: '#1d4ed8',
                800: '#1e40af',
                900: '#1e3a8a',
              },
              accent: {
                400: '#fb923c',
                500: '#f97316',
                600: '#ea580c',
              }
            },
            fontFamily: {
              sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
            }
          }
        }
      }
    </script>
    
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
    
    <!-- Custom Styles -->
    <link rel="stylesheet" href="/static/style.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/static/favicon.svg">
</head>
<body class="font-sans antialiased text-gray-800 bg-white">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16 md:h-20">
                <!-- Logo -->
                <a href="/?lang=${lang}" class="flex items-center space-x-2">
                    <div class="flex items-center">
                        <svg viewBox="0 0 48 48" class="h-10 w-10 md:h-12 md:w-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="8" fill="#1e40af"/>
                            <path d="M8 24L24 12L40 24L24 36L8 24Z" fill="#f97316" opacity="0.9"/>
                            <path d="M16 24L24 18L32 24L24 30L16 24Z" fill="white"/>
                            <circle cx="24" cy="24" r="4" fill="#1e40af"/>
                        </svg>
                        <span class="ml-2 text-xl md:text-2xl font-bold text-primary-800">EM SEA</span>
                    </div>
                </a>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/?lang=${lang}" class="nav-link text-gray-600 hover:text-primary-600 font-medium transition-colors">${tr.nav.home}</a>
                    <a href="/services?lang=${lang}" class="nav-link text-gray-600 hover:text-primary-600 font-medium transition-colors">${tr.nav.services}</a>
                    <a href="/contacts?lang=${lang}" class="nav-link text-gray-600 hover:text-primary-600 font-medium transition-colors">${tr.nav.contacts}</a>
                    <a href="?lang=${otherLang}" class="px-4 py-2 text-sm font-medium text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all">
                        ${tr.nav.langSwitch}
                    </a>
                </div>
                
                <!-- Mobile menu button -->
                <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        
        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
            <div class="px-4 py-4 space-y-3">
                <a href="/?lang=${lang}" class="block py-2 text-gray-600 hover:text-primary-600 font-medium">${tr.nav.home}</a>
                <a href="/services?lang=${lang}" class="block py-2 text-gray-600 hover:text-primary-600 font-medium">${tr.nav.services}</a>
                <a href="/contacts?lang=${lang}" class="block py-2 text-gray-600 hover:text-primary-600 font-medium">${tr.nav.contacts}</a>
                <a href="?lang=${otherLang}" class="inline-block px-4 py-2 text-sm font-medium text-primary-600 border border-primary-600 rounded-lg">
                    ${tr.nav.langSwitch}
                </a>
            </div>
        </div>
    </nav>
    
    <!-- Main Content -->
    <main class="pt-16 md:pt-20">
        ${content}
    </main>
    
    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Logo & Description -->
                <div class="space-y-4">
                    <div class="flex items-center">
                        <svg viewBox="0 0 48 48" class="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="8" fill="#2563eb"/>
                            <path d="M8 24L24 12L40 24L24 36L8 24Z" fill="#f97316" opacity="0.9"/>
                            <path d="M16 24L24 18L32 24L24 30L16 24Z" fill="white"/>
                            <circle cx="24" cy="24" r="4" fill="#2563eb"/>
                        </svg>
                        <span class="ml-2 text-xl font-bold">EM SEA</span>
                    </div>
                    <p class="text-gray-400 text-sm">${tr.footer.tagline}</p>
                </div>
                
                <!-- Quick Links -->
                <div>
                    <h4 class="font-semibold mb-4">${lang === 'zh' ? '快速連結' : 'Quick Links'}</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="/?lang=${lang}" class="hover:text-white transition-colors">${tr.nav.home}</a></li>
                        <li><a href="/services?lang=${lang}" class="hover:text-white transition-colors">${tr.nav.services}</a></li>
                        <li><a href="/contacts?lang=${lang}" class="hover:text-white transition-colors">${tr.nav.contacts}</a></li>
                    </ul>
                </div>
                
                <!-- Contact -->
                <div>
                    <h4 class="font-semibold mb-4">${lang === 'zh' ? '聯繫方式' : 'Contact'}</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li class="flex items-center">
                            <i class="fas fa-envelope w-5 mr-2"></i>
                            <a href="mailto:info@emsea.com.hk" class="hover:text-white transition-colors">info@emsea.com.hk</a>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-map-marker-alt w-5 mr-2"></i>
                            <span>Hong Kong</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                ${tr.footer.copyright}
            </div>
        </div>
    </footer>
    
    <!-- Scripts -->
    <script src="/static/app.js"></script>
</body>
</html>`
}
