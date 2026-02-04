import { createTheme } from "@mui/material";

const bgColor = '#201E1F'

const paletteTheme = createTheme( {
  palette: {
    primary: {
        main: '#F58A07',
    },
    secondary: {
        main: '#A288E3',        
    },
    text: {
      primary: '#F9F9F9'
    },
    background: {
      default : bgColor,
      paper: '#151414'
    }
  },
})

export const theme = createTheme({
  ...paletteTheme,

  typography: {
        fontFamily: '"Poppins", Arial, sans-serif',
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: bgColor,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor:'#2a2729',
          height: '50vh',
          borderRadius: '20px'
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: paletteTheme.palette.secondary.main,
          color: paletteTheme.palette.text.primary,
          fontWeight: 'bold',
          fontSize: '1.1em',
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: paletteTheme.palette.secondary.dark
          } 
        }
      }
    },

    // sx={{
              //   "&.Mui-selected": {
              //     bgcolor: "secondary.main",
              //     color: "primary.contrastText",
              //     "&:hover": {
              //       bgcolor: "secondary.dark",
              //     },
              //   },
              //   color: 'secondary.main',
              //   borderColor: 'secondary.dark',
              //   minWidth: '100px'
              // }}
    
    
  },
});