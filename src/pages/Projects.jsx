// src/pages/Projects.jsx
// This page displays your projects in a responsive grid layout
// Each project is shown as a card with title, role, description, and optional link

// Import Material-UI components for layout and styling
import Box from "@mui/material/Box" // Flexible container component (like a <div> with superpowers)
import Card from "@mui/material/Card" // Card container for each project
import CardContent from "@mui/material/CardContent" // Area inside card for main content
import Typography from "@mui/material/Typography" // Text component with built-in styling variants

// Font stack matching your navbar for visual consistency
// Goudy-style serif fonts with fallbacks to ensure something always loads
const serifFont =
  "'Goudy Bookletter 1911', 'Crimson Text', 'EB Garamond', Georgia, serif"

// Array of project objects - each contains data for one project card
// This separation of data from presentation makes it easy to add/edit projects
const projects = [
  {
    title: "Experiential Map", // Project name displayed as card heading
    role: "Design / Research / Frontend", // Your role or technologies used
    description:
      "An interactive world map that visualizes how different activities are salient in different countries, using LLM scoring and map exploration.",
    link: "#", // URL to project (use "#" as placeholder if not ready)
    image: null, // Placeholder for project image - add URL here later (e.g., "/images/experiential-map.png")
  },
  {
    title: "Neural Decoding Analysis",
    role: "Computational Neuroscience",
    description:
      "Logistic regression and PCA based decoders for calcium imaging data, decoding choice and force direction across sessions.",
    link: "#",
    image: null, // Placeholder for project image
  },
  {
    title: "Personal Website",
    role: "Learning React + MUI",
    description:
      "This site you are looking at right now. A space to experiment with design, writing, and small projects.",
    link: "#",
    image: null, // Placeholder for project image
  },
]

