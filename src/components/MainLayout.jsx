import { ThemeProvider, Box } from "@mui/material";

import theme from "../styles/theme";
import SideBar from "./Layout/SideBar";
import MainHeader from "./Layout/MainHeader";

import reactRouts from "../utils/reactRouts";
import { useLocation } from "react-router-dom";
import { FullScreen, DocumentFullScreen } from "@chiragrupani/fullscreen-react";
import { useState } from "react";
import { setFullscrenn } from "../Redux/Slices/general";
import { useDispatch, useSelector } from "react-redux";
import SecondaryHeader from "./Layout/SecondaryHeader";
import { onChangevalue } from "../Redux/Slices/Keyboard/keyboard";
import KeyBoard from "./UI/KeyBoard";

function MainLayout({ children }) {
    // let [isFullScreen, setFullScreen] = useState(false);

    const { isfullScrenn } = useSelector((state) => state.general);
    const { show } = useSelector((state) => state.keyboard);
    const dispatch = useDispatch();

    const hideElement = [reactRouts.auth.signIn, reactRouts.customer.main];
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
