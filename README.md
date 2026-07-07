# Resume.Builder & ATS Checker 📄✨

An interactive, premium-designed web application that allows you to build, customize, and recreate professional resumes in real-time. Features LaTeX-quality layouts, automated ATS keyword parsing, visual page limit indicators, and a client-side AI chat assistant.

---

## 🚀 Key Features

*   **Pixel-Perfect A4 Live Preview:** The resume wrapper dynamically scales (`CSS transforms`) to fit any viewport width while maintaining exact A4 print proportions.
*   **Aesthetic Theme Selector:** Choose between distinct preset layouts:
    *   `Modern` (Default, clean sans-serif layout)
    *   `Classic` (Elegant Serif font pairing)
    *   `Minimal` (Sidebar grid layout)
    *   `Executive` (Header banner block)
    *   `Creative` (Modern slash design details)
    *   `ATS Clean` (Highly readable format for parser bots)
*   **ATS Keyword Matching:** Paste any job description to instantly analyze match percentage. Features a dynamic gauge indicator and lists exact matched/missing tech keywords.
*   **AI Chat Assistant:** A natural language client-side assistant panel. Ask the bot to:
    *   *“Change my name to John Doe”*
    *   *“Add Tailwind to my tools”*
    *   *“Generate professional bullet points for Job 1”*
    *   *“Load the Designer preset”*
*   **Auto-Save Progress:** State-recovery engine automatically saves edits to `localStorage` on every change, keeping progress safe across browser refreshes.
*   **Dynamic Data Backups:** Seamlessly export current data backups to a JSON file or import backups back into the editor.
*   **Page Boundary Sentinel:** Features a real-time warning overlay that notifies you if the content height overflows the height limit of a standard A4 sheet.

---

## 🛠️ Technology Stack

*   **HTML5** semantic structure
*   **Vanilla CSS** custom properties, responsive grids, media query layouts, and glassmorphic dials
*   **ES6+ Javascript** reactive state controller and client-side NLP parser
*   **Google Fonts** (Inter, Outfit, Roboto, Raleway, Merriweather, Lato, Nunito)
*   **Font Awesome Icons**

---

## 📂 Project Structure

```bash
├── index.html       # Application interface & layout modals
├── style.css        # Premium style designs and print overrides
├── app.js           # Application state, NLP, & page scaling engines
└── README.md        # Project guide documentation
```

---

## 📖 How to Run Locally

Since the application is built entirely on native web standards, it doesn't require any npm installations or build configurations.

1. Clone this repository:
   ```bash
   git clone https://github.com/AmanSharma0812/resume-maker-and-ats-checker.git
   cd resume-maker-and-ats-checker
   ```
2. Simply double-click `index.html` or open it with a local development server (like VS Code **Live Server** extension or Node `http-server`).
3. Fill in your details or ask the AI Assistant widget at the bottom right to configure a preset profile!
