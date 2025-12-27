// src/pages/Projects.jsx
// This page displays your projects in The New Yorker website style
// Three-column grid layout with images, category labels, and editorial design

import { Link } from "react-router-dom"
import { projects } from "../data/projects"

// Main Projects component - renders the entire projects page
function Projects() {
  return (
    // Main container - The New Yorker style with full width and generous margins
    <div className="max-w-6xl mx-auto px-6 md:px-12 bg-white py-12">
      {/* Page heading - The New Yorker style centered title */}
      <div className="text-center mb-16 border-b border-black/10 pb-12">
        <h1 className="mb-4 font-semibold font-serif tracking-tight text-black text-5xl md:text-6xl animate-fade-in-up">
          Projects
        </h1>

        {/* Subtitle - Brief description with The New Yorker's understated style */}
        <p className="text-[#707070] font-serif text-lg italic leading-relaxed animate-fade-in-up delay-100">
          Selected research projects, and things I've built.
        </p>
      </div>

      {/* Projects grid - Magazine Style Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 animate-fade-in-up delay-200">
        {/* Loop through projects array */}
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className={`group flex flex-col no-underline text-inherit transition-all duration-300 ease-out bg-transparent border-none cursor-pointer
              ${index === 0 ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-12 md:items-start" : ""}
            `}
          >
            {/* Image or placeholder */}
            <div className={`w-full overflow-hidden mb-4 ${index === 0 ? "md:mb-0" : ""}`}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full aspect-4/3 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                // Placeholder box
                <div className="w-full aspect-4/3 bg-[#f0f0f0] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#e0e0e0]">
                  <span className="text-[#999999] font-serif italic text-sm">
                    Image placeholder
                  </span>
                </div>
              )}
            </div>

            {/* CardContent */}
            <div className="flex flex-col justify-center">
              {/* Category label */}
              <span className="text-[#d32f2f] font-sans text-xs font-bold tracking-widest mb-3 block uppercase">
                {project.category}
              </span>

              {/* Project title */}
              <h2 className={`font-serif font-medium mb-3 text-black leading-tight group-hover:text-[#555] transition-colors
                ${index === 0 ? "text-3xl md:text-4xl" : "text-2xl"}
              `}>
                {project.title}
              </h2>

              {/* Project description */}
              <p className={`font-serif text-[#333333] leading-relaxed tracking-wide
                ${index === 0 ? "text-lg" : "text-base"}
              `}>
                {project.description}
              </p>
              
              {/* Read more link (visual cue) */}
              <span className="mt-4 inline-block font-sans text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 w-max group-hover:border-[#d32f2f] group-hover:text-[#d32f2f] transition-all">
                Read More
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Export the Projects component so it can be imported in other files (like App.jsx)
export default Projects