// src/pages/Projects.jsx
// This page displays your projects in The New Yorker website style
// Three-column grid layout with images, category labels, and editorial design

// Import Material-UI components for layout and styling
import Box from "@mui/material/Box" // Flexible container component (like a <div> with superpowers)
import Card from "@mui/material/Card" // Card container for each project
import CardContent from "@mui/material/CardContent" // Area inside card for main content
import CardMedia from "@mui/material/CardMedia" // Component for displaying images
import Typography from "@mui/material/Typography" // Text component with built-in styling variants

// The New Yorker uses classic serif fonts for body text
const serifFont = "'EB Garamond', 'Crimson Text', 'Garamond', Georgia, serif"

// Array of project objects - each contains data for one project card
// This separation of data from presentation makes it easy to add/edit projects
const projects = [
  {
    title: "Experiential Map", // Project name displayed as card heading
    category: "DESIGN / RESEARCH", // Category label in red (The New Yorker style)
    description:
      "An interactive world map that visualizes how different activities are salient in different countries, using LLM scoring and map exploration.",
    link: "#", // URL to project (use "#" as placeholder if not ready)
    image: null, // Placeholder for project image - add URL here later
  },
  {
    title: "Neural Decoding Analysis",
    category: "COMPUTATIONAL NEUROSCIENCE",
    description:
      "Logistic regression and PCA based decoders for calcium imaging data, decoding choice and force direction across sessions.",
    link: "#",
    image: null,
  },
  {
    title: "Personal Website",
    category: "LEARNING REACT",
    description:
      "This site you are looking at right now. A space to experiment with design, writing, and small projects.",
    link: "#",
    image: null,
  },
]

// Main Projects component - renders the entire projects page
function Projects() {
  return (
    // Main container Box - The New Yorker style with full width and generous margins
    <Box
      sx={{
        maxWidth: "1200px", // Wider max width for three-column layout
        margin: "0 auto", // Center the content horizontally
        padding: { xs: 3, md: 6 }, // Responsive padding: smaller on mobile, larger on desktop
        backgroundColor: "#ffffff", // Pure white background
      }}
    >
      {/* Page heading - The New Yorker style centered title */}
      <Typography
        variant="h3" // Large heading
        component="h1" // Renders as <h1> tag for SEO and accessibility
        sx={{
          mb: 1, // Small margin bottom
          fontWeight: 600, // Slightly bolder for main heading
          fontFamily: "'Irvin Heading', Georgia, serif", // The New Yorker's display font
          letterSpacing: "0px", // Tight letter spacing for display text
          color: "#000000", // Pure black
          fontSize: { xs: "2.5rem", md: "3rem" }, // Responsive sizing
          textAlign: "center", // Center the heading
        }}
      >
        Projects
      </Typography>

      {/* Subtitle - Brief description with The New Yorker's understated style */}
      <Typography
        variant="body1" // Regular body text
        sx={{
          mb: 6, // Large margin before grid (6 * 8px = 48px)
          color: "#707070", // Medium gray
          fontFamily: serifFont, // Serif for body text
          fontSize: "1rem",
          lineHeight: 1.5,
          textAlign: "center", // Center the subtitle
        }}
      >
        A few things I have built or worked on recently.
      </Typography>

      {/* Projects grid - The New Yorker's three-column layout */}
      <Box
        sx={{
          display: "grid",
          // Three columns on desktop, two on tablet, one on mobile
          gridTemplateColumns: {
            xs: "1fr", // Mobile: 1 column
            sm: "repeat(2, 1fr)", // Tablet: 2 columns
            md: "repeat(3, 1fr)", // Desktop: 3 columns
          },
          gap: 4, // Gap between cards (4 * 8px = 32px)
        }}
      >
        {/* Loop through projects array and create a Card for each one */}
        {projects.map((project) => (
          <Card
            key={project.title} // Unique key for React list rendering
            elevation={0} // No shadow - flat design like The New Yorker
            component="a" // Render Card as an <a> tag to make entire card clickable
            href={project.link !== "#" ? project.link : undefined} // Only add href if valid link exists
            target={project.link !== "#" ? "_blank" : undefined} // Open in new tab if valid link
            rel={project.link !== "#" ? "noreferrer" : undefined} // Security for external links
            sx={{
              display: "flex", // Flexbox layout
              flexDirection: "column", // Stack content vertically
              textDecoration: "none", // Remove underline from link
              color: "inherit", // Use default text color, not blue link color
              cursor: project.link !== "#" ? "pointer" : "default", // Show pointer only if clickable
              transition: "transform 0.2s ease", // Smooth transition for hover
              backgroundColor: "transparent", // No background
              border: "none", // No border
              // The New Yorker hover effect - subtle lift
              "&:hover":
                project.link !== "#"
                  ? {
                      transform: "translateY(-4px)", // Lift card slightly
                    }
                  : {},
            }}
          >
            {/* Image or placeholder - The New Yorker style 4:3 aspect ratio */}
            {project.image ? (
              <CardMedia
                component="img"
                image={project.image}
                alt={`${project.title} preview`}
                sx={{
                  width: "100%",
                  aspectRatio: "4 / 3", // The New Yorker's standard image ratio
                  objectFit: "cover", // Crop image to fit
                  mb: 2, // Margin below image
                }}
              />
            ) : (
              // Placeholder box if no image
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "4 / 3", // Match image ratio
                  backgroundColor: "#e8e8e8", // Light gray placeholder
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2, // Margin below placeholder
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#999999", // Muted gray text
                    fontFamily: serifFont,
                    fontStyle: "italic",
                  }}
                >
                  Image placeholder
                </Typography>
              </Box>
            )}

            {/* CardContent - Main text content */}
            <CardContent
              sx={{
                padding: 0, // Remove default padding for tight layout
                "&:last-child": { paddingBottom: 0 }, // Remove bottom padding on last child
              }}
            >
              {/* Category label - The New Yorker's signature red uppercase label */}
              <Typography
                variant="overline" // Small uppercase text variant
                sx={{
                  color: "#d32f2f", // The New Yorker's signature red
                  fontFamily: "'Graphik', 'Helvetica Neue', Arial, sans-serif", // Sans-serif for labels
                  fontSize: "0.75rem", // Small size
                  fontWeight: 700, // Bold
                  letterSpacing: "0.08em", // Wide letter spacing
                  mb: 1, // Small margin below
                  display: "block", // Force block display
                }}
              >
                {project.category}
              </Typography>

              {/* Project title - The New Yorker style serif headline */}
              <Typography
                variant="h6" // h6 size for card titles
                component="h2" // Renders as <h2> for proper heading hierarchy
                sx={{
                  fontWeight: 600, // Semi-bold for emphasis
                  mb: 1, // Small margin bottom
                  fontFamily: "'Irvin Heading', Georgia, serif", // The New Yorker's display font
                  letterSpacing: "0px", // Tight spacing
                  color: "#000000", // Pure black
                  fontSize: "1.25rem", // Readable size
                  lineHeight: 1.3, // Tight line height for headlines
                }}
              >
                {project.title}
              </Typography>

              {/* Project description - The New Yorker's body copy style */}
              <Typography
                variant="body2" // Smaller body text
                sx={{
                  fontFamily: serifFont, // Serif for body text
                  color: "#333333", // Dark gray for readability
                  lineHeight: 1.5, // Standard line height
                  fontSize: "0.95rem", // Slightly smaller for card text
                  letterSpacing: "0.01em", // Subtle letter spacing
                }}
              >
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

// Export the Projects component so it can be imported in other files (like App.jsx)
export default Projects