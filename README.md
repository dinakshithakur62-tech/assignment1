---
### 👤 Student Info

- **Name:** Dinakshi Thakur
- **Student Number:** 21782127
---
### 📖 Project Overview

This project is an interactive web application built with **Next.js + React**. It allows users to create, edit, and manage tabbed content, toggle between dark/light themes, and generate downloadable HTML code with inline CSS.

The project demonstrates:
- **UI components** (Navigation bar, Header, Footer, About page)
- **Theming** (Dark & Light mode)
- **Interactive Hamburger Menu**
- **Dynamic Tabs Builder** with `localStorage` persistence
- **Code generation**, **copying**, and **downloading**

---

### ✨ Features

- **User Interface**
  - Navigation bar with links (responsive Hamburger menu on mobile)
  - Header & Footer (footer fixed at bottom)
  - About page with name, student number, and demo video

- **Themes**
  - Light & Dark mode toggle
  - Theme preference stored in cookies/`localStorage`

- **Hamburger Menu**
  - Hamburger icon with smooth transform to ❌ on open
  - Visible in both light and dark modes
  - Links styled as pill buttons (horizontal)
  - Active page highlighted

- **Tabs Builder (Main Page)**
  - Add up to 15 tabs
  - Rename tab headings
  - Edit tab content
  - Remove tabs
  - Tabs saved to `localStorage` (persist after refresh)
  - Accessible with keyboard (Arrow Left/Right navigation with wrapping)

- **Output Section**
  - **Generate Code** button → outputs full HTML with inline CSS
  - **Copy Code** button → copies HTML to clipboard
  - **Download Code** button → downloads HTML file (custom filename supported)
  - Tested with 1 tab, 3 tabs, and 5 tabs as per requirements

---


### 📂 Project Structure

This project follows a standard Next.js directory structure, with key components organized for clarity and maintainability:

-   `app/`
    -   `about/` → The About page route.
    -   `page.tsx` → The main application page, which includes the Tabs Builder.
    -   `components/` → Houses reusable UI components like `Navbar`, `HamburgerMenu`, `ThemeToggle`, and `Footer`.
-   `public/`
    -   `vid.mp4` → The demo video file, accessible publicly.

---
---
### 🚀 Getting Started

1.  **Clone Repository**
    ```sh
    git clone <your-repo-url>
    cd assignment1
    ```

2.  **Install Dependencies**
    ```sh
    npm install
    ```

3.  **Run Development Server**
    ```sh
    npm run dev
    ```
    The app will be available at [http://localhost:3000](http://localhost:3000).

---

### 🖼️ Demo & Screenshots

-   **Demo video** included on About Page (`vid.mp4`)
-   **Screenshots:**

    _**(Insert screenshot of the tabs builder page here)**_

    _**(Insert screenshot of the app in dark mode here)**_

    _**(Insert screenshot of the app in light mode here)**_

    _**(Insert screenshot of the open hamburger menu here)**_

---

### 🌳 GitHub Workflow

-   **`main` branch:** Represents the production-ready code.
-   **Feature branches:**
    -   `feature/theme-toggle`
    -   `feature/tabs-builder`
    -   `feature/hamburger-menu`
-   Multiple commits per feature, with clear commit messages.
-   `.gitignore` correctly excludes `node_modules/`.

---

### ✅ Requirements Checklist

-   [ ] Navigation bar, header, footer, about page
-   [ ] Dark mode + Light mode
-   [ ] Hamburger menu with CSS transform
-   [ ] Tabs builder with add/edit/remove and `localStorage` persistence
-   [ ] Generate, copy, and download output code
-   [ ] GitHub workflow with branches, multiple commits, and `README.md`

---

### 📜 License

This project is for educational purposes only.