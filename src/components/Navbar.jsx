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
  { label: "Learning Blog", to: "/writing" }, // Combined Learning and Blog
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

    // After 600ms, reset clickedItem back to null.
    // This lets the item smoothly return to its normal state after the animation.
    setTimeout(() => {
      setClickedItem(null)
    }, 600)
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
        px: 3,
        // Pure black background (Notion-style dark mode).
        backgroundColor: "#000000",
        // Soft off-white text color.
        color: "#e8e8e8",
      }}
    >
      {/* Toolbar provides horizontal layout and spacing inside the AppBar. */}
      <Toolbar
        // disableGutters removes the Toolbar’s default left/right padding.
        disableGutters
        // justifyContent="space-between" pushes left and right contents apart.
        sx={{ justifyContent: "space-between" }}
      >
        {/* LEFT SIDE: Site title / logo */}
        <Typography
          // variant="h6" applies MUI's h6 text size and style.
          variant="h6"
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
            // Inherit the parent color (the AppBar's text color).
            color: "inherit",
            // Make the text semi-bold.
            fontWeight: 600,
            // Use your chosen serif font stack for a Goudy-style feel.
            fontFamily:
              "'Goudy Bookletter 1911', 'Crimson Text', 'EB Garamond', Georgia, serif",
            // Slight letter spacing for a more elegant look.
            letterSpacing: "0.5px",
            // Smooth transition for scale changes (used in hover and click).
            transition: "transform 0.3s ease",
            // inline-block is required for the CSS transform to work properly.
            display: "inline-block",
            // If clickedItem === "logo", scale up the text; otherwise normal size.
            transform: clickedItem === "logo" ? "scale(1.15)" : "scale(1)",
            // &:hover defines styles when the user hovers over the title/logo.
            "&:hover": {
              // Slightly enlarge the logo on hover (5% bigger).
              transform: "scale(1.05)",
            },
          }}
        >
          {/* Replace "Your Name" with your real name. */}
          Your Name
        </Typography>

        {/* RIGHT SIDE: Navigation buttons */}
        <Box
          // Box is a generic flex container for laying out the nav buttons in a row.
          sx={{
            display: "flex",
            // gap defines the spacing between buttons (in theme spacing units).
            gap: 1.5,
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
              // disableRipple removes MUI's default ripple effect to keep your
              // custom animation more prominent.
              disableRipple
              // sx defines the visual style and animation behavior.
              sx={{
                // Prevent MUI from auto-transforming text to uppercase.
                textTransform: "none",
                // Base font size for the button label - increased from 14 to 16
                fontSize: 16,
                // Same serif font family as the title, for a consistent look.
                fontFamily:
                  "'Goudy Bookletter 1911', 'Crimson Text', 'EB Garamond', Georgia, serif",
                // Slight letter spacing.
                letterSpacing: "0.5px",
                // Smooth transitions for scale and font-size changes.
                transition: "transform 0.3s ease, font-size 0.3s ease",
                // If this button was the last clicked, slightly enlarge it;
                // otherwise, show it at normal size.
                transform: clickedItem === item.label ? "scale(1.2)" : "scale(1)",
                // Make the text bolder when this is the clicked item.
                fontWeight: clickedItem === item.label ? 700 : 400,
                // Hover styles: these apply while the mouse is over the button.
                "&:hover": {
                  // Slight scale-up on hover for a "breathing" effect.
                  transform: "scale(1.1)",
                  // Make the label semi-bold on hover.
                  fontWeight: 600,
                  // Keep background transparent so it feels more "text-like".
                  backgroundColor: "transparent",
                },
                // &:active applies while the button is actively being clicked.
                "&:active": {
                  // Disable any click shadow styling.
                  boxShadow: "none",
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
              {/* The visible text on the button, e.g. "Projects", "Learning", etc. */}
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
