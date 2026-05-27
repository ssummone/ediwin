# Edinburgh Windows & Doors — Website Build Plan
## Prepared by Summone Consulting

**Client:** Edinburgh Windows & Doors (edinburghwindowsanddoors.co.uk)  
**Contact:** sales@edinburghwindowsanddoors.co.uk | 01506 168 204  
**Date:** April 2026  
**Deliverable:** Full production website — modern, SEO-optimised, Google Business-ready

---

## 1. PROJECT CONTEXT

### What the client does
Edinburgh Windows & Doors is a **Scottish timber window and door manufacturer** established in 2019. They manufacture bespoke sash and case windows and Accoya timber doors in their Edinburgh workshop. They supply and install UK-wide — from individual homeowners to hotel groups and main contractors.

### The problem with the current site
- Reads like a PVC and composite door *supplier*, not a timber *manufacturer*
- No clear manufacturing identity above the fold
- No dedicated B2B/trade pages
- No project showcase with structure or proof
- No "Book a Survey" journey
- Weak SEO — wrong traffic, wrong keywords
- Current supplier charges for SEO but delivers no results or reporting
- Content is cluttered and repetitive on desktop
- Mobile experience is poor

### What success looks like
- Visitors immediately understand: "this company *manufactures* timber sash windows in Scotland"
- Homeowners can book a survey in 3 clicks
- Trade buyers can open an account or request pricing in 3 clicks
- Commercial project gallery sells the quality before anyone picks up the phone
- Site ranks for core timber sash and case keywords in Edinburgh and UK-wide
- Google Business profile is fully structured and linked

---

## 2. BRAND IDENTITY

### Colours (from existing logo — do not change)
```
--navy:    #1B2E5E   (primary — logo text)
--orange:  #D4631D   (accent — logo icon)
--cream:   #F8F5F0   (section backgrounds, warm tone)
--dark:    #111827   (hero overlays, footer)
--mid:     #6B7280   (body copy, subtitles)
--light:   #E5E7EB   (borders, dividers)
--white:   #FFFFFF
```

### Typography
- **Headings:** Playfair Display (serif) — conveys heritage, craft, quality
- **Body:** Inter (sans-serif) — clean, modern, readable
- Import via Google Fonts

### Tone of voice
- Confident. Direct. Expert. Not salesy.
- "We manufacture. You specify. We deliver."
- Emphasise: Made in Scotland. Manufactured in Edinburgh. UK-wide reach.
- Avoid: generic phrases like "quality you can trust", "your local experts"

### Logo file
`Website updates - easy websites/Company Logo - image 1.jpg`

### Accreditation badges
- `Website updates - easy websites/edinburgh windows and doors made in britain.png` — Made in Britain
- `Website updates - easy websites/Accoya_Affiliate mark_Approved manufacturer_WHITE ON GREEN_RGB.jpg` — Accoya Approved Manufacturer

---

## 3. DESIGN DIRECTION

**Style:** Modern premium craftsman. Think: Benchmark Furniture, Benchmade Knives, Grovemade. Heritage quality meets contemporary digital confidence.

**Key visual principles:**
- Full-bleed photography with dark overlays on hero sections
- Large, bold typographic headlines (no weak small text)
- Strong whitespace — not cluttered, not cheap
- Orange used sparingly for CTAs and emphasis only
- Section alternation: white → cream → white → dark
- Project photography is the hero of the site — let it lead
- No stock photography — use the client's own images throughout

**What to avoid:**
- Anything that looks like a PVC window supplier
- Busy, cluttered layouts
- Generic contractor website templates
- Small fonts, weak hierarchy
- Passive language ("we aim to provide...")

**Reference sites for the Claude Code developer to look at:**
- benchfurniture.com (craft manufacturer positioning)
- Any premium Scottish architecture or construction firm with strong project gallery
- The design should feel like a brand that could serve the President — because they did

---

## 4. SITE ARCHITECTURE

```
/                           → Homepage
/sash-windows               → Sash & Case Windows (core product)
/accoya-doors               → Accoya Timber Doors
/secondary-glazing          → Secondary Glazing
/composite-doors            → Composite Doors
/commercial                 → Commercial Projects
/trade                      → Trade Accounts / B2B
/projects                   → Projects Hub (filterable)
/contact                    → Contact & Book a Survey
```