// Main Projects component - renders the entire projects page
function Projects() {
  return (
    // Main container Box - wraps the entire page content
    <Box>
      {/* Page heading - Main title for the Projects page */}
      <Typography
        variant="h4" // Uses h4 size from Material-UI's typography scale
        component="h1" // Renders as <h1> tag for SEO and accessibility (largest heading)
        sx={{
          mb: 2, // Margin bottom: 2 (uses theme spacing, usually 2 * 8px = 16px)
          fontWeight: 600, // Semi-bold weight for prominence
          fontFamily: serifFont, // Apply Goudy-style serif font for elegance
          letterSpacing: "0.5px", // Slight spacing between letters for refined look
        }}
      >
        Projects
      </Typography>

      {/* Subtitle - Brief description of what's on this page */}
      <Typography
        variant="body1" // Regular body text size (slightly larger than body2)
        sx={{
          mb: 3, // Margin bottom: 3 (3 * 8px = 24px) for spacing before cards
          color: "text.secondary", // Uses theme's secondary text color (lighter gray)
          fontFamily: serifFont, // Match heading font for consistency
        }}
      >
        A few things I have built or worked on recently.
      </Typography>

      {/* Grid container - Creates staggered masonry-style layout */}
      <Box
        sx={{
          display: "grid", // CSS Grid for flexible layout
          // Two columns on medium+ screens, 1 column on mobile
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, // xs = extra small (mobile), md = medium (tablet+)
          gap: 3, // Larger gap between cards (3 * 8px = 24px) for breathing room
          // Stagger the cards by adding different top margins to odd/even items
          "& > *:nth-of-type(odd)": {
            marginTop: { xs: 0, md: "40px" }, // Odd cards (1st, 3rd) pushed down 40px on larger screens
          },
          "& > *:nth-of-type(even)": {
            marginTop: { xs: 0, md: "0px" }, // Even cards (2nd, 4th) stay at top on larger screens
          },
        }}
      >
        {/* Loop through projects array and create a Card for each one */}
        {/* .map() transforms each project object into a Card component */}
        {projects.map((project) => (
          <Card
            key={project.title} // Unique key for React list rendering (required for performance)
            variant="outlined" // Outlined style = border but no shadow (cleaner, minimal look)
            component="a" // Render Card as an <a> tag to make entire card clickable
            href={project.link !== "#" ? project.link : undefined} // Only add href if valid link exists
            target={project.link !== "#" ? "_blank" : undefined} // Open in new tab if valid link
            rel={project.link !== "#" ? "noreferrer" : undefined} // Security for external links
            sx={{
              display: "flex", // Flexbox layout for card interior
              flexDirection: "column", // Stack content vertically (image → title → role → desc)
              padding: 0, // No padding - let CardContent handle spacing
              minHeight: "450px", // Taller cards for staggered effect
              textDecoration: "none", // Remove underline from link
              color: "inherit", // Use default text color, not blue link color
              cursor: project.link !== "#" ? "pointer" : "default", // Show pointer only if clickable
              transition: "all 0.2s ease", // Smooth transition for hover effects
              "&:hover": project.link !== "#" ? {
                // Only apply hover effect if card has valid link
                transform: "translateY(-8px)", // Lift card up more (8px) for dramatic effect
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Stronger shadow on hover
              } : {},
            }}
          >
            {/* Image placeholder - Shows when image URL is provided, otherwise shows gray box */}
            {project.image ? (
              // If project has an image, display it
              <Box
                component="img"
                src={project.image}
                alt={`${project.title} preview`}
                sx={{
                  width: "30%",
                  height: "220px", // Taller image for better proportion
                  objectFit: "cover", // Crop image to fit without distortion
                  borderRadius: "4px 4px 0 0", // Rounded top corners only
                }}
              />
            ) : (
              // If no image, show placeholder box
              <Box
                sx={{
                  width: "100%",
                  height: "220px", // Taller placeholder
                  backgroundColor: "#2a2a2a", // Dark gray placeholder in dark mode
                  borderRadius: "4px 4px 0 0", // Rounded top corners only
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#606060", // Muted gray text
                    fontFamily: serifFont,
                  }}
                >
                  Image placeholder
                </Typography>
              </Box>
            )}

            {/* CardContent - Main content area of the card */}
            <CardContent>
              {/* Project title - Main heading for each card */}
              <Typography
                variant="h6" // h6 size - smaller than page title but prominent for cards
                component="h2" // Renders as <h2> for proper heading hierarchy (h1 > h2)
                sx={{
                  fontWeight: 600, // Semi-bold for card titles
                  mb: 0.5, // Small margin bottom (0.5 * 8px = 4px) - tight spacing
                  fontFamily: serifFont, // Goudy font for consistency
                  letterSpacing: "0.3px", // Subtle letter spacing for elegance
                }}
              >
                {project.title} {/* Display the project title from data array */}
              </Typography>

              {/* Role/Technology label - Shows your role or tech stack */}
              <Typography
                variant="body2" // Smaller body text (body2 < body1)
                sx={{
                  color: "text.secondary", // Lighter gray color for less emphasis
                  mb: 1.5, // Margin bottom (1.5 * 8px = 12px) before description
                  fontFamily: serifFont, // Match page font
                }}
              >
                {project.role} {/* Display role from data (e.g., "Design / Research") */}
              </Typography>

              {/* Project description - Explains what the project is about */}
              <Typography
                variant="body2" // Small body text size
                sx={{
                  fontFamily: serifFont, // Consistent serif font
                }}
              >
                {project.description} {/* Display full description from data */}
              </Typography>
            </CardContent>

            {/* Spacer Box - Pushes content to fill card height */}
            {/* flexGrow: 1 means this box expands to fill available vertical space */}
            {/* This ensures all cards have equal height in the grid */}
            <Box sx={{ flexGrow: 1 }} />
          </Card>
        ))}
      </Box>
    </Box>
  )
}

// Export the Projects component so it can be imported in other files (like App.jsx)
export default Projects
