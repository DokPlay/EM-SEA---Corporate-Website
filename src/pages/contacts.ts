import { Layout } from '../components/layout'
import { t } from '../i18n/translations'

export function ContactsPage(lang: string): string {
  const tr = t(lang)
  
  const content = `
    <!-- Contacts Hero -->
    <section class="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
        <div class="absolute inset-0 opacity-10">
            <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
        </div>
        
        <div class="absolute top-10 right-10 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 left-10 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"></div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">${tr.contacts.title}</h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">${tr.contacts.subtitle}</p>
        </div>
    </section>
    
    <!-- Contact Section -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">${tr.contacts.formTitle}</h2>
                    
                    <form id="contact-form" class="space-y-6">
                        <input type="hidden" name="lang" value="${lang}">
                        
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">${tr.contacts.nameLabel} *</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                placeholder="${tr.contacts.namePlaceholder}"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                            >
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">${tr.contacts.emailLabel} *</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                placeholder="${tr.contacts.emailPlaceholder}"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                            >
                        </div>
                        
                        <div>
                            <label for="company" class="block text-sm font-medium text-gray-700 mb-2">${tr.contacts.companyLabel}</label>
                            <input 
                                type="text" 
                                id="company" 
                                name="company" 
                                placeholder="${tr.contacts.companyPlaceholder}"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                            >
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">${tr.contacts.messageLabel} *</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                required
                                placeholder="${tr.contacts.messagePlaceholder}"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit" 
                            id="submit-btn"
                            class="w-full px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center"
                        >
                            <i class="fas fa-paper-plane mr-2"></i>
                            <span id="btn-text">${tr.contacts.submitButton}</span>
                        </button>
                        
                        <div id="form-message" class="hidden p-4 rounded-lg"></div>
                    </form>
                </div>
                
                <!-- Contact Info -->
                <div class="space-y-8">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">${tr.contacts.infoTitle}</h2>
                        
                        <div class="space-y-6">
                            <!-- Email -->
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                                    <i class="fas fa-envelope text-xl text-primary-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">${tr.contacts.emailTitle}</h4>
                                    <a href="mailto:info@emsea.com.hk" class="text-primary-600 hover:text-primary-700 transition-colors">info@emsea.com.hk</a>
                                    <br>
                                    <a href="mailto:contact@emsea.com.hk" class="text-primary-600 hover:text-primary-700 transition-colors">contact@emsea.com.hk</a>
                                </div>
                            </div>
                            
                            <!-- Location -->
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                                    <i class="fas fa-map-marker-alt text-xl text-accent-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">${tr.contacts.locationTitle}</h4>
                                    <p class="text-gray-600">${tr.contacts.location}</p>
                                </div>
                            </div>
                            
                            <!-- Business Hours -->
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                                    <i class="fas fa-clock text-xl text-primary-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">${tr.contacts.hoursTitle}</h4>
                                    <p class="text-gray-600">${tr.contacts.hours}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Additional Info Card -->
                    <div class="bg-gradient-to-br from-primary-800 to-primary-900 p-8 rounded-2xl text-white">
                        <h3 class="text-xl font-bold mb-4">
                            ${lang === 'zh' ? '為什麼選擇 EM SEA？' : 'Why Choose EM SEA?'}
                        </h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-accent-400 mr-3 mt-1"></i>
                                <span>${lang === 'zh' ? '直接接觸歐洲頂級製造商' : 'Direct access to top European manufacturers'}</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-accent-400 mr-3 mt-1"></i>
                                <span>${lang === 'zh' ? '豐富的礦業設備行業經驗' : 'Extensive mining equipment industry experience'}</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-accent-400 mr-3 mt-1"></i>
                                <span>${lang === 'zh' ? '全面的採購和物流解決方案' : 'Comprehensive procurement & logistics solutions'}</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-accent-400 mr-3 mt-1"></i>
                                <span>${lang === 'zh' ? '專業的技術諮詢和售後支持' : 'Professional technical consulting & after-sales support'}</span>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Quick Response Badge -->
                    <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                                <i class="fas fa-bolt text-2xl text-green-600"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">
                                    ${lang === 'zh' ? '快速回覆' : 'Quick Response'}
                                </h4>
                                <p class="text-gray-600 text-sm">
                                    ${lang === 'zh' ? '我們通常在24小時內回覆所有詢問' : 'We typically respond to all inquiries within 24 hours'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Map Section (Placeholder) -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 md:p-12 text-center">
                <div class="flex flex-col items-center">
                    <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-globe-asia text-4xl text-primary-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">
                        ${lang === 'zh' ? '服務全球客戶' : 'Serving Clients Worldwide'}
                    </h3>
                    <p class="text-gray-600 max-w-2xl">
                        ${lang === 'zh' 
                          ? '我們的總部位於香港，為亞洲及全球的礦業公司提供專業的歐洲設備採購服務。無論您的項目在哪裡，我們都能提供支持。' 
                          : 'Based in Hong Kong, we serve mining companies across Asia and worldwide with professional European equipment sourcing services. Wherever your project is located, we are here to help.'}
                    </p>
                </div>
            </div>
        </div>
    </section>
  `
  
  const title = lang === 'zh' ? '聯繫我們 - 獲取報價和諮詢' : 'Contact Us - Get Quote and Consultation'
  const description = lang === 'zh'
    ? '聯繫 EM SEA 獲取礦業設備採購報價和專業諮詢。我們的團隊隨時準備幫助您找到最佳的歐洲設備解決方案。'
    : 'Contact EM SEA for mining equipment sourcing quotes and professional consultation. Our team is ready to help you find the best European equipment solutions.'
  
  return Layout(content, lang, title, description)
}