### Navigation structure
```
Logo (left)
├── Products ▾
│   ├── Sash & Case Windows
│   ├── Accoya Timber Doors
│   ├── Secondary Glazing
│   └── Composite Doors
├── Commercial
├── Trade
├── Projects
└── Contact
[Trade Account] [Book a Survey ●]    ← right-aligned CTAs
```

- Fixed nav, 72px height
- Transparent on hero, white with box-shadow on scroll
- Mobile: hamburger → full-screen slide-in menu
- Active page highlighted in orange

---

## 5. SEO STRATEGY

### Primary keywords to target
| Page | Target Keywords |
|------|----------------|
| Homepage | timber sash and case windows Scotland, sash window manufacturer Edinburgh, bespoke timber windows UK |
| Sash Windows | sash and case windows Edinburgh, timber sash windows Scotland, heritage sash window replacement |
| Accoya Doors | Accoya doors Edinburgh, Accoya timber doors Scotland, bespoke external timber doors |
| Trade | sash window trade supplier UK, timber windows trade Edinburgh, window manufacturer supply trade |
| Commercial | commercial sash window replacement Scotland, hotel window restoration Edinburgh |
| Secondary Glazing | secondary glazing Edinburgh, secondary glazing listed buildings Scotland, sash window secondary glazing |
| Projects | sash window installation Edinburgh, heritage window restoration Scotland |

### On-page SEO requirements for every page
1. **Title tag format:** `[Page Topic] | Edinburgh Windows & Doors — Scottish Timber Manufacturer`
2. **Meta description:** 155 characters max, include primary keyword + location + CTA
3. **H1:** One per page, includes primary keyword
4. **H2s:** Supporting keywords, natural language
5. **Alt text:** Every image gets descriptive alt text with keyword where natural
6. **Internal links:** Every page links to at least 3 other pages
7. **Schema markup:** See Section 6 below
8. **Page speed:** Images must be compressed and served in WebP with jpg fallback
9. **Canonical tags:** On every page
10. **Sitemap.xml:** Generate and reference in robots.txt
11. **robots.txt:** Standard, allow all, point to sitemap

### URL structure
- Clean, lowercase, hyphenated: `/sash-windows`, `/accoya-doors`, `/trade`
- No trailing slashes inconsistency
- No query strings in public-facing pages

### Content SEO per page
Every page must include:
- Location signals: Edinburgh, Scotland, UK-wide
- Service signals: manufacture, bespoke, made to measure
- Trust signals: established 2019, 10,000+ windows, case studies
- Natural long-tail questions answered in body copy (FAQ-style sections help)

---

## 6. SCHEMA MARKUP (JSON-LD)

Add to `<head>` on every page:

