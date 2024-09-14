import { ThemeProvider, Box } from "@mui/material";

import theme from "../styles/theme";
import SideBar from "./Layout/SideBar";
import MainHeader from "./Layout/MainHeader";

import reactRouts from "../utils/reactRouts";
import { useLocation, useNavigate } from "react-router-dom";
import { DocumentFullScreen } from "@chiragrupani/fullscreen-react";

import { setFullscrenn } from "../Redux/Slices/general";
import { useDispatch, useSelector } from "react-redux";
import SecondaryHeader from "./Layout/SecondaryHeader";
import { useEffect } from "react";

function MainLayout({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { isfullScrenn } = useSelector((state) => state.general);
    const { token } = useSelector((state) => state.auth);

    useEffect(() => {
        if (token == null) {
            navigate(reactRouts.auth.signIn)
        }
    }, [])


    const hideElement = [reactRouts.auth.signIn, reactRouts.home, reactRouts.customer.main];
    const showSecondaryHeader = [
        reactRouts.dashbord.main,
        reactRouts.customers.main,
        reactRouts.safi.main,
        reactRouts.checks.main,
        reactRouts.checks.add,
        reactRouts.factor.main,
        reactRouts.products.main,
        reactRouts.reportAcount.main,
    ];

    let showHeader = true;
    let secondaryHeader = false;
    let showSideBar = true;
    const router = useLocation();
    if (hideElement.includes(router.pathname)) {
        (showHeader = false), (showSideBar = false);
        if (router.pathname == reactRouts.home) {
            (showSideBar = true)
        }
    }
    if (showSecondaryHeader.includes(router.pathname)) {
        (showHeader = false), (secondaryHeader = true);
    }

    const onChange = (input) => {
        console.log(input);
        // setInput(input);
        // dispatch(onChangevalue(input));
    };

    return (
        <>
            <DocumentFullScreen
                isFullScreen={isfullScrenn}
                onChange={(isFull) => {
                    // setFullScreen(isFull);
                    dispatch(setFullscrenn(isFull));
                }}
            >
                <ThemeProvider theme={theme}>
                    <Box
                        sx={{ display: "flex", overflowX: "scroll", position: "relative" }}
                    >
                        {showSideBar && <SideBar />}
                        <Box sx={{ width: "90vw" }}>
                            {showHeader && <MainHeader />}
                            {secondaryHeader && <SecondaryHeader />}

                            {children}
                        </Box>
                    </Box>
                </ThemeProvider>
            </DocumentFullScreen>
        </>
    );
}

export default MainLayout;
