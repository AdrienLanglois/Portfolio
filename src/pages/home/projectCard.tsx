import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';
import type { Project } from '../../data/projects';

interface ProjectCardProps{
  project: Project
}

export default function ProjectCard({project}: ProjectCardProps) {

  return (
    <Card sx={{minHeight: 320}}>
      <CardActionArea>
        <Box sx={{ height: 180, overflow: "hidden" }}>
        {project.mediaSrc.endsWith(".mp4") ? (
          <video
            src={project.mediaSrc}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <CardMedia
            component="img"
            image={project.mediaSrc}
            alt="Project Title"
            sx={{ height: "100%", objectFit: "cover" }}
          />
        )}

      </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {project.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}