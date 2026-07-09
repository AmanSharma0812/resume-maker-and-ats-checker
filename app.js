// Resume builder application state and reactivity

const PRESETS = {
  reactDev: {
    templateStyle: "modern",
    accentColor: "#0ea5e9",
    fontStyle: "inter",
    lineSpacing: 1.3,
    atsMode: false,
    name: "Aman Sharma",
    title: "React Developer",
    phone: "8962603584",
    email: "amannsharma08@gmail.com",
    location: "Gwalior, Madhya Pradesh",
    linkedin: "linkedin.com/in/AmanSharma",
    github: "github.com/AmanSharma",
    portfolio: "amansharma.dev",
    experience: [
      {
        company: "Unacademy",
        role: "Front End Developer Intern",
        dates: "May 2023 – Aug. 2023",
        location: "Gwalior, MP",
        bullets: [
          "Designed and implemented responsive, user-friendly web interfaces using **HTML5, CSS3, and JavaScript** to enhance overall user experience.",
          "Collaborated on building interactive modules that boosted student engagement by 15%.",
          "Explored data visualization methods to send daily test results and progress reports to team members using frontend dashboards.",
          "Optimized components for maximum performance across a vast array of web-capable devices and browsers."
        ]
      },
      {
        company: "Crystal Tech Service Pvt. Ltd.",
        role: "Full Stack Developer Intern (Remote)",
        dates: "Jan. 2025 – May 2025",
        location: "Remote",
        bullets: [
          "Focused mainly on **frontend development**, creating clean UI layouts for diverse web applications.",
          "Created responsive website interfaces for US-based and local clients, ensuring mobile-first compatibility.",
          "Developed a complete website for a regional spices company, implementing modern design tokens and CSS animations.",
          "Assisted in basic backend integration and database connectivity using Node.js and SQL."
        ]
      }
    ],
    projects: [
      {
        name: "Spotify Clone",
        link: "github.com/AmanSharma/spotify-clone",
        description: "Built a fully functional Spotify interface clone using **React.js, Tailwind CSS**, and the Spotify API. Integrates play, pause, search, and playlist viewing features."
      },
      {
        name: "Face Recognition System",
        link: "github.com/AmanSharma/face-recognition",
        description: "Developed a computer vision application utilizing **Python, OpenCV, and TensorFlow** to detect and recognize faces from a live webcam feed in real-time."
      },
      {
        name: "Weather Dashboard",
        link: "github.com/AmanSharma/weather-dashboard",
        description: "Created an interactive weather application that integrates open-source APIs to fetch real-time weather details and present them with beautiful dynamic backgrounds based on the current weather condition."
      }
    ],
    education: [
      {
        institution: "Madhav Institute of Technology & Science (MITS)",
        degree: "Bachelor of Engineering in Information Technology",
        dates: "Sep. 2021 – May 2025",
        location: "Gwalior, MP",
        bullets: [
          "**Coursework:** Data Structures & Algorithms, Database Management Systems, Object Oriented Programming, Software Engineering.",
          "**Activities:** Core Team Member of the Asimov Robotics Club, managing technical workshops and web development tasks."
        ]
      }
    ],
    skills: {
      languages: "JavaScript (ES6+), Python, HTML5, CSS3, SQL (PostgreSQL, MySQL)",
      tools: "React.js, Redux, Context API, Git, GitHub, VS Code, Figma, Bootstrap, Node.js"
    }
  },
  graphicDesigner: {
    templateStyle: "creative",
    accentColor: "#ec4899",
    fontStyle: "nunito",
    lineSpacing: 1.4,
    atsMode: false,
    name: "Aman Sharma",
    title: "Graphic & UI/UX Designer",
    phone: "8962603584",
    email: "amannsharma08@gmail.com",
    location: "Gwalior, Madhya Pradesh",
    linkedin: "linkedin.com/in/AmanSharma",
    github: "behance.net/AmanSharma",
    portfolio: "amansharma.design",
    experience: [
      {
        company: "Freelance Design & Marketing",
        role: "Web Designer & Graphic Designer",
        dates: "2024 – Present",
        location: "Remote",
        bullets: [
          "Designed **100+ social media creatives**, including high-engagement posts, carousels, and flyers for diverse brand campaigns.",
          "Created visually stunning Instagram reels using motion graphics, typography, and trending video formats.",
          "Developed marketing assets and layout banners for real estate developments like **Shri Vinayak City** and **Gatiman Dham**.",
          "Delivered professional AI-generated video and imagery assets, streamlining the branding process for startup clients."
        ]
      },
      {
        company: "Perfect Jugado SH",
        role: "Video Editor & Designer",
        dates: "Aug. 2023 – July 2024",
        location: "Gwalior, MP",
        bullets: [
          "Led video editing and graphic assets creation for a digital media startup, growing audience reach by 40%.",
          "Designed clean UI layouts and visual mockups for client websites using **Figma and Adobe Photoshop**.",
          "Mentored junior design interns on typography, composition principles, and video timeline editing techniques.",
          "Maintained a standard digital asset library to ensure quick turnaround times for promotional campaigns."
        ]
      }
    ],
    projects: [
      {
        name: "Minimalist Icon Pack",
        link: "gumroad.com/l/icon-pack",
        description: "Designed and released 100+ minimalist iOS and Android icons from scratch using Procreate and Figma; marketed on YouTube and generated organic sales on Gumroad."
      },
      {
        name: "Real Estate Identity Design",
        link: "behance.net/AmanSharma/realestate",
        description: "Created the complete branding package, logos, hoardings, and social media templates for high-profile regional housing societies, boosting their local visual presence."
      }
    ],
    education: [
      {
        institution: "Madhav Institute of Technology & Science (MITS)",
        degree: "B.Tech in Information Technology",
        dates: "2021 – 2025",
        location: "Gwalior, MP",
        bullets: [
          "Focused studies on Human-Computer Interaction, UI/UX Design principles, and Frontend engineering.",
          "**Activities:** Vice President of the Photography and Filming Club, capturing events and directing short documentary projects."
        ]
      }
    ],
    skills: {
      languages: "HTML5, CSS3, JavaScript (basic), Markdown",
      tools: "Figma, Adobe Photoshop, Premiere Pro, Canva, DaVinci Resolve, OBS Studio, Creative Cloud, Git"
    }
  },
  combined: {
    templateStyle: "minimal",
    accentColor: "#4f46e5",
    fontStyle: "roboto",
    lineSpacing: 1.2,
    atsMode: false,
    name: "Aman Sharma",
    title: "Creative Developer & Designer",
    phone: "8962603584",
    email: "amannsharma08@gmail.com",
    location: "Gwalior, Madhya Pradesh",
    linkedin: "linkedin.com/in/AmanSharma",
    github: "github.com/AmanSharma",
    portfolio: "amansharma.dev",
    experience: [
      {
        company: "Crystal Tech Service Pvt. Ltd.",
        role: "Full Stack Developer Intern (Remote)",
        dates: "Jan. 2025 – May 2025",
        location: "Remote",
        bullets: [
          "Focused mainly on **frontend development**, creating clean, accessible UI layouts for diverse client web platforms.",
          "Rebuilt user dashboards using HTML/CSS/JS, improving performance and mobile responsiveness across devices.",
          "Collaborated on designing UI prototypes in Figma and translating them into production-ready frontends."
        ]
      },
      {
        company: "Freelance Web & Graphic Design",
        role: "Freelance Designer & Developer",
        dates: "2024 – Present",
        location: "Remote",
        bullets: [
          "Designed and developed visual identities, landing pages, and marketing collaterals for real estate and tech startup clients.",
          "Created over 100+ custom social media creatives, high-engagement reels, and video packages.",
          "Engineered interactive websites for local businesses using modern responsive web technologies."
        ]
      },
      {
        company: "Perfect Jugado SH",
        role: "Video Editor & Web Assistant",
        dates: "Aug. 2023 – July 2024",
        location: "Gwalior, MP",
        bullets: [
          "Assisted in frontend web updates while creating professional video reels and marketing graphics.",
          "Managed layout transitions, typography, and editing timeline workflows for client brand presentations.",
          "Taught junior team members basic video editing principles and Figma collaborative design strategies."
        ]
      },
      {
        company: "Unacademy",
        role: "Front End Developer Intern",
        dates: "May 2023 – Aug. 2023",
        location: "Gwalior, MP",
        bullets: [
          "Designed and implemented responsive web layouts using JavaScript and CSS, prioritizing client-side performance.",
          "Created internal dashboard features to visualize student performance metrics and reports."
        ]
      }
    ],
    projects: [
      {
        name: "Spotify Clone",
        link: "github.com/AmanSharma/spotify-clone",
        description: "Built a fully functional Spotify UI clone with **React.js and Tailwind CSS**, integrating real-time audio controls and playlist data."
      },
      {
        name: "Minimalist Icon Pack",
        link: "gumroad.com/l/icon-pack",
        description: "Created and launched a bundle of 100+ vector-drawn mobile icons, marketing them via social media channels and distributing via Gumroad."
      },
      {
        name: "Face Recognition App",
        link: "github.com/AmanSharma/face-recognition",
        description: "Programmed a python application using **OpenCV** to track and recognize faces with low-latency frames."
      }
    ],
    education: [
      {
        institution: "Madhav Institute of Technology & Science (MITS)",
        degree: "Bachelor of Engineering in Information Technology",
        dates: "Sep. 2021 – May 2025",
        location: "Gwalior, MP",
        bullets: [
          "**Activities:** Core Member of Asimov Robotics Club & Vice President of the Photography and Filming Club."
        ]
      }
    ],
    skills: {
      languages: "JavaScript (ES6+), Python, HTML5, CSS3, SQL (PostgreSQL, MySQL)",
      tools: "React.js, Figma, Adobe Photoshop, Premiere Pro, DaVinci Resolve, Git, GitHub, VS Code, Canva, OBS"
    }
  }
};

let customPresets = {};
let activePresetId = "combined";

try {
  const saved = localStorage.getItem("resume_custom_presets");
  if (saved) {
    customPresets = JSON.parse(saved);
  }
} catch (e) {
  console.error("Failed to load custom presets", e);
}

try {
  const savedActive = localStorage.getItem("resume_active_preset_id");
  if (savedActive) {
    activePresetId = savedActive;
  }
} catch (e) {
  console.error("Failed to load active preset ID", e);
}

let currentData;
try {
  const savedProgress = localStorage.getItem("resume_current_progress");
  if (savedProgress) {
    currentData = JSON.parse(savedProgress);
  }
} catch (e) {
  console.error("Failed to load current progress", e);
}

if (!currentData) {
  if (customPresets[activePresetId]) {
    currentData = JSON.parse(JSON.stringify(customPresets[activePresetId]));
  } else if (PRESETS[activePresetId]) {
    currentData = JSON.parse(JSON.stringify(PRESETS[activePresetId]));
  } else {
    activePresetId = "combined";
    currentData = JSON.parse(JSON.stringify(PRESETS.combined));
  }
}

function saveCurrentProgress() {
  try {
    localStorage.setItem("resume_current_progress", JSON.stringify(currentData));
  } catch (e) {
    console.error("Failed to save progress", e);
  }
}

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  setupPresetListeners();
  loadDataIntoEditor(currentData);
  setupFormListeners();
  setupMobileNavigation();
  setupAccordionListeners();
  setupChatbot();
  setupTemplatePicker();
  setupCustomSectionModal();
  setupATSPanel();
  updatePreview();
  
  if (document.fonts) {
    document.fonts.ready.then(() => {
      scaleResume();
      checkPageLimit();
    });
  } else {
    setTimeout(scaleResume, 100);
  }
});

