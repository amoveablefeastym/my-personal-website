import { useParams, Link } from "react-router-dom"
import { learningPosts } from "../data/learning"
import { ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

function LearningDetail() {
  const { slug } = useParams()
  const post = learningPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif mb-4">Post not found</h2>
        <Link to="/learning" className="text-blue-600 hover:underline">
          Back to Learning Log
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 animate-fade-in-up relative">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none z-0"></div>

      <Link 
        to="/learning" 
        className="inline-flex items-center text-[#707070] dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8 font-typewriter text-xs uppercase tracking-widest relative z-10"
      >
        <ArrowLeft size={16} className="mr-2" />
        Return to Log
      </Link>

      <div className="relative z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm p-8 -mx-8 rounded-sm border border-gray-100 dark:border-gray-800">
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
          <span className="text-[#d32f2f] font-typewriter text-xs font-bold uppercase tracking-widest">
            SUBJECT: {post.category}
          </span>
          <span className="text-gray-400 font-typewriter text-xs uppercase tracking-widest">
            // DATE: {post.date}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-12 text-black dark:text-white leading-tight">
          {post.title}
        </h1>

        <article className="prose prose-lg prose-headings:font-serif prose-p:font-serif prose-p:text-[#333] dark:prose-p:text-gray-300 dark:prose-headings:text-white dark:prose-strong:text-white dark:prose-a:text-white dark:prose-li:text-gray-300 max-w-none">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  )
}

export default LearningDetail
