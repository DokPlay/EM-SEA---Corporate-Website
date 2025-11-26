import { Layout } from '../components/layout'
import { t } from '../i18n/translations'

export function HomePage(lang: string): string {
  const tr = t(lang)
  
  const content = `
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
        </div>
        
        <!-- Decorative Elements -->
        <div class="absolute top-20 right-10 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="text-white space-y-8">
                    <div class="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                        <i class="fas fa-globe-asia mr-2 text-accent-400"></i>
                        ${lang === 'zh' ? '香港 · 國際貿易' : 'Hong Kong · International Trade'}
                    </div>
                    
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        ${tr.home.heroTitle}
                        <span class="block text-accent-400">${tr.home.heroSubtitle}</span>
                    </h1>
                    
                    <p class="text-xl text-gray-300 max-w-xl">
                        ${tr.home.heroDescription}
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="/contacts?lang=${lang}" class="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                            <i class="fas fa-paper-plane mr-2"></i>
                            ${tr.home.ctaButton}
                        </a>
                        <a href="/services?lang=${lang}" class="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-all">
                            ${tr.home.learnMore}
                            <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <div class="hidden lg:block">
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-2xl transform rotate-6"></div>
                        <div class="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-white/10 rounded-xl p-6 text-center">
                                    <i class="fas fa-industry text-4xl text-accent-400 mb-3"></i>
                                    <div class="text-2xl font-bold text-white">100+</div>
                                    <div class="text-sm text-gray-300">${lang === 'zh' ? '歐洲合作夥伴' : 'European Partners'}</div>
                                </div>
                                <div class="bg-white/10 rounded-xl p-6 text-center">
                                    <i class="fas fa-cogs text-4xl text-accent-400 mb-3"></i>
                                    <div class="text-2xl font-bold text-white">500+</div>
                                    <div class="text-sm text-gray-300">${lang === 'zh' ? '設備類型' : 'Equipment Types'}</div>
                                </div>
                                <div class="bg-white/10 rounded-xl p-6 text-center">
                                    <i class="fas fa-globe text-4xl text-accent-400 mb-3"></i>
                                    <div class="text-2xl font-bold text-white">20+</div>
                                    <div class="text-sm text-gray-300">${lang === 'zh' ? '服務國家' : 'Countries Served'}</div>
                                </div>
                                <div class="bg-white/10 rounded-xl p-6 text-center">
                                    <i class="fas fa-handshake text-4xl text-accent-400 mb-3"></i>
                                    <div class="text-2xl font-bold text-white">15+</div>
                                    <div class="text-sm text-gray-300">${lang === 'zh' ? '年行業經驗' : 'Years Experience'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i class="fas fa-chevron-down text-white/50 text-2xl"></i>
        </div>
    </section>
    
    <!-- About Section -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">${tr.home.aboutTitle}</h2>
                <div class="w-24 h-1 bg-accent-500 mx-auto"></div>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                    <p class="text-lg text-gray-600 leading-relaxed">${tr.home.aboutText1}</p>
                    <p class="text-lg text-gray-600 leading-relaxed">${tr.home.aboutText2}</p>
                    <p class="text-lg text-gray-600 leading-relaxed">${tr.home.aboutText3}</p>
                    
                    <a href="/services?lang=${lang}" class="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                        ${tr.home.learnMore}
                        <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
                
                <div class="relative">
                    <div class="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8">
                        <div class="grid grid-cols-2 gap-6">
                            <div class="text-center p-4">
                                <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i class="fas fa-shield-alt text-2xl text-white"></i>
                                </div>
                                <h4 class="font-semibold text-gray-900">${lang === 'zh' ? '可靠品質' : 'Reliable Quality'}</h4>
                            </div>
                            <div class="text-center p-4">
                                <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i class="fas fa-truck text-2xl text-white"></i>
                                </div>
                                <h4 class="font-semibold text-gray-900">${lang === 'zh' ? '全球物流' : 'Global Logistics'}</h4>
                            </div>
                            <div class="text-center p-4">
                                <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i class="fas fa-comments text-2xl text-white"></i>
                                </div>
                                <h4 class="font-semibold text-gray-900">${lang === 'zh' ? '專業諮詢' : 'Expert Consulting'}</h4>
                            </div>
                            <div class="text-center p-4">
                                <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i class="fas fa-award text-2xl text-white"></i>
                                </div>
                                <h4 class="font-semibold text-gray-900">${lang === 'zh' ? '豐富經驗' : 'Proven Experience'}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Features Section -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">${tr.home.featuresTitle}</h2>
                <div class="w-24 h-1 bg-accent-500 mx-auto"></div>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                    <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                        <i class="fas fa-gem text-2xl text-primary-600 group-hover:text-white transition-colors"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">${tr.home.feature1Title}</h3>
                    <p class="text-gray-600">${tr.home.feature1Desc}</p>
                </div>
                
                <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                    <div class="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors">
                        <i class="fas fa-hard-hat text-2xl text-accent-600 group-hover:text-white transition-colors"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">${tr.home.feature2Title}</h3>
                    <p class="text-gray-600">${tr.home.feature2Desc}</p>
                </div>
                
                <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                    <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                        <i class="fas fa-ship text-2xl text-primary-600 group-hover:text-white transition-colors"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">${tr.home.feature3Title}</h3>
                    <p class="text-gray-600">${tr.home.feature3Desc}</p>
                </div>
                
                <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                    <div class="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors">
                        <i class="fas fa-handshake text-2xl text-accent-600 group-hover:text-white transition-colors"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">${tr.home.feature4Title}</h3>
                    <p class="text-gray-600">${tr.home.feature4Desc}</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-800 to-primary-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                ${lang === 'zh' ? '準備開始您的項目了嗎？' : 'Ready to Start Your Project?'}
            </h2>
            <p class="text-xl text-gray-300 mb-8">
                ${lang === 'zh' ? '聯繫我們，獲取專業的礦業設備採購解決方案。' : 'Contact us today for professional mining equipment sourcing solutions.'}
            </p>
            <a href="/contacts?lang=${lang}" class="inline-flex items-center px-10 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg">
                <i class="fas fa-envelope mr-3"></i>
                ${tr.home.ctaButton}
            </a>
        </div>
    </section>
  `
  
  const title = lang === 'zh' ? '首頁 - 歐洲礦業設備供應商' : 'Home - European Mining Equipment Supplier'
  const description = lang === 'zh' 
    ? 'EM SEA - 香港國際貿易公司，專業從歐洲採購優質礦業設備。為全球礦業項目提供可靠的設備解決方案。'
    : 'EM SEA - Hong Kong based international trading company specializing in sourcing premium mining equipment from European manufacturers.'
  
  return Layout(content, lang, title, description)
}
