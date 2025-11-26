import { Layout } from '../components/layout'
import { t } from '../i18n/translations'

export function ServicesPage(lang: string): string {
  const tr = t(lang)
  
  const content = `
    <!-- Services Hero -->
    <section class="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
        <div class="absolute inset-0 opacity-10">
            <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
        </div>
        
        <div class="absolute top-10 right-10 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 left-10 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"></div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">${tr.services.title}</h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">${tr.services.subtitle}</p>
        </div>
    </section>
    
    <!-- Main Services -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
                <!-- Service 1 -->
                <div class="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div class="flex items-start space-x-6">
                        <div class="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i class="fas fa-search text-2xl text-white"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-4">${tr.services.service1Title}</h3>
                            <p class="text-gray-600 leading-relaxed">${tr.services.service1Desc}</p>
                            <ul class="mt-4 space-y-2">
                                <li class="flex items-center text-gray-600">
                                    <i class="fas fa-check text-accent-500 mr-2"></i>
                                    ${lang === 'zh' ? '歐洲製造商網絡' : 'European manufacturer network'}
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <i class="fas fa-check text-accent-500 mr-2"></i>
                                    ${lang === 'zh' ? '需求分析與匹配' : 'Requirements analysis & matching'}
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <i class="fas fa-check text-accent-500 mr-2"></i>
                                    ${lang === 'zh' ? '價格比較與優化' : 'Price comparison & optimization'}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <!-- Service 2 -->
                <div class="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div class="flex items-start space-x-6">
                        <div class="flex-shrink-0 w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i class="fas fa-ship text-2xl text-white"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-4">${tr.services.service2Title}</h3>
                            <p class="text-gray-600 leading-relaxed">${tr.services.service2Desc}</p>
                            <ul class="mt-4 space-y-2">
                                <li class="flex items-center text-gray-600">
                                    <i class="fas fa-check text-accent-500 mr-2"></i>
                                    ${lang === 'zh' ? '談判與合同管理' : 'Negotiation & contract management'}
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <i class="fas fa-check text-accent-500 mr-2"></i>
                                    ${lang === 'zh' ? '質量檢驗與認證' : 'Quality inspection & certification'}
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <i class="fas fa-check text-accent-500 mr-2"></i>
                                    ${lang === 'zh' ? '國際物流協調' : 'International logistics coordination'}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <!-- Service 3 -->
                <div class="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div class="flex items-start space-x-6">
                        <div class="flex-shrink-0 w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i class="fas fa-cogs text-2xl text-white"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-4">${tr.services.service3Title}</h3>
                            <p class="text-gray-600 leading-relaxed">${tr.services.service3Desc}</p>
                            <ul class="mt-4 space-y-2">
                                <li class="flex items-center text-gray-600">
                                    <i class="fas fa-check text-accent-500 mr-2"></i>
                                    ${lang === 'zh' ? '設備選型建議' : 'Equipment selection advice'}
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <i class="fas fa-check text-accent-500 mr-2"></i>
                                    ${lang === 'zh' ? '技術規格審核' : 'Technical specification review'}
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <i class="fas fa-check text-accent-500 mr-2"></i>
                                    ${lang === 'zh' ? '兼容性評估' : 'Compatibility assessment'}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <!-- Service 4 -->
                <div class="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div class="flex items-start space-x-6">
                        <div class="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i class="fas fa-headset text-2xl text-white"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-4">${tr.services.service4Title}</h3>
                            <p class="text-gray-600 leading-relaxed">${tr.services.service4Desc}</p>
                            <ul class="mt-4 space-y-2">
                                <li class="flex items-center text-gray-600">
                                    <i class="fas fa-check text-accent-500 mr-2"></i>
                                    ${lang === 'zh' ? '備件供應' : 'Spare parts supply'}
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <i class="fas fa-check text-accent-500 mr-2"></i>
                                    ${lang === 'zh' ? '技術文檔支持' : 'Technical documentation'}
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <i class="fas fa-check text-accent-500 mr-2"></i>
                                    ${lang === 'zh' ? '保修協調' : 'Warranty coordination'}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Equipment Categories -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">${tr.services.equipmentTitle}</h2>
                <div class="w-24 h-1 bg-accent-500 mx-auto"></div>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div class="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
                    <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                        <i class="fas fa-drill text-xl text-primary-600 group-hover:text-white transition-colors"></i>
                    </div>
                    <h4 class="font-semibold text-gray-900 text-sm">${tr.services.equipment1}</h4>
                </div>
                
                <div class="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
                    <div class="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500 transition-colors">
                        <i class="fas fa-cubes text-xl text-accent-600 group-hover:text-white transition-colors"></i>
                    </div>
                    <h4 class="font-semibold text-gray-900 text-sm">${tr.services.equipment2}</h4>
                </div>
                
                <div class="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
                    <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                        <i class="fas fa-dolly text-xl text-primary-600 group-hover:text-white transition-colors"></i>
                    </div>
                    <h4 class="font-semibold text-gray-900 text-sm">${tr.services.equipment3}</h4>
                </div>
                
                <div class="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
                    <div class="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500 transition-colors">
                        <i class="fas fa-mountain text-xl text-accent-600 group-hover:text-white transition-colors"></i>
                    </div>
                    <h4 class="font-semibold text-gray-900 text-sm">${tr.services.equipment4}</h4>
                </div>
                
                <div class="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
                    <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                        <i class="fas fa-truck-monster text-xl text-primary-600 group-hover:text-white transition-colors"></i>
                    </div>
                    <h4 class="font-semibold text-gray-900 text-sm">${tr.services.equipment5}</h4>
                </div>
                
                <div class="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
                    <div class="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500 transition-colors">
                        <i class="fas fa-industry text-xl text-accent-600 group-hover:text-white transition-colors"></i>
                    </div>
                    <h4 class="font-semibold text-gray-900 text-sm">${tr.services.equipment6}</h4>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Process Section -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    ${lang === 'zh' ? '合作流程' : 'How We Work'}
                </h2>
                <div class="w-24 h-1 bg-accent-500 mx-auto"></div>
            </div>
            
            <div class="grid md:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">1</div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">${lang === 'zh' ? '需求諮詢' : 'Consultation'}</h4>
                    <p class="text-gray-600 text-sm">${lang === 'zh' ? '了解您的項目需求和設備規格' : 'Understanding your project needs and specifications'}</p>
                </div>
                
                <div class="text-center">
                    <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">2</div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">${lang === 'zh' ? '設備採購' : 'Sourcing'}</h4>
                    <p class="text-gray-600 text-sm">${lang === 'zh' ? '從歐洲製造商網絡中尋找最佳方案' : 'Finding optimal solutions from European manufacturers'}</p>
                </div>
                
                <div class="text-center">
                    <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">3</div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">${lang === 'zh' ? '物流配送' : 'Delivery'}</h4>
                    <p class="text-gray-600 text-sm">${lang === 'zh' ? '處理採購、檢驗和國際運輸' : 'Handling procurement, inspection and shipping'}</p>
                </div>
                
                <div class="text-center">
                    <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">4</div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">${lang === 'zh' ? '持續支持' : 'Support'}</h4>
                    <p class="text-gray-600 text-sm">${lang === 'zh' ? '提供售後服務和技術支持' : 'Providing after-sales service and technical support'}</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-800 to-primary-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">${tr.services.ctaTitle}</h2>
            <p class="text-xl text-gray-300 mb-8">${tr.services.ctaText}</p>
            <a href="/contacts?lang=${lang}" class="inline-flex items-center px-10 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg">
                <i class="fas fa-envelope mr-3"></i>
                ${tr.services.ctaButton}
            </a>
        </div>
    </section>
  `
  
  const title = lang === 'zh' ? '服務 - 礦業設備採購解決方案' : 'Services - Mining Equipment Sourcing Solutions'
  const description = lang === 'zh'
    ? 'EM SEA 提供全面的礦業設備採購服務，包括設備搜尋、採購物流、技術諮詢和售後支持。'
    : 'EM SEA provides comprehensive mining equipment services including equipment sourcing, procurement, logistics, technical consulting and after-sales support.'
  
  return Layout(content, lang, title, description)
}
