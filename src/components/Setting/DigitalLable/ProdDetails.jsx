import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { center } from "../../../styles/theme";
import Lable from "./Lable";
import logo from "../../../Assets/images/logo.png";
import DLbg from "../../../Assets/images/DLbg.png";
import name from "../../../Assets/images/logoname.png";
import ObliqueLine from "../../UI/ObliqueLine";
import fruitBasket from "../../../Assets/images/Fruits/fruitBasket.png";
import Title from "../../UI/Title";
import { separateBy3, toPersian } from "../../../utils/setting";
import { useSelector } from "react-redux";
import { singleProd } from "../../../Redux/Slices/Accounting/Products/product";
import { FullScreen } from "@chiragrupani/fullscreen-react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
export const ProdDetails = () => {
    const { signleProd } = useSelector(state => state.product)
    const [fullScrenn, setFullScrenn] = useState(false);
    const screenHandler = (status) => {
        setFullScrenn(status);
    };
    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: (theme) => theme.background.box,
                height: "100%",
                ...center,
                // border: "1px solid red",

            }}
        >
            <FullScreen
                isFullScreen={fullScrenn}
                onChange={(isFull) => {
                    setFullScrenn(isFull);
                }}
            >

                <Box
                    sx={{
                        height: fullScrenn ? "100dvh" : "80dvh",
                        width: fullScrenn ? "100dvw`" : "60dvw",
                        backgroundImage: `url(${DLbg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        // border: "1px solid red",
                    }}
                >
                    <Box
                        sx={{
                            height: "50%",
                            width: "100%",
                            ...center,
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                width: "40%",
                                ...center,
                            }}
                        >
                            <img
                                src={fruitBasket}
                                alt="fruitBasket"
                                style={{ width: "60%", height: "100%" }}
                            />
                        </Box>
                        <Box sx={{ height: "100%", width: "60%" }}>
                            <Title
                                title={signleProd?.title}
                                Typoprops={{
                                    fontSize: "70px",
                                    fontWeight: 700,
                                    color: (theme) => theme.palette.text.card,
                                    textAlign: "center",
                                }}
                            />
                            <Typography
                                sx={{
                                    fontSize: "80px",
                                    textAlign: "center",
                                    fontWeight: "900",
                                    color: (theme) => theme.palette.warning.main,
                                    width: "100%",
                                }}
                            >
                                {toPersian(separateBy3("380000"))}
                                تومان
                            </Typography>
                            <Box sx={{ ...center, justifyContent: "start", gap: "10px" }}>
                                <ObliqueLine title={separateBy3("400000")} />
                                <Typography
                                    sx={{
                                        fontSize: "24px",
                                        textAlign: "center",
                                        fontWeight: "500",
                                        color: (theme) => theme.palette.primary.main,
                                    }}
                                >
                                    هرکیوگرم
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            height: "50%",
                            width: "100%",
                            ...center,
                            flexDirection: "column",
                        }}
                    >
                        <Box
                            sx={{
                                height: "30%",
                                width: "100%",
                                ...center,
                                alignItems: "start",
                                gap: "10px",
                            }}
                        >
                            <Lable title={"انرژی"} info={singleProd?.meta?.energy} />
                            <Lable title={"قند"} info={singleProd?.meta?.sugar} />
                            <Lable title={"چربی"} info={singleProd?.meta?.fat} />
                            <Lable title={"پرویتين"} info={singleProd?.meta?.protein} />
                            <Lable title={"ویتامین"} info={singleProd?.meta?.vitamin1} />
                            <Lable title={"ویتامین"} info={singleProd?.meta?.vitamin2} />
                        </Box>
                        <Typography
                            sx={{
                                textAlign: "center",
                                my: 2,
                                fontSize: "24px",
                                fontWeight: "700",
                            }}
                        >
                            {singleProd?.meta?.advantage ?? "مفید برای سلامتی"}
                        </Typography>
                        <Box sx={{ ...center, flexDirection: "column" }}>
                            <img src={logo} width={50} height={50} />
                            <img src={name} width={80} height={40} />
                        </Box>
                    </Box>
                    {!fullScrenn ? (
                        <FullscreenIcon
                            onClick={() => screenHandler(true)}
                            fontSize="large"
                            sx={{
                                fill: (theme) => theme.background.box,
                                bgcolor: (theme) => theme.palette.text.secondary,
                                borderRadius: "8px",
                                m: 1,

                                cursor: "pointer",
                            }}
                        />
                    ) : (
                        <FullscreenExitIcon
                            onClick={() => screenHandler(false)}
                            fontSize="large"
                            sx={{
                                fill: (theme) => theme.background.box,
                                bgcolor: (theme) => theme.palette.text.secondary,
                                borderRadius: "8px",
                                m: 1,
                                cursor: "pointer",
                            }}
                        />
                    )}
                </Box>

            </FullScreen>
        </Box>
    );
};
