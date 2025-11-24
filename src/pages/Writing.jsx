// src/pages/Writing.jsx
// This page displays your creative writing, essays, and personal reflections

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

// Reuse the same serif font stack
const serifFont =
  "'Goudy Bookletter 1911', 'Crimson Text', 'EB Garamond', Georgia, serif"

function Writing() {
  return (
    <Box>
      {/* Page heading */}
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 2,
          fontWeight: 600,
          fontFamily: serifFont,
          letterSpacing: "0.5px",
        }}
      >
        Writing
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          color: "#e8e8e8",
          fontFamily: serifFont,
        }}
      >
        Essays, reflections, and thoughts on life, design, and everything in between.
      </Typography>

      {/* Placeholder content - you can add your writing pieces here */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: serifFont,
          color: "#e8e8e8",
          lineHeight: 1.8,
        }}
      >
        Your writing will go here. You can add essays, blog posts, or any creative writing you want to share.
      </Typography>
    </Box>
  )
}

export default Writing
