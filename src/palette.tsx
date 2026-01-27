import { createTheme } from "@mui/material";

const mainColor = '#1e1d22'

export const theme = createTheme({
  palette: {
    primary: {
        main: mainColor,
        contrastText: '#111111'
    },
    secondary: {
        main: '#FF5733',        
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: mainColor,
        },
      },
    },
  },
});