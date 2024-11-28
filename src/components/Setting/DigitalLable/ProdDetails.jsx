import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { center } from "../../../styles/theme";
import Lable from "./Lable";
import logo from "../../../Assets/images/logo.png";
import DLbg from "../../../Assets/images/DLbg.png";
import name from "../../../Assets/images/logoname.png";
import ObliqueLine from "../../UI/ObliqueLine";
import Title from "../../UI/Title";
import { separateBy3, toPersian } from "../../../utils/setting";
import { useSelector } from "react-redux";
import { FullScreen } from "@chiragrupani/fullscreen-react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import apiRouts from "../../../utils/apiRouts";
export const ProdDetails = () => {
    const { signleProd } = useSelector((state) => state.product);
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
                pt: 5,
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
                        height: fullScrenn ? "100dvh" : "90dvh",
                        width: fullScrenn ? "100dvw`" : "65dvw",
                        backgroundImage: `url(${DLbg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        pt: 5,
                    }}
                >
                    <Box sx={{ position: "absolute" }}>
                        {!fullScrenn ? (
                            <FullscreenIcon
                                onClick={() => screenHandler(true)}
                                fontSize="medium"
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
                                fontSize="medium"
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
                                position: "relative",
                            }}
                        >
                            <Box
                                sx={{
                                    bgcolor: "#BFF102",
                                    height: "15%",
                                    width: "15%",
                                    position: "absolute",
                                    top: 40,
                                    right: 40,
                                    borderRadius: "50%",
                                    p: 3,
                                    ...center

                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "24px",
                                        textAlign: "center",
                                        fontWeight: '900'
                                    }}
                                >
                                    {toPersian(25 ?? 0)}%
                                </Typography>
                            </Box>
                            <img
                                src={`${apiRouts.baseUrl}${signleProd?.productpic_path}`}
                                alt="fruitBasket"
                                style={{ width: "80%", height: "100%" }}
                            />
                        </Box>
                        <Box sx={{ height: "100%", width: "60%" }}>
                            <Title
                                title={signleProd?.title}
                                Typoprops={{
                                    fontSize: "65px",
                                    fontWeight: 700,
                                    color: (theme) => theme.palette.text.card,
                                    textAlign: "start",
                                }}
                            />
                            <Box sx={{ ...center, justifyContent: "start" }}>
                                <Typography
                                    sx={{
                                        fontSize: "70px",
                                        textAlign: "start",
                                        fontWeight: "800",
                                        color: (theme) => theme.palette.warning.main,
                                        // width: "100%",
                                    }}
                                >
                                    {toPersian(separateBy3(signleProd?.price ?? 0))}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "50px",
                                        textAlign: "start",
                                        fontWeight: "500",
                                        color: (theme) => theme.palette.warning.main,
                                        // width: "100%",
                                    }}
                                >
                                    تومان
                                </Typography>
                            </Box>
                            <Box sx={{ ...center, justifyContent: "start", gap: "10px" }}>
                                <Typography
                                    sx={{
                                        p: 1,
                                        fontSize: "24px",
                                        textAlign: "center",
                                        fontWeight: "500",
                                        color: (theme) => theme.palette.text.primary,
                                        bgcolor: "#72BF01",
                                        borderRadius: "12px",
                                    }}
                                >
                                    هرکیوگرم
                                </Typography>
                                <ObliqueLine
                                    title={separateBy3(signleProd?.originalprice ?? 0)}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            height: "48%",
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
                            <Lable
                                bg={"#72BF01"}
                                title={"انرژی"}
                                info={signleProd?.meta?.energy}
                            />
                            <Lable
                                bg={"#72BF01"}
                                title={"قند"}
                                info={signleProd?.meta?.sugar}
                            />
                            <Lable
                                bg={"#72BF01"}
                                title={"چربی"}
                                info={signleProd?.meta?.fat}
                            />
                            <Lable
                                bg={"#72BF01"}
                                title={"پرویتين"}
                                info={signleProd?.meta?.protein}
                            />
                            <Lable
                                bg={"#BFF102"}
                                title={"ویتامین"}
                                info={signleProd?.meta?.vitamin1}
                            />
                            <Lable
                                bg={"#BFF102"}
                                title={"ویتامین"}
                                info={signleProd?.meta?.vitamin2}
                            />
                        </Box>
                        <Typography
                            sx={{
                                textAlign: "center",
                                my: 2,
                                fontSize: "24px",
                                fontWeight: "700",
                            }}
                        >
                            {signleProd?.meta?.advantage ?? "مفید برای سلامتی"}
                        </Typography>
                        <Box sx={{ ...center, flexDirection: "column" }}>
                            <img src={logo} width={50} height={50} />
                            <img src={name} width={80} height={40} />
                        </Box>
                    </Box>
                </Box>
            </FullScreen>
        </Box>
    );
};
