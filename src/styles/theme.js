import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    direction: "rtl",
    background: {
        default: "#F5F6F8",
        header: "#212121",
        box: "#FFFFFF",
        darkBlue: "#3A5DF0",
        field: "#F2F2F2"
    },
    palette: {
        primary: {
            main: "#45BFFF",
            second: "#6cccff"
        },
        secondary: { main: "#FF7782" },

        text: {
            primary: "#FFFFFF",
            secondary: "#345BFF",
            card: "#49576A",
            lightgray: "#C9D5E7"
        },
        disable: {
            main: "#98A4B5",
            secondary: "#6D6D6D"
        },
        darkBlue: { main: "#3A5DF0" },
        icon: {
            primary: "#41669A",
        },
        divider: "#98A4B5",
        menu: {
            main: "#41669A",
            secondary: "#AFCEFC",
        },
        green: {
            main: "#2CC644",
        },
        warning: {
            main: "#FF5462",
            secondary: "#FF9C54"
        },
    },
    typography: {
        fontFamily: "IRANSansWeb",
        color: "#6D6D6D",
    },
    shape: {
        borderRadius: 10,
        borderColor: "#DEDEDE",
    },
});

export default theme;

export const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
