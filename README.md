# EM SEA - Corporate Website

## Project Overview
- **Name**: EM SEA Corporate Website
- **Goal**: Professional bilingual (EN/中文) corporate website for mining equipment trading company
- **Domain**: emsea.com.hk (planned)
- **Tech Stack**: Hono + TypeScript + TailwindCSS + Cloudflare Pages

## 🌐 Demo URLs
- **Preview**: https://3000-ivkze13h38nf78fq9pd76-2e1b9533.sandbox.novita.ai
- **English**: https://3000-ivkze13h38nf78fq9pd76-2e1b9533.sandbox.novita.ai/?lang=en
- **Chinese**: https://3000-ivkze13h38nf78fq9pd76-2e1b9533.sandbox.novita.ai/?lang=zh

## ✅ Completed Features
1. **Bilingual Interface (EN/中文)**
   - Full translation for all pages
   - Language switcher in navigation
   - Traditional Chinese (繁體中文) for Hong Kong market

2. **Three Main Pages**
   - Home (/) - Hero section, company overview, features
   - Services (/services) - Detailed services, equipment categories
   - Contacts (/contacts) - Contact form, company information

3. **Modern Design**
   - Color scheme: Navy blue (#1e40af), Orange accent (#f97316)
   - Fully responsive (mobile, tablet, desktop)
   - Custom SVG logo integrated

4. **Technical Features**
   - Contact form with API endpoint
   - SEO optimization (meta tags, Open Graph)
   - Fast loading with CDN resources
   - Accessibility support

## 📁 Project Structure
```
webapp/
├── src/
│   ├── index.tsx          # Main Hono app
│   ├── pages/             # Page components
│   │   ├── home.ts
│   │   ├── services.ts
│   │   └── contacts.ts
│   ├── components/
│   │   └── layout.ts      # HTML layout template
│   └── i18n/
│       └── translations.ts # EN/ZH translations
├── public/static/
│   ├── style.css          # Custom styles
│   ├── app.js             # Frontend JavaScript
│   └── favicon.svg        # Site favicon
├── ecosystem.config.cjs   # PM2 configuration
├── wrangler.jsonc         # Cloudflare config
└── package.json
```

## 🚀 Deployment

### Local Development
```bash
npm install
npm run build
npm run dev:sandbox   # or pm2 start ecosystem.config.cjs
```

### Production (Cloudflare Pages)
```bash
npm run build
npx wrangler pages deploy dist --project-name emsea
```

## 📋 Next Steps (For Production)

### Required Actions:
1. **Domain Registration**
   - Register emsea.com.hk through HKDNR or international registrar
   - Requires Hong Kong company or local representative

2. **Corporate Email Setup**
   - Option A: Google Workspace (~$6/month per mailbox)
   - Option B: Zoho Mail (free plan for 5 users)
   - Option C: Cloudflare Email Routing (free forwarding)

3. **Content Replacement**
   - Replace demo statistics with real data
   - Add actual company details and addresses
   - Upload professional photos/images

4. **Logo Finalization**
   - Choose from generated logo concepts
   - Create PNG versions for social media
   - Add to business cards and materials

### Optional Enhancements:
- [ ] Add live chat integration (Intercom, Crisp)
- [ ] Implement email sending for contact form (SendGrid, Resend)
- [ ] Add Google Analytics / Cloudflare Analytics
- [ ] Create XML sitemap
- [ ] Add testimonials section
- [ ] Implement blog/news section

## 🎨 Logo Concepts Generated
- Concept 1: https://www.genspark.ai/api/files/s/8wWgSzuL
- Concept 2: https://www.genspark.ai/api/files/s/2NAgeRQc

## 💻 Tech Specifications
- **Framework**: Hono v4.x
- **Hosting**: Cloudflare Pages (Global CDN)
- **SSL**: Included (Cloudflare)
- **Languages**: TypeScript, HTML, CSS, JavaScript

## 📞 Contact Information (Demo)
- Email: info@emsea.com.hk
- Location: Hong Kong

---

© 2025 EM SEA. All rights reserved.
