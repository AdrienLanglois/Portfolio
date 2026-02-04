import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const drawerWidth = 240;
const navItems = ['Home', 'Projects', 'Contact'];
const title = 'Adrien Langlois'

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // menu for mobile version
  const drawer = (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography color='secondary.main' sx={{ my: 2 }}>
          {title}
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} color='secondary.main' />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>

  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" color="transparent" sx={{ backgroundColor: "background.paper" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width:'80%', m:'auto' }}>
          {/* My name for big screen */}
          <Typography
            variant='h5'
            color='secondary'
            sx={{ display: { xs: 'none', sm: 'block' } }}

          >
            {title}
          </Typography>
          {/* My name for mobile */}
          <Typography
            variant='h6'
            color='secondary'
            sx={{ display: { xs: 'block', sm: 'none' } }}

          >
            {title}
          </Typography>

          {/* Big Screen Menu */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button variant='text' key={item} color='primary' sx={{ ml: 3 }}>
                <Typography variant='h6' sx={{ fontWeight: "bold" }}>
                  {item}
                </Typography>
              </Button>
            ))}
          </Box>

          {/* Burger Menu Button */}
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#F9F9F9' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <nav>{drawer}</nav>
    </Box>
  );
}

export default Header;