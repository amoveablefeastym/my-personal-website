// src/pages/Home.jsx
// -------------------
// This is the main landing page ("/").
// Layout: centered column with profile picture, name, short description,
// and a row of social icons that link out to your profiles.

import { Github, Linkedin, Mail, Twitter } from "lucide-react"

// Import a local profile image.
import profileImage from "../assets/profile.jpg"

function Home() {
  return (
    // Outer container that centers the content on the page.
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center mt-20">
      {/* Profile picture in the middle */}
      <img
        src={profileImage}
        alt="Profile picture of Yimin"
        className="w-[350px] h-[350px] mb-4 rounded-full object-cover animate-fade-in-up hover:scale-105 transition-transform duration-500 ease-out"
      />

      {/* Name */}
      <h1 className="font-serif font-semibold tracking-[0.5px] mb-2 text-4xl sm:text-5xl animate-fade-in-up delay-200">
        Hi! I'm Yimin.
      </h1>

      {/* Short description under the name */}
      <p className="max-w-[480px] font-serif text-gray-600 dark:text-[#e8e8e8] mb-6 text-base sm:text-lg leading-relaxed animate-fade-in-up delay-300">
        {/* Replace this with your own intro text. Keep it 2–3 sentences. */}
        I'm an undergraduate student at <strong><u>Northwestern University</u></strong>, studying{" "}
        <strong><u>Computer Science</u></strong>, <strong><u>Cognitive Science</u></strong> and{" "}
        <strong><u>Design</u></strong>.
        <br />
        <br />
        I'm always trying to understand how people <strong><u>think</u></strong>,{" "}
        <strong><u>feel</u></strong>, and <strong><u>move through the world</u></strong>. I split my time
        between building interfaces, studying the brains, and writing about the messy parts of
        being human.
        <br />
        <br />
        This site is where those threads meet. Part portofolio, part journal, part playground, 
        a little bit of everything that makes me me, very much still in progress.
      </p>

      {/* Row of social icons */}
      <div className="flex flex-row gap-6 justify-center animate-fade-in-up delay-500">
        {/* GitHub */}
        <a
          href="https://github.com/amoveablefeastym"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-gray-600 dark:text-[#e8e8e8] hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300"
        >
          <Github size={28} strokeWidth={1.5} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yimin-huang-nu"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-gray-600 dark:text-[#e8e8e8] hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300"
        >
          <Linkedin size={28} strokeWidth={1.5} />
        </a>

        {/* Email */}
        <a
          href="mailto:h1683618346@gmail.com"
          aria-label="Email"
          className="text-gray-600 dark:text-[#e8e8e8] hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300"
        >
          <Mail size={28} strokeWidth={1.5} />
        </a>

        {/* Twitter / X (optional, remove if you don’t use it) */}
        <a
          href="https://twitter.com/your-handle"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className="text-gray-600 dark:text-[#e8e8e8] hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300"
        >
          <Twitter size={28} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  )
}

export default Home

