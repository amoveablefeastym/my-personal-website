// src/pages/Home.jsx
// -------------------
// This is the main landing page ("/").
// Layout: centered column with profile picture, name, short description,
// and a row of social icons that link out to your profiles.

import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"

// Social icons from MUI icons library.
// If you do not have this installed yet, run:
//   npm install @mui/icons-material
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import TwitterIcon from "@mui/icons-material/Twitter" // or X

// Reuse the same serif font stack you used in Navbar / Projects
const serifFont =
  "'Goudy Bookletter 1911', 'Crimson Text', 'EB Garamond', Georgia, serif"

// Import a local profile image.
// 1) Place an image file in src/assets, for example: src/assets/profile.jpg
// 2) Update the path and filename here if your file is named differently.
import profileImage from "../assets/profile.jpg"

function Home() {
  return (
    // Outer Box that centers the content on the page.
    <Box
      sx={{
        // Take at least 70% of the viewport height
        minHeight: "70vh",
        // Use flexbox to center content
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // center horizontally
        justifyContent: "center", // center vertically
        textAlign: "center", // center text inside
      }}
    >
      {/* Profile picture in the middle */}
      <Avatar
        src={profileImage}
        alt="Profile picture of Yimin"
        sx={{
          width: 350, // width in pixels
          height: 350, // height in pixels
          mb: 2, // margin-bottom (space below the avatar)
        }}
      />

      {/* Name */}
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontFamily: serifFont,
          fontWeight: 600,
          letterSpacing: "0.5px",
          mb: 1, // spacing under name
        }}
      >
        Hi! I'm Yimin.
      </Typography>

      {/* Short description under the name */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: 480, // limit line length so it is easier to read
          fontFamily: serifFont,
          color: "#e8e8e8",
          mb: 3, // space before the icons row
        }}
      >
        {/* Replace this with your own intro text. Keep it 2–3 sentences. */}
        I'm an undergraduate student at <strong><u>Northwestern University</u></strong>, studying{" "}
        <strong><u>Computer Science</u></strong>, <strong><u>Cognitive Science</u></strong> and{" "}
        <strong><u>Design</u></strong>.
        <br />
        <br />
        I'm always trying to understand how people <strong><u>think</u></strong>,{" "}
        <strong><u>feel</u></strong>, and <strong><u>move through the world</u></strong>. I split my time
        between building interfaces, studying the brains, and writing about the messy parts of
        being human.
        <br />
        <br />
        This site is where those threads meet. Part portofolio, part journal, part playground, 
        a little bit of everything that makes me me, very much still in progress.
      </Typography>

      {/* Row of social icons */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
        }}
      >
        {/* GitHub */}
        <IconButton
          component="a"
          href="https://github.com/amoveablefeastym"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          sx={{
            color: "#e8e8e8",
            "&:hover": { color: "#c0c0c0" },
          }}
        >
          <GitHubIcon fontSize="medium" />
        </IconButton>

        {/* LinkedIn */}
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/yimin-huang-nu"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          sx={{
            color: "#e8e8e8",
            "&:hover": { color: "#c0c0c0" },
          }}
        >
          <LinkedInIcon fontSize="medium" />
        </IconButton>

        {/* Email */}
        <IconButton
          component="a"
          href="mailto:h1683618346@gmail.com"
          aria-label="Email"
          sx={{
            color: "#e8e8e8",
            "&:hover": { color: "#c0c0c0" },
          }}
        >
          <EmailIcon fontSize="medium" />
        </IconButton>

        {/* Twitter / X (optional, remove if you don’t use it) */}
        <IconButton
          component="a"
          href="https://twitter.com/your-handle"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          sx={{
            color: "#e8e8e8",
            "&:hover": { color: "#c0c0c0" },
          }}
        >
          <TwitterIcon fontSize="medium" />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default Home