// Load presets
function setupPresetListeners() {
  renderPresetButtons();

  document.getElementById("btn-print").addEventListener("click", () => {
    window.print();
  });

  const btnDownloadPdf = document.getElementById("btn-download-pdf");
  if (btnDownloadPdf) {
    btnDownloadPdf.addEventListener("click", () => {
      downloadPDF();
    });
  }

  const btnPrintPreview = document.getElementById("btn-print-preview");
  if (btnPrintPreview) {
    btnPrintPreview.addEventListener("click", () => {
      window.print();
    });
  }

  // Modal event listeners
  const btnCancel = document.getElementById("btn-cancel-preset");
  if (btnCancel) {
    btnCancel.addEventListener("click", closeAddPresetModal);
  }

  const btnSave = document.getElementById("btn-save-preset");
  if (btnSave) {
    btnSave.addEventListener("click", saveCustomPreset);
  }

  const modalInput = document.getElementById("custom-preset-name");
  if (modalInput) {
    modalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        saveCustomPreset();
      } else if (e.key === "Escape") {
        closeAddPresetModal();
      }
    });
  }

  const modal = document.getElementById("preset-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeAddPresetModal();
      }
    });
  }

  // Accent color picker customizer
  const colorPicker = document.getElementById("resume-accent-color");
  const colorValSpan = document.querySelector(".color-hex-val");
  if (colorPicker) {
    colorPicker.addEventListener("input", (e) => {
      currentData.accentColor = e.target.value;
      if (colorValSpan) {
        colorValSpan.textContent = currentData.accentColor.toUpperCase();
      }
      const sheet = document.getElementById("resume-sheet");
      if (sheet) {
        sheet.style.setProperty("--res-accent", currentData.accentColor);
      }
      saveCurrentProgress();
    });
  }

  // Curated color palettes listener
  const swatches = document.querySelectorAll(".palette-swatch-btn");
  swatches.forEach(btn => {
    btn.addEventListener("click", () => {
      const palette = btn.dataset.palette;
      let hex = "#4f46e5";
      if (palette === "slate") hex = "#1e3a8a";
      else if (palette === "emerald") hex = "#065f46";
      else if (palette === "royal") hex = "#4f46e5";
      else if (palette === "amber") hex = "#c2410c";
      else if (palette === "onyx") hex = "#111827";

      currentData.accentColor = hex;

      if (colorPicker) colorPicker.value = hex;
      if (colorValSpan) colorValSpan.textContent = hex.toUpperCase();

      const sheet = document.getElementById("resume-sheet");
      if (sheet) {
        sheet.style.setProperty("--res-accent", hex);
      }

      swatches.forEach(s => s.classList.remove("active"));
      btn.classList.add("active");

      saveCurrentProgress();
      updatePreview();
    });
  });

  // Export / Import backups
  const btnExport = document.getElementById("btn-export");
  if (btnExport) {
    btnExport.addEventListener("click", exportResumeData);
  }

  const btnImport = document.getElementById("btn-import");
  const fileInput = document.getElementById("import-file-input");
  if (btnImport && fileInput) {
    btnImport.addEventListener("click", () => {
      fileInput.click();
    });
    fileInput.addEventListener("change", importResumeData);
  }
}

// Render preset buttons dynamically
function renderPresetButtons() {
  const grid = document.getElementById("preset-grid");
  if (!grid) return;
  grid.innerHTML = "";

  // 1. Default presets
  const defaults = [
    { id: "reactDev", name: "React Dev" },
    { id: "graphicDesigner", name: "Designer" },
    { id: "combined", name: "Combined" }
  ];

  defaults.forEach(preset => {
    const btn = document.createElement("button");
    btn.className = "preset-btn";
    btn.dataset.preset = preset.id;
    btn.textContent = preset.name;
    if (activePresetId === preset.id) {
      btn.classList.add("active");
    }
    btn.addEventListener("click", () => {
      selectPreset(preset.id);
    });
    grid.appendChild(btn);
  });

  // 2. Custom presets
  Object.keys(customPresets).forEach(id => {
    const wrapper = document.createElement("div");
    wrapper.className = "preset-wrapper";

    const btn = document.createElement("button");
    btn.className = "preset-btn custom-preset";
    btn.dataset.preset = id;
    btn.textContent = customPresets[id].profileName || id;
    if (activePresetId === id) {
      btn.classList.add("active");
    }
    btn.addEventListener("click", () => {
      selectPreset(id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete-preset";
    deleteBtn.innerHTML = "&times;";
    deleteBtn.title = "Delete Preset";
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deletePreset(id);
    });

    wrapper.appendChild(btn);
    wrapper.appendChild(deleteBtn);
    grid.appendChild(wrapper);
  });

  // 3. Add Preset button
  const addBtn = document.createElement("button");
  addBtn.className = "preset-btn add-preset-btn";
  addBtn.id = "btn-add-preset";
  addBtn.innerHTML = '<i class="fa-solid fa-plus" style="margin-right: 4px;"></i> Add';
  addBtn.title = "Save current profile as a new preset";
  addBtn.addEventListener("click", () => {
    openAddPresetModal();
  });
  grid.appendChild(addBtn);
}

// Select and load a preset
function selectPreset(id) {
  activePresetId = id;
  try {
    localStorage.setItem("resume_active_preset_id", id);
  } catch (e) {}

  if (customPresets[id]) {
    currentData = JSON.parse(JSON.stringify(customPresets[id]));
    showToast(`Loaded "${customPresets[id].profileName || id}" preset!`);
  } else if (PRESETS[id]) {
    currentData = JSON.parse(JSON.stringify(PRESETS[id]));
    const names = { reactDev: "React Dev", graphicDesigner: "Designer", combined: "Combined" };
    showToast(`Loaded ${names[id]} preset!`);
  }

  loadDataIntoEditor(currentData);
  updatePreview();

  // Update active state in UI
  document.querySelectorAll(".preset-grid .preset-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.preset === id) {
      btn.classList.add("active");
    }
  });
}

// Modal functions
function openAddPresetModal() {
  const modal = document.getElementById("preset-modal");
  const input = document.getElementById("custom-preset-name");
  if (modal && input) {
    input.value = "";
    modal.classList.add("show");
    input.focus();
  }
}

function closeAddPresetModal() {
  const modal = document.getElementById("preset-modal");
  if (modal) {
    modal.classList.remove("show");
  }
}

function saveCustomPreset() {
  const input = document.getElementById("custom-preset-name");
  if (!input) return;

  const rawName = input.value.trim();
  if (!rawName) {
    showToast("Please enter a preset name!");
    return;
  }

  const id = "custom_" + rawName.toLowerCase().replace(/[^a-z0-9]/g, "_");
  
  if (id === "reactdev" || id === "graphicdesigner" || id === "combined") {
    showToast("This name conflicts with a default preset!");
    return;
  }

  const presetData = JSON.parse(JSON.stringify(currentData));
  presetData.profileName = rawName;

  customPresets[id] = presetData;
  try {
    localStorage.setItem("resume_custom_presets", JSON.stringify(customPresets));
  } catch (e) {
    console.error(e);
  }

  showToast(`Saved custom preset "${rawName}"!`);
  closeAddPresetModal();
  activePresetId = id;
  try {
    localStorage.setItem("resume_active_preset_id", id);
  } catch (e) {}

  renderPresetButtons();
}

function deletePreset(id) {
  if (!customPresets[id]) return;

  const displayName = customPresets[id].profileName || id;
  if (!confirm(`Are you sure you want to delete the custom preset "${displayName}"?`)) {
    return;
  }

  delete customPresets[id];
  try {
    localStorage.setItem("resume_custom_presets", JSON.stringify(customPresets));
  } catch (e) {
    console.error(e);
  }

  showToast(`Deleted custom preset "${displayName}".`);

  if (activePresetId === id) {
    activePresetId = "combined";
    try {
      localStorage.setItem("resume_active_preset_id", "combined");
    } catch (e) {}
    currentData = JSON.parse(JSON.stringify(PRESETS.combined));
    loadDataIntoEditor(currentData);
    updatePreview();
  }

  renderPresetButtons();
}

// Load data into Form Inputs
function loadDataIntoEditor(data) {
  const sheet = document.getElementById("resume-sheet");

  // Load Template Style setting via new thumbnail picker
  const templateStyle = data.templateStyle || "modern";
  if (sheet) {
    sheet.classList.remove(
      "template-modern", "template-classic", "template-minimal",
      "template-executive", "template-creative", "template-ats"
    );
    sheet.classList.add(`template-${templateStyle}`);
  }
  document.querySelectorAll(".template-card").forEach(card => {
    card.classList.toggle("active", card.dataset.template === templateStyle);
  });

  // Load Accent Color setting
  const accentColor = data.accentColor || "#4f46e5";
  const colorPicker = document.getElementById("resume-accent-color");
  const colorValSpan = document.querySelector(".color-hex-val");
  if (colorPicker) colorPicker.value = accentColor;
  if (colorValSpan) colorValSpan.textContent = accentColor.toUpperCase();
  if (sheet) sheet.style.setProperty("--res-accent", accentColor);

  // Set active class on color palette swatch
  document.querySelectorAll(".palette-swatch-btn").forEach(btn => {
    const palette = btn.dataset.palette;
    let hex = "#4f46e5";
    if (palette === "slate") hex = "#1e3a8a";
    else if (palette === "emerald") hex = "#065f46";
    else if (palette === "royal") hex = "#4f46e5";
    else if (palette === "amber") hex = "#c2410c";
    else if (palette === "onyx") hex = "#111827";
    btn.classList.toggle("active", hex.toLowerCase() === accentColor.toLowerCase());
  });

  // Load Font Style
  const fontStyle = data.fontStyle || "inter";
  const fontSelect = document.getElementById("select-font");
  if (fontSelect) fontSelect.value = fontStyle;
  applyFontStyle(fontStyle);

  // Load Line Spacing
  const lineSpacing = data.lineSpacing || 1.4;
  const spacingSlider = document.getElementById("select-spacing");
  const spacingLabel = document.getElementById("spacing-val-label");
  if (spacingSlider) spacingSlider.value = lineSpacing;
  if (spacingLabel) spacingLabel.textContent = lineSpacing;
  if (sheet) sheet.style.lineHeight = lineSpacing;

  // Load ATS Mode
  const atsMode = data.atsMode || false;
  const atsToggle = document.getElementById("ats-mode-toggle");
  if (atsToggle) atsToggle.checked = atsMode;
  applyATSMode(atsMode);

  // Contact
  document.getElementById("input-name").value = data.name || "";
  document.getElementById("input-title").value = data.title || "";
  document.getElementById("input-phone").value = data.phone || "";
  document.getElementById("input-email").value = data.email || "";
  document.getElementById("input-location").value = data.location || "";
  document.getElementById("input-linkedin").value = data.linkedin || "";
  document.getElementById("input-github").value = data.github || "";
  document.getElementById("input-portfolio").value = data.portfolio || "";

  // Skills
  document.getElementById("input-languages").value = data.skills?.languages || "";
  document.getElementById("input-tools").value = data.skills?.tools || "";

  // Render lists
  renderExperienceList();
  renderProjectsList();
  renderEducationList();
  renderCustomSectionsList();
}

