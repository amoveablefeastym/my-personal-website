
function Marquee({ items }) {
  return (
    <div className="relative flex overflow-hidden py-4 bg-gray-50 dark:bg-[#111] border-y border-gray-100 dark:border-gray-800 w-full">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* First copy */}
        {items.map((item, index) => (
          <span key={`1-${index}`} className="mx-8 text-lg font-sans text-gray-400 uppercase tracking-widest font-medium">
            {item}
          </span>
        ))}
        {/* Second copy for seamless loop */}
        {items.map((item, index) => (
          <span key={`2-${index}`} className="mx-8 text-lg font-sans text-gray-400 uppercase tracking-widest font-medium">
            {item}
          </span>
        ))}
        {/* Third copy for safety on wide screens */}
        {items.map((item, index) => (
          <span key={`3-${index}`} className="mx-8 text-lg font-sans text-gray-400 uppercase tracking-widest font-medium">
            {item}
          </span>
        ))}
      </div>
      
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white dark:from-black to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white dark:from-black to-transparent pointer-events-none"></div>
    </div>
  )
}

export default Marquee