### LocalBusiness (homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Edinburgh Windows & Doors",
  "description": "Scottish timber sash and case window manufacturer. Bespoke windows and Accoya doors made in Edinburgh, supplied UK-wide.",
  "url": "https://www.edinburghwindowsanddoors.co.uk",
  "telephone": "01506 168 204",
  "email": "sales@edinburghwindowsanddoors.co.uk",
  "foundingDate": "2019",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Edinburgh",
    "addressRegion": "Scotland",
    "addressCountry": "GB"
  },
  "areaServed": "GB",
  "priceRange": "££",
  "sameAs": [
    "https://www.instagram.com/edinburghwindowsanddoors"
  ]
}
```

### Product schema (on product pages)
Add Product schema for sash windows page, Accoya doors page. Include name, description, brand, offers.

### BreadcrumbList schema
Add to all internal pages.

### FAQPage schema
Add to sash windows and Accoya doors pages — structured FAQ blocks drive featured snippets.

---

## 7. GOOGLE BUSINESS PROFILE OPTIMISATION

Instructions for the client (include as a checklist in the handover doc):

1. **Category:** Primary = "Window Installation Service", Secondary = "Door Supplier", "Joinery"
2. **Business name:** "Edinburgh Windows & Doors" — exact match to domain
3. **Description:** Include "timber sash and case windows", "Accoya doors", "Scottish manufacturer", "Edinburgh", "UK-wide supply" — 750 chars max
4. **Website link:** edinburghwindowsanddoors.co.uk
5. **Phone:** 01506 168 204 — must match site NAP exactly
6. **Address:** Workshop address — consistent with site footer
7. **Products section:** Add each product (Sash & Case Windows, Accoya Doors, Secondary Glazing, Composite Doors) with description and photo
8. **Photos:** Minimum 20 — use client's project photography
9. **Posts:** Set up regular Google Posts (weekly) — link to website content
10. **Q&A section:** Pre-populate with common questions
11. **Reviews:** Add review request link to post-survey follow-up emails

**NAP consistency rule:** The name, address, and phone number on the website footer, Google Business, TrustATrader, and any directories must be **identical** — character for character.

---

## 8. TECHNICAL REQUIREMENTS

### Performance
- Google PageSpeed target: 90+ mobile, 95+ desktop
- Images: WebP format with `<picture>` fallbacks, lazy-loaded with `loading="lazy"`
- Critical CSS inlined
- Google Fonts loaded async with `font-display: swap`
- No render-blocking scripts
- HTML minified, CSS/JS minified

### Hosting & infrastructure
- The developer should confirm hosting platform
- Recommend: Cloudflare CDN minimum for UK-wide delivery
- SSL/HTTPS required

### Tracking setup (GA4)
Add the following GA4 events (configured via GTM or direct):
- `form_submit` — on all enquiry forms
- `phone_click` — on all tel: links
- `cta_click` — on all primary CTA buttons (Book a Survey, Trade Account)
- `file_download` — if trade pack PDF is downloadable
- `page_scroll` — 25%, 50%, 75%, 100% scroll depth

### Conversion tracking
- Google Ads conversion tag on form thank-you state
- Phone number tracking (consider CallRail or similar)

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigable
- ARIA labels on all interactive elements
- Sufficient colour contrast (navy/white passes, check orange/white)

---

## 9. PAGE-BY-PAGE CONTENT SPEC

### 9.1 HOMEPAGE (/)

**Title tag:** `Timber Sash & Case Windows | Edinburgh Windows & Doors — Scottish Manufacturer`  
**Meta:** `Scottish timber sash and case window manufacturer. Bespoke windows and Accoya doors made in Edinburgh, delivered UK-wide. Book a free survey today.`

#### Hero section
- Full-viewport height
- Background: `Website updates - easy websites/Workshop.jpg` — dark overlay 55%
- Eyebrow text (small caps, orange): `SCOTTISH TIMBER MANUFACTURER — EST. 2019`
- H1: `Timber Sash & Case Windows. Made in Scotland.`
- Subtext (max 20 words): `Bespoke manufacture for homeowners, architects, and trade partners. Traditional craftsmanship. Modern performance.`
- CTA 1 (orange, large): `Book a Survey`  → `/contact`
- CTA 2 (white outline): `Request Trade Pricing` → `/trade`

#### Trust bar (navy background, immediately below hero)
Five items with dividers between:
- Made in Britain (show badge image)
- Accoya Approved Manufacturer
- 10,000+ Windows Installed
- Presidential Seal of Approval
- 5-Star Rated

#### Products grid
Section heading: `What We Make`
4 equal portrait cards (aspect-ratio 3/4) with dark gradient overlay, text at bottom:

| Card | Image | Heading | Description |
|------|-------|---------|-------------|
| 1 | `sash and case windows edinburgh.JPG` | Sash & Case Windows | Scottish-manufactured, made to measure, unlimited finishes |
| 2 | `Accoya timber front door bespoke.jpg` | Accoya Timber Doors | 50-year guarantee. Built for Scotland's climate |
| 3 | `Fraser suites edinburgh sash window refurbishment.png` | Secondary Glazing | Heritage-compatible. No planning permission required |
| 4 | `Accoya door.jpeg` | Composite Doors | Wide range of styles and colours |

#### Manufacturer story (cream background)
Two-column: image left, text right.  
Image: `Workshop.jpg`  
Eyebrow: `SCOTTISH MANUFACTURE`  
H2: `We don't just supply windows. We build them.`  
Copy: Edinburgh-based timber window and door manufacturer since 2019. Every window made to measure in our Edinburgh workshop — not sourced from a catalogue, not imported. We specialise in sash and case windows for residential, heritage, and commercial projects. Our team works with architects, planning officers, and main contractors to deliver to the highest standard on every project, large or small.