// Setup live updating listeners
function setupFormListeners() {
  const textInputs = [
    "input-name", "input-title", "input-phone", "input-email", 
    "input-location", "input-linkedin", "input-github", "input-portfolio",
    "input-languages", "input-tools"
  ];

  textInputs.forEach(id => {
    document.getElementById(id).addEventListener("input", (e) => {
      const field = id.replace("input-", "");
      if (field === "languages" || field === "tools") {
        if (!currentData.skills) currentData.skills = {};
        currentData.skills[field] = e.target.value;
      } else {
        currentData[field] = e.target.value;
      }
      updatePreview();
    });
  });
}

// Render dynamic forms
function renderExperienceList() {
  const container = document.getElementById("experience-list-container");
  container.innerHTML = "";

  currentData.experience.forEach((job, index) => {
    const card = document.createElement("div");
    card.className = "item-card";
    const isFirst = index === 0;
    const isLast = index === currentData.experience.length - 1;
    card.innerHTML = `
      <div class="item-card-header" style="cursor: move;">
        <h4><i class="fa-solid fa-grip-vertical" style="color: var(--text-muted); margin-right: 8px; font-size: 11px;"></i> Job #${index + 1}</h4>
        <div class="item-card-actions">
          <button class="btn-icon btn-move-up-job" data-index="${index}" ${isFirst ? 'disabled' : ''} title="Move Up"><i class="fa-solid fa-chevron-up"></i></button>
          <button class="btn-icon btn-move-down-job" data-index="${index}" ${isLast ? 'disabled' : ''} title="Move Down"><i class="fa-solid fa-chevron-down"></i></button>
          <button class="btn-icon btn-delete-job" data-index="${index}" title="Delete Job">×</button>
        </div>
      </div>
      <div class="grid-2">
        <div class="form-group">
          <label>Company</label>
          <input type="text" class="job-company" data-index="${index}" data-field="company" value="${job.company}">
        </div>
        <div class="form-group">
          <label>Role</label>
          <input type="text" class="job-role" data-index="${index}" data-field="role" value="${job.role}">
        </div>
      </div>
      <div class="grid-2 mt-2">
        <div class="form-group">
          <label>Dates</label>
          <input type="text" class="job-dates" data-index="${index}" data-field="dates" value="${job.dates}">
        </div>
        <div class="form-group">
          <label>Location</label>
          <input type="text" class="job-location" data-index="${index}" data-field="location" value="${job.location}">
        </div>
      </div>
      <div class="form-group mt-2">
        <label>Bullet Points</label>
        <div class="bullets-container" id="job-bullets-${index}"></div>
        <div class="job-bullet-actions">
          <button class="btn-text btn-add-bullet" data-index="${index}">+ Add Bullet Point</button>
          <button class="btn-text btn-ai-bullets" data-index="${index}"><i class="fa-solid fa-wand-magic-sparkles"></i> AI Generate Bullets</button>
        </div>
      </div>
    `;
    container.appendChild(card);

    // Render bullets
    const bulletsContainer = document.getElementById(`job-bullets-${index}`);
    job.bullets.forEach((bullet, bIndex) => {
      const bRow = document.createElement("div");
      bRow.className = "bullet-row";
      bRow.innerHTML = `
        <textarea class="job-bullet-input" data-job="${index}" data-bullet="${bIndex}">${bullet}</textarea>
        <button class="btn-icon btn-delete-bullet" data-job="${index}" data-bullet="${bIndex}">×</button>
      `;
      bulletsContainer.appendChild(bRow);
    });
  });

  // Attach event listeners for dynamic fields
  container.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = parseInt(e.target.dataset.index);
      const field = e.target.dataset.field;
      currentData.experience[idx][field] = e.target.value;
      updatePreview();
    });
  });

  container.querySelectorAll(".job-bullet-input").forEach(textarea => {
    textarea.addEventListener("input", (e) => {
      const jobIdx = parseInt(e.target.dataset.job);
      const bulletIdx = parseInt(e.target.dataset.bullet);
      currentData.experience[jobIdx].bullets[bulletIdx] = e.target.value;
      updatePreview();
    });
  });

  // Move Up / Move Down handlers
  container.querySelectorAll(".btn-move-up-job").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      if (idx > 0) {
        const temp = currentData.experience[idx];
        currentData.experience[idx] = currentData.experience[idx - 1];
        currentData.experience[idx - 1] = temp;
        renderExperienceList();
        updatePreview();
      }
    });
  });

  container.querySelectorAll(".btn-move-down-job").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      if (idx < currentData.experience.length - 1) {
        const temp = currentData.experience[idx];
        currentData.experience[idx] = currentData.experience[idx + 1];
        currentData.experience[idx + 1] = temp;
        renderExperienceList();
        updatePreview();
      }
    });
  });

  // Add Job / Delete Job / Add Bullet / Delete Bullet handlers
  container.querySelectorAll(".btn-delete-job").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      currentData.experience.splice(idx, 1);
      renderExperienceList();
      updatePreview();
    });
  });

  container.querySelectorAll(".btn-add-bullet").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      currentData.experience[idx].bullets.push("New achievement or responsibility...");
      renderExperienceList();
      updatePreview();
    });
  });

  container.querySelectorAll(".btn-delete-bullet").forEach(btn => {
    btn.addEventListener("click", () => {
      const jobIdx = parseInt(btn.dataset.job);
      const bulletIdx = parseInt(btn.dataset.bullet);
      currentData.experience[jobIdx].bullets.splice(bulletIdx, 1);
      renderExperienceList();
      updatePreview();
    });
  });

  container.querySelectorAll(".btn-ai-bullets").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      const job = currentData.experience[idx];
      const newBullets = generateAIBullets(job.role, job.company);
      currentData.experience[idx].bullets = newBullets;
      renderExperienceList();
      updatePreview();
      showToast(`AI generated bullets for ${job.company || "Job"}!`);
    });
  });

  // Sortable JS drag and drop reordering
  if (window.Sortable) {
    Sortable.create(container, {
      animation: 150,
      handle: ".item-card-header",
      onEnd: (evt) => {
        const oldIndex = evt.oldIndex;
        const newIndex = evt.newIndex;
        if (oldIndex !== newIndex) {
          const item = currentData.experience.splice(oldIndex, 1)[0];
          currentData.experience.splice(newIndex, 0, item);
          saveCurrentProgress();
          renderExperienceList();
          updatePreview();
        }
      }
    });
  }
}

// Render projects list
function renderProjectsList() {
  const container = document.getElementById("projects-list-container");
  container.innerHTML = "";

  currentData.projects.forEach((proj, index) => {
    const card = document.createElement("div");
    card.className = "item-card";
    const isFirst = index === 0;
    const isLast = index === currentData.projects.length - 1;
    card.innerHTML = `
      <div class="item-card-header" style="cursor: move;">
        <h4><i class="fa-solid fa-grip-vertical" style="color: var(--text-muted); margin-right: 8px; font-size: 11px;"></i> Project #${index + 1}</h4>
        <div class="item-card-actions">
          <button class="btn-icon btn-move-up-project" data-index="${index}" ${isFirst ? 'disabled' : ''} title="Move Up"><i class="fa-solid fa-chevron-up"></i></button>
          <button class="btn-icon btn-move-down-project" data-index="${index}" ${isLast ? 'disabled' : ''} title="Move Down"><i class="fa-solid fa-chevron-down"></i></button>
          <button class="btn-icon btn-delete-project" data-index="${index}">×</button>
        </div>
      </div>
      <div class="form-group">
        <label>Project Name</label>
        <input type="text" class="proj-name" data-index="${index}" data-field="name" value="${proj.name}">
      </div>
      <div class="form-group mt-2">
        <label>Project Link (URL, optional)</label>
        <input type="text" class="proj-link" data-index="${index}" data-field="link" value="${proj.link || ""}" placeholder="e.g. github.com/username/project">
      </div>
      <div class="form-group mt-2">
        <label>Description</label>
        <textarea class="proj-description" data-index="${index}" data-field="description">${proj.description}</textarea>
      </div>
    `;
    container.appendChild(card);
  });

  // Input listeners
  container.querySelectorAll("input, textarea").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = parseInt(e.target.dataset.index);
      const field = e.target.dataset.field;
      currentData.projects[idx][field] = e.target.value;
      updatePreview();
    });
  });

  // Move Up / Move Down handlers
  container.querySelectorAll(".btn-move-up-project").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      if (idx > 0) {
        const temp = currentData.projects[idx];
        currentData.projects[idx] = currentData.projects[idx - 1];
        currentData.projects[idx - 1] = temp;
        renderProjectsList();
        updatePreview();
      }
    });
  });

  container.querySelectorAll(".btn-move-down-project").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      if (idx < currentData.projects.length - 1) {
        const temp = currentData.projects[idx];
        currentData.projects[idx] = currentData.projects[idx + 1];
        currentData.projects[idx + 1] = temp;
        renderProjectsList();
        updatePreview();
      }
    });
  });

  container.querySelectorAll(".btn-delete-project").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      currentData.projects.splice(idx, 1);
      renderProjectsList();
      updatePreview();
    });
  });

  // Sortable JS drag and drop reordering
  if (window.Sortable) {
    Sortable.create(container, {
      animation: 150,
      handle: ".item-card-header",
      onEnd: (evt) => {
        const oldIndex = evt.oldIndex;
        const newIndex = evt.newIndex;
        if (oldIndex !== newIndex) {
          const item = currentData.projects.splice(oldIndex, 1)[0];
          currentData.projects.splice(newIndex, 0, item);
          saveCurrentProgress();
          renderProjectsList();
          updatePreview();
        }
      }
    });
  }
}

