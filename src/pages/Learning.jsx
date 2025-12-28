import { Link } from "react-router-dom"
import { learningPosts } from "../data/learning"

function Learning() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-fade-in-up">
      <header className="mb-20 border-b border-gray-100 pb-8 text-center">
        <h1 className="text-4xl font-serif font-bold mb-4 text-black">Learning Log</h1>
        <p className="text-gray-500 font-serif italic text-lg">I am constantly taking in new knowledge and experimenting. This is me learning publicly!</p>
      </header>

      <div className="space-y-12">
        {learningPosts.map((post) => (
          <Link 
            to={`/learning/${post.slug}`} 
            key={post.id} 
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline no-underline"
          >
            {/* Date Column - Takes up 3 columns on desktop */}
            <div className="md:col-span-3">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest group-hover:text-black transition-colors border-l-2 border-transparent group-hover:border-black pl-0 group-hover:pl-3 duration-300 block">
                {post.date}
              </span>
            </div>

            {/* Content Column - Takes up 9 columns on desktop */}
            <div className="md:col-span-9">
              <h2 className="text-2xl font-serif font-medium text-black mb-3 group-hover:text-[#d32f2f] transition-colors">
                {post.title}
              </h2>
              
              <div className="mb-4">
                 <span className="inline-block px-2 py-1 bg-gray-50 border border-gray-100 text-[10px] font-sans font-bold uppercase tracking-wider text-gray-500 rounded-sm">
                  {post.category}
                </span>
              </div>

              <p className="text-gray-600 font-serif leading-relaxed text-lg">
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
