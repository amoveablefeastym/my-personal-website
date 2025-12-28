import { Link } from "react-router-dom"
import { funsiesPosts } from "../data/funsies"

function Funsies() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif font-semibold mb-4 tracking-[0.5px] animate-fade-in-up">
          Funsies
        </h1>
        
        <p className="text-gray-600 dark:text-[#e8e8e8] font-serif text-lg animate-fade-in-up delay-100">
          Me having a life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up delay-200">
        {funsiesPosts.map((post) => (
          <Link 
            key={post.id} 
            to={`/funsies/${post.slug}`}
            className="group block bg-gray-50 dark:bg-[#1a1a1a] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {post.image ? (
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="aspect-video bg-gray-200 dark:bg-[#333] flex items-center justify-center">
                <span className="text-gray-400 font-serif italic">No Image</span>
              </div>
            )}
            
            <div className="p-6">
              <div className="text-xs font-sans font-bold text-[#d32f2f] uppercase tracking-widest mb-2">
                {post.category}
              </div>
              <h2 className="text-xl font-serif font-semibold mb-2 group-hover:text-[#d32f2f] transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-[#e8e8e8] text-sm leading-relaxed">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Funsies