// Render education list
function renderEducationList() {
  const container = document.getElementById("education-list-container");
  container.innerHTML = "";

  currentData.education.forEach((edu, index) => {
    const card = document.createElement("div");
    card.className = "item-card";
    const isFirst = index === 0;
    const isLast = index === currentData.education.length - 1;
    card.innerHTML = `
      <div class="item-card-header" style="cursor: move;">
        <h4><i class="fa-solid fa-grip-vertical" style="color: var(--text-muted); margin-right: 8px; font-size: 11px;"></i> Education #${index + 1}</h4>
        <div class="item-card-actions">
          <button class="btn-icon btn-move-up-edu" data-index="${index}" ${isFirst ? 'disabled' : ''} title="Move Up"><i class="fa-solid fa-chevron-up"></i></button>
          <button class="btn-icon btn-move-down-edu" data-index="${index}" ${isLast ? 'disabled' : ''} title="Move Down"><i class="fa-solid fa-chevron-down"></i></button>
          <button class="btn-icon btn-delete-edu" data-index="${index}">×</button>
        </div>
      </div>
      <div class="grid-2">
        <div class="form-group">
          <label>Institution</label>
          <input type="text" class="edu-institution" data-index="${index}" data-field="institution" value="${edu.institution}">
        </div>
        <div class="form-group">
          <label>Degree</label>
          <input type="text" class="edu-degree" data-index="${index}" data-field="degree" value="${edu.degree}">
        </div>
      </div>
      <div class="grid-2 mt-2">
        <div class="form-group">
          <label>Dates</label>
          <input type="text" class="edu-dates" data-index="${index}" data-field="dates" value="${edu.dates}">
        </div>
        <div class="form-group">
          <label>Location</label>
          <input type="text" class="edu-location" data-index="${index}" data-field="location" value="${edu.location}">
        </div>
      </div>
      <div class="form-group mt-2">
        <label>Bullets/Activities (optional)</label>
        <div class="bullets-container" id="edu-bullets-${index}"></div>
        <button class="btn-text btn-add-edu-bullet" data-index="${index}">+ Add Detail</button>
      </div>
    `;
    container.appendChild(card);

    const bulletsContainer = document.getElementById(`edu-bullets-${index}`);
    if (edu.bullets) {
      edu.bullets.forEach((bullet, bIndex) => {
        const bRow = document.createElement("div");
        bRow.className = "bullet-row";
        bRow.innerHTML = `
          <textarea class="edu-bullet-input" data-edu="${index}" data-bullet="${bIndex}">${bullet}</textarea>
          <button class="btn-icon btn-delete-edu-bullet" data-edu="${index}" data-bullet="${bIndex}">×</button>
        `;
        bulletsContainer.appendChild(bRow);
      });
    }
  });

  // Input listeners
  container.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = parseInt(e.target.dataset.index);
      const field = e.target.dataset.field;
      currentData.education[idx][field] = e.target.value;
      updatePreview();
    });
  });

  container.querySelectorAll(".edu-bullet-input").forEach(textarea => {
    textarea.addEventListener("input", (e) => {
      const eduIdx = parseInt(e.target.dataset.edu);
      const bulletIdx = parseInt(e.target.dataset.bullet);
      currentData.education[eduIdx].bullets[bulletIdx] = e.target.value;
      updatePreview();
    });
  });

  // Move Up / Move Down handlers
  container.querySelectorAll(".btn-move-up-edu").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      if (idx > 0) {
        const temp = currentData.education[idx];
        currentData.education[idx] = currentData.education[idx - 1];
        currentData.education[idx - 1] = temp;
        renderEducationList();
        updatePreview();
      }
    });
  });

  container.querySelectorAll(".btn-move-down-edu").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      if (idx < currentData.education.length - 1) {
        const temp = currentData.education[idx];
        currentData.education[idx] = currentData.education[idx + 1];
        currentData.education[idx + 1] = temp;
        renderEducationList();
        updatePreview();
      }
    });
  });

  container.querySelectorAll(".btn-delete-edu").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      currentData.education.splice(idx, 1);
      renderEducationList();
      updatePreview();
    });
  });

  container.querySelectorAll(".btn-add-edu-bullet").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      if (!currentData.education[idx].bullets) {
        currentData.education[idx].bullets = [];
      }
      currentData.education[idx].bullets.push("New detail or coursework...");
      renderEducationList();
      updatePreview();
    });
  });

  container.querySelectorAll(".btn-delete-edu-bullet").forEach(btn => {
    btn.addEventListener("click", () => {
      const eduIdx = parseInt(btn.dataset.edu);
      const bulletIdx = parseInt(btn.dataset.bullet);
      currentData.education[eduIdx].bullets.splice(bulletIdx, 1);
      renderEducationList();
      updatePreview();
    });
  });

  // Sortable JS drag and drop reordering
  if (window.Sortable) {
    Sortable.create(container, {
      animation: 150,
      handle: ".item-card-header",
      onEnd: (evt) => {
        const oldIndex = evt.oldIndex;
        const newIndex = evt.newIndex;
        if (oldIndex !== newIndex) {
          const item = currentData.education.splice(oldIndex, 1)[0];
          currentData.education.splice(newIndex, 0, item);
          saveCurrentProgress();
          renderEducationList();
          updatePreview();
        }
      }
    });
  }
}

// Add top-level add buttons
document.getElementById("btn-add-job-root").addEventListener("click", () => {
  currentData.experience.unshift({
    company: "Company Name",
    role: "Job Title / Role",
    dates: "Month Year – Month Year",
    location: "City, State",
    bullets: ["First bullet point detail..."]
  });
  renderExperienceList();
  updatePreview();
  showToast("Added new job entry!");
});

document.getElementById("btn-add-project-root").addEventListener("click", () => {
  currentData.projects.push({
    name: "Project Title",
    description: "Describe what you built, tech stack used, and the impact of the project."
  });
  renderProjectsList();
  updatePreview();
  showToast("Added new project entry!");
});

document.getElementById("btn-add-edu-root").addEventListener("click", () => {
  currentData.education.push({
    institution: "College/School Name",
    degree: "Degree / Certification",
    dates: "Year – Year",
    location: "City, State",
    bullets: []
  });
  renderEducationList();
  updatePreview();
  showToast("Added new education entry!");
});

// Update the resume preview
function updatePreview() {
  // Update header
  document.getElementById("res-name").textContent = currentData.name || "Aman Sharma";
  
  // Format contact line
  let contactHtml = "";
  if (currentData.phone) {
    contactHtml += `<span class="contact-item"><i class="fas fa-phone-alt"></i> ${currentData.phone}</span>`;
  }
  if (currentData.email) {
    if (contactHtml) contactHtml += ` <span class="divider">|</span> `;
    contactHtml += `<span class="contact-item"><i class="fas fa-envelope"></i> <a href="mailto:${currentData.email}">${currentData.email}</a></span>`;
  }
  if (currentData.location) {
    if (contactHtml) contactHtml += ` <span class="divider">|</span> `;
    contactHtml += `<span class="contact-item"><i class="fas fa-map-marker-alt"></i> ${currentData.location}</span>`;
  }
  if (currentData.linkedin) {
    if (contactHtml) contactHtml += ` <span class="divider">|</span> `;
    const cleanUrl = currentData.linkedin.replace(/^(https?:\/\/)?(www\.)?/, "");
    contactHtml += `<span class="contact-item"><i class="fab fa-linkedin"></i> <a href="https://${cleanUrl}" target="_blank">LinkedIn</a></span>`;
  }
  if (currentData.github) {
    if (contactHtml) contactHtml += ` <span class="divider">|</span> `;
    const cleanUrl = currentData.github.replace(/^(https?:\/\/)?(www\.)?/, "");
    const label = cleanUrl.includes("behance") ? "Behance" : "GitHub";
    const icon = cleanUrl.includes("behance") ? "fab fa-behance" : "fab fa-github";
    contactHtml += `<span class="contact-item"><i class="${icon}"></i> <a href="https://${cleanUrl}" target="_blank">${label}</a></span>`;
  }
  if (currentData.portfolio) {
    if (contactHtml) contactHtml += ` <span class="divider">|</span> `;
    const cleanUrl = currentData.portfolio.replace(/^(https?:\/\/)?(www\.)?/, "");
    contactHtml += `<span class="contact-item"><i class="fas fa-globe"></i> <a href="https://${cleanUrl}" target="_blank">Portfolio</a></span>`;
  }
  
  document.getElementById("res-contact-bar").innerHTML = contactHtml;

  // Render Experience Section
  const expSection = document.getElementById("res-section-experience");
  if (currentData.experience && currentData.experience.length > 0) {
    expSection.style.display = "block";
    let html = `<h3>EXPERIENCE</h3><div class="section-divider"></div><div class="section-content">`;
    currentData.experience.forEach(job => {
      html += `
        <div class="resume-entry">
          <div class="entry-row-1">
            <span class="entry-org">${job.company}</span>
            <span class="entry-date">${job.dates}</span>
          </div>
          <div class="entry-row-2">
            <span class="entry-role">${job.role}</span>
            <span class="entry-loc">${job.location}</span>
          </div>
          <ul class="entry-bullets">
            ${job.bullets.map(b => `<li>${formatMarkdown(b)}</li>`).join("")}
          </ul>
        </div>
      `;
    });
    html += `</div>`;
    expSection.innerHTML = html;
  } else {
    expSection.style.display = "none";
  }

  // Render Projects Section
  const projSection = document.getElementById("res-section-projects");
  if (currentData.projects && currentData.projects.length > 0) {
    projSection.style.display = "block";
    let html = `<h3>PROJECTS</h3><div class="section-divider"></div><div class="section-content">`;
    currentData.projects.forEach(proj => {
      let linkHtml = "";
      if (proj.link) {
        const cleanUrl = proj.link.replace(/^(https?:\/\/)?(www\.)?/, "");
        linkHtml = `
          <span class="project-link-container">
            <a href="https://${cleanUrl}" target="_blank" class="res-project-link-icon" title="View Project"><i class="fa-solid fa-link project-link-icon"></i></a>
            <a href="https://${cleanUrl}" target="_blank" class="res-project-link-text">${cleanUrl}</a>
          </span>
        `;
      }
      html += `
        <div class="resume-entry project-entry">
          <span class="entry-org">${proj.name}</span>${linkHtml}
          <span class="project-desc">${formatMarkdown(proj.description)}</span>
        </div>
      `;
    });
    html += `</div>`;
    projSection.innerHTML = html;
  } else {
    projSection.style.display = "none";
  }

  // Render Education Section
  const eduSection = document.getElementById("res-section-education");
  if (currentData.education && currentData.education.length > 0) {
    eduSection.style.display = "block";
    let html = `<h3>EDUCATION</h3><div class="section-divider"></div><div class="section-content">`;
    currentData.education.forEach(edu => {
      html += `
        <div class="resume-entry">
          <div class="entry-row-1">
            <span class="entry-org">${edu.institution}</span>
            <span class="entry-date">${edu.dates}</span>
          </div>
          <div class="entry-row-2">
            <span class="entry-role">${edu.degree}</span>
            <span class="entry-loc">${edu.location}</span>
          </div>
          ${edu.bullets && edu.bullets.length > 0 ? `
            <ul class="entry-bullets">
              ${edu.bullets.map(b => `<li>${formatMarkdown(b)}</li>`).join("")}
            </ul>
          ` : ""}
        </div>
      `;
    });
    html += `</div>`;
    eduSection.innerHTML = html;
  } else {
    eduSection.style.display = "none";
  }

  // Render Skills Section
  const skillsSection = document.getElementById("res-section-skills");
  if (currentData.skills && (currentData.skills.languages || currentData.skills.tools)) {
    skillsSection.style.display = "block";
    let html = `<h3>SKILLS</h3><div class="section-divider"></div><div class="section-content"><div class="skills-grid">`;
    if (currentData.skills.languages) {
      html += `<div class="skills-row"><strong>Languages :</strong> ${currentData.skills.languages}</div>`;
    }
    if (currentData.skills.tools) {
      html += `<div class="skills-row"><strong>Tools :</strong> ${currentData.skills.tools}</div>`;
    }
    html += `</div></div>`;
    skillsSection.innerHTML = html;
  } else {
    skillsSection.style.display = "none";
  }

  // Render Custom Sections
  const customSectionsEl = document.getElementById("res-custom-sections");
  if (customSectionsEl) {
    customSectionsEl.innerHTML = "";
    const sections = currentData.customSections || [];
    sections.forEach(sec => {
      const secDiv = document.createElement("div");
      secDiv.className = "resume-section res-custom-section";
      const titleUpper = (sec.title || "").toUpperCase();
      let secHtml = `<h3>${titleUpper}</h3><div class="section-divider"></div><div class="section-content">`;
      if (sec.type === "interests" || sec.type === "languages") {
        // Render as a single line
        const items = (sec.items || []).map(i => i.text).filter(Boolean).join(" • ");
        secHtml += `<div class="skills-row">${items}</div>`;
      } else {
        // Render as bullet list entries
        (sec.items || []).forEach(item => {
          secHtml += `<div class="resume-entry project-entry">`;
          if (item.subtitle) secHtml += `<span class="entry-org">${item.text}</span> <span class="entry-loc">${item.subtitle}</span>`;
          else secHtml += `<span class="entry-org">${item.text}</span>`;
          if (item.detail) secHtml += `<span class="project-desc">${formatMarkdown(item.detail)}</span>`;
          secHtml += `</div>`;
        });
      }
      secHtml += `</div>`;
      secDiv.innerHTML = secHtml;
      customSectionsEl.appendChild(secDiv);
    });
  }

  scaleResume();
  checkPageLimit();
  saveCurrentProgress();
}

