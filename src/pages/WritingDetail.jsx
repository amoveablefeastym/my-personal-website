import { useParams, Link } from "react-router-dom"
import { writingPosts } from "../data/writing"
import { ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

function WritingDetail() {
  const { slug } = useParams()
  const post = writingPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif mb-4">Essay not found</h2>
        <Link to="/writing" className="text-blue-600 hover:underline">
          Back to Writing
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 animate-fade-in-up">
      <Link 
        to="/writing" 
        className="inline-flex items-center text-[#707070] dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8 font-serif italic"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to Writing
      </Link>

      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-6">
        <span className="text-gray-400 font-sans text-xs uppercase tracking-widest">
          {post.date}
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-12 text-black dark:text-white leading-tight">
        {post.title}
      </h1>

      <article className="prose prose-lg prose-headings:font-serif prose-p:font-serif prose-p:text-[#333] dark:prose-p:text-gray-300 dark:prose-headings:text-white dark:prose-strong:text-white dark:prose-a:text-white dark:prose-li:text-gray-300 dark:prose-blockquote:text-gray-400 max-w-none">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  )
}

export default WritingDetail
