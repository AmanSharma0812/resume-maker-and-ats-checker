// Resume builder application state and reactivity

const PRESETS = {
  reactDev: {
    templateStyle: "modern",
    accentColor: "#0ea5e9",
    fontStyle: "inter",
    lineSpacing: 1.3,
    atsMode: false,
    name: "Jane Doe",
    title: "Senior React Developer",
    phone: "555-0199",
    email: "jane.doe@example.com",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/janedoe",
    github: "github.com/janedoe",
    portfolio: "janedoe.dev",
    experience: [
      {
        company: "CloudScale Systems",
        role: "Senior Frontend Engineer",
        dates: "Oct 2024 – Present",
        location: "San Francisco, CA",
        bullets: [
          "Developed responsive user interfaces using **React, TypeScript, and CSS modules**, boosting application performance by 25%.",
          "Collaborated with UX design teams to create an accessible component library based on W3C standards.",
          "Optimized build systems and webpack configurations to reduce initial bundle loading times by 40%."
        ]
      },
      {
        company: "DevSolutions Agency",
        role: "Frontend Developer",
        dates: "Mar 2022 – Sep 2024",
        location: "Remote",
        bullets: [
          "Implemented state management features using **Redux Toolkit** and React Context API across multiple customer dashboards.",
          "Integrated REST APIs and WebSockets to enable real-time collaborative editing features.",
          "Wrote automated unit and integration tests using Jest and React Testing Library, raising test coverage to 90%."
        ]
      }
    ],
    projects: [
      {
        name: "Task Board App",
        link: "github.com/janedoe/taskboard",
        description: "Created a full-stack Kanban board with drag-and-drop support, real-time sync, and user access roles using React."
      },
      {
        name: "Telemetry Dashboard",
        link: "github.com/janedoe/telemetry",
        description: "Built a customizable metrics visualizer with Chart.js and raw SVG rendering to graph server analytics feeds."
      }
    ],
    education: [
      {
        institution: "Pacific Institute of Technology",
        degree: "B.S. in Computer Science",
        dates: "Sep 2018 – May 2022",
        location: "Seattle, WA",
        bullets: [
          "Specialized coursework in Software Engineering, Database Systems, and Distributed Computing.",
          "Developed a peer-to-peer file sharing application as part of a senior capstone group design project."
        ]
      }
    ],
    skills: {
      languages: "JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL (PostgreSQL)",
      tools: "React, Redux, Node.js, Git, Vite, Webpack, Figma, Jest"
    }
  },
  graphicDesigner: {
    templateStyle: "creative",
    accentColor: "#ec4899",
    fontStyle: "nunito",
    lineSpacing: 1.4,
    atsMode: false,
    name: "Alex Morgan",
    title: "Lead UI/UX Designer",
    phone: "555-0142",
    email: "alex.design@example.com",
    location: "Brooklyn, NY",
    linkedin: "linkedin.com/in/alexmorgan",
    github: "behance.net/alexmorgan",
    portfolio: "alexdesign.studio",
    experience: [
      {
        company: "Vivid Creative Agency",
        role: "Senior Graphic & UI Designer",
        dates: "Jan 2023 – Present",
        location: "New York, NY",
        bullets: [
          "Designed branding packages, logo concepts, and UI mockups for 20+ national consumer product campaigns.",
          "Built high-fidelity interactive wireframes and prototypes in **Figma** to align project scope with developer limitations.",
          "Created marketing illustrations and layouts for print and digital publishing platforms."
        ]
      },
      {
        company: "PixelPerfect Labs",
        role: "Web Layout Designer",
        dates: "Jun 2020 – Dec 2022",
        location: "Remote",
        bullets: [
          "Developed web UI styles, layout assets, and SVG animation libraries for client product landing pages.",
          "Spearheaded user research studies to uncover user onboarding friction points, improving conversion rates by 18%."
        ]
      }
    ],
    projects: [
      {
        name: "Vector Icon Set",
        link: "gumroad.com/l/vectorset",
        description: "Designed and released 150+ custom flat-vector system icons used by developers globally for mobile app themes."
      },
      {
        name: "FinTech Brand Identity",
        link: "behance.net/alexmorgan/fintech",
        description: "Created comprehensive brand guidelines, color palettes, and typographic patterns for a emerging mobile savings startup."
      }
    ],
    education: [
      {
        institution: "Brooklyn School of Design",
        degree: "BFA in Communication Design",
        dates: "Sep 2016 – May 2020",
        location: "Brooklyn, NY",
        bullets: [
          "Concentration in Typography, Interaction Design, and Visual Branding methodologies.",
          "Received the Annual Design Excellence award during the senior graduate presentation showcase."
        ]
      }
    ],
    skills: {
      languages: "HTML5, CSS3, SVG Styling, Markdown",
      tools: "Figma, Adobe Creative Suite (Illustrator, Photoshop, InDesign), Sketch, Procreate, Git"
    }
  },
  combined: {
    templateStyle: "minimal",
    accentColor: "#4f46e5",
    fontStyle: "roboto",
    lineSpacing: 1.2,
    atsMode: false,
    name: "Taylor Reed",
    title: "Full Stack Engineer & Designer",
    phone: "555-0188",
    email: "taylor.reed@example.com",
    location: "Austin, TX",
    linkedin: "linkedin.com/in/taylorreed",
    github: "github.com/taylorreed",
    portfolio: "taylorreed.co",
    experience: [
      {
        company: "NextGen Software Corp",
        role: "Full Stack Engineer",
        dates: "Feb 2024 – Present",
        location: "Austin, TX",
        bullets: [
          "Architected backend web channels and REST APIs using **Node.js, Express, and PostgreSQL** to serve complex telemetry statistics.",
          "Designed responsive administrative dashboard screens in React and custom CSS custom properties.",
          "Collaborated closely with marketing teams to translate prototype design ideas into production-ready frontend components."
        ]
      },
      {
        company: "DigitalCraft Studio",
        role: "Junior Web Developer & Designer",
        dates: "May 2021 – Jan 2024",
        location: "Remote",
        bullets: [
          "Implemented frontend visual assets, layout grids, and navigation animations using standard web protocols.",
          "Assisted in maintaining relational database setups, query scripting, and API routing setups.",
          "Wrote automated unit test scripts to verify backend controller routes and user session workflows."
        ]
      }
    ],
    projects: [
      {
        name: "Music Hub UI",
        link: "github.com/taylorreed/musichub",
        description: "Created an interactive mockup of a audio playback platform using modern CSS grids and native audio controls."
      },
      {
        name: "Asset Library Pack",
        link: "gumroad.com/l/assets",
        description: "Created and launched a collection of 50+ SVG design tokens for developers looking to build rapid UI designs."
      }
    ],
    education: [
      {
        institution: "University of Texas",
        degree: "B.S. in Computer Science",
        dates: "Sep 2017 – May 2021",
        location: "Austin, TX",
        bullets: [
          "Completed coursework in Data Structures, Web Applications, Database Design, and Human-Computer Interaction."
        ]
      }
    ],
    skills: {
      languages: "JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL (PostgreSQL, MySQL)",
      tools: "React, Node.js, Express, Figma, Adobe Photoshop, Git, GitHub, VS Code"
    }
  },
  salesMarketing: {
    templateStyle: "executive",
    accentColor: "#f97316",
    fontStyle: "inter",
    lineSpacing: 1.3,
    atsMode: false,
    name: "Jordan Lee",
    title: "Digital Marketing Specialist",
    phone: "555-0177",
    email: "jordan.lee@example.com",
    location: "Chicago, IL",
    linkedin: "linkedin.com/in/jordanlee",
    github: "",
    portfolio: "jordanlee.marketing",
    experience: [
      {
        company: "Horizon Growth Group",
        role: "Marketing Campaign Coordinator",
        dates: "Mar 2023 – Present",
        location: "Chicago, IL",
        bullets: [
          "Managed advertising spend across search and social channels, growing qualified sales leads by 30%.",
          "Monitored customer lifecycle data via CRM channels to decrease customer acquisition costs (CAC) by 15%.",
          "Authored search engine optimized articles and copywriting layouts for digital newsletters."
        ]
      },
      {
        company: "Apex Sales Solutions",
        role: "Sales Development Associate",
        dates: "Sep 2021 – Feb 2023",
        location: "Remote",
        bullets: [
          "Exceeded inbound target quotas by 115% through optimized qualifying criteria and follow-up templates.",
          "Conducted discover calls and customized software demonstrations for prospective enterprise business accounts."
        ]
      }
    ],
    projects: [
      {
        name: "E-Commerce Strategy Plan",
        link: "case-studies/strategy",
        description: "Coordinated digital rollout plan for an online retail client, driving organic traffic growth of 45% within three months."
      },
      {
        name: "Local Business SEO Plan",
        link: "case-studies/local-seo",
        description: "Optimized geographic listings and citation reviews for regional stores to drive localized search click-throughs."
      }
    ],
    education: [
      {
        institution: "Midwest State University",
        degree: "B.S. in Business Administration (Marketing)",
        dates: "Sep 2017 – Jun 2021",
        location: "Chicago, IL",
        bullets: [
          "Graduated with honors, focus in consumer behavior patterns and market analytics models."
        ]
      }
    ],
    skills: {
      languages: "Campaign Analytics, SEO Content Strategy, B2B Prospecting, Email Copywriting",
      tools: "Google Analytics, HubSpot CRM, Mailchimp, Meta Ads Manager, Google Ads, Salesforce"
    }
  },
  financeAccounting: {
    templateStyle: "classic",
    accentColor: "#1e3a8a",
    fontStyle: "merriweather",
    lineSpacing: 1.3,
    atsMode: false,
    name: "Robert Chen",
    title: "Senior Financial Analyst",
    phone: "555-0155",
    email: "robert.chen@example.com",
    location: "Boston, MA",
    linkedin: "linkedin.com/in/robertchen",
    github: "",
    portfolio: "robertchen.finance",
    experience: [
      {
        company: "Summit Capital Partners",
        role: "Lead Portfolio Analyst",
        dates: "Nov 2023 – Present",
        location: "Boston, MA",
        bullets: [
          "Constructed valuation models, budget projection pipelines, and quarterly performance reviews for executive leadership review.",
          "Evaluated operational budget variances, recommending cost reduction workflows that trimmed operational waste by 8%.",
          "Automated ledger consolidation processes, reducing manual reconciliation reporting by 3 business days."
        ]
      },
      {
        company: "Beacon Corporate Advisors",
        role: "Financial Consultant",
        dates: "Jul 2020 – Oct 2023",
        location: "Boston, MA",
        bullets: [
          "Conducted GAAP-compliant reviews, ledger reconciliations, and tax calculations for mid-size commercial client base.",
          "Assisted corporate compliance audits by preparing detail worksheets and transaction trails."
        ]
      }
    ],
    projects: [
      {
        name: "ERP Data Integration",
        link: "projects/erp-integration",
        description: "Assisted in the transfer of corporate accounts histories into dynamic data structures, ensuring absolute audit compliance."
      },
      {
        name: "Operational Spending Review",
        link: "projects/spending-review",
        description: "Analyzed licensing metrics, identifying duplicate cloud asset subscriptions to yield $30,000 in immediate savings."
      }
    ],
    education: [
      {
        institution: "Boston School of Finance",
        degree: "M.S. in Accounting & Financial Management",
        dates: "Sep 2018 – May 2020",
        location: "Boston, MA",
        bullets: [
          "Concentration in Financial Modeling, GAAP Standards, Tax Regulations, and Auditing Methods."
        ]
      }
    ],
    skills: {
      languages: "Financial Valuation, GAAP Accounting Standards, Tax Filing Preparation, Cost Auditing",
      tools: "Excel (VBA scripting, Pivot Tables), QuickBooks, SAP ERP, Xero, Tableau, Salesforce"
    }
  },
  healthcareNurse: {
    templateStyle: "minimal",
    accentColor: "#059669",
    fontStyle: "inter",
    lineSpacing: 1.3,
    atsMode: false,
    name: "Sarah Miller",
    title: "Registered Nurse (RN)",
    phone: "555-0166",
    email: "sarah.miller@example.com",
    location: "Denver, CO",
    linkedin: "linkedin.com/in/sarahmiller",
    github: "",
    portfolio: "",
    experience: [
      {
        company: "St. Jude Hospital",
        role: "Staff Nurse - Intensive Care Unit",
        dates: "Dec 2022 – Present",
        location: "Denver, CO",
        bullets: [
          "Provided high-acuity nursing care to ICU patients, administering complex medication setups and monitoring critical telemetry feeds.",
          "Collaborated within multi-discipline teams to coordinate critical care adjustments and update family members on progress.",
          "Maintained absolute accuracy across all EHR charts and care summaries, complying with clinical standards."
        ]
      },
      {
        company: "Rocky Mountain Medical Center",
        role: "Clinical Nurse - Emergency Dept",
        dates: "Sep 2019 – Nov 2022",
        location: "Denver, CO",
        bullets: [
          "Triaged incoming trauma cases, executing rapid initial diagnostic reviews and initiating emergency stabilization steps.",
          "Updated charts, logs, and patient records in compliance with standard clinical HIPAA frameworks."
        ]
      }
    ],
    projects: [
      {
        name: "Discharge Workflow Project",
        link: "",
        description: "Assisted taskforce to optimize telemetry discharge steps, decreasing patient transfer transition delays by 25%."
      },
      {
        name: "Regional Health Outreach",
        link: "",
        description: "Organized a monthly local wellness initiative, offering blood pressure checks and healthy living tips to 200+ local families."
      }
    ],
    education: [
      {
        institution: "Denver College of Nursing",
        degree: "Bachelor of Science in Nursing (BSN)",
        dates: "Sep 2015 – May 2019",
        location: "Denver, CO",
        bullets: [
          "Licensed Registered Nurse (RN) with clinical experience in Trauma, ICU, and Pediatric Departments."
        ]
      }
    ],
    skills: {
      languages: "ICU Patient Care, Trauma Triage, EHR Charting, IV Therapy, Patient Advocacy",
      tools: "Epic Systems EHR, Telemetry Monitors, Ventilator Systems, ACLS/BLS Certifications"
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
  setupChatbot();
  setupTemplatePicker();
  setupCustomSectionModal();
  setupATSPanel();
  setupDialogBackdropClicks();
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
    { id: "combined", name: "Combined" },
    { id: "salesMarketing", name: "Sales & Marketing" },
    { id: "financeAccounting", name: "Finance & Accounts" },
    { id: "healthcareNurse", name: "Healthcare (Nurse)" }
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
    const names = { 
      reactDev: "React Dev", 
      graphicDesigner: "Designer", 
      combined: "Combined",
      salesMarketing: "Sales/Marketing",
      financeAccounting: "Finance/Accountant",
      healthcareNurse: "Healthcare RN"
    };
    showToast(`Loaded ${names[id] || id} preset!`);
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
    modal.showModal();
    input.focus();
  }
}

function closeAddPresetModal() {
  const modal = document.getElementById("preset-modal");
  if (modal) {
    modal.close();
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
  if (!data) return;
  if (!data.experience) data.experience = [];
  if (!data.projects) data.projects = [];
  if (!data.education) data.education = [];
  if (!data.customSections) data.customSections = [];

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

  if (!currentData.experience) {
    currentData.experience = [];
  }

  currentData.experience.forEach((job, index) => {
    if (!job.bullets) {
      job.bullets = [];
    }
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
    btn.addEventListener("click", async () => {
      const idx = parseInt(btn.dataset.index);
      const job = currentData.experience[idx];

      const originalText = btn.innerHTML;
      btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Generating...`;
      btn.disabled = true;

      const newBullets = await generateAIBulletsWithLLM(job.role, job.company);
      currentData.experience[idx].bullets = newBullets;

      btn.innerHTML = originalText;
      btn.disabled = false;

      renderExperienceList();
      updatePreview();

      const hasKey = !!localStorage.getItem("gemini_api_key");
      if (hasKey) {
        showToast(`Gemini generated bullets for ${job.company || "Job"}!`);
      } else {
        showToast(`Generated template bullets (set API Key for Gemini LLM!)`);
      }
    });
  });

}

// Render projects list
function renderProjectsList() {
  const container = document.getElementById("projects-list-container");
  container.innerHTML = "";

  if (!currentData.projects) {
    currentData.projects = [];
  }

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

}

// Render education list
function renderEducationList() {
  const container = document.getElementById("education-list-container");
  container.innerHTML = "";

  if (!currentData.education) {
    currentData.education = [];
  }

  currentData.education.forEach((edu, index) => {
    if (!edu.bullets) {
      edu.bullets = [];
    }
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
  if (!currentData) return;
  if (!currentData.experience) currentData.experience = [];
  if (!currentData.projects) currentData.projects = [];
  if (!currentData.education) currentData.education = [];
  if (!currentData.customSections) currentData.customSections = [];

  // Update header
  document.getElementById("res-name").textContent = currentData.name || "John Doe";
  
  // Format contact line
  let contactHtml = "";
  if (currentData.phone && currentData.phone.trim()) {
    contactHtml += `<span class="contact-item"><i class="fas fa-phone-alt"></i> ${currentData.phone.trim()}</span>`;
  }
  if (currentData.email && currentData.email.trim()) {
    if (contactHtml) contactHtml += ` <span class="divider">|</span> `;
    contactHtml += `<span class="contact-item"><i class="fas fa-envelope"></i> <a href="mailto:${currentData.email.trim()}">${currentData.email.trim()}</a></span>`;
  }
  if (currentData.location && currentData.location.trim()) {
    if (contactHtml) contactHtml += ` <span class="divider">|</span> `;
    contactHtml += `<span class="contact-item"><i class="fas fa-map-marker-alt"></i> ${currentData.location.trim()}</span>`;
  }
  if (currentData.linkedin && currentData.linkedin.trim()) {
    if (contactHtml) contactHtml += ` <span class="divider">|</span> `;
    const cleanUrl = currentData.linkedin.trim().replace(/^(https?:\/\/)?(www\.)?/, "");
    contactHtml += `<span class="contact-item"><i class="fab fa-linkedin"></i> <a href="https://${cleanUrl}" target="_blank">LinkedIn</a></span>`;
  }
  if (currentData.github && currentData.github.trim()) {
    if (contactHtml) contactHtml += ` <span class="divider">|</span> `;
    const cleanUrl = currentData.github.trim().replace(/^(https?:\/\/)?(www\.)?/, "");
    const label = cleanUrl.includes("behance") ? "Behance" : "GitHub";
    const icon = cleanUrl.includes("behance") ? "fab fa-behance" : "fab fa-github";
    contactHtml += `<span class="contact-item"><i class="${icon}"></i> <a href="https://${cleanUrl}" target="_blank">${label}</a></span>`;
  }
  if (currentData.portfolio && currentData.portfolio.trim()) {
    if (contactHtml) contactHtml += ` <span class="divider">|</span> `;
    const cleanUrl = currentData.portfolio.trim().replace(/^(https?:\/\/)?(www\.)?/, "");
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
  const hasLanguages = currentData.skills?.languages && currentData.skills.languages.trim();
  const hasTools = currentData.skills?.tools && currentData.skills.tools.trim();
  if (currentData.skills && (hasLanguages || hasTools)) {
    skillsSection.style.display = "block";
    let html = `<h3>SKILLS</h3><div class="section-divider"></div><div class="section-content"><div class="skills-grid">`;
    if (hasLanguages) {
      html += `<div class="skills-row"><strong>Languages :</strong> ${formatMarkdown(currentData.skills.languages.trim())}</div>`;
    }
    if (hasTools) {
      html += `<div class="skills-row"><strong>Tools :</strong> ${formatMarkdown(currentData.skills.tools.trim())}</div>`;
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
        const items = (sec.items || []).map(i => formatMarkdown(i.text?.trim())).filter(Boolean).join(" • ");
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
  if (text === null || text === undefined) return "";
  const str = String(text);
  // Escape HTML
  let escaped = str
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
      apiModal.showModal();
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
      apiModal.close();
    });

    btnClearApi.addEventListener("click", () => {
      localStorage.removeItem("gemini_api_key");
      keyInput.value = "";
      showToast("Gemini API key cleared.");
      apiModal.close();
    });

    keyInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        btnSaveApi.click();
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

// Static AI Bullet points generator fallback templates
function generateStaticAIBullets(role, company) {
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

  // Sales & Marketing template
  if (rLower.includes("sales") || rLower.includes("market") || rLower.includes("growth") || rLower.includes("seo") || rLower.includes("campaign") || rLower.includes("leads") || rLower.includes("account")) {
    return [
      `Developed and executed multi-channel digital campaigns at **${comp}**, driving qualified sales lead acquisitions by 25% year-over-year.`,
      `Managed and nurtured high-value B2B client relationships, securing renewals and exceeding quarterly target revenue goals.`,
      `Leveraged CRM platforms and data tracking systems to optimize campaign metrics and minimize customer acquisition cost (CAC) by 15%.`
    ];
  }

  // Finance & Accounting template
  if (rLower.includes("finance") || rLower.includes("accountant") || rLower.includes("accounting") || rLower.includes("tax") || rLower.includes("audit") || rLower.includes("ledger") || rLower.includes("budget")) {
    return [
      `Conducted detailed financial audit evaluations, ledger accounts reconciliations, and expense calculations at **${comp}** in compliance with GAAP rules.`,
      `Built advanced budgeting worksheets, forecasts, and cost-benefit reports, providing key insights to leadership to cut wastes by 10%.`,
      `Managed general books closures, statements filing, and balance sheets audits, ensuring complete accuracy across all statements.`
    ];
  }

  // Healthcare & Medicine template
  if (rLower.includes("nurse") || rLower.includes("medic") || rLower.includes("clinic") || rLower.includes("patient") || rLower.includes("health") || rLower.includes("care") || rLower.includes("hospital")) {
    return [
      `Delivered high-quality clinical care and patient triage services at **${comp}**, managing diagnostics and medication distribution protocols safely.`,
      `Collaborated with physicians and multidisciplinary healthcare teams to draft and execute personalized patient recovery strategies.`,
      `Maintained precise, HIPAA-compliant electronic health records (EHR) logs, ensuring top-tier safety indicators and data compliance.`
    ];
  }

  // Customer Service & Support template
  if (rLower.includes("support") || rLower.includes("customer") || rLower.includes("service") || rLower.includes("help") || rLower.includes("success") || rLower.includes("agent")) {
    return [
      `Resolved user inquiries and troubleshooting cases at **${comp}** via phone, email, and live messaging channels, maintaining a 95% CSAT score.`,
      `Created comprehensive help center documents, support templates, and FAQs to decrease average resolution times by 20%.`,
      `Liaised with engineering and sales departments to convey client feedback, supporting continuous feature updates.`
    ];
  }

  // Generic fallback template
  return [
    `Designed, developed, and launched software and layout enhancements at **${comp}** aligned with customer needs.`,
    `Refactored legacy software segments to simplify dependencies, eliminate redundancies, and boost modular support.`,
    `Collaborated within agile teams to brainstorm layouts, resolve bugs, and deliver scalable enterprise systems.`
  ];
}

// Asynchronous Gemini LLM-powered bullet generator with static template fallback
async function generateAIBulletsWithLLM(role, company) {
  const apiKey = localStorage.getItem("gemini_api_key");
  if (!apiKey) {
    return generateStaticAIBullets(role, company);
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const promptText = `Generate exactly 3 professional, high-impact resume achievement bullet points for a candidate working as a "${role || "Team Member"}" at "${company || "Company"}". Use strong active verbs and professional styling. Keep them short. Output each bullet point on a new line without any prefix like "-", "*", "•", or numbers. Output ONLY the bullet points, no introductory or closing text.`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: promptText }] }]
      })
    });

    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }

    const resJson = await response.json();
    const text = resJson.candidates?.[0]?.content?.parts?.[0]?.text || "";
    
    const bullets = text
      .split(/\n+/)
      .map(line => line.replace(/^[\s\-*•\d\.]+\s*/, "").trim())
      .filter(Boolean);

    if (bullets.length > 0) {
      return bullets.slice(0, 3);
    }
    return generateStaticAIBullets(role, company);
  } catch (err) {
    console.error("Failed to generate AI bullets using Gemini API:", err);
    return generateStaticAIBullets(role, company);
  }
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
      updatePreview();
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
      if (modal) modal.showModal();
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
      if (modal) modal.close();
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
      if (modal) modal.close();
    });
  }

  const titleInput = document.getElementById("custom-section-title-input");
  if (titleInput) {
    titleInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (btnConfirm) btnConfirm.click();
      }
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

// Generate and Download PDF using native print dialog
function downloadPDF() {
  showToast("Opening print dialog... Choose 'Save as PDF' to save your resume.");
  window.print();
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

// Global backdrop click handler for native HTML5 dialogs
function setupDialogBackdropClicks() {
  document.querySelectorAll("dialog").forEach(dialog => {
    dialog.addEventListener("click", (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        dialog.close();
      }
    });
  });
}
