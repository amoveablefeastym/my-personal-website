import { Link } from "react-router-dom"
import { writingPosts } from "../data/writing"
import { ArrowRight } from "lucide-react"

function Writing() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 animate-fade-in-up relative">
      {/* Page heading */}
      <header className="mb-20 border-b border-gray-200 dark:border-gray-800 pb-8 text-center relative z-10 group cursor-default">
        <h1 className="text-4xl font-serif font-bold mb-4 text-black dark:text-white relative inline-block">
          Writing
        </h1>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg text-gray-500 dark:text-gray-400 font-serif italic leading-relaxed max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
            I write therefore I am.
          </p>
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400 shrink-0 border border-gray-200 dark:border-gray-800 px-2 py-1 mt-2">
            {writingPosts.length} Entries
          </span>
        </div>
      </header>

      <div className="space-y-4 relative z-10">
        {writingPosts.map((post) => (
          <Link 
            key={post.id} 
            to={`/writing/${post.slug}`} 
            className="group block p-6 -mx-6 rounded-sm hover:bg-gray-50 dark:hover:bg-[#111] transition-all duration-300 border-l-2 border-transparent hover:border-red-800 dark:hover:border-red-600 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 relative">
              <h2 className="text-xl md:text-2xl font-serif font-medium text-black dark:text-white group-hover:text-[#8b0000] dark:group-hover:text-red-400 transition-colors rusty-link w-fit">
                {post.title}
              </h2>
              <span className="text-xs font-sans font-medium text-gray-400 uppercase tracking-widest mt-2 md:mt-0 group-hover:text-red-800/70 dark:group-hover:text-red-400/70 transition-colors">
                {post.date}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 font-serif text-lg leading-relaxed mb-4 relative">
              {post.excerpt}
            </p>

            <div className="flex items-center text-xs font-sans font-bold text-gray-400 group-hover:text-black dark:group-hover:text-white uppercase tracking-wider transition-colors">
              Read Essay
              <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform text-red-800 dark:text-red-500" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Writing
