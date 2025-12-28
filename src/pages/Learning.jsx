import { Link } from "react-router-dom"
import { learningPosts } from "../data/learning"

function Learning() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-fade-in-up relative">
      <header className="mb-20 border-b border-gray-100 dark:border-gray-800 pb-8 text-center relative z-10 group cursor-default flex flex-col items-center">
        <h1 className="text-4xl font-serif font-bold mb-4 text-black dark:text-white">Learning Log</h1>
        <p className="text-gray-500 dark:text-gray-400 font-serif italic text-lg max-w-2xl mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
          I'm constantly learning new things and reflecting. So here is me sharing what I've learnt as notes to myself and others.
        </p>
      </header>

      <div className="space-y-12 relative z-10">
        {learningPosts.map((post) => (
          <Link 
            to={`/learning/${post.slug}`} 
            key={post.id} 
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline no-underline relative"
          >
            {/* Date Column */}
            <div className="md:col-span-3 text-right pr-8">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest group-hover:text-black dark:group-hover:text-white transition-colors duration-300 block">
                {post.date}
              </span>
            </div>

            {/* Content Column */}
            <div className="md:col-span-9 pl-4 md:pl-8 border-l-2 border-gray-100 dark:border-gray-800 md:border-l-0">
              <h2 className="text-2xl font-serif font-medium text-black dark:text-white mb-3 group-hover:text-[#8b0000] dark:group-hover:text-red-400 transition-colors rusty-link w-fit">
                {post.title}
              </h2>
              
              <div className="mb-4">
                 <span className="inline-block px-2 py-1 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 text-[10px] font-sans font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 rounded-sm group-hover:border-red-800/30 transition-colors">
                  {post.category}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 font-serif leading-relaxed text-lg group-hover:text-black dark:group-hover:text-gray-300 transition-colors">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Learning