Stats (2×2 grid, orange left-border):
- `10,000+` / Windows Made & Installed
- `156` / Fraser Suites Windows Restored
- `50yr` / Accoya Timber Guarantee
- `6–8wk` / Trade Lead Time

#### Flagship projects (dark background)
Eyebrow: `PROVEN AT SCALE`  
H2: `Projects That Prove Our Standard`

CSS grid: large tile left (spanning full height) + 2 stacked tiles right.

| Tile | Image | Tag | Title | Detail |
|------|-------|-----|-------|--------|
| Large left | `Fraser suites edinburgh sash window refurbishment.png` | COMMERCIAL — EDINBURGH | Fraser Suites Hotel | 156 sash and case windows restored |
| Top right | `craighouse sash and case project.png` | HERITAGE — EDINBURGH | Craighouse Restoration | 136 windows restored and manufactured |
| Bottom right | `Edinburgh windows and doors trump turnberry.jpg` | PRESIDENTIAL — AYRSHIRE | Trump Turnberry | Ballistic glazing for Presidential visit |

Link below grid: `View all projects →` → `/projects`

#### Trade CTA (navy background)
H2: `Trade Partners Across the UK`  
Sub: `We supply made-to-measure timber sash and case windows to builders, developers, and architects across the UK. Open a trade account for priority pricing and a dedicated account manager.`  
CTA 1 (orange): `Open a Trade Account` → `/trade`  
CTA 2 (white outline): `Download Trade Pack` → `/trade`  

4 feature boxes (white text):
- UK-Wide Delivery
- 6–8 Week Lead Times  
- Bespoke to Drawing
- Dedicated Trade Team

#### Buyer types (cream background)
H2: `Built for Every Project`

2×2 card grid:

| Card | Icon | Heading | Copy |
|------|------|---------|------|
| Homeowners | 🏠 | Homeowners | Upgrade your home with bespoke timber windows and doors. Smooth service from initial survey to final installation. |
| Architects | 📐 | Architects & Specifiers | We work to drawing. Heritage compliance, planning advisory, and Accoya specification support available. |
| Builders | 🔨 | Builders & Contractors | Reliable supply partner. Consistent quality, competitive trade pricing, and scalable manufacturing capacity. |
| Developers | 🏗 | Developers | From single units to full developments. Bulk capacity, trade pricing, and UK-wide delivery from Edinburgh. |

#### Accreditations strip
Show: Made in Britain badge + Accoya Approved Manufacturer badge (greyscale, hover restores colour)

---

### 9.2 SASH & CASE WINDOWS (/sash-windows)

**Title:** `Timber Sash & Case Windows Edinburgh | Edinburgh Windows & Doors`  
**Meta:** `Scottish-manufactured timber sash and case windows. Made to measure. Listed building experts. Heritage properties, conservation areas, and new builds across the UK.`

**H1:** `Timber Sash & Case Windows — Made in Scotland`

Sections:
1. **Page hero** (navy bg, low-opacity `sash and case windows edinburgh.JPG`) — H1 + subtext + 2 CTAs
2. **Why invest in sash & case** (two-col, `large sash and case timber accoya window.JPG`) — Feature list: authentic period style, modern glazing options, long lifespan, property value, sustainable, repairable
3. **Edinburgh section** (cream bg, `full house of new sash and case windows.JPG`) — UNESCO World Heritage City copy, UK-wide track record
4. **Credentials bar** — 4 stats: 10,000+ Windows | Listed Building Experts | Accoya Approved | Presidential Project
5. **Ironmongery** (two-col reversed, `traditional high quality hardware.png`) — traditional sash ironmongery, finishes, components
6. **Sustainability** (cream bg, `timber for sash and cased windows.jpeg`) — FSC certified, carbon storage, biodegradable, renewable
7. **FAQ section** (schema-marked FAQPage) — common questions: "What is a sash and case window?", "Do I need planning permission?", "How long do timber sash windows last?", "What glazing options are available?"
8. **CTA section** (navy) — "Ready to specify your sash windows?" + Book Survey + Trade Quote

