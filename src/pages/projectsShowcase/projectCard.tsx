import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, Divider } from '@mui/material';
import type { Project } from '../../data/projects';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';

interface ProjectCardProps{
  project: Project
}

const cardActionCSS = {height:'100%', display: 'flex', flexDirection:'column', justifyContent:'start', alignItems:'unset'}

export default function ProjectCard({project}: ProjectCardProps) {

  return (
    <Card>
      <CardActionArea sx={cardActionCSS}>
        {/* Image/Video */}
        <Box sx={{ height: '25vh', overflow: "hidden" }}>
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
          <Typography gutterBottom variant="h5" component="div" color='primary.main'>
            {project.title}
          </Typography>

          <Box sx={{display:'flex', flexDirection:'row', gap:'30px'}}>
            <Box sx={{display:'flex', flexDirection: 'row', gap:'3px'}}>
              <AccessTimeIcon/>
              <Typography>{project.duration}</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection: 'row', gap:'3px'}}>
              <GroupsIcon/>
              <Typography>{project.teamMembersCount}</Typography>
            </Box>
          </Box>
          <Divider sx={{borderColor:'white', my:2}}/>
          <Typography variant="body1">    
            {project.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}