// src/pages/Writing.jsx
// This page displays your creative writing, essays, and personal reflections

function Writing() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Page heading */}
      <h1 className="text-3xl font-serif font-semibold mb-4 tracking-[0.5px] animate-fade-in-up">
        Writing
      </h1>

      {/* Subtitle */}
      <p className="mb-8 text-gray-600 dark:text-[#e8e8e8] font-serif text-lg animate-fade-in-up delay-100">
        Essays, reflections, and thoughts on life, design, and everything in between.
      </p>

      {/* Placeholder content - you can add your writing pieces here */}
      <p className="font-serif text-gray-600 dark:text-[#e8e8e8] leading-loose animate-fade-in-up delay-200">
        Your writing will go here. You can add essays, blog posts, or any creative writing you want to share.
      </p>
    </div>
  )
}

export default Writing
