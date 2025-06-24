# 📊 Add Free Cloudflare Web Analytics to GitHub Pages

This guide helps you set up **Cloudflare Web Analytics** on any GitHub Pages site — fully free and without needing a paid domain or DNS setup.

> ✅ Works with GitHub Pages  
> ✅ Lifetime free  
> ✅ Privacy-friendly  
> ✅ Tracks visits, page views, country, browser, and load speed

---

## 🧰 Prerequisites

- You have a GitHub Pages site like:  
  `https://your-username.github.io/Portfolio/`
- You have a free Cloudflare account:  
  https://dash.cloudflare.com

---

## 🔧 Step-by-Step Setup

### 1️⃣ Add Your Site to Cloudflare

1. Go to [Cloudflare Web Analytics](https://dash.cloudflare.com)
2. In the left sidebar → go to **Analytics & Logs → Web Analytics**
3. Click **Add a site without DNS**
4. Enter your hostname only (not full URL):  
   ```
   your-username.github.io
   ```
   ✅ Don’t include `/Portfolio` or any subpath.
5. Click **Done**

---

### 2️⃣ Get the JavaScript Snippet

Cloudflare will show a script like this:

```html
<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "your_token_here"}'></script>
```

✅ Copy the entire snippet (keep it safe).

---

### 3️⃣ Add the Script to Your GitHub Pages Site

#### If using plain HTML:

1. Open `index.html`
2. Paste the snippet **just before the closing `</head>` tag**:

```html
<head>
  ...
  <title>Your Portfolio</title>

  <!-- Cloudflare Web Analytics -->
  <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "your_token_here"}'></script>
</head>
```

#### If using React (Vite, CRA, etc.):

- Find `index.html` inside your `public/` folder  
- Add the same script before `</head>`  
- Save & commit the changes:

```bash
git add .
git commit -m "Add Cloudflare Web Analytics"
git push origin main
```

---

## ✅ How to Confirm It's Working

### 1. Open your website in Chrome

- Right-click → **Inspect**
- Go to **Network** tab
- Refresh the page
- You should see this file load:
  ```
  beacon.min.js
  ```

✅ If Status is `200` → it’s working

---

### 2. Use Console to Check Beacon

In **DevTools Console**, paste this:

```js
window.cfBeacon
```

✅ It should return an object like:

```js
{ token: "...", version: "...", ... }
```

---

### 3. Wait 10–15 minutes

Visit the Cloudflare Dashboard  
Go to **Analytics → Web Analytics**  
You’ll begin to see:
- Visits
- Page views
- Browser, country
- Core Web Vitals (LCP, INP, CLS)

---

## 📁 For Multiple Projects

If you host several projects like:

```
https://your-username.github.io/Portfolio/
https://your-username.github.io/WeatherApp/
```

They’ll all show under the **same Cloudflare dashboard**.

### Filter by Project:

1. Click **Add Filter**
2. Use:
   ```
   Path starts with /Portfolio/
   ```

✅ You’ll now only see stats for that one project.

---

## 🛡️ Privacy & Performance

- 100% free
- No cookies
- Doesn’t track individuals
- Lightweight (non-blocking)
- Great for portfolios, static sites, and GitHub Pages

---

## 🎉 Done!

You now have a reliable, free, lifetime analytics setup on GitHub Pages — with no domain required.

