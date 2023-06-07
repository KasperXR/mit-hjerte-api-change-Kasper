import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          wordWrap: "break-word",
          whiteSpace: "break-spaces"
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#B40031"
    },
    secondary: {
      main: "#76B389"
    },
    error: {
      main: red.A400
    }
  }
})

export default theme