// Simple markdown formatter for bold syntax e.g. **text**
function formatMarkdown(text) {
  if (!text) return "";
  // Escape HTML
  let escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  
  // Convert double asterisks to bold tags
  escaped = escaped.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  return escaped;
}

// Toast notification helper
function showToast(message) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  
  // Animate in
  setTimeout(() => toast.classList.add("show"), 10);
  
  // Remove
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Scale the resume sheet to fit the preview container
function scaleResume() {
  const wrapper = document.querySelector(".resume-wrapper");
  const sheet = document.getElementById("resume-sheet");
  const container = document.querySelector(".resume-container");
  if (!wrapper || !sheet || !container) return;

  const wrapperWidth = wrapper.clientWidth;
  if (wrapperWidth === 0) return; // Hidden on mobile editor view

  const padding = 40; // 20px on left, 20px on right
  const targetWidth = Math.max(wrapperWidth - padding, 200);
  const sheetBaseWidth = 794; // 210mm in pixels at 96dpi

  let scale = targetWidth / sheetBaseWidth;
  if (scale > 1) {
    scale = 1;
  }

  // Set css custom property on wrapper so sheet scaling can read it
  wrapper.style.setProperty("--scale", scale);

  // Set container dimensions in document flow so that scroll works properly
  const unscaledHeight = sheet.offsetHeight;
  container.style.height = `${unscaledHeight * scale}px`;
  container.style.width = `${sheetBaseWidth * scale}px`;
}

// Handles switching panels on mobile devices
function setupMobileNavigation() {
  const btnEditor = document.getElementById("btn-nav-editor");
  const btnPreview = document.getElementById("btn-nav-preview");
  const dashboard = document.querySelector(".dashboard");

  if (!btnEditor || !btnPreview || !dashboard) return;

  btnEditor.addEventListener("click", () => {
    dashboard.classList.remove("show-preview");
    dashboard.classList.add("show-editor");
    btnEditor.classList.add("active");
    btnPreview.classList.remove("active");
  });

  btnPreview.addEventListener("click", () => {
    dashboard.classList.remove("show-editor");
    dashboard.classList.add("show-preview");
    btnPreview.classList.add("active");
    btnEditor.classList.remove("active");
    // Wait a brief tick for elements to render and clientWidth to be available
    setTimeout(scaleResume, 50);
  });

  // Set default state on mobile loads
  if (window.innerWidth <= 768) {
    dashboard.classList.add("show-editor");
  }
}

// Resize listener
window.addEventListener("resize", scaleResume);

// Exclusive accordion behavior fallback for browsers that do not support details[name]
function setupAccordionListeners() {
  const detailsElements = document.querySelectorAll(".editor-accordion .accordion-item");
  detailsElements.forEach(item => {
    item.addEventListener("toggle", (e) => {
      if (item.open) {
        detailsElements.forEach(otherItem => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
      }
    });
  });
}

// Chatbot functionality
function setupChatbot() {
  const toggleBtn = document.getElementById("chatbot-toggle-btn");
  const closeBtn = document.getElementById("btn-close-chat");
  const chatContainer = document.getElementById("chatbot-container");
  const messagesContainer = document.getElementById("chatbot-messages");
  const chatInput = document.getElementById("chatbot-input");
  const sendBtn = document.getElementById("btn-send-chat");

  if (!toggleBtn || !chatContainer || !messagesContainer || !chatInput || !sendBtn) return;

  let welcomeSent = false;

  // Toggle chatbot visibility
  toggleBtn.addEventListener("click", () => {
    chatContainer.classList.toggle("open");
    
    // Remove notification pulse indicator on first click
    const pulse = toggleBtn.querySelector(".pulse-indicator");
    if (pulse) pulse.remove();

    if (chatContainer.classList.contains("open")) {
      chatInput.focus();
      if (!welcomeSent) {
        // Send initial bot greeting
        setTimeout(() => {
          addChatMessage("Hi! I'm your AI Resume Assistant. Tell me what to change, and I will update your resume in real time. E.g., 'Change my title to Staff Engineer' or 'Add React Native to my tools'.", "bot");
          welcomeSent = true;
        }, 300);
      }
    }
  });

  // Close chatbot
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      chatContainer.classList.remove("open");
    });
  }

  // API settings modal
  const btnSettings = document.getElementById("btn-chatbot-settings");
  const apiModal = document.getElementById("api-modal");
  const keyInput = document.getElementById("gemini-api-key-input");
  const btnSaveApi = document.getElementById("btn-save-api");
  const btnClearApi = document.getElementById("btn-clear-api");

  if (btnSettings && apiModal && keyInput && btnSaveApi && btnClearApi) {
    btnSettings.addEventListener("click", (e) => {
      e.stopPropagation();
      const savedKey = localStorage.getItem("gemini_api_key") || "";
      keyInput.value = savedKey;
      apiModal.classList.add("show");
    });

    btnSaveApi.addEventListener("click", () => {
      const val = keyInput.value.trim();
      if (val) {
        localStorage.setItem("gemini_api_key", val);
        showToast("Gemini API key saved successfully!");
      } else {
        localStorage.removeItem("gemini_api_key");
        showToast("Please enter a valid key.");
      }
      apiModal.classList.remove("show");
    });

    btnClearApi.addEventListener("click", () => {
      localStorage.removeItem("gemini_api_key");
      keyInput.value = "";
      showToast("Gemini API key cleared.");
      apiModal.classList.remove("show");
    });

    apiModal.addEventListener("click", (e) => {
      if (e.target === apiModal) {
        apiModal.classList.remove("show");
      }
    });
  }

  // Handle Send message
  function handleSendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    // 1. Add user message
    addChatMessage(text, "user");
    chatInput.value = "";

    // 2. Add typing indicator
    const typingElement = showTypingIndicator();

    // 3. Process response
    const apiKey = localStorage.getItem("gemini_api_key");
    if (apiKey) {
      generateGeminiResponse(text, typingElement);
    } else {
      setTimeout(() => {
        typingElement.remove();
        const botResponse = parseResumeUpdate(text);
        addChatMessage(botResponse, "bot");
      }, 1000);
    }
  }

  // Bind event listeners for input submission
  sendBtn.addEventListener("click", handleSendMessage);
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  });

  // Helper to add message bubbles
  function addChatMessage(text, sender) {
    const bubble = document.createElement("div");
    bubble.className = `chat-message ${sender}`;
    bubble.innerHTML = text; // allow bold highlights and linebreaks
    messagesContainer.appendChild(bubble);
    
    // Auto scroll to bottom
    setTimeout(() => {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 50);
  }

  // Helper to display bot typing dots
  function showTypingIndicator() {
    const wrapper = document.createElement("div");
    wrapper.className = "chat-message bot typing-wrapper";
    wrapper.innerHTML = `
      <div class="typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    messagesContainer.appendChild(wrapper);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return wrapper;
  }
}

// Client-side NLP Parser for AI Resume Assistant
function parseResumeUpdate(prompt) {
  let lowerPrompt = prompt.toLowerCase().trim();
  let changes = [];
  
  // 1. Check for Preset switching
  if (lowerPrompt.includes("preset") || lowerPrompt.includes("theme") || lowerPrompt.includes("profile")) {
    if (lowerPrompt.includes("react") || lowerPrompt.includes("dev")) {
      selectPreset("reactDev");
      return "I have switched your profile to the **React Dev** preset! All fields and experience entries have been loaded.";
    } else if (lowerPrompt.includes("design") || lowerPrompt.includes("graphic")) {
      selectPreset("graphicDesigner");
      return "I have switched your profile to the **Designer** preset! All layout preferences and design assets have been loaded.";
    } else if (lowerPrompt.includes("combined") || lowerPrompt.includes("creative")) {
      selectPreset("combined");
      return "I have switched your profile to the **Combined** preset! A complete set of development and design experience has been loaded.";
    } else {
      // Check if custom preset name matches
      for (const id of Object.keys(customPresets)) {
        const customName = (customPresets[id].profileName || "").toLowerCase();
        if (customName && lowerPrompt.includes(customName)) {
          selectPreset(id);
          return `I have switched your profile to the custom preset **${customPresets[id].profileName}**!`;
        }
      }
    }
  }

  // 2. Check for Print command
  if (lowerPrompt.includes("print") || lowerPrompt.includes("pdf") || lowerPrompt.includes("save")) {
    setTimeout(() => {
      window.print();
    }, 500);
    return "Sure! I'm opening the print preview dialog now so you can save your resume as a PDF.";
  }

  // 2.5 Check for Bullet Point Generation request
  if (lowerPrompt.includes("bullet") || lowerPrompt.includes("experience") || lowerPrompt.includes("achievement")) {
    if (lowerPrompt.includes("generate") || lowerPrompt.includes("create") || lowerPrompt.includes("write") || lowerPrompt.includes("suggest") || lowerPrompt.includes("rewrite")) {
      let jobIndex = 0; // default to first job
      
      let matchIndex = lowerPrompt.match(/(?:job|experience|position)\s+(\d+)/i);
      if (matchIndex) {
        jobIndex = parseInt(matchIndex[1]) - 1;
      }
      
      if (currentData.experience && currentData.experience[jobIndex]) {
        let job = currentData.experience[jobIndex];
        let generated = generateAIBullets(job.role, job.company);
        currentData.experience[jobIndex].bullets = generated;
        renderExperienceList();
        updatePreview();
        return `I have generated new professional bullet points for **Job #${jobIndex + 1}** (${job.role || "Role"} at **${job.company || "Company"}**):<br><br>` + 
          generated.map(b => `• ${b}`).join("<br>");
      } else {
        return "I found a request to generate bullets, but I couldn't find any job experience entries in your resume. Try adding a job first, e.g., 'Add job: Web Developer at Stripe'.";
      }
    }
  }

  // 3. Regex Parsers for Contact Information updates
  
  // Name
  let matchName = prompt.match(/(?:change|update|set)\s+(?:my\s+)?name\s+(?:to\s+)?(.+)/i);
  if (matchName) {
    let newName = matchName[1].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();
    currentData.name = newName;
    document.getElementById("input-name").value = newName;
    changes.push(`Name to **${newName}**`);
  }

  // Professional Title
  let matchTitle = prompt.match(/(?:change|update|set)\s+(?:my\s+)?(?:title|professional title|role)\s+(?:to\s+)?(.+)/i);
  if (matchTitle) {
    let newTitle = matchTitle[1].trim();
    currentData.title = newTitle;
    document.getElementById("input-title").value = newTitle;
    changes.push(`Title to **${newTitle}**`);
  }

  // Phone
  let matchPhone = prompt.match(/(?:change|update|set)\s+(?:my\s+)?(?:phone|mobile|phone number|contact number)\s+(?:to\s+)?(.+)/i);
  if (matchPhone) {
    let newPhone = matchPhone[1].trim();
    currentData.phone = newPhone;
    document.getElementById("input-phone").value = newPhone;
    changes.push(`Phone to **${newPhone}**`);
  }

  // Email
  let matchEmail = prompt.match(/(?:change|update|set)\s+(?:my\s+)?(?:email|email address)\s+(?:to\s+)?(.+)/i);
  if (matchEmail) {
    let newEmail = matchEmail[1].trim();
    currentData.email = newEmail;
    document.getElementById("input-email").value = newEmail;
    changes.push(`Email to **${newEmail}**`);
  }

  // Location
  let matchLoc = prompt.match(/(?:change|update|set)\s+(?:my\s+)?(?:location|address|city)\s+(?:to\s+)?(.+)/i);
  if (matchLoc) {
    let newLoc = matchLoc[1].trim();
    currentData.location = newLoc;
    document.getElementById("input-location").value = newLoc;
    changes.push(`Location to **${newLoc}**`);
  }

  // LinkedIn
  let matchLinkedIn = prompt.match(/(?:change|update|set)\s+(?:my\s+)?linkedin\s+(?:to\s+)?(.+)/i);
  if (matchLinkedIn) {
    let newLinkedIn = matchLinkedIn[1].trim();
    currentData.linkedin = newLinkedIn;
    document.getElementById("input-linkedin").value = newLinkedIn;
    changes.push(`LinkedIn to **${newLinkedIn}**`);
  }

  // GitHub
  let matchGithub = prompt.match(/(?:change|update|set)\s+(?:my\s+)?(?:github|behance)\s+(?:to\s+)?(.+)/i);
  if (matchGithub) {
    let newGithub = matchGithub[1].trim();
    currentData.github = newGithub;
    document.getElementById("input-github").value = newGithub;
    changes.push(`GitHub/Behance to **${newGithub}**`);
  }

  // Portfolio
  let matchPortfolio = prompt.match(/(?:change|update|set)\s+(?:my\s+)?(?:portfolio|website|portfolio site)\s+(?:to\s+)?(.+)/i);
  if (matchPortfolio) {
    let newPortfolio = matchPortfolio[1].trim();
    currentData.portfolio = newPortfolio;
    document.getElementById("input-portfolio").value = newPortfolio;
    changes.push(`Portfolio link to **${newPortfolio}**`);
  }

  // Add Tool/Skill
  let matchAddTool = prompt.match(/(?:add|insert|include|append)\s+(.+?)\s+(?:to|in)\s+(?:my\s+)?(?:skills|tools|tech|technologies)/i);
  if (!matchAddTool) {
    matchAddTool = prompt.match(/(?:add|insert|include|append)\s+(?:skill|tool|tech|technology)\s+(.+)/i);
  }
  if (matchAddTool) {
    let newTool = matchAddTool[1].trim();
    if (!currentData.skills) currentData.skills = {};
    let currentTools = currentData.skills.tools ? currentData.skills.tools.trim() : "";
    if (currentTools && !currentTools.toLowerCase().includes(newTool.toLowerCase())) {
      currentTools += (currentTools.endsWith(",") ? " " : ", ") + newTool;
    } else if (!currentTools) {
      currentTools = newTool;
    }
    currentData.skills.tools = currentTools;
    document.getElementById("input-tools").value = currentTools;
    changes.push(`Added tool **${newTool}**`);
  }

  // Add Language
  let matchAddLang = prompt.match(/(?:add|insert|include|append)\s+(.+?)\s+(?:to|in)\s+(?:my\s+)?(?:languages)/i);
  if (!matchAddLang) {
    matchAddLang = prompt.match(/(?:add|insert|include|append)\s+(?:language)\s+(.+)/i);
  }
  if (matchAddLang) {
    let newLang = matchAddLang[1].trim();
    if (!currentData.skills) currentData.skills = {};
    let currentLangs = currentData.skills.languages ? currentData.skills.languages.trim() : "";
    if (currentLangs && !currentLangs.toLowerCase().includes(newLang.toLowerCase())) {
      currentLangs += (currentLangs.endsWith(",") ? " " : ", ") + newLang;
    } else if (!currentLangs) {
      currentLangs = newLang;
    }
    currentData.skills.languages = currentLangs;
    document.getElementById("input-languages").value = currentLangs;
    changes.push(`Added language **${newLang}**`);
  }

  // Add Job Entry
  let matchAddJob = prompt.match(/(?:add|insert|create)\s+(?:a\s+)?(?:job|experience|position|work)\s+(?:as\s+)?(?:a\s+)?(.+?)(?:\s+(?:at|for|in)\s+(.+?))?(?:\s+(?:from|during)\s+(.+))?$/i);
  if (matchAddJob) {
    let role = matchAddJob[1].trim();
    let company = matchAddJob[2] ? matchAddJob[2].trim() : "Company Name";
    let dates = matchAddJob[3] ? matchAddJob[3].trim() : "Present";
    dates = dates.replace(/^(from|during)\s+/i, "");

    let newJob = {
      company: company,
      role: role,
      dates: dates,
      location: "Remote",
      bullets: ["First bullet point detail (double asterisks to **bold** keywords)."]
    };
    currentData.experience.unshift(newJob);
    renderExperienceList();
    changes.push(`Added job: **${role}** at **${company}**`);
  }

  // Add Project
  let matchAddProject = prompt.match(/(?:add|insert|create)\s+(?:a\s+)?project\s+(?:called|named|title)?\s+(.+?)(?:\s+(?:with|described\s+as|description)\s+(.+))?$/i);
  if (matchAddProject) {
    let name = matchAddProject[1].trim();
    let desc = matchAddProject[2] ? matchAddProject[2].trim() : "Describe what you built, tech stack used, and the impact of the project.";
    let newProject = {
      name: name,
      description: desc
    };
    currentData.projects.push(newProject);
    renderProjectsList();
    changes.push(`Added project: **${name}**`);
  }

  // Add Education
  let matchAddEdu = prompt.match(/(?:add|insert|create)\s+(?:a\s+)?(?:education|degree|college|school)\s+(?:at|from)\s+(.+?)(?:\s+(?:for)\s+(.+))?$/i);
  if (matchAddEdu) {
    let institution = matchAddEdu[1].trim();
    let degree = matchAddEdu[2] ? matchAddEdu[2].trim() : "Degree / Certification";
    let newEdu = {
      institution: institution,
      degree: degree,
      dates: "Year – Year",
      location: "City, State",
      bullets: []
    };
    currentData.education.push(newEdu);
    renderEducationList();
    changes.push(`Added education at **${institution}**`);
  }

  // Return updates summary or fallback chat help instructions
  if (changes.length > 0) {
    updatePreview();
    showToast("Resume updated by AI Assistant!");
    return `I have updated your resume with the following changes:<br>⚡ ` + changes.join("<br>⚡ ");
  }

  return `I'm sorry, I couldn't match a direct action from your prompt. 

Here are some examples of what you can ask me:
- 👤 *Contact*: "Change my name to John Doe", "Update my professional title to Lead Dev", "Set location to New York".
- 🛠️ *Skills*: "Add React Native to my tools", "Add Python to languages".
- 💼 *Experience*: "Add job: Web Developer at Stripe from 2023 to 2025".
- 🚀 *Projects*: "Add project: Task Manager App with React description built a full-stack Kanban board".
- 🎨 *Presets*: "Load the React Dev preset".
- 📄 *Print/Save*: "Print my resume".`;
}