---

### 9.3 ACCOYA DOORS (/accoya-doors)

**Title:** `Accoya Timber Doors Edinburgh | Bespoke External Doors | 50-Year Guarantee`  
**Meta:** `Bespoke Accoya timber doors from Edinburgh's approved manufacturer. 50-year above-ground guarantee. Made to measure for Scottish homes. Carbon-negative lifecycle.`

**H1:** `Accoya Timber Doors — Built to Last`

Sections:
1. **Page hero** (navy bg, `Accoya timber front door bespoke.jpg`)
2. **What is Accoya** (two-col, `accoya door manufacture.jpeg`) — acetylated timber, 50yr guarantee, carbon negative, rot resistant, dimensionally stable, perfect for Scotland's climate
3. **Door range** (cream bg) — 3 image cards: standard front door, French doors, traditional mews door — images: `Accoya timber front door bespoke.jpg`, `Accoya french doors edinburgh.jpg`, `traditional mews house front door.jpg`
4. **Hardware** (two-col, `coastal hardware.png`) — Coastal hardware partnership, bronze/stainless/black options, pre-selected packages
5. **Accoya credentials** — Approved Manufacturer badge prominently, stats: 50yr guarantee, carbon negative, Class 1 durability, nontoxic
6. **FAQ** — "What is Accoya?", "How long does an Accoya door last?", "Is it worth the investment?", "What colours are available?"
7. **CTA section** (navy)

---

### 9.4 SECONDARY GLAZING (/secondary-glazing)

**Title:** `Secondary Glazing Edinburgh | Heritage Sash Windows | Listed Buildings`  
**Meta:** `Discreet, removable secondary glazing for listed buildings and conservation areas. Timber-framed, no plastic. Sash windows remain fully operational. Edinburgh and Scotland.`

**H1:** `Secondary Glazing — Heritage-Compatible, No Planning Permission Required`

Sections:
1. **Page hero** (navy bg)
2. **Product intro** (two-col, Fraser Suites interior) — magnetic fixing, timber frame, removable, fully operational windows, no planning required
3. **Benefits** (cream bg, 2×2 grid) — Reduce heat loss 70% | Acoustic insulation | Heritage compliant | Removable panels
4. **How it works** — step-by-step process: survey → manufacture → fit → done
5. **For hotels** (dark bg, `Fraser suites edinburgh sash window refurbishment.png`) — commercial secondary glazing, guest comfort, energy costs, no disruption
6. **FAQ** — common questions about listed buildings, planning, cleaning
7. **CTA section**

---

### 9.5 TRADE (/trade)

**Title:** `Timber Sash Window Trade Supplier Edinburgh | UK-Wide B2B Supply`  
**Meta:** `Trade sash window supplier from Edinburgh. Made-to-measure timber sash and case windows for builders, developers, and contractors. 6–8 week lead times. UK delivery.`

**H1:** `Timber Sash & Case Windows — Supplier to the Trade`

Sections:
1. **Page hero** (navy bg, `timber supplier to the trade uk wide.png`)
2. **Why trade with us** (two-col, `sash and case window supply to trade.jpg`) — Fraser Suites (156), Craighouse (136), QMile, Ogilvie, SJS, Cedar Developments, 6-8 week lead times, bespoke to drawing
3. **Trade features** (cream bg, 2×3 grid) — Bespoke Manufacturing | 6–8 Week Lead Times | UK-Wide Delivery | Trade Account | Technical Support | Scalable Capacity
4. **UK distribution** (two-col, `national sash and case distribution.PNG`) — "From Edinburgh to anywhere in Britain"
5. **Trade enquiry form** (white bg) — fields: First name, Last name, Company name, Job title, Email, Phone, Project name, Project type (dropdown), Approx window quantity, Notes, Drawings upload or Dropbox link
6. **Trusted by** — logos/names: QMile Developments, Ogilvie Construction, SJS, Cedar Developments

---

### 9.6 COMMERCIAL (/commercial)

**Title:** `Commercial Sash Window Contractor Scotland | Edinburgh Windows & Doors`  
**Meta:** `Commercial sash and case window restoration and supply across Scotland. Fraser Suites (156 windows), Craighouse (136 windows), Stirling University, Presidential projects.`

