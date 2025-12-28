// Navbar.jsx
// -------------
// This component renders the top navigation bar for your site.
// It uses Tailwind CSS for styling and React Router for navigation.

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Projects", to: "/projects" },
  { label: "Writing", to: "/writing" }, // Creative writing and essays
  { label: "Learning Blog", to: "/learning" }, // Learning and blog content
  { label: "Funsies", to: "/funsies" },
]

function Navbar() {
  // clickedItem holds the label of the nav item that was most recently clicked.
  const [clickedItem, setClickedItem] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const handleClick = (label) => {
    setClickedItem(label)
    setIsMenuOpen(false)
    setTimeout(() => {
      setClickedItem(null)
    }, 400)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="px-4 md:px-8 py-4 bg-white dark:bg-black text-black dark:text-white border-b border-[#e0e0e0] dark:border-gray-800 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* LEFT SIDE: Site title / logo */}
        <Link
          to="/"
          onClick={() => handleClick("logo")}
          className={`
            font-serif text-xl md:text-2xl font-bold tracking-tight no-underline text-black dark:text-white
            transition-all duration-300 ease-out rusty-glitch
            ${clickedItem === "logo" ? "scale-110 font-extrabold" : "scale-100"}
          `}
          data-text="Yimin Huang"
        >
          Yimin Huang
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden p-2 text-black dark:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => handleClick(item.label)}
              className={`
                font-serif text-lg no-underline text-black dark:text-white relative
                transition-all duration-300 ease-out
                hover:text-[#555] dark:hover:text-gray-300
                ${clickedItem === item.label ? "scale-110 font-bold" : "scale-100 font-normal"}
                ${location.pathname === item.to ? "font-semibold border-b-2 border-black dark:border-white pb-1" : ""}
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE NAVIGATION MENU */}
      <div className={`
        md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-b border-[#e0e0e0] dark:border-gray-800
        transition-all duration-300 ease-in-out overflow-hidden
        ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
      `}>
        <div className="flex flex-col px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => handleClick(item.label)}
              className={`
                font-serif text-lg py-3 no-underline text-black dark:text-white border-b border-gray-100 dark:border-gray-900 last:border-none
                ${location.pathname === item.to ? "font-bold text-[#d32f2f]" : ""}
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar