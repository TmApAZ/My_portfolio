import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion"; // assuming you have motion utility functions

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <Card
        sx={{
          maxWidth: 360,
          backgroundColor: "rgba(30, 30, 30, 0.9)",
          borderRadius: 2,
          padding: 2,
          color: "white",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="230"
            image={image}
            alt={name}
            sx={{ borderRadius: 2 }}
          />
          <IconButton
            onClick={() => window.open(source_code_link, "_blank")}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "white",
              borderRadius: "50%",
            }}
          >
            <AlternateEmailIcon />
          </IconButton>
        </Box>
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mt: 1 }}>
            {description}
          </Typography>
          <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1, color:'#ffffff' }}>
            {tags.map((tag) => (
              <Chip
                key={tag.name}
                label={`#${tag.name}`}
                sx={{ fontSize: 14, backgroundColor: tag.color }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Tilt>
  </motion.div>
);

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
      My work
      </p>
      <Typography variant="p" fontSize={60} fontWeight="bold" color="white">
        Projects.
      </Typography>
    </motion.div>

    <Box sx={{ mt: 3, maxWidth: "720px" }}>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        style={{ color: "#b3b3b3", fontSize: "17px", lineHeight: "30px" }}
      >
        Your project description or introductory text goes here.
      </motion.p>
    </Box>

    <Grid container spacing={4} sx={{ mt: 5, justifyContent: "center" }}>
      {projects.map((project, index) => (
        <Grid item key={`project-${index}`} xs={12} sm={6} md={4} lg={3}>
          <ProjectCard index={index} {...project} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default SectionWrapper(Works, "works");
