import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects"
import { ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif mb-4">Project not found</h2>
        <Link to="/projects" className="text-blue-600 hover:underline">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 animate-fade-in-up relative">
      {/* Background Stamp */}
      <div className="fixed top-40 right-10 border-4 border-red-800/10 text-red-800/10 p-4 font-typewriter text-4xl font-bold -rotate-12 pointer-events-none select-none z-0">
        CONFIDENTIAL
      </div>

      <Link 
        to="/projects" 
        className="inline-flex items-center text-[#707070] dark:text-gray-400 hover:text-red-800 dark:hover:text-red-500 transition-colors mb-8 font-typewriter text-xs uppercase tracking-widest relative z-10"
      >
        <ArrowLeft size={16} className="mr-2" />
        Return to Evidence Board
      </Link>

      <div className="relative z-10">
        <span className="text-[#d32f2f] font-typewriter text-xs font-bold tracking-widest mb-4 block uppercase border-b border-red-800/30 w-fit pb-1">
          File: {project.category}
        </span>

        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-8 text-black dark:text-white leading-tight">
          {project.title}
        </h1>

        {project.image && (
          <div className="relative mb-10 group">
            <div className="absolute inset-0 bg-sepia-[.2] mix-blend-multiply pointer-events-none transition-opacity duration-500 group-hover:opacity-0"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover rounded-sm shadow-lg filter contrast-110 group-hover:contrast-100 transition-all duration-500"
            />
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-typewriter px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              FIG. 1.1
            </div>
          </div>
        )}

        <div className="prose prose-lg prose-headings:font-serif prose-p:font-serif prose-p:text-[#333] dark:prose-p:text-gray-300 dark:prose-headings:text-white dark:prose-strong:text-white dark:prose-a:text-white dark:prose-li:text-gray-300 max-w-none selection:bg-red-900/30 selection:text-red-900 dark:selection:text-red-200">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {project.longDescription}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
