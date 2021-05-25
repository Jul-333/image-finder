import { createMuiTheme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";

export const theme = createMuiTheme({
  palette: createPalette({
    primary: {
      main: "#f10f0f",
    },
    secondary: {
      main: "#757575",
      light: "#fff",
    },
  }),
});
