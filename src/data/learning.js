export const learningPosts = [
  {
    id: 1,
    slug: "understanding-react-hooks",
    title: "Understanding React Hooks: A Deep Dive",
    date: "December 2025",
    category: "Frontend Development",
    excerpt: "Exploring the lifecycle of components and how useEffect and useState revolutionize state management.",
    content: `
React Hooks were introduced in **React 16.8** and fundamentally changed how we write components. They let you use state and other React features without writing a class, making functional components far more powerful.

### The Rules of Hooks

**Two critical rules to follow:**

1. **Top-level only** — Don't call Hooks inside loops, conditions, or nested functions
2. **React functions only** — Only call Hooks from React function components or custom Hooks

### useState: Managing State

The most fundamental Hook. It returns a pair: the current state value and a function to update it.

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

This simple pattern replaces the need for \`this.state\` and \`this.setState\` from class components, making state management intuitive and concise.

---

**Why it matters:** Hooks allow you to reuse stateful logic between components without changing your component hierarchy. They enable better code organization and make it easier to share behavior across your application.
    `
  },
  {
    id: 2,
    slug: "math-of-neural-decoding",
    title: "The Mathematics of Neural Decoding",
    date: "November 2025",
    category: "Neuroscience",
    excerpt: "Breaking down PCA and Logistic Regression in the context of analyzing calcium imaging data.",
    content: `
Neural decoding is the process of **predicting external stimuli or behavioral variables from neural activity**. In computational neuroscience, we're essentially asking: "Can we read the brain's code?"

### The Challenge: High-Dimensional Data

When recording from hundreds or thousands of neurons simultaneously (via calcium imaging), we face the curse of dimensionality. We need techniques to extract meaningful patterns from this overwhelming amount of data.

### PCA: Finding the Signal in the Noise

**Principal Component Analysis (PCA)** is our first line of defense. Instead of analyzing 1,000 neurons individually, PCA finds the "principal components" — the directions in which our data varies the most.

Think of it as finding the "essence" of neural activity: the first few components capture the majority of variance, allowing us to work with 10-20 dimensions instead of 1,000.

### Logistic Regression: Making Predictions

Once we've reduced our feature space with PCA, we train a **Logistic Regression classifier** to predict binary outcomes:

- Did the mouse turn **Left or Right**?
- Did the stimulus appear on the **Top or Bottom**?

The classifier learns a decision boundary in this reduced space, effectively "decoding" what the brain is representing.

---

**The insight:** By combining dimensionality reduction with classification, we can determine not just *whether* information is present in neural activity, but *when* and *where* it emerges during a task.
    `
  },
  {
    id: 3,
    slug: "building-my-site",
    title: "Building My Personal Website: Lessons in Design and Architecture",
    date: "December 2025",
    category: "Web Development",
    excerpt: "From fighting component libraries to embracing utility-first CSS and Markdown-driven content.",
    content: `
Building a personal website is rarely a straight line. It's a process of iteration, refactoring, and learning what *doesn't* work. This site has gone through several major architectural shifts, each teaching me something new about modern web development.

### Phase 1: The Component Library Trap

I initially built this site using **Material UI**. It seemed like the logical choice: pre-built, accessible components that look professional out of the box.

**The Problem:**
Component libraries are great for internal tools, but they impose a specific "look." Trying to make a Material UI button look like *my* button meant fighting the framework:
- **Theme overrides** required deep nesting in configuration objects
- **CSS specificity wars** became a daily struggle
- **The \`sx\` prop** cluttered my JSX, mixing styling logic with business logic

I spent more time fighting the library than building my vision.

### Phase 2: Embracing Tailwind CSS

I migrated to **Tailwind CSS**, a utility-first framework. At first, the long class strings looked messy. But the benefits quickly became apparent:

1. **True Flexibility:** I build exactly what I want. No default styles to override.
2. **Design System Consistency:** By defining my colors, spacing, and typography in \`tailwind.config.js\`, I ensure every page feels cohesive.
3. **Performance:** The JIT compiler generates only the CSS I use, keeping the bundle size tiny.

The shift allowed me to create a unique design identity—inspired by print media and minimalism—that wasn't possible with a standard component library.

### Phase 3: Content as Data

Initially, my content (blog posts, project descriptions) was hardcoded into React components. This made editing text a nightmare of hunting through JSX files.

**The Solution:**
I refactored the site to use a **Markdown-driven architecture**.
- Content lives in clean, separate data files (like \`learning.js\`)
- React components are purely for *presentation*, rendering that data dynamically
- I can write posts in Markdown, focusing on writing rather than coding

### Conclusion

This website is a "digital garden"—a living project that evolves as I learn. The move from rigid libraries to flexible utilities and structured data has made the codebase more maintainable and the site more expressive of who I am.
    `
  },

];
