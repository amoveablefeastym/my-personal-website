export const projects = [
  {
    slug: "experiential-computing",
    title: "WorldLearning: An LLM-Driven Interactive Map for Exploring Cultural Experiences",
    category: "DESIGN / RESEARCH",
    description:
      "An interactive world map that visualizes how different activities are salient in different countries, using LLM scoring and map exploration.",
    image: "/images/experiential-computing/image1.png",
    longDescription: `
WorldLearning is an interactive system that uses an LLM and a world map to help users explore how local people in different countries typically have fun in their free time.

<div class="my-8">
  <a href="/papers/world-learning-paper.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 text-[#d32f2f] bg-transparent border border-[#d32f2f] hover:bg-[#d32f2f] hover:text-white transition-all no-underline font-sans text-sm font-bold uppercase tracking-widest rounded-sm">
    Read the full paper
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
  </a>
</div>

<div class="my-12 grid grid-cols-1 gap-8">
  <figure>
    <img src="/images/experiential-computing/image1.png" alt="WorldLearning Interface" class="w-full h-auto rounded-sm border border-gray-200 shadow-sm" />
    <figcaption class="text-center text-sm text-gray-500 mt-3 font-serif italic">Figure 1: The main interface showing the interactive globe and activity selection.</figcaption>
  </figure>
  <figure>
    <img src="/images/experiential-computing/image2.png" alt="Analysis View" class="w-full h-auto rounded-sm border border-gray-200 shadow-sm" />
    <figcaption class="text-center text-sm text-gray-500 mt-3 font-serif italic">Figure 2: Detailed analysis view comparing cultural salience across different regions.</figcaption>
  </figure>
</div>

### Key Features

- **Interactive 3D Visualization:** A reactive globe built with Three.js allowing users to spin, zoom, and select countries to visualize data spatially.
- **LLM-Driven Scoring:** Uses GPT-4 to dynamically score the "typicality" of activities across different cultures, turning qualitative knowledge into quantitative data.
- **Comparative Analysis:** Side-by-side ranking lists and choropleth maps allow users to contrast how different regions prioritize specific experiences.
- **Dialectical Exploration:** Designed to prompt follow-up questions rather than just providing static answers, fostering curiosity-driven inquiry.

### Technical Stack

- **Frontend:** React (TypeScript), TanStack Start & Router, Tailwind CSS. D3.js and TopoJSON for map visualizations.
- **Backend:** Node.js via TanStack Start server functions. Zod for schema validation and custom middleware for auth.
- **AI / ML:** OpenAI API (davinci-002 for log-probs, GPT-4 for explanations). Custom tokenization and log-summation logic.
- **Tools:** Vite, pnpm, ESLint, Prettier.
    `,
    link: "#",
  },
  {
    slug: "neural-decoding-analysis",
    title: "Time-Resolved Decoding of Working Memory under TRPV1 Activation",
    category: "COMPUTATIONAL NEUROSCIENCE",
    description:
      "Investigating how TRPV1 activation affects neural encoding of working memory using time-resolved decoding on calcium imaging data.",
    image: "/images/neural-decoding/cover.png",
    longDescription: `
The primary objective is to determine how TRPV1 activation (Capsaicin) affects the neural encoding of working memory. Specifically, does disrupting dopamine signaling (via TRPV1) degrade the brain's ability to maintain task-relevant information during the delay period?

<div class="my-8">
  <a href="https://github.com/amoveablefeastym/Glaser_Lab_Neural_Decoding" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 text-[#d32f2f] bg-transparent border border-[#d32f2f] hover:bg-[#d32f2f] hover:text-white transition-all no-underline font-sans text-sm font-bold uppercase tracking-widest rounded-sm">
    View on GitHub
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
  </a>
</div>

### Experimental Design

- **Subjects:** D1 and D2-receptor expressing mice.
- **Task:** A spatial working memory task requiring mice to remember a "Force Direction" (instruction) over a delay period before making a "Choice."
- **Conditions:**
  - Baseline (Vehicle 1)
  - Manipulation (Capsaicin/TRPV1 activation)
  - Recovery (Vehicle 2)

<div class="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
  <figure>
    <img src="/images/neural-decoding/d1.png" alt="D1 Receptor Analysis" class="w-full h-auto rounded-sm border border-gray-200 shadow-sm" />
    <figcaption class="text-center text-sm text-gray-500 mt-3 font-serif italic">Figure 1: Analysis of D1-receptor expressing subpopulations.</figcaption>
  </figure>
  <figure>
    <img src="/images/neural-decoding/d2.png" alt="D2 Receptor Analysis" class="w-full h-auto rounded-sm border border-gray-200 shadow-sm" />
    <figcaption class="text-center text-sm text-gray-500 mt-3 font-serif italic">Figure 2: Analysis of D2-receptor expressing subpopulations.</figcaption>
  </figure>
</div>

### Core Methodology: Window-Based Decoding

Instead of analyzing the trial as a whole, the project uses a Time-Resolved Decoding approach to pinpoint exactly when information is lost or maintained.

1. **Temporal Slicing:** Trials are split into discrete time windows (e.g., W1–W4) spanning the Delay and Execution phases.
2. **Rigorous Evaluation:** Class balancing (undersampling) ensures a strict 0.5 chance level. Repeated Stratified K-Fold Cross-Validation ensures robustness.

### Key Analyses

The project investigates four distinct types of information processing:

- **Sensory Maintenance (Delay - Force Dir):** Can the mouse hold the instruction in memory during the delay?
- **Motor Planning (Delay - Choice Dir):** Is the mouse planning its movement during the delay?
- **Sensory History (Execution - Force Dir):** Is the instruction still represented during the action?
- **Motor Execution (Execution - Choice Dir):** How strong is the motor signal during the actual turn?

### Outcome Metrics

- **Decoding Accuracy Trajectories:** Plotting accuracy across windows (W1 → W4) to visualize the "memory curve."
- **Condition Effects:** Comparing the accuracy curves of Vehicle vs. Capsaicin to quantify the deficit caused by the manipulation.

### Technical Stack

- **Core:** Python, NumPy, Pandas
- **Data:** h5py (HDF5), scipy.io (MATLAB files)
- **ML:** scikit-learn (LogisticRegressionCV, PCA, Stratified K-Fold)
- **Viz:** Matplotlib (Accuracy curves, Weight angle heatmaps)
    `,
    link: "#",
  },
  {
    slug: "personal-website",
    title: "Personal Website (Wow, meta!)",
    category: "WEB DEVELOPMENT",
    description:
      "This site you are looking at right now. A space to experiment with design, writing, and small projects.",
    image: "/images/personal-website/cover.png",
    longDescription: `
A personal portfolio and digital garden built from scratch to learn modern web development practices. The design is inspired by print media (The New Yorker) and digital productivity tools (Notion), focusing on typography, minimalism, and content readability.

<div class="my-8">
  <a href="https://github.com/amoveablefeastym/my-personal-website" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 text-[#d32f2f] bg-transparent border border-[#d32f2f] hover:bg-[#d32f2f] hover:text-white transition-all no-underline font-sans text-sm font-bold uppercase tracking-widest rounded-sm">
    View Source
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
  </a>
</div>

### Evolution & Architecture

This project has served as a playground for learning React and frontend architecture. It has undergone several major refactors:

1.  **Material UI to Tailwind CSS:** Initially built with MUI, I migrated to Tailwind CSS to escape the constraints of a component library. This allowed for a truly custom design system with granular control over spacing, typography, and dark mode.
2.  **Markdown-Driven Content:** To separate content from code, I implemented a custom CMS architecture. Blog posts, project descriptions, and essays are stored as data objects with Markdown strings, rendered dynamically using \`react-markdown\` and \`rehype-raw\`.
3.  **Dark Mode:** A comprehensive dark mode implementation using Tailwind's \`dark:\` variant, ensuring accessibility and visual consistency across all components and diagrams.

### Key Features

- **Custom Design System:** Built on Tailwind CSS v4, featuring a carefully selected typography scale (Crimson Text, EB Garamond, Noto Sans) and a refined color palette.
- **Interactive Components:** Includes custom-built UI elements like an infinite scrolling Marquee, pulsing status badges, and responsive navigation.
- **Performance:** Optimized with Vite for lightning-fast HMR and builds.
- **Responsive:** Fully responsive grid layouts that adapt gracefully from mobile to desktop.

### Technical Stack

- **Framework:** React 18, Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v6
- **Content:** react-markdown, rehype-raw
- **Deployment:** Vercel
    `,
    link: "https://github.com/amoveablefeastym/my-personal-website",
  },
  {
    slug: "hackmit-2025",
    title: "AI-Powered Medical SOAP Note Generator",
    category: "AI / HEALTHCARE",
    description: "An intelligent system that automatically transforms telehealth transcripts into standardized SOAP notes, reducing documentation time from 15-20 minutes to under a minute.",
    image: "/images/ai-medical/main-page.png",
    longDescription: `
Healthcare providers face a critical challenge: **clinical documentation consumes 15-20 minutes per patient visit**, pulling physicians away from patient care. This burden contributes to burnout and reduces the time available for meaningful doctor-patient interactions.

We built an AI-powered solution that transforms this workflow.

<div class="my-8">
  <a href="https://github.com/amoveablefeastym/HackMIT-Team-2025" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 text-[#d32f2f] bg-transparent border border-[#d32f2f] hover:bg-[#d32f2f] hover:text-white transition-all no-underline font-sans text-sm font-bold uppercase tracking-widest rounded-sm">
    View on GitHub
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
  </a>
</div>

---

### The Solution: Intelligent SOAP Note Generation

Our application automatically converts raw telehealth transcripts into **standardized SOAP notes**—the industry-standard format for clinical documentation. The system uses OpenAI's GPT-4o to analyze patient-doctor conversations and intelligently extract key medical information.

<div class="my-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
  <h4 class="text-lg font-sans font-bold mb-4 text-center text-black dark:text-white">SOAP Note Structure</h4>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-4 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500">
      <div class="font-sans font-bold text-sm mb-2 text-black dark:text-white">SUBJECTIVE</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">Patient's reported symptoms, concerns, and medical history</div>
    </div>
    <div class="p-4 bg-white dark:bg-gray-800 rounded border-l-4 border-green-500">
      <div class="font-sans font-bold text-sm mb-2 text-black dark:text-white">OBJECTIVE</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">Clinical observations, vital signs, and examination findings</div>
    </div>
    <div class="p-4 bg-white dark:bg-gray-800 rounded border-l-4 border-orange-500">
      <div class="font-sans font-bold text-sm mb-2 text-black dark:text-white">ASSESSMENT</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">Medical diagnosis and clinical evaluation</div>
    </div>
    <div class="p-4 bg-white dark:bg-gray-800 rounded border-l-4 border-purple-500">
      <div class="font-sans font-bold text-sm mb-2 text-black dark:text-white">PLAN</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">Treatment recommendations and follow-up instructions</div>
    </div>
  </div>
</div>

**The result?** Documentation time drops from 15-20 minutes to **under 1 minute** while maintaining professional healthcare standards.

---

### System Architecture

<div class="my-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
  <div class="flex flex-col space-y-4">
    <div class="flex items-center justify-center">
      <div class="px-6 py-3 bg-blue-100 dark:bg-blue-900 rounded-lg font-sans font-bold text-sm text-black dark:text-white">
        Telehealth Transcript
      </div>
    </div>
    <div class="flex justify-center">
      <div class="text-2xl text-gray-600 dark:text-gray-400">↓</div>
    </div>
    <div class="flex items-center justify-center">
      <div class="px-6 py-3 bg-green-100 dark:bg-green-900 rounded-lg font-sans font-bold text-sm text-black dark:text-white">
        Flask API (Python Backend)
      </div>
    </div>
    <div class="flex justify-center">
      <div class="text-2xl text-gray-600 dark:text-gray-400">↓</div>
    </div>
    <div class="flex items-center justify-center">
      <div class="px-6 py-3 bg-purple-100 dark:bg-purple-900 rounded-lg font-sans font-bold text-sm text-black dark:text-white">
        OpenAI GPT-4o Processing
      </div>
    </div>
    <div class="flex justify-center">
      <div class="text-2xl text-gray-600 dark:text-gray-400">↓</div>
    </div>
    <div class="flex items-center justify-center">
      <div class="px-6 py-3 bg-orange-100 dark:bg-orange-900 rounded-lg font-sans font-bold text-sm text-black dark:text-white">
        Structured SOAP Note
      </div>
    </div>
  </div>
  <div class="mt-6 text-center text-xs text-gray-500 dark:text-gray-400 font-sans">
    Real-time processing • Zero data persistence • HIPAA-ready
  </div>
</div>

---

### User Workflow

<div class="my-8">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="text-center">
      <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-2xl font-bold text-black dark:text-white">1</div>
      <h4 class="font-sans font-bold mb-2 text-black dark:text-white">Upload</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400">Drag & drop transcript file or paste text directly</p>
    </div>
    <div class="text-center">
      <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-2xl font-bold text-black dark:text-white">2</div>
      <h4 class="font-sans font-bold mb-2 text-black dark:text-white">Process</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400">AI analyzes conversation and extracts medical information</p>
    </div>
    <div class="text-center">
      <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-2xl font-bold text-black dark:text-white">3</div>
      <h4 class="font-sans font-bold mb-2 text-black dark:text-white">Export</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400">Copy to clipboard or download as formatted note</p>
    </div>
  </div>
</div>

<figure class="my-12">
  <img src="/images/ai-medical/main-page.png" alt="SOAP Note Generator Interface" class="w-full h-auto rounded-sm border border-gray-200 shadow-sm" />
  <figcaption class="text-center text-sm text-gray-500 mt-3 font-serif italic">The main interface showing the upload functionality and clean, intuitive design.</figcaption>
</figure>

---

### Key Features

**Clinical Accuracy**

The AI understands medical context—not just keywords. It recognizes:
- Complex medical terminology and abbreviations
- Symptom patterns and their clinical significance  
- Critical information like dosages, allergies, and contraindications
- The difference between patient-reported data and clinical observations

<figure class="my-12">
  <img src="/images/ai-medical/soap-note.png" alt="AI Processing View" class="w-full h-auto rounded-sm border border-gray-200 shadow-sm" />
  <figcaption class="text-center text-sm text-gray-500 mt-3 font-serif italic">Real-time AI processing extracting structured medical information from transcripts.</figcaption>
</figure>

**Privacy-First Architecture**

Built with HIPAA compliance in mind:
- **Zero data persistence** — no patient information is ever stored
- **Real-time processing only** — transcripts are analyzed and discarded immediately
- **Secure credential management** — API keys handled through environment variables
- **End-to-end encryption ready** for deployment in healthcare environments

**Intuitive Workflow**

Designed for busy clinical settings:
- **Drag-and-drop file upload** or direct text paste
- **Real-time processing** with visual feedback
- **One-click export** via clipboard or downloadable file
- **Clean, distraction-free interface** optimized for medical professionals

<figure class="my-12">
  <img src="/images/ai-medical/generated-soap-note.png" alt="Generated SOAP Note Output" class="w-full h-auto rounded-sm border border-gray-200 shadow-sm" />
  <figcaption class="text-center text-sm text-gray-500 mt-3 font-serif italic">The final generated SOAP note, professionally formatted and ready for export.</figcaption>
</figure>

---

### Technical Stack

<div class="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
    <h4 class="font-sans font-bold text-sm mb-3 text-black dark:text-white">Backend</h4>
    <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
      <li>• Python Flask API</li>
      <li>• OpenAI GPT-4o</li>
      <li>• Docker containers</li>
      <li>• Environment config</li>
    </ul>
  </div>
  <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
    <h4 class="font-sans font-bold text-sm mb-3 text-black dark:text-white">Frontend</h4>
    <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
      <li>• HTML/CSS/JavaScript</li>
      <li>• Responsive design</li>
      <li>• Async processing</li>
      <li>• Medical-focused UI</li>
    </ul>
  </div>
  <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
    <h4 class="font-sans font-bold text-sm mb-3 text-black dark:text-white">Deployment</h4>
    <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
      <li>• Cloud-ready</li>
      <li>• Horizontal scaling</li>
      <li>• Monitoring/logging</li>
      <li>• Multi-cloud support</li>
    </ul>
  </div>
</div>

---

### Real-World Impact

<div class="my-8 p-6 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-gray-200 dark:border-gray-700">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    <div>
      <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15→1 min</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">Time per patient note</div>
    </div>
    <div>
      <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">Professional standard compliance</div>
    </div>
    <div>
      <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">0</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">Patient data stored</div>
    </div>
  </div>
</div>

By automating the mechanical task of note-taking, we help healthcare providers focus on what they do best: healing and caring for patients.

---

### Built at HackMIT 2025

This project was developed during the 2025 HackMIT hackathon, addressing a real pain point in healthcare with modern AI technology.

**Tech Stack:** Python · Flask · OpenAI GPT-4o · Docker · HTML/CSS/JavaScript
    `,
    link: "https://github.com/amoveablefeastym/HackMIT-Team-2025",
  },
];
