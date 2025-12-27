export const projects = [
  {
    slug: "experiential-computing",
    title: "WorldLearning: An LLM-Driven Interactive Map for Exploring Cultural Experiences",
    category: "DESIGN / RESEARCH",
    description:
      "An interactive world map that visualizes how different activities are salient in different countries, using LLM scoring and map exploration.",
    longDescription: `
      <p class="text-xl font-light leading-relaxed text-gray-600 mb-8">
        WorldLearning is an interactive system that uses an LLM and a world map to help users explore how local people in different countries typically have fun in their free time.
      </p>

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

      <h3 class="text-2xl font-serif mb-6 mt-12">Key Features</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div class="p-4 bg-gray-50 rounded-sm border border-gray-100">
          <h4 class="font-bold text-gray-900 mb-2">Interactive 3D Visualization</h4>
          <p class="text-sm text-gray-600">A reactive globe built with Three.js allowing users to spin, zoom, and select countries to visualize data spatially.</p>
        </div>
        <div class="p-4 bg-gray-50 rounded-sm border border-gray-100">
          <h4 class="font-bold text-gray-900 mb-2">LLM-Driven Scoring</h4>
          <p class="text-sm text-gray-600">Uses GPT-4 to dynamically score the "typicality" of activities across different cultures, turning qualitative knowledge into quantitative data.</p>
        </div>
        <div class="p-4 bg-gray-50 rounded-sm border border-gray-100">
          <h4 class="font-bold text-gray-900 mb-2">Comparative Analysis</h4>
          <p class="text-sm text-gray-600">Side-by-side ranking lists and choropleth maps allow users to contrast how different regions prioritize specific experiences.</p>
        </div>
        <div class="p-4 bg-gray-50 rounded-sm border border-gray-100">
          <h4 class="font-bold text-gray-900 mb-2">Dialectical Exploration</h4>
          <p class="text-sm text-gray-600">Designed to prompt follow-up questions rather than just providing static answers, fostering curiosity-driven inquiry.</p>
        </div>
      </div>

      <h3 class="text-2xl font-serif mb-6">Technical Stack</h3>
      <div class="space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-b border-gray-100 pb-4">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400 w-24 pt-1">Frontend</span>
          <span class="text-gray-700">React (TypeScript), TanStack Start & Router, Tailwind CSS. D3.js and TopoJSON for map visualizations.</span>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-b border-gray-100 pb-4">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400 w-24 pt-1">Backend</span>
          <span class="text-gray-700">Node.js via TanStack Start server functions. Zod for schema validation and custom middleware for auth.</span>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-b border-gray-100 pb-4">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400 w-24 pt-1">AI / ML</span>
          <span class="text-gray-700">OpenAI API (davinci-002 for log-probs, GPT-4 for explanations). Custom tokenization and log-summation logic.</span>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400 w-24 pt-1">Tools</span>
          <span class="text-gray-700">Vite, pnpm, ESLint, Prettier.</span>
        </div>
      </div>
    `,
    link: "#",
    image: "/images/experiential-computing/image1.png",
  },
  {
    slug: "neural-decoding-analysis",
    title: "Time-Resolved Decoding of Working Memory under TRPV1 Activation",
    category: "COMPUTATIONAL NEUROSCIENCE",
    description:
      "Investigating how TRPV1 activation affects neural encoding of working memory using time-resolved decoding on calcium imaging data.",
    longDescription: `
      <p class="text-xl font-light leading-relaxed text-gray-600 mb-8">
        The primary objective is to determine how TRPV1 activation (Capsaicin) affects the neural encoding of working memory. Specifically, does disrupting dopamine signaling (via TRPV1) degrade the brain's ability to maintain task-relevant information during the delay period?
      </p>

      <h3 class="text-2xl font-serif mb-6 mt-12">Experimental Design</h3>
      <ul class="list-disc pl-5 space-y-2 mb-8 text-gray-700">
        <li><strong>Subjects:</strong> D1 and D2-receptor expressing mice.</li>
        <li><strong>Task:</strong> A spatial working memory task requiring mice to remember a "Force Direction" (instruction) over a delay period before making a "Choice."</li>
        <li><strong>Conditions:</strong> Baseline (Vehicle 1), Manipulation (Capsaicin/TRPV1 activation), Recovery (Vehicle 2).</li>
      </ul>

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

      <h3 class="text-2xl font-serif mb-6 mt-12">Core Methodology: Window-Based Decoding</h3>
      <p class="mb-4 text-gray-700">
        Instead of analyzing the trial as a whole, the project uses a Time-Resolved Decoding approach to pinpoint exactly when information is lost or maintained.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div class="p-4 bg-gray-50 rounded-sm border border-gray-100">
          <h4 class="font-bold text-gray-900 mb-2">Temporal Slicing</h4>
          <p class="text-sm text-gray-600">Trials are split into discrete time windows (e.g., W1–W4) spanning the Delay and Execution phases.</p>
        </div>
        <div class="p-4 bg-gray-50 rounded-sm border border-gray-100">
          <h4 class="font-bold text-gray-900 mb-2">Rigorous Evaluation</h4>
          <p class="text-sm text-gray-600">Class balancing (undersampling) ensures a strict 0.5 chance level. Repeated Stratified K-Fold Cross-Validation ensures robustness.</p>
        </div>
      </div>

      <h3 class="text-2xl font-serif mb-6">Key Analyses</h3>
      <p class="mb-4 text-gray-700">The project investigates four distinct types of information processing:</p>
      <ul class="list-disc pl-5 space-y-2 mb-12 text-gray-700">
        <li><strong>Sensory Maintenance (Delay - Force Dir):</strong> Can the mouse hold the instruction in memory during the delay?</li>
        <li><strong>Motor Planning (Delay - Choice Dir):</strong> Is the mouse planning its movement during the delay?</li>
        <li><strong>Sensory History (Execution - Force Dir):</strong> Is the instruction still represented during the action?</li>
        <li><strong>Motor Execution (Execution - Choice Dir):</strong> How strong is the motor signal during the actual turn?</li>
      </ul>

      <h3 class="text-2xl font-serif mb-6">Outcome Metrics</h3>
      <ul class="list-disc pl-5 space-y-2 mb-12 text-gray-700">
        <li><strong>Decoding Accuracy Trajectories:</strong> Plotting accuracy across windows (W1 → W4) to visualize the "memory curve."</li>
        <li><strong>Condition Effects:</strong> Comparing the accuracy curves of Vehicle vs. Capsaicin to quantify the deficit caused by the manipulation.</li>
      </ul>

      <h3 class="text-2xl font-serif mb-6">Technical Stack</h3>
      <div class="space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-b border-gray-100 pb-4">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400 w-24 pt-1">Core</span>
          <span class="text-gray-700">Python, NumPy, Pandas</span>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-b border-gray-100 pb-4">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400 w-24 pt-1">Data</span>
          <span class="text-gray-700">h5py (HDF5), scipy.io (MATLAB files)</span>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-b border-gray-100 pb-4">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400 w-24 pt-1">ML</span>
          <span class="text-gray-700">scikit-learn (LogisticRegressionCV, PCA, Stratified K-Fold)</span>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400 w-24 pt-1">Viz</span>
          <span class="text-gray-700">Matplotlib (Accuracy curves, Weight angle heatmaps)</span>
        </div>
      </div>
    `,
    link: "#",
    image: "/images/neural-decoding/cover.png",
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    category: "LEARNING REACT",
    description:
      "This site you are looking at right now. A space to experiment with design, writing, and small projects.",
    longDescription: `
      <p>A personal portfolio and blog built from scratch to learn modern web development practices. The design is inspired by The New Yorker and Notion, focusing on typography and minimalism.</p>

      <h3>Evolution</h3>
      <p>Started with Material UI, the site was migrated to Tailwind CSS to allow for more granular control over the design system. It features a custom responsive grid layout and subtle animations.</p>
    `,
    link: "#",
    image: null,
  },
];
