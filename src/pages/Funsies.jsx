import { Link } from "react-router-dom"
import { funsiesPosts } from "../data/funsies"

function Funsies() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 relative">
      <div className="text-center mb-16 relative group cursor-default"
           onMouseEnter={(e) => {
             const p = e.currentTarget.querySelector('p');
             if (p) {
               p.classList.remove('opacity-0');
               p.classList.add('opacity-100');
             }
           }}>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 tracking-[0.5px] animate-fade-in-up text-black dark:text-white relative inline-block">
          Funsies
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 font-serif text-lg animate-fade-in-up delay-100 italic opacity-0 transition-opacity duration-700 ease-in-out">
          Me having a life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in-up delay-200">
        {funsiesPosts.map((post) => (
          <Link 
            key={post.id} 
            to={`/funsies/${post.slug}`}
            className="group block bg-white dark:bg-[#111] p-3 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 relative"
          >
            {post.image ? (
              <div className="aspect-video overflow-hidden mb-4 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
            ) : (
              <div className="aspect-video bg-gray-100 dark:bg-[#222] flex items-center justify-center mb-4 border border-gray-200 dark:border-gray-800">
                <span className="text-gray-400 font-sans text-xs tracking-widest">IMAGE MISSING</span>
              </div>
            )}
            
            <div className="px-2 pb-2 text-center">
              <div className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest mb-2">
                {post.category}
              </div>
              <h2 className="text-2xl font-serif text-black dark:text-white mb-2 group-hover:text-[#8b0000] dark:group-hover:text-red-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-serif italic leading-relaxed">
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
