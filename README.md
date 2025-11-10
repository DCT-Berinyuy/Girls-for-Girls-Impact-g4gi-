# Girls for Global Impact (G4GI) Website

This is the official website for Girls for Global Impact (G4GI), a youth-led foundation dedicated to empowering girls in Cameroon to lead, learn, and transform their communities. The website is built with Svelte and Tailwind CSS.

> “Girls with Vision, Communities with Hope.”

## 🚀 Project Overview

The purpose of this website is to:
- Inspire and inform visitors about G4GI's mission.
- Attract volunteers and partners.
- Showcase impact stories and testimonials.
- Establish a credible and professional online presence for the foundation.

## 🛠️ Tech Stack

- **Framework:** SvelteKit
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Deployment:** Vercel / Netlify

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, pnpm, or yarn

### Installation and Development

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/DCT-Berinyuy/Girls-for-Girls-Impact-g4gi-.git
    cd g4gi
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```sh
    npm run dev
    # or start the server and open the app in a new browser tab
    npm run dev -- --open
    ```
    The application will be available at `http://localhost:5173`.

### Building for Production

To create a production version of the app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

## 📁 Project Structure

The project follows a standard SvelteKit structure:

```
g4gi/
├── src/
│   ├── lib/
│   │   ├── assets/       # Static assets like images and icons
│   │   ├── components/   # Reusable Svelte components (Navbar, Footer, etc.)
│   │   ├── data/         # Data files for programs, team, etc.
│   │   └── utils/        # Utility functions
│   ├── routes/         # Application pages and API routes
│   │   ├── +layout.svelte  # Main layout component
│   │   ├── +page.svelte    # Home page
│   │   └── ...           # Other pages (about, contact, etc.)
│   ├── app.css           # Global CSS styles
│   └── app.html          # Main HTML template
├── static/             # Static files (favicon, manifest, etc.)
├── svelte.config.js    # SvelteKit configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project dependencies and scripts
```

## 📜 Credits

- **Founder:** Abigail Epongseh Mba’ah Mbatu
- **Developer:** Verla Berinyuy Ndey (Mr.DCT)
- **AI Assistant:** Gemini CLI

---

*This project is licensed under the MIT License.*