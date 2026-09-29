# Home / RyVora Navigation Fix

This patch separates the portfolio Home page from the RyVora case-study page.

- `index.html` loads `src/main.tsx` — recruiter-facing portfolio Home.
- `ryvora.html` loads `src/ryvora.tsx` — RyVora case study.
- `src/index.css` styles the Home page.
- `src/ryvora.css` preserves the RyVora case-study styling.
- The Home navigation includes Home, Experience, RyVora, CareBridge, Skills, Resume and Contact.
- The RyVora case study keeps its `Open live demo` button pointing to the live RyVora application.

Do not delete `resume.html` or `contact.html` from the existing repository.
