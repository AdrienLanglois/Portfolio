import { Box, Typography } from "@mui/material";
import ContactForm from "./contactForm";

export default function ContactPage() {
  return (
    <Box sx={{mt:'15vh', display:'flex',flexDirection: 'column', justifyContent:'center', alignItems:'center',}}>
        <Typography variant="h3" color="secondary.main">
            Let's get in touch ! 
        </Typography>
        <Typography variant='h6' color="text.primary" sx={{mb:3, mt:1}}>
            send me a message
        </Typography>

        <ContactForm/>
    </Box>
  )
}