// AI Bullet points generator templates
function generateAIBullets(role, company) {
  const comp = company || "the company";
  const rLower = (role || "").toLowerCase();

  // Frontend / React / Designer template
  if (rLower.includes("react") || rLower.includes("front") || rLower.includes("web") || rLower.includes("ui") || rLower.includes("ux") || rLower.includes("design")) {
    return [
      `Designed and implemented responsive, user-friendly frontend web layouts at **${comp}** using **HTML5, CSS3, and JavaScript**, increasing product engagement by 15%.`,
      `Collaborated closely with design team leads to translate Figma assets into reusable React component architectures.`,
      `Optimized client-side rendering performance, lazy loading, and build bundles to decrease load times by 30% across mobile devices.`
    ];
  }
  
  // Backend / Database template
  if (rLower.includes("back") || rLower.includes("api") || rLower.includes("node") || rLower.includes("database") || rLower.includes("sql") || rLower.includes("server")) {
    return [
      `Designed and engineered high-performance RESTful APIs using **Node.js, Express, and PostgreSQL** at **${comp}**, dropping endpoint response latency by 20%.`,
      `Implemented secure JWT session tokens, role-based authorization systems, and safe database validation structures.`,
      `Structured database tables, views, and complex indexes to increase query search execution speeds by 25%.`
    ];
  }

  // Full Stack / Software Engineer template
  if (rLower.includes("full") || rLower.includes("software") || rLower.includes("stack") || rLower.includes("engineer") || rLower.includes("developer")) {
    return [
      `Led backend and frontend engineering tasks at **${comp}** using **JavaScript (ES6+), Python, and MySQL**, shipping milestones 10% faster.`,
      `Engineered interactive, mobile-friendly interfaces integrated with Node.js backends and REST data channels.`,
      `Automated codebase testing workflows and deployment setups using GitHub Actions pipelines, reducing setup errors.`
    ];
  }

  // Manager / Lead / Analyst template
  if (rLower.includes("product") || rLower.includes("lead") || rLower.includes("analyst") || rLower.includes("manager") || rLower.includes("consultant")) {
    return [
      `Supervised development sprints and release milestones at **${comp}**, coordinating engineers and designers to launch projects.`,
      `Analyzed client telemetry trends and business workflow indicators to identify feature enhancements, improving user acquisition by 12%.`,
      `Drafted clear functional specifications, layout mockups, and product workflows to align development focus with customer requirements.`
    ];
  }

  // Generic fallback template
  return [
    `Designed, developed, and launched software and layout enhancements at **${comp}** aligned with customer needs.`,
    `Refactored legacy software segments to simplify dependencies, eliminate redundancies, and boost modular support.`,
    `Collaborated within agile teams to brainstorm layouts, resolve bugs, and deliver scalable enterprise systems.`
  ];
}

// Backup Export to JSON file
function exportResumeData() {
  const dataStr = JSON.stringify({
    activePresetId: activePresetId,
    customPresets: customPresets,
    currentData: currentData
  }, null, 2);
  
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", url);
  linkElement.setAttribute("download", "resume_builder_backup.json");
  linkElement.click();
  
  // Clean up object URL
  setTimeout(() => URL.revokeObjectURL(url), 100);
  
  showToast("Exported resume data backup successfully!");
}

// Backup Import from JSON file
function importResumeData(e) {
  const files = e.target.files;
  if (!files || files.length === 0) return;

  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    try {
      const parsed = JSON.parse(event.target.result);
      if (parsed.currentData) {
        currentData = parsed.currentData;
      }
      if (parsed.customPresets) {
        customPresets = parsed.customPresets;
        localStorage.setItem("resume_custom_presets", JSON.stringify(customPresets));
      }
      if (parsed.activePresetId) {
        activePresetId = parsed.activePresetId;
        localStorage.setItem("resume_active_preset_id", activePresetId);
      }
      
      loadDataIntoEditor(currentData);
      renderPresetButtons();
      updatePreview();
      showToast("Imported resume data backup successfully!");
    } catch (err) {
      console.error(err);
      showToast("Error parsing backup file. Make sure it's valid JSON.");
    }
  };
  fileReader.readAsText(files[0]);
  
  // Reset input file target value so same file can be imported again
  e.target.value = "";
}

