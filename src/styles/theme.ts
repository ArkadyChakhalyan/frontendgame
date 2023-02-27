import { createTheme } from "@mui/material";
import { cyan, grey } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: cyan[500],
        },
    },
    typography: {
        fontFamily: 'Poppins',
        allVariants: {
            color: grey[50]
        }
    },
    breakpoints: {
        values: {
            'xs': 400,
            'sm': 600,
            'md': 900,
            'lg': 1200,
            'xl': 1536
        }
    }
});