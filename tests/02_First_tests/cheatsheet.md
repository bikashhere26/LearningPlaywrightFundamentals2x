# Playwright Cheatsheet: Browser, Context, and Page

## 🌍 Browser
- The browser is like the whole web browser app.
- It is the main program that can open many windows and tabs.
- In Playwright, `browser` is the big thing that can create new browser contexts.

## 🚪 Browser Context
- A browser context is like a private room inside the browser.
- Each room has its own cookies, history, and settings.
- If you want separate users or a clean start, you open a new context.
- In Playwright, `context` helps you test different users without mixing their data.

## 📄 Page
- A page is like a single tab inside a browser room.
- It is where you open a website and click buttons or type text.
- In Playwright, `page` is the object you use to interact with the website.

## 🧩 How they fit together
- `browser` = the browser app
- `context` = a private room inside the browser
- `page` = a tab inside that room

## 🏫 Example analogy
- One browser can have many contexts.
- One context can have many pages.
- So it’s like:
  - Browser = school building
  - Context = classroom
  - Page = student desk

That’s the simple idea!