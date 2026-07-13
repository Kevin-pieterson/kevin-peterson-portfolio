# Kevin Peterson — Cybersecurity Portfolio

A single-page portfolio site: Home, About, Skills, Projects, Certificates, Contact.

## Deploy to Netlify (2 minutes)

**Option A — Drag & drop (easiest)**
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. Done — Netlify gives you a live URL instantly. You can rename it under
   Site settings → Change site name.

**Option B — Connect to GitHub (auto-redeploys on every push)**
1. Push this folder to a new GitHub repo.
2. In Netlify: Add new site → Import an existing project → pick the repo.
3. Build command: leave blank. Publish directory: `.`
4. Deploy.

No build step, no dependencies — it's plain HTML/CSS/JS.

## Add your real photo (currently a placeholder)

The hero and about sections use `assets/profile-placeholder.svg` as a stand-in.
To swap in your real photo:

1. Add your photo to the `assets/` folder, e.g. `assets/profile.jpg`
   (a square-ish, well-lit photo works best — the frame is circular).
2. In `index.html`, find the two lines:
   ```html
   <img src="assets/profile-placeholder.svg" alt="Kevin Peterson" id="hero-photo-img">
   <img src="assets/profile-placeholder.svg" alt="Kevin Peterson portrait">
   ```
3. Change `assets/profile-placeholder.svg` to `assets/profile.jpg` in both places.

## File structure

```
index.html              All page content
css/style.css            All styling
js/script.js              Nav toggle, scroll-spy, reveal animations, skill bars
assets/Kevin_Peterson_CV.pdf         Powers the "Download CV" buttons
assets/profile-placeholder.svg        Swap this out for your real photo
assets/certificates/*.jpg            Real certificate scans (linked from the Certificates section)
netlify.toml             Optional Netlify config (security headers)
```

## What's real vs. self-assessed

- Projects: pulled live from your GitHub (github.com/Kevin-pieterson) — the
  4 public repos that exist there.
- Certificates: pulled from your uploaded certificate PDFs — clicking any
  certificate opens the actual scanned image.
- Skill percentage bars: there's no objective scoring system for these (no
  portfolio site has one) — they're a reasonable self-assessment based on
  what's emphasized in your CV. Feel free to adjust the `--val` numbers in
  `index.html` (search for `style="--val:`) if you'd rate yourself differently.
- The "Familiar With" tools row (Kali Linux, Wireshark, Metasploit, Burp Suite,
  Docker, Git, Python, SQL) reflects general exposure rather than verified
  hands-on project work — worth keeping in mind if asked about these in an
  interview.

## Updating content later

Everything is in plain HTML — open `index.html` in any text editor and the
sections are clearly commented (`<!-- ===== PROJECTS ===== -->` etc.).
No build tools or frameworks needed.
