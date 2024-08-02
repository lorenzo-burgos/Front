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
        
    },
});
  
  export default theme;