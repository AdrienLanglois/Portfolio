import { Grid, Typography, Box, ToggleButtonGroup, ToggleButton, Divider } from "@mui/material";
import ProjectCard from "./projectCard";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import { PROJECTS, type ProjectCategory } from "../../data/projects";

export default function ProjectsSection() {
  const [projectCategory, setProjectCategory] = useState<ProjectCategory>("all")
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false)

  function handleCategoryChange(e: SelectChangeEvent) {
    setProjectCategory(e.target.value as ProjectCategory)
  }

  const catergories: ProjectCategory[] = ['all', 'web', 'software', 'game', 'ai', 'algorithm']

  function menuItem(text: string) {
    if (isCategoryMenuOpen) {
      return <Typography variant="h5" sx={{ mr: 1 }}>{text}</Typography>
    }

    return <Typography variant="h5" sx={{ mr: 1 }}>{text}</Typography>
  }

  return (
    <Box sx={{mt:'15vh', display:'flex', flexDirection:'column', alignItems:'center'}}>

      {/* Title */}
      <Typography 
        variant='h3' 
        sx={{ fontWeight:'bold' }} 
        color="secondary.main"
      >
        My Projects
      </Typography>

      <Divider sx={{width:'10vw', borderColor:'secondary.main', my:3, borderWidth: '1px'}}/>

      {/* Mobile Filter */}
      <FormControl variant="standard" sx={{ mb: 3, display: { sm: 'none', xs: 'flex' } }}>

        <Select
          id="category-label"
          value={projectCategory}
          label="category"
          onChange={handleCategoryChange}
          onOpen={() => setIsCategoryMenuOpen(true)}
          onClose={() => setIsCategoryMenuOpen(false)}
          sx={{
            color: "secondary.main",
            mb:2,

            // underline (border)
            "&:before": {
              borderBottomColor: "secondary.main",
            },
            "&:after": {
              borderBottomColor: "secondary.main",
            },
            "&:hover:not(.Mui-disabled):before": {
              borderBottomColor: "secondary.main",
            },

            // arrow icon
            "& .MuiSelect-icon": {
              color: "secondary.main",
            },
          }}
        >

          <MenuItem value={'all'}>{menuItem("All project")}</MenuItem>
          <MenuItem value={'web'}>{menuItem("Web development")}</MenuItem>
          <MenuItem value={'game'}>{menuItem("Game development")}</MenuItem>
          <MenuItem value={'software'}>{menuItem("Software development")}</MenuItem>
          <MenuItem value={'ai'}>{menuItem("AI")}</MenuItem>
          <MenuItem value={'algorithm'}>{menuItem("Algorithm")}</MenuItem>

        </Select>
      </FormControl>

      {/* Big screen Filter */}
      <Box sx={{ mb: 4, display: { xs: 'none', sm: 'flex' } }}>
        <ToggleButtonGroup
          value={projectCategory}
          exclusive
          onChange={(_, value) => value && setProjectCategory(value)}
          color="secondary"
        >
          {catergories.map((cat, _) => (
            <ToggleButton key={cat} value={cat}
              sx={{
                "&.Mui-selected": {
                  bgcolor: "secondary.main",
                  color: "text.primary",
                  "&:hover": {
                    bgcolor: "secondary.dark",
                  },
                },
                alignItems: 'center',
                borderRadius: '20px',
                color: 'secondary.main',
                fontWeight: 'bold',
                borderColor: 'secondary.dark',
                minWidth: '100px',
              }}
              >
              {cat}  ({cat == 'all' ? PROJECTS.length : PROJECTS.filter((project) => project.category == cat).length})
            </ToggleButton>
          ))}

        </ToggleButtonGroup>
      </Box>

      {/* Project Cards */}
      <Grid container spacing={10} height={500}>
        {projectCategory != "all" ?
          PROJECTS.filter(p => p.category == projectCategory).map((project, index) => (

            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <ProjectCard project={project} />
            </Grid>
          )) :

          PROJECTS.map((project, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <ProjectCard project={project} />
            </Grid>))
        }
      </Grid>
    </Box>
  );
}
