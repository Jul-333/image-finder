import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    primary: Palette['primary'];
    secondary: Palette['secondary'];
  }
  interface PaletteOptions {
    primary?: PaletteOptions['primary'];
    secondary?: PaletteOptions['secondary'];
  }

}

const theme = createMuiTheme({
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

export default theme;
