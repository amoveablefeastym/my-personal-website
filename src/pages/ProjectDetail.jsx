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
    <div className="max-w-3xl mx-auto px-6 py-12 animate-fade-in-up">
      <Link 
        to="/projects" 
        className="inline-flex items-center text-[#707070] dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8 font-serif italic"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to Projects
      </Link>

      <span className="text-[#d32f2f] font-sans text-xs font-bold tracking-widest mb-4 block uppercase">
        {project.category}
      </span>

      <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-8 text-black dark:text-white leading-tight">
        {project.title}
      </h1>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover mb-10 rounded-sm"
        />
      )}

      <div className="prose prose-lg prose-headings:font-serif prose-p:font-serif prose-p:text-[#333] dark:prose-p:text-gray-300 dark:prose-headings:text-white dark:prose-strong:text-white dark:prose-a:text-white dark:prose-li:text-gray-300 max-w-none">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {project.longDescription}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default ProjectDetail
