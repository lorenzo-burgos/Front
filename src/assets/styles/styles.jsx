import { createTheme } from '@mui/material/styles';
import {
    primaryColor,
    primaryHighlight,
    backgroundColor,
    secondaryColor,
    secondaryHighlight,
    textColor,
    textHighlightColor,
    fontTitle,
    fontText,
    shadow,
} from '../../utils/themeUtils';

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            light: primaryHighlight,
        },
        secondary: {
            main: secondaryColor,
            light: secondaryHighlight,
        },
        background: {
            default: backgroundColor,
        },
        text: {
            primary: textColor,
            secondary: textHighlightColor,
        },
    },
    typography: {
        h1: {
            fontSize: "3rem",
            fontWeight: 600,
            fontFamily: fontTitle,
        },
        h2: {
            fontSize: "1.75rem",
            fontWeight: 600,
            fontFamily: fontTitle,
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 600,
            fontFamily: fontTitle,
        },
        body1: {
            fontFamily: fontText,
        },
    },
});
  
  export default theme;