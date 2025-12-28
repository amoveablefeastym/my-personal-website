import { useParams, Link } from "react-router-dom"
import { funsiesPosts } from "../data/funsies"
import { ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

function FunsiesDetail() {
  const { slug } = useParams()
  const post = funsiesPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif mb-4">Post not found</h2>
        <Link to="/funsies" className="text-blue-600 hover:underline">
          Back to Funsies
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 animate-fade-in-up relative">
      <Link 
        to="/funsies" 
        className="inline-flex items-center text-[#707070] dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8 font-typewriter text-xs uppercase tracking-widest relative z-10"
      >
        <ArrowLeft size={16} className="mr-2" />
        Return to Memory Fragments
      </Link>

      <div className="relative z-10 bg-white dark:bg-[#111] p-8 shadow-sm border border-gray-100 dark:border-gray-800 rotate-[0.5deg]">
        {/* Paper clip */}
        <div className="absolute -top-4 right-10 w-4 h-12 bg-gray-300 dark:bg-gray-600 rounded-full z-20 opacity-80"></div>

        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-6 border-b border-dashed border-gray-300 dark:border-gray-700 pb-4">
          {post.category && (
            <span className="text-[#d32f2f] font-typewriter text-xs font-bold uppercase tracking-widest">
              EVIDENCE TYPE: {post.category}
            </span>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-handwriting font-semibold mb-8 text-black dark:text-white leading-tight">
          {post.title}
        </h1>

        {post.image && (
          <div className="mb-10 p-2 bg-white dark:bg-[#222] shadow-md -rotate-1">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto filter sepia-[.2] contrast-110"
            />
          </div>
        )}

        <article className="prose prose-lg prose-headings:font-serif prose-p:font-serif prose-p:text-[#333] dark:prose-p:text-gray-300 dark:prose-headings:text-white dark:prose-strong:text-white dark:prose-a:text-white dark:prose-li:text-gray-300 max-w-none">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  )
}

export default FunsiesDetail
