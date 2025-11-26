import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-pages'
import { HomePage } from './pages/home'
import { ServicesPage } from './pages/services'
import { ContactsPage } from './pages/contacts'

type Bindings = {
  // Add bindings here if needed
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic())

// API endpoint for contact form
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, company, message, lang } = body
    
    // In production, this would send email via external service
    // For now, we log and return success
    console.log('Contact form submission:', { name, email, company, message, lang })
    
    return c.json({ 
      success: true, 
      message: lang === 'zh' 
        ? '感谢您的留言！我们会尽快与您联系。' 
        : 'Thank you for your message! We will contact you soon.'
    })
  } catch (error) {
    return c.json({ success: false, message: 'Error processing request' }, 500)
  }
})

// Pages
app.get('/', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(HomePage(lang))
})

app.get('/services', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(ServicesPage(lang))
})

app.get('/contacts', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(ContactsPage(lang))
})

// Language redirect helper
app.get('/zh', (c) => c.redirect('/?lang=zh'))
app.get('/en', (c) => c.redirect('/?lang=en'))

export default app
