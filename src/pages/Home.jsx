// src/pages/Home.jsx
// -------------------
// This is the main landing page ("/").
// Layout: centered column with profile picture, name, short description,
// and a row of social icons that link out to your profiles.

import { Github, Linkedin, Mail} from "lucide-react"
import ReactMarkdown from "react-markdown"
import { profileData } from "../data/profile"
import Marquee from "../components/Marquee"

// Import a local profile image.
import profileImage from "../assets/profile.jpg"

function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Outer container that centers the content on the page. */}
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center mt-12 md:mt-20 px-4 max-w-4xl mx-auto relative z-10">
        
        {/* Profile picture in the middle */}
        <div className="relative mb-8 group cursor-pointer rusty-frame">
          {/* Rusty Lake "Black Cube" Easter Egg - appears on hover */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-0 h-0 bg-black dark:bg-white opacity-0 group-hover:w-12 group-hover:h-12 group-hover:opacity-100 transition-all duration-1000 ease-in-out rotate-45 shadow-[0_0_30px_rgba(0,0,0,0.8)] dark:shadow-[0_0_30px_rgba(255,255,255,0.8)] z-20 border border-white/20"></div>

          {/* "The Past is Never Dead" - Hidden text that appears on hover */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs font-typewriter tracking-widest text-[#8b0000] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300 whitespace-nowrap">
            THE PAST IS NEVER DEAD
          </div>

          <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-800 transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300 ease-out -z-10"></div>
          <img
            src={profileImage}
            alt={`Profile picture of ${profileData.name}`}
            className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full object-cover animate-fade-in-up transition-all duration-700 ease-out border-4 border-white dark:border-black shadow-xl corrupted-soul-filter"
          />
        </div>

        {/* Name */}
        <h1 className="font-serif font-medium tracking-tight mb-4 text-5xl sm:text-6xl md:text-7xl animate-fade-in-up delay-200 text-black dark:text-white relative z-10">
          Hi, I'm <span className="italic relative inline-block hover:text-[#8b0000] transition-colors duration-300 cursor-default rusty-link rusty-glitch" data-text={profileData.name}>{profileData.name}</span>.
        </h1>

        {/* RUSTY LAKE ATMOSPHERIC SYMBOLS (Background) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          {/* Triangle (The Past) */}
          <svg className="rusty-symbol top-[10%] left-[5%] w-24 h-24 animate-float" viewBox="0 0 100 100">
            <path d="M50 15 L85 85 L15 85 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-black dark:text-white" />
          </svg>
          
          {/* Circle (The Present) */}
          <svg className="rusty-symbol top-[20%] right-[10%] w-16 h-16 animate-float" style={{animationDelay: "1s"}} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-black dark:text-white" />
          </svg>

          {/* Square (The Future) */}
          <svg className="rusty-symbol bottom-[30%] left-[15%] w-20 h-20 animate-float" style={{animationDelay: "2s"}} viewBox="0 0 100 100">
            <rect x="15" y="15" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="1" className="text-black dark:text-white" />
          </svg>

        

        

          
        </div>

        {/* Short description under the name */}
        <div className="max-w-[540px] font-serif text-gray-600 dark:text-[#a0a0a0] mb-10 text-lg sm:text-xl leading-relaxed animate-fade-in-up delay-300 prose prose-lg prose-p:my-4 prose-strong:font-medium prose-strong:text-black dark:prose-strong:text-white prose-a:text-black dark:prose-a:text-white prose-a:no-underline prose-a:border-b prose-a:border-gray-300 hover:prose-a:border-black dark:prose-a:border-gray-700 dark:hover:prose-a:border-white prose-a:transition-colors">
          <ReactMarkdown>
            {profileData.bio}
          </ReactMarkdown>
        </div>

        {/* Row of social icons */}
        <div className="flex flex-row gap-8 justify-center animate-fade-in-up delay-500 mb-20">
          {/* GitHub */}
          <a
            href={profileData.socials.find(s => s.platform === "github")?.url}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-600 dark:text-[#e8e8e8] hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300"
          >
            <Github size={28} strokeWidth={1.5} />
          </a>

          {/* LinkedIn */}
          <a
            href={profileData.socials.find(s => s.platform === "linkedin")?.url}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 dark:text-[#e8e8e8] hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={28} strokeWidth={1.5} />
          </a>

          {/* Email */}
          <a
            href={profileData.socials.find(s => s.platform === "email")?.url}
            aria-label="Email"
            className="text-gray-600 dark:text-[#e8e8e8] hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300"
          >
            <Mail size={28} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-full animate-fade-in-up delay-700">
        <Marquee items={profileData.interests || []} />
      </div>
    </div>
  )
}

export default Home

