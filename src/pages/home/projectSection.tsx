import { Grid, Container } from "@mui/material";
import ProjectCard from "./projectCard";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import { PROJECTS, type ProjectCategory } from "../../data/projects";


export default function ProjectsSection() {
  const [projectCategory, setProjectCategory] = useState<ProjectCategory>("all")

  function handleCategoryChange(e: SelectChangeEvent){
    setProjectCategory(e.target.value as ProjectCategory)
  }

  return (
    <Container sx={{ py: 6}} >

      <FormControl fullWidth>
        <InputLabel 
          id="category-input" 
          sx={{color:'white'}}
        >
          Development Category
        </InputLabel>

        <Select
          labelId="category-label"
          id="category-label"
          value={projectCategory}
          label="category"
          onChange= {handleCategoryChange}
          sx={{color:'white', borderColor:"white", backgroundColor:'grey'}}
        >
          <MenuItem value={'all'}>All Projects</MenuItem>
          <MenuItem value={'web'}>Web Development</MenuItem>
          <MenuItem value={'game'}>Game Development</MenuItem>
          <MenuItem value={'software'}>Software Development</MenuItem>
          <MenuItem value={'ai'}>AI</MenuItem>
          <MenuItem value={'algorithm'}>Algorithm</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} height={500}>
        {projectCategory != "all" ?
          PROJECTS.filter(p => p.category == projectCategory).map((project, index) => (
            
            <Grid key={index} size={{xs:12, md:6}}>
              <ProjectCard project={project}/>
            </Grid>
          )) :

        PROJECTS.map((project, index) => (
            <Grid key={index} size={{xs:12, md:6}}>
              <ProjectCard project={project}/>
            </Grid>))
        }
      </Grid>
    </Container>
  );
}
