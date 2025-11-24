// Navbar.jsx
// -------------
// This component renders the top navigation bar for your site.
// It uses:
// - MUI (Material UI) components for layout and styling (AppBar, Toolbar, Button, etc.)
// - React Router's Link component for client-side navigation between pages
// - A small piece of React state to animate the clicked nav item

import * as React from "react"
// useState is a React Hook for managing local component state (here: which item is clicked)
import { useState } from "react"

// React Router's Link component (renamed to RouterLink)
// lets MUI components act as links that change the URL without reloading the page.
import { Link as RouterLink } from "react-router-dom"

// MUI components used to build the navbar's structure
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

// navItems is the list of links that appear on the right side of the navbar.
// Each item has:
// - label: the text that appears on the button (e.g. "Projects")
// - to: the URL path that React Router navigates to (e.g. "/projects")
const navItems = [
  { label: "Projects", to: "/projects" },
  { label: "Writing", to: "/writing" }, // Creative writing and essays
  { label: "Learning Blog", to: "/learning" }, // Learning and blog content
  { label: "Funsies", to: "/funsies" },
]

// The Navbar component itself.
// It is a function component that returns JSX.
function Navbar() {
  // clickedItem holds the label of the nav item that was most recently clicked.
  // - null means: no item is currently "active" for animation.
  // - a string (e.g. "Projects") means: animate that specific item.
  const [clickedItem, setClickedItem] = useState(null)

  // handleClick is called whenever a nav item (or the logo) is clicked.
  // It sets clickedItem to the label string so we know which item to animate.
  const handleClick = (label) => {
    // Mark this item as clicked (so we can scale and bold it).
    setClickedItem(label)

    // After 400ms, reset clickedItem back to null.
    // This lets the item smoothly return to its normal state after the animation.
    setTimeout(() => {
      setClickedItem(null)
    }, 400)
  }

  // The JSX returned by the Navbar component.
  // AppBar is the outer container at the top of the page.
  return (
    <AppBar
      // position="static" means the bar is placed in normal page flow,
      // not fixed to the viewport (it scrolls with the content).
      position="static"
      // component="nav" makes the AppBar render as a <nav> element for better semantics.
      component="nav"
      // elevation={0} removes the default drop shadow under the bar.
      elevation={0}
      // sx is MUI's styling prop that takes a style object.
      sx={{
        // Horizontal padding inside the AppBar (left and right).
        px: 4,
        // Vertical padding for breathing room (top and bottom).
        py: 2,
        // Pure white background - The New Yorker style.
        backgroundColor: "#ffffff",
        // Near-black text color for high contrast and readability.
        color: "#000000",
        // Subtle bottom border - New Yorker uses a thin dividing line.
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      {/* Toolbar provides horizontal layout and spacing inside the AppBar. */}
      <Toolbar
        // disableGutters removes the Toolbar's default left/right padding.
        disableGutters
        // justifyContent="space-between" pushes left and right contents apart.
        sx={{ justifyContent: "space-between" }}
      >
        {/* LEFT SIDE: Site title / logo - The New Yorker style elegant serif */}
        <Typography
          // variant="h5" applies MUI's h5 text size (slightly larger, more prominent).
          variant="h5"
          // component={RouterLink} makes this Typography behave like a <a> link
          // powered by React Router (no full page reload).
          component={RouterLink}
          // to="/" is the path for your home route.
          to="/"
          // When the title/logo is clicked, trigger the same animation logic.
          onClick={() => handleClick("logo")}
          // sx is the style object for this Typography.
          sx={{
            // Remove underline that links normally have.
            textDecoration: "none",
            // Near-black color matching The New Yorker aesthetic.
            color: "#000000",
            // Regular weight - The New Yorker uses elegant but not heavy type.
            fontWeight: 400,
            // Classic serif font stack - Garamond is The New Yorker's signature typeface.
            fontFamily: "'EB Garamond', 'Crimson Text', 'Garamond', Georgia, serif",
            // Wide letter spacing for refined, spacious feel.
            letterSpacing: "1px",
            // Smooth transition for subtle hover effects.
            transition: "opacity 0.2s ease",
            // inline-block is required for the CSS transform to work properly.
            display: "inline-block",
            // &:hover defines styles when the user hovers over the title/logo.
            "&:hover": {
              // Slight fade on hover - very subtle, very New Yorker.
              opacity: 0.7,
            },
          }}
        >
          {/* Replace with your name in elegant title case. */}
          Yimin's Site
        </Typography>

        {/* RIGHT SIDE: Navigation buttons - The New Yorker style understated links */}
        <Box
          // Box is a generic flex container for laying out the nav buttons in a row.
          sx={{
            display: "flex",
            // More generous gap between nav items for breathing room.
            gap: 3,
          }}
        >
          {/* Map over navItems to render one Button per nav item. */}
          {navItems.map((item) => (
            <Button
              // key helps React track each item in the list.
              key={item.label}
              // color="inherit" uses the AppBar's text color for the button text.
              color="inherit"
              // Make this Button behave as a React Router link.
              // It still looks like a MUI Button, but acts like a <Link>.
              component={RouterLink}
              // The React Router path to navigate to (e.g. "/projects").
              to={item.to}
              // When the button is clicked, call handleClick with its label.
              onClick={() => handleClick(item.label)}
              // disableRipple removes MUI's default ripple effect.
              disableRipple
              // sx defines the visual style and animation behavior.
              sx={{
                // Prevent MUI from auto-transforming text to uppercase.
                textTransform: "none",
                // Small, refined font size - The New Yorker uses understated nav.
                fontSize: 14,
                // Classic serif font family matching the logo.
                fontFamily: "'EB Garamond', 'Crimson Text', 'Garamond', Georgia, serif",
                // Wide letter spacing for elegance.
                letterSpacing: "0.8px",
                // Regular weight - not bold, keeps it refined.
                fontWeight: 400,
                // Near-black text matching the overall aesthetic.
                color: "#000000",
                // Smooth opacity transition for hover effect.
                transition: "opacity 0.2s ease, border-bottom 0.2s ease",
                // Remove default button padding for tighter, more text-like appearance.
                padding: "4px 0",
                // Minimum width to prevent text jumping.
                minWidth: "auto",
                // Bottom border - transparent by default.
                borderBottom: "1px solid transparent",
                // If this is the clicked item, show a subtle underline.
                ...(clickedItem === item.label && {
                  borderBottom: "1px solid #000000",
                }),
                // Hover styles: The New Yorker's signature subtle fade.
                "&:hover": {
                  // Fade to gray on hover - very refined.
                  opacity: 0.6,
                  // Keep background transparent (no highlight box).
                  backgroundColor: "transparent",
                  // Show subtle underline on hover.
                  borderBottom: "1px solid #cccccc",
                },
                // &:active applies while the button is actively being clicked.
                "&:active": {
                  // Disable any click shadow styling.
                  boxShadow: "none",
                  // Full underline on click.
                  borderBottom: "1px solid #000000",
                },
                // &:focus applies when the button gets keyboard focus (e.g., via Tab).
                "&:focus": {
                  // Remove focus shadow.
                  boxShadow: "none",
                  // Remove default focus outline.
                  outline: "none",
                },
              }}
            >
              {/* The visible text on the button, e.g. "Projects", "Writing", etc. */}
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

// Export the Navbar component as the default export so it can be imported as:
// import Navbar from "./components/Navbar"
export default Navbar