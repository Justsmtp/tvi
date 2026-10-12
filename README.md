# The Vanguard Initiative — React Website

**Tagline:** Raising Pioneers, Not Participants  
**Tech:** React 18 + Vite + React Router v6  
**Colours:** Forest Green `#063B2A` · Gold `#D4A72C` · Ivory `#F7F4EA`

---

## 📁 Project Structure

```
tvi-website/
├── public/
│   ├── tvilogo.jpeg        ← TVI logo (used in nav & footer)
│   └── _redirects          ← Cloudflare Pages routing
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      ← Sticky green nav with logo
│   │   ├── Footer.jsx      ← Dark green footer
│   │   ├── HeroInner.jsx   ← Shared inner-page hero
│   │   └── AnimatedBg.jsx  ← Subtle background orbs
│   ├── pages/
│   │   ├── Home.jsx        ← Home page
│   │   ├── About.jsx       ← About Us
│   │   ├── WhatWeDo.jsx    ← What We Do
│   │   ├── Programmes.jsx  ← EMERGE Programmes + enquiry form
│   │   ├── GetInvolved.jsx ← Join a Programme / Partner / Sponsor
│   │   ├── Events.jsx      ← Events + mailing list
│   │   ├── Impact.jsx      ← Our Impact + stats
│   │   ├── Donate.jsx      ← Donate page
│   │   └── Contact.jsx     ← Contact form
│   ├── App.jsx             ← Routes
│   ├── main.jsx            ← Entry point
│   └── index.css           ← All shared styles & design tokens
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Setup (first time)

```bash
# 1. Unzip and enter the folder
cd tvi-website

# 2. Install dependencies
npm install

# 3. Start local dev server
npm run dev
# → Opens at http://localhost:5173
```

---

## 🏗️ Build for production

```bash
npm run build
# → Outputs to /dist folder
```

---

## ☁️ Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Go to Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**
3. Select the repo, then set:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Save and Deploy** — live in ~60 seconds
5. Add your custom domain under **Custom Domains**

Every future `git push` auto-deploys.

---

## ✏️ Common edits

| What to change | File |
|---|---|
| Nav links | `src/components/Navbar.jsx` |
| Footer links & social URLs | `src/components/Footer.jsx` |
| Home hero text | `src/pages/Home.jsx` |
| Founder story | `src/pages/About.jsx` |
| Programme content | `src/pages/Programmes.jsx` |
| Contact info (email, phone, address) | `src/pages/Contact.jsx` |
| Brand colours | `src/index.css` → `:root {}` block |
| All fonts | `src/index.css` → `@import` line + `body { font-family }` |

---

## 🎨 Brand tokens (in src/index.css)

```css
--green-primary: #063B2A
--green-dark:    #02271D
--gold:          #D4A72C
--gold-light:    #E8C766
--ivory:         #F7F4EA
```

---

## 📬 Connecting real forms (Formspree)

Replace the `submit` function in any page with:

```js
const submit = async () => {
  const res = await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  if (res.ok) setSubmitted(true)
}
```

---

Built for The Vanguard Initiative · © 2025
