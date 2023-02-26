import { createTheme } from "@mui/material";
import { green, grey } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: green[700],
            dark: green[800],
        },
    },
    typography: {
        fontFamily: 'Poppins',
        allVariants: {
            color: grey[50]
        }
    },
});