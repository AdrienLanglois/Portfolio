import { Avatar, Box, Button, Typography } from "@mui/material";


const widthMd = 300
const widthLg = 300
const widthXxl = 300
const responsiveSize = {xs:{widthMd}, md: {widthMd}, lg:{widthLg}, xxl: {widthXxl}}

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        minHeight: '100vh',
      }}
    >
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        alignItems: {xs:'center', md:'end'},
        textAlign: {xs:'center', md: 'right'},
        mt:{xs:3, md:0},
        mr:{xs:0, md: 3},
        width: responsiveSize
        }}>
        <Typography variant="h6" >
          Hey, my name is
        </Typography>

        <Typography variant="h4" my={1} color="secondary.main" style={{fontWeight:'bold'}}>
          Adrien Langlois
          </Typography>

        <Typography variant="h5" color="primary.main" sx={{ mb: 2 }}>
          Full Stack Developer
        </Typography>

        <Typography variant="h6" sx={{maxWidth: {xs:'none', md:'25vw'}}}>
          Constantly focused on learning and expanding my expertise, crafting ever-improving, high-performance solutions.
        </Typography>

        <Button variant="contained" sx={{mt:3}}>
          Check out my projects
        </Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Avatar alt="Adrien Langlois" src="src/assets/avatar.jpg" sx={{ height: {xs: '250px',sm:'300px',md:'400px',  xl:'500px'}, width: {xs: '250px',sm:'300px',md:'400px', xl:'500px'} }} />
      </Box>
    </Box>)
}

export default Home