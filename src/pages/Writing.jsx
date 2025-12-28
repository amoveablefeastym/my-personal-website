import { Link } from "react-router-dom"
import { writingPosts } from "../data/writing"
import { ArrowRight } from "lucide-react"

function Writing() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 animate-fade-in-up">
      {/* Page heading */}
      <header className="mb-20 border-b border-gray-200 dark:border-gray-800 pb-8 text-center">
        <h1 className="text-4xl font-serif font-bold mb-4 text-black dark:text-white">
          Writing
        </h1>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg text-gray-500 dark:text-gray-400 font-serif italic leading-relaxed max-w-xl">
            I write therefore I am.
          </p>
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400 shrink-0">
            {writingPosts.length} Entries
          </span>
        </div>
      </header>

      <div className="space-y-4">
        {writingPosts.map((post) => (
          <Link 
            key={post.id} 
            to={`/writing/${post.slug}`} 
            className="group block p-6 -mx-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-[#111] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h2 className="text-xl md:text-2xl font-serif font-medium text-black dark:text-white group-hover:text-[#d32f2f] transition-colors">
                {post.title}
              </h2>
              <span className="text-xs font-sans font-medium text-gray-400 uppercase tracking-widest mt-2 md:mt-0">
                {post.date}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 font-serif text-lg leading-relaxed mb-4">
              {post.excerpt}
            </p>

            <div className="flex items-center text-xs font-sans font-bold text-gray-400 group-hover:text-black dark:group-hover:text-white uppercase tracking-wider transition-colors">
              Read Essay
              <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Writing