// Check if content exceeds standard A4 print height
function checkPageLimit() {
  const sheet = document.getElementById("resume-sheet");
  if (!sheet) return;

  // offsetHeight is the actual unscaled height of the element
  const currentHeight = sheet.offsetHeight;
  const a4HeightLimit = 1122; // 297mm height limit in pixels at 96dpi

  let indicator = document.getElementById("page-overflow-indicator");
  if (indicator) {
    indicator.remove();
  }

  // Use a 5px buffer to avoid subpixel rendering false positives since min-height is 297mm (1122.5px)
  if (currentHeight > a4HeightLimit + 5) {
    const warning = document.createElement("div");
    warning.id = "page-overflow-indicator";
    warning.className = "page-overflow-warning";
    const pagesCount = Math.ceil((currentHeight / a4HeightLimit) * 10) / 10;
    warning.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Content exceeds A4 page (currently ${pagesCount} pages). Shorten text to fit.`;
    
    const wrapper = document.querySelector(".resume-wrapper");
    if (wrapper) {
      wrapper.appendChild(warning);
    }
  }
}

// ============================================================
// FEATURE PACK #2 — NEW FUNCTIONS
// ============================================================

// --- TEMPLATE THUMBNAIL PICKER ---
function setupTemplatePicker() {
  const cards = document.querySelectorAll(".template-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const template = card.dataset.template;
      currentData.templateStyle = template;

      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const sheet = document.getElementById("resume-sheet");
      if (sheet) {
        sheet.classList.remove(
          "template-modern", "template-classic", "template-minimal",
          "template-executive", "template-creative", "template-ats"
        );
        sheet.classList.add(`template-${template}`);
      }
      updatePreview();
    });
  });

  // Font selector
  const fontSelect = document.getElementById("select-font");
  if (fontSelect) {
    fontSelect.addEventListener("change", (e) => {
      currentData.fontStyle = e.target.value;
      applyFontStyle(e.target.value);
      updatePreview();
    });
  }

  // Spacing slider
  const spacingSlider = document.getElementById("select-spacing");
  const spacingLabel = document.getElementById("spacing-val-label");
  if (spacingSlider) {
    spacingSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      currentData.lineSpacing = val;
      if (spacingLabel) spacingLabel.textContent = val.toFixed(1);
      const sheet = document.getElementById("resume-sheet");
      if (sheet) sheet.style.lineHeight = val;
    });
  }

  // ATS Mode toggle
  const atsToggle = document.getElementById("ats-mode-toggle");
  if (atsToggle) {
    atsToggle.addEventListener("change", (e) => {
      currentData.atsMode = e.target.checked;
      applyATSMode(e.target.checked);
      updatePreview();
    });
  }
}

function applyFontStyle(fontKey) {
  const sheet = document.getElementById("resume-sheet");
  if (!sheet) return;
  const fontClasses = ["font-roboto", "font-merriweather", "font-playfair", "font-ibmplex", "font-nunito"];
  sheet.classList.remove(...fontClasses);
  if (fontKey && fontKey !== "inter") {
    sheet.classList.add(`font-${fontKey}`);
  }
}

function applyATSMode(enabled) {
  const sheet = document.getElementById("resume-sheet");
  const badge = document.getElementById("ats-safe-badge");
  if (sheet) {
    if (enabled) {
      sheet.classList.add("ats-mode");
    } else {
      sheet.classList.remove("ats-mode");
    }
  }
  if (badge) {
    badge.classList.toggle("visible", enabled);
  }
}

// --- ATS SCORE PANEL ---
function setupATSPanel() {
  const btnOpen = document.getElementById("btn-ats-score");
  const btnClose = document.getElementById("btn-close-ats");
  const btnRun = document.getElementById("btn-run-ats");
  const panel = document.getElementById("ats-panel");

  if (btnOpen) {
    btnOpen.addEventListener("click", () => {
      if (panel) panel.classList.toggle("open");
    });
  }

  if (btnClose) {
    btnClose.addEventListener("click", () => {
      if (panel) panel.classList.remove("open");
    });
  }

  if (btnRun) {
    btnRun.addEventListener("click", runATSAnalysis);
  }
}

function runATSAnalysis() {
  const jdInput = document.getElementById("ats-jd-input");
  const resultsEl = document.getElementById("ats-results");
  if (!jdInput || !jdInput.value.trim()) {
    showToast("Please paste a job description first!");
    return;
  }

  // Extract resume text
  const sheet = document.getElementById("resume-sheet");
  const resumeText = sheet ? sheet.innerText.toLowerCase() : "";

  // Tokenize JD into meaningful keywords (filter stop words + short words)
  const stopWords = new Set([
    "the","and","for","are","with","this","that","from","have","will","you","your",
    "our","their","they","them","also","can","all","but","not","its","been","into",
    "was","were","has","had","who","what","when","where","how","which","other","more",
    "some","such","than","then","there","these","those","about","would","could","should",
    "both","each","even","over","well","just","like","also","work","a","an","in","on",
    "at","to","of","is","it","be","as","we","he","she","by","do","or","if","up","so",
    "out","any","use","per","new","may","one","two","three","must","within","across",
    "strong","excellent","experience","skills","ability","knowledge","understanding",
    "proficiency","including","required","preferred","role","position","team","company",
    "join","looking","seeking","ideal","candidate","minimum","years","degree"
  ]);

  const jdText = jdInput.value.toLowerCase();

  // Extract n-grams (1 and 2 word phrases) from JD
  const words = jdText.replace(/[^a-z0-9\s\+\#\.]/g, " ").split(/\s+/).filter(w => w.length > 2 && !stopWords.has(w));
  
  // Build keyword set from JD (unique meaningful terms)
  const jdKeywords = new Set();
  words.forEach(w => {
    if (w.length >= 3 && !stopWords.has(w)) {
      jdKeywords.add(w);
    }
  });

  // Also extract common tech bigrams from JD
  const bigrams = [];
  const rawWords = jdText.replace(/[^a-z0-9\s\+\#\.\/]/g, " ").split(/\s+/);
  for (let i = 0; i < rawWords.length - 1; i++) {
    const a = rawWords[i], b = rawWords[i + 1];
    if (a.length > 2 && b.length > 2 && !stopWords.has(a) && !stopWords.has(b)) {
      bigrams.push(a + " " + b);
    }
  }
  bigrams.forEach(bg => jdKeywords.add(bg));

  // Limit to top 40 most relevant
  const keywordArr = Array.from(jdKeywords).slice(0, 40);

  const matched = [];
  const missing = [];

  keywordArr.forEach(kw => {
    if (resumeText.includes(kw)) {
      matched.push(kw);
    } else {
      missing.push(kw);
    }
  });

  const total = keywordArr.length;
  const score = total > 0 ? Math.round((matched.length / total) * 100) : 0;

  // Render results
  document.getElementById("ats-score-pct").textContent = score + "%";
  document.getElementById("ats-matched-count").textContent = matched.length;
  document.getElementById("ats-missing-count").textContent = missing.length;
  document.getElementById("ats-total-count").textContent = total;

  // Animate gauge
  const gaugeFill = document.getElementById("ats-gauge-fill");
  const circumference = 251.2;
  const offset = circumference - (score / 100) * circumference;
  if (gaugeFill) {
    // Color by score
    const color = score >= 75 ? "#10b981" : score >= 50 ? "#f59e0b" : "#ef4444";
    gaugeFill.style.stroke = color;
    gaugeFill.style.strokeDashoffset = circumference; // reset
    setTimeout(() => {
      gaugeFill.style.strokeDashoffset = offset;
    }, 50);
  }

  // Render chips
  const matchedEl = document.getElementById("ats-matched-chips");
  const missingEl = document.getElementById("ats-missing-chips");
  if (matchedEl) {
    matchedEl.innerHTML = matched.map(k => `<span class="ats-chip matched">${k}</span>`).join("") || "<span style='color:var(--text-muted);font-size:11px;'>None found</span>";
  }
  if (missingEl) {
    missingEl.innerHTML = missing.slice(0, 20).map(k => `<span class="ats-chip missing">${k}</span>`).join("") || "<span style='color:var(--text-muted);font-size:11px;'>Great — all matched!</span>";
  }

  // Run Structural Audit
  const auditListEl = document.getElementById("ats-audit-list");
  if (auditListEl) {
    const audits = [];

    // Check contact details
    const hasPhone = !!currentData.phone?.trim();
    const hasEmail = !!currentData.email?.trim();
    const hasLocation = !!currentData.location?.trim();
    const hasLinkedIn = !!currentData.linkedin?.trim();

    if (hasPhone && hasEmail && hasLocation) {
      audits.push({ class: "pass", icon: "fa-circle-check", text: "Basic contact details (Email, Phone, Location) are complete." });
    } else {
      const missingFields = [];
      if (!hasPhone) missingFields.push("Phone");
      if (!hasEmail) missingFields.push("Email");
      if (!hasLocation) missingFields.push("Location");
      audits.push({ class: "error", icon: "fa-circle-exclamation", text: `Missing critical contact fields: ${missingFields.join(", ")}.` });
    }

    if (hasLinkedIn) {
      audits.push({ class: "pass", icon: "fa-circle-check", text: "Professional profile link (LinkedIn) is linked." });
    } else {
      audits.push({ class: "warning", icon: "fa-triangle-exclamation", text: "LinkedIn profile is missing. Many ATS bots prioritize candidates with links." });
    }

    // Check resume word count
    const wordCount = resumeText.split(/\s+/).filter(Boolean).length;
    if (wordCount >= 250 && wordCount <= 750) {
      audits.push({ class: "pass", icon: "fa-circle-check", text: `Optimal word count: ${wordCount} words (ideal is 300 - 700).` });
    } else if (wordCount < 250) {
      audits.push({ class: "error", icon: "fa-circle-exclamation", text: `Your resume is too brief (${wordCount} words). Add details to your work experience.` });
    } else {
      audits.push({ class: "warning", icon: "fa-triangle-exclamation", text: `Your resume is long (${wordCount} words). Try to keep it concise and under 750 words.` });
    }

    // Check work experience bullets
    let bulletIssues = 0;
    let jobCount = currentData.experience?.length || 0;
    if (jobCount > 0) {
      currentData.experience.forEach((job, i) => {
        const bullets = job.bullets?.length || 0;
        if (bullets < 2 || bullets > 6) {
          bulletIssues++;
        }
      });
      if (bulletIssues === 0) {
        audits.push({ class: "pass", icon: "fa-circle-check", text: "All job positions have a balanced number of bullet points (2 to 6)." });
      } else {
        audits.push({ class: "warning", icon: "fa-triangle-exclamation", text: `${bulletIssues} position(s) have too few (< 2) or too many (> 6) bullet points.` });
      }
    } else {
      audits.push({ class: "error", icon: "fa-circle-exclamation", text: "No work experience found. An ATS-compliant resume requires at least one work entry." });
    }

    // Check page limits
    const sheetElement = document.getElementById("resume-sheet");
    const currentHeight = sheetElement ? sheetElement.offsetHeight : 0;
    const a4HeightLimit = 1122;
    if (currentHeight <= a4HeightLimit + 5) {
      audits.push({ class: "pass", icon: "fa-circle-check", text: "Perfect length! Resume content fits nicely on a single A4 page." });
    } else {
      audits.push({ class: "error", icon: "fa-circle-exclamation", text: "Content overflow! Resume exceeds one A4 page. Shorten lines or decrease line spacing to fit." });
    }

    // Render audits
    auditListEl.innerHTML = audits.map(a => `
      <div class="ats-audit-item ${a.class}">
        <i class="fa-solid ${a.icon}"></i>
        <span>${a.text}</span>
      </div>
    `).join("");
  }

  if (resultsEl) resultsEl.style.display = "flex";
  showToast(`ATS Score: ${score}% — ${matched.length} of ${total} keywords matched`);
}

// --- CUSTOM SECTION BUILDER ---
let selectedCustomSectionType = null;

function setupCustomSectionModal() {
  const btnAdd = document.getElementById("btn-add-custom-section");
  const modal = document.getElementById("custom-section-modal");
  const btnCancel = document.getElementById("btn-cancel-custom-section");
  const btnConfirm = document.getElementById("btn-confirm-custom-section");
  const typeBtns = document.querySelectorAll(".custom-section-type-btn");
  const titleWrap = document.getElementById("custom-section-title-wrap");

  if (btnAdd) {
    btnAdd.addEventListener("click", () => {
      selectedCustomSectionType = null;
      typeBtns.forEach(b => b.classList.remove("selected"));
      if (titleWrap) titleWrap.style.display = "none";
      const titleInput = document.getElementById("custom-section-title-input");
      if (titleInput) titleInput.value = "";
      if (modal) modal.classList.add("show");
    });
  }

  typeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      typeBtns.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedCustomSectionType = btn.dataset.type;
      if (titleWrap) {
        titleWrap.style.display = btn.dataset.type === "custom" ? "flex" : "none";
      }
    });
  });

  if (btnCancel) {
    btnCancel.addEventListener("click", () => {
      if (modal) modal.classList.remove("show");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("show");
    });
  }

  if (btnConfirm) {
    btnConfirm.addEventListener("click", () => {
      if (!selectedCustomSectionType) {
        showToast("Please choose a section type first!");
        return;
      }
      let title = selectedCustomSectionType.charAt(0).toUpperCase() + selectedCustomSectionType.slice(1);
      if (selectedCustomSectionType === "custom") {
        const input = document.getElementById("custom-section-title-input");
        title = input ? input.value.trim() : "Custom";
        if (!title) { showToast("Please enter a title!"); return; }
      }
      addCustomSection(selectedCustomSectionType, title);
      if (modal) modal.classList.remove("show");
    });
  }
}

function addCustomSection(type, title) {
  if (!currentData.customSections) currentData.customSections = [];
  currentData.customSections.push({
    type: type,
    title: title,
    items: [{ text: `${title} item`, subtitle: "", detail: "" }]
  });
  renderCustomSectionsList();
  updatePreview();
  showToast(`Added "${title}" section!`);
}

function renderCustomSectionsList() {
  const container = document.getElementById("custom-sections-accordion-list");
  if (!container) return;
  container.innerHTML = "";

  const sections = currentData.customSections || [];

  sections.forEach((sec, secIdx) => {
    const details = document.createElement("details");
    details.className = "accordion-item";
    details.setAttribute("name", "editor-accordion");

    const typeIcons = {
      certifications: "fa-certificate", awards: "fa-trophy", volunteer: "fa-hand-holding-heart",
      publications: "fa-book-open", languages: "fa-language", interests: "fa-star", custom: "fa-pen"
    };
    const icon = typeIcons[sec.type] || "fa-plus";

    details.innerHTML = `
      <summary class="accordion-header">
        <span><i class="fa-solid ${icon} icon-prefix"></i>${sec.title}</span>
        <div style="display:flex;align-items:center;gap:8px;">
          <button class="btn-icon btn-delete-custom-sec" data-sec="${secIdx}" title="Remove Section" style="color:#ef4444;">
            <i class="fa-solid fa-trash"></i>
          </button>
          <i class="fa-solid fa-chevron-down chevron"></i>
        </div>
      </summary>
      <div class="accordion-content">
        <div class="section-actions">
          <button class="btn-secondary btn-add-custom-item" data-sec="${secIdx}" style="font-size:12px;">+ Add Item</button>
        </div>
        <div class="custom-items-list" data-sec="${secIdx}">
          ${sec.items.map((item, itemIdx) => `
            <div class="item-card" data-item="${itemIdx}">
              <div class="item-card-header">
                <h4 style="font-size:11px;color:var(--text-muted);">Item ${itemIdx + 1}</h4>
                <button class="btn-icon btn-delete-custom-item" data-sec="${secIdx}" data-item="${itemIdx}" style="color:#ef4444;" title="Delete">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
              <div class="form-group">
                <label>Title / Name</label>
                <input class="custom-section-entry-input" data-sec="${secIdx}" data-item="${itemIdx}" data-field="text" value="${item.text || ""}" placeholder="e.g. AWS Certified Developer">
              </div>
              ${sec.type !== "interests" && sec.type !== "languages" ? `
              <div class="form-group" style="margin-top:6px;">
                <label>Subtitle / Date (optional)</label>
                <input class="custom-section-entry-input" data-sec="${secIdx}" data-item="${itemIdx}" data-field="subtitle" value="${item.subtitle || ""}" placeholder="e.g. 2024 | Issuer name">
              </div>
              <div class="form-group" style="margin-top:6px;">
                <label>Detail / Description (optional)</label>
                <input class="custom-section-entry-input" data-sec="${secIdx}" data-item="${itemIdx}" data-field="detail" value="${item.detail || ""}" placeholder="e.g. Short description or link">
              </div>
              ` : ""}
            </div>
          `).join("")}
        </div>
      </div>
    `;

    container.appendChild(details);
  });

  // Bind events
  container.querySelectorAll(".btn-delete-custom-sec").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.sec);
      currentData.customSections.splice(idx, 1);
      renderCustomSectionsList();
      updatePreview();
      showToast("Section removed.");
    });
  });

  container.querySelectorAll(".btn-add-custom-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const secIdx = parseInt(btn.dataset.sec);
      currentData.customSections[secIdx].items.push({ text: "New Item", subtitle: "", detail: "" });
      renderCustomSectionsList();
      updatePreview();
    });
  });

  container.querySelectorAll(".btn-delete-custom-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const secIdx = parseInt(btn.dataset.sec);
      const itemIdx = parseInt(btn.dataset.item);
      currentData.customSections[secIdx].items.splice(itemIdx, 1);
      renderCustomSectionsList();
      updatePreview();
    });
  });

  container.querySelectorAll(".custom-section-entry-input").forEach(input => {
    input.addEventListener("input", () => {
      const secIdx = parseInt(input.dataset.sec);
      const itemIdx = parseInt(input.dataset.item);
      const field = input.dataset.field;
      currentData.customSections[secIdx].items[itemIdx][field] = input.value;
      updatePreview();
    });
  });
}

// Generate and Download PDF using html2pdf.js
function downloadPDF() {
  const sheet = document.getElementById("resume-sheet");
  if (!sheet) return;

  showToast("Generating PDF, please wait...");

  // Create a temporary container for rendering the cloned sheet off-screen
  const tempWrapper = document.createElement("div");
  tempWrapper.style.position = "fixed";
  tempWrapper.style.left = "0";
  tempWrapper.style.top = "0";
  tempWrapper.style.zIndex = "-9999";
  tempWrapper.style.width = "794px"; // A4 Width in pixels
  tempWrapper.style.height = "auto";
  tempWrapper.style.overflow = "hidden";
  tempWrapper.style.background = "#ffffff";

  // Clone the sheet
  const clone = sheet.cloneNode(true);
  clone.classList.add("no-transition");
  
  // Set explicit clean styles on the clone to guarantee correct sizing and visibility
  clone.style.transform = "none";
  clone.style.position = "relative";
  clone.style.left = "0";
  clone.style.top = "0";
  clone.style.width = "210mm";
  clone.style.minHeight = "297mm";
  clone.style.boxShadow = "none";
  clone.style.margin = "0";
  clone.style.opacity = "1";
  clone.style.display = "block";

  tempWrapper.appendChild(clone);
  document.body.appendChild(tempWrapper);

  // Clean filename based on candidate name
  const candidateName = document.getElementById("res-name")?.innerText || "Resume";
  const filename = `${candidateName.trim().replace(/\s+/g, "_")}_Resume.pdf`;

  const opt = {
    margin:       0,
    filename:     filename,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { 
      scale: 2, 
      useCORS: true, 
      logging: false,
      letterRendering: true
    },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Wait 150ms to ensure the browser has parsed and rendered the clone off-screen
  setTimeout(() => {
    html2pdf().set(opt).from(clone).save().then(() => {
      document.body.removeChild(tempWrapper);
      showToast("PDF downloaded successfully!");
    }).catch(err => {
      console.error("PDF generation failed:", err);
      if (tempWrapper.parentNode) {
        document.body.removeChild(tempWrapper);
      }
      showToast("Failed to download PDF. Try printing instead.", "error");
    });
  }, 150);
}

// Client-Side Google Gemini API Chatbot
async function generateGeminiResponse(userPrompt, typingIndicator) {
  const apiKey = localStorage.getItem("gemini_api_key");
  if (!apiKey) return;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const systemPrompt = `You are an AI Resume Assistant. Your job is to help candidates edit, structure, and improve their resume.
Here is the current state of their resume in JSON format:
${JSON.stringify(currentData)}

User's instruction: "${userPrompt}"

Please perform the changes requested. Make edits, rewrite bullets, or add sections as instructed.
Format your response as follows:
1. First, write a brief, friendly summary of what you changed (in markdown).
2. Then, output the full updated resume JSON enclosed inside <resume_json> and </resume_json> tags.

Important rules:
- Keep the exact same keys as the provided JSON format.
- Ensure the updated resume data is correct, clean JSON.
- Never output raw code fences outside the <resume_json> tag.
`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: systemPrompt }] }]
      })
    });

    if (!response.ok) {
      throw new Error(`API returned status ${response.status}`);
    }

    const resJson = await response.json();
    const botText = resJson.candidates?.[0]?.content?.parts?.[0]?.text || "";

    typingIndicator.remove();

    // Parse the updated JSON
    const jsonMatch = botText.match(/<resume_json>([\s\S]*?)<\/resume_json>/);
    if (jsonMatch) {
      try {
        const cleanedJsonText = jsonMatch[1].trim();
        const updatedData = JSON.parse(cleanedJsonText);
        
        currentData = updatedData;
        saveCurrentProgress();
        loadDataIntoEditor(currentData);
        updatePreview();

        const displayMsg = botText.replace(/<resume_json>[\s\S]*?<\/resume_json>/g, "").trim();
        addChatMessage(displayMsg || "I have successfully updated your resume!", "bot");
      } catch (parseErr) {
        console.error("JSON parsing failed:", parseErr, jsonMatch[1]);
        addChatMessage("I updated the resume but outputted an invalid format. Please try again with a more specific instruction.", "bot");
      }
    } else {
      addChatMessage(botText, "bot");
    }
  } catch (err) {
    console.error("Gemini API error:", err);
    typingIndicator.remove();
    addChatMessage(`Failed to communicate with Gemini API. Error: ${err.message}. Please check your API key settings.`, "bot");
  }
}