**H1:** `Commercial Sash & Case Window Projects`

Sections:
1. **Page hero** (dark bg, `Fraser suites edinburgh sash window refurbishment.png`)
2. **Credentials bar** (navy) — 156 windows | 136 windows | 5-Star Hotels | Stirling University | Presidential Seal
3. **Fraser Suites** (two-col) — stats strip: 156 Windows Restored, 130 Fineo glass fitted, No scaffolding, On time and on budget; full copy from slides
4. **Craighouse / QMile** (cream bg, two-col reversed, `craighouse sash and case project.png`) — 136 windows, Category A listed, full copy
5. **Presidential seal** (dark bg, `Edinburgh windows and doors trump turnberry.jpg`) — Trump Turnberry and MacLeod House ballistic glazing story
6. **Stirling University** (two-col, `stirling uni sash and case window repairs.JPG`) — Marshall Construction partnership, student accommodation, sash repairs
7. **Ochil Tower School** (cream bg, `Ochil tower school window replacement.jpg`) — scope of works, double-glazed timber sash replacement
8. **Commercial CTA** — "Planning a commercial project?" + contact button

---

### 9.7 PROJECTS (/projects)

**Title:** `Projects | Edinburgh Windows & Doors — Sash Window Installation Gallery`  
**Meta:** `Browse our project gallery. Commercial hotels, heritage restorations, presidential commissions, and residential installations across Edinburgh and the UK.`

**H1:** `Our Projects`

Sections:
1. **Page hero** (navy bg)
2. **Filter bar** (JS-powered) — All | Residential | Commercial | Heritage | Hotel | New Build
3. **3-column card grid** with `data-category` attributes for filtering:

| # | Image | Category | Title | Description |
|---|-------|----------|-------|-------------|
| 1 | `Fraser suites edinburgh sash window refurbishment.png` | commercial, hotel | Fraser Suites Hotel, Edinburgh | 156 sash and case windows restored. Fineo vacuum glass fitted throughout. |
| 2 | `craighouse sash and case project.png` | heritage, commercial | Craighouse — QMile Developments | 136 windows over one year. Category A listed. Full strip and restore. |
| 3 | `Edinburgh windows and doors trump turnberry.jpg` | commercial | Trump Turnberry — Presidential Visit | Ballistic glazing installation for POTUS visit to Scotland. |
| 4 | `stirling uni sash and case window repairs.JPG` | commercial | University of Stirling | Marshall Construction. Sash repairs preserving original features in student accommodation. |
| 5 | `Ochil tower school window replacement.jpg` | commercial | Ochil Tower School, Auchterarder | With SJS UK. Aluminium out, double-glazed timber sash in. |
| 6 | `banjo/Isle of Ulva grand island hotel.jpg` | hotel | Grand Island Hotel, Isle of Ulva | New sash and case windows for remote island hotel with Banjo & Ro. |
| 7 | `Edinburgh property full sash and case refurbishment.JPG` | residential | Full House Refurbishment, Edinburgh | Complete sash and case replacement for Edinburgh period property. |
| 8 | `EWD Aberdeen glass install.jpg` | commercial | Aberdeen Commercial Install | Timber window supply and installation. |
| 9 | `Helen - sash and case windows.jpg` | residential | Residential, Edinburgh | Bespoke sash and case windows for Edinburgh homeowner. |

4. **CTA** — "Start your project" → /contact

---

### 9.8 CONTACT (/contact)

**Title:** `Book a Survey | Edinburgh Windows & Doors — Get in Touch`  
**Meta:** `Book a free survey, request a trade quote, or discuss your project. Edinburgh Windows & Doors. Call 01506 168 204 or fill in our online form.`

**H1:** `Get in Touch — We Respond Within One Working Day`

Two-column layout: form (left 60%) | contact info + trust (right 40%)

**Form fields:**
- Toggle radio: Homeowner Enquiry / Trade Enquiry (changes label of "Company" and "Drawings upload" fields)
- First name (required)
- Last name (required)
- Email address (required, validated)
- Phone number (required)
- Property postcode (homeowner) / Company name (trade)
- Project type dropdown:
  - New sash and case windows
  - Sash window repair/restoration
  - Accoya timber door
  - Secondary glazing
  - Commercial project
  - Trade supply
  - Other
- How did you hear about us (dropdown: Google, Instagram, TrustATrader, Referral, Other)
- Message / project details (textarea)
- Photo / drawings upload (file input, multiple)
- Submit: "Send Enquiry" (orange, full-width)
- On submit: show inline thank-you state (no page reload), fire `form_submit` GA4 event

**Right column info:**
- Phone: 01506 168 204
- Email: sales@edinburghwindowsanddoors.co.uk
- Workshop: Edinburgh, Scotland
- Response: Within 1 working day
- Hours: Monday–Friday 8am–5pm
- Out of hours: Our voice agent captures your enquiry and we'll call back within 5 minutes the next working day
- Accreditation badges: Made in Britain + Accoya Approved

---

## 10. FOOTER (ALL PAGES)

Dark background (#111827).

4-column grid:
1. **Company** — logo + tagline: "Scottish timber sash & case window manufacturer. Est. 2019. Making windows and doors for Britain's finest properties." + phone + email
2. **Products** — Sash & Case Windows, Accoya Timber Doors, Secondary Glazing, Composite Doors
3. **Trade & Commercial** — Trade Accounts, Commercial Projects, B2B Enquiry, Download Trade Pack
4. **Legal** — Privacy Policy, Terms, Cookie Policy, Sitemap

Bottom bar: Copyright 2026 Edinburgh Windows & Doors | Made in Britain badge | Accoya Approved badge

**NAP in footer (must match Google Business exactly):**
- Edinburgh Windows & Doors
- 01506 168 204
- sales@edinburghwindowsanddoors.co.uk
- Edinburgh, Scotland

---

## 11. TECHNICAL STACK RECOMMENDATION

**Option A — Static HTML/CSS/JS (simplest)**
- Pure HTML, CSS, JS
- No framework dependency
- Deploy on Netlify, Vercel, or Cloudflare Pages
- Contact form handled by Formspree or Netlify Forms
- Fast, cheap, easy to maintain

**Option B — Next.js (preferred for SEO)**
- Next.js 14+ with App Router
- SSG (Static Site Generation) for all pages
- Built-in image optimisation (`next/image`)
- Best PageSpeed scores
- Tailwind CSS for styling
- Form via Next.js API route or Resend
- Deploy on Vercel

**Option C — WordPress (if client wants CMS)**
- Custom theme built from scratch (no page builder)
- Yoast SEO or Rank Math
- ACF for content editing
- WP Rocket for performance
- Only choose this if the client needs to edit content themselves

**Recommendation:** Next.js Option B for a developer. Pure HTML Option A if building quickly for demo/handover first.

---

## 12. ASSETS INVENTORY

All assets are in the folder: `Website updates - easy websites/`

### Images available (key ones)
| Filename | Use |
|----------|-----|
| `Company Logo - image 1.jpg` | Logo — all pages nav + footer |
| `Workshop.jpg` | Hero bg, manufacturer section |
| `sash and case windows edinburgh.JPG` | Sash windows product card, page hero |
| `full house of new sash and case windows.JPG` | Sash windows page section |
| `large sash and case timber accoya window.JPG` | Sash windows feature section |
| `Edinburgh property full sash and case refurbishment.JPG` | Projects, residential |
| `Accoya timber front door bespoke.jpg` | Accoya doors card, page hero |
| `Accoya french doors edinburgh.jpg` | Accoya door range |
| `accoya door manufacture.jpeg` | Accoya page feature |
| `Timber French door 2.JPG` | Accoya door range |
| `traditional mews house front door.jpg` | Accoya door range |
| `Fraser suites edinburgh sash window refurbishment.png` | Projects hero, commercial page |
| `craighouse sash and case project.png` | Projects, commercial |
| `Edinburgh windows and doors trump turnberry.jpg` | Presidential section |
| `stirling uni sash and case window repairs.JPG` | Commercial, projects |
| `Ochil tower school window replacement.jpg` | Commercial, projects |
| `banjo/Isle of Ulva grand island hotel.jpg` | Projects — hotel |
| `banjo/New sash window.jpg` | General sash windows |
| `EWD Aberdeen glass install.jpg` | Projects — commercial |
| `Helen - sash and case windows.jpg` | Projects — residential |
| `timber supplier to the trade uk wide.png` | Trade page hero |
| `sash and case window supply to trade.jpg` | Trade feature section |
| `national sash and case distribution.PNG` | Trade UK delivery |
| `sash and case distribution across the uk.PNG` | Trade UK map |
| `traditional high quality hardware.png` | Sash windows ironmongery |
| `coastal hardware.png` | Accoya doors hardware |
| `black door hardware.png` | Accoya doors hardware |
| `timber for sash and cased windows.jpeg` | Sustainability section |
| `sash window manufacture.jpeg` | Manufacturing sections |
| `Edinburgh joinery manufacture.jpeg` | Manufacturing sections |
| `Timber sash and case manufacture.jpeg` | Manufacturing sections |
| `edinburgh windows and doors made in britain.png` | Trust badge — all pages |
| `Accoya_Affiliate mark_Approved manufacturer_WHITE ON GREEN_RGB.jpg` | Accoya badge — all pages |

---

## 13. KEY COPY SNIPPETS (ready to use)

### Hero headline
`Timber Sash & Case Windows. Made in Scotland.`

### Hero subtext
`Bespoke manufacture for homeowners, architects, and trade partners across the UK. Traditional craftsmanship. Modern performance.`

### Manufacturer intro
Edinburgh Windows & Doors is a Scottish timber window and door manufacturer established in 2019. We manufacture bespoke sash and case windows and Accoya timber doors in our Edinburgh workshop. Every window is made to measure — not sourced from a catalogue. We work with homeowners on single-window replacements and with construction companies on projects of 150 windows and more.

### Trade intro
While we are proudly based in Edinburgh, we supply timber sash windows to trade clients across the UK. Our central location allows us to efficiently deliver to major cities including Glasgow, London, Manchester, and beyond. Whether you are working on a single renovation or a large-scale development, we provide a dependable manufacturing service tailored to your project requirements.

### Presidential story (use verbatim — it's gold)
"We recently had the honour of installing and later removing ballistic glass at two iconic Scottish locations — Trump Turnberry and MacLeod House — in preparation for the visit of the President of the United States."

### Sustainability
Timber stands out as one of the most sustainable choices for sash and case windows because it is a renewable, natural material. When sourced from responsibly managed forests certified by the Forest Stewardship Council, timber can be continuously replanted. It has a low embodied energy, stores carbon throughout its life, and is biodegradable at end of life — unlike uPVC or aluminium.

---

## 14. WHAT THE DEVELOPER SHOULD NOT DO

- Do not use any stock photography
- Do not use a generic window company template
- Do not use uPVC or aluminium-focused imagery
- Do not write generic copy ("quality you can trust", "experts in our field")
- Do not build a slow WordPress site with 50 plugins
- Do not build a site where the hero section looks like the current one
- Do not hide the manufacturing credentials — put them front and centre
- Do not bury the presidential story — it is a conversion asset
- Do not make the trade section an afterthought — it is a primary revenue stream

---

## 15. DELIVERABLE CHECKLIST

The finished website must pass all of the following:

- [ ] Google PageSpeed: 90+ mobile, 95+ desktop
- [ ] All 9 pages live and linked correctly
- [ ] Every page has unique title tag and meta description
- [ ] Schema markup present and validated (use schema.org validator)
- [ ] sitemap.xml submitted to Google Search Console
- [ ] robots.txt live
- [ ] Google Analytics 4 tracking live (form_submit, phone_click, cta_click events)
- [ ] All images have descriptive alt text
- [ ] NAP consistent across site, Google Business, and TrustATrader
- [ ] Contact form sends email to sales@edinburghwindowsanddoors.co.uk
- [ ] Trade enquiry form sends to trade email
- [ ] Mobile menu works correctly on iOS and Android
- [ ] All internal links work (no 404s)
- [ ] HTTPS live with valid certificate
- [ ] Made in Britain and Accoya badges displayed correctly
- [ ] Presidential story is prominently featured
- [ ] "Book a Survey" CTA present on every page

---

*Plan prepared by Summone Consulting — steven.summon@gmail.com*
