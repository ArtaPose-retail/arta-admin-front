import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import FactorItemstable from "./FactorItemstable";
import { toPersian, toastHandler } from "../../../../utils/setting";
import { handlefactorStep } from "../../../../Redux/Slices/HomePage/factor";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import reactRouts from "../../../../utils/reactRouts";

function RegisterFactor({ handleClose }) {
    const dispatch = useDispatch();
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const location = useLocation();
    const navigate = useNavigate();

    const registerBn = () => {
        toastHandler("فاکتور با موفقیت ثبت شد", "info");
        handleClose();
        // if (location.pathname === "/factor") {

        //     navigate(reactRouts.safi.main, {
        //         state: { key: "خریداری" },
        //     })
        // }
    };
    return (
        <Box>
            <Box>
                <Box sx={{ ...center, justifyContent: "space-between", p: 1 }}>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: (theme) => theme.palette.disable.main,
                            my: 0.5,
                        }}
                    >
                        شماره سند:
                        {toPersian("886677")}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: (theme) => theme.palette.disable.main,
                            my: 0.5,
                        }}
                    >
                        طرف معامله: محمدامین رحمتی
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: (theme) => theme.palette.disable.main,
                            my: 0.5,
                        }}
                    >
                        شماره بارنامه / فاکتور:
                        {toPersian("3842")}
                    </Typography>
                </Box>
                <Divider
                    orientation="horizontal"
                    variant="middle"
                    flexItem
                    sx={{ my: 1 }}
                />
            </Box>
            <FactorItemstable height={350} />
            <Box sx={{ ...center, justifyContent: "space-between", mt: 2 }}>
                <Box sx={{ ...center, gap: "5px" }}>
                    <Button
                        onClick={() => registerBn()}
                        variant="contained"
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            bgcolor: (theme) => theme.palette.green.main,
                            fontSize: "16px",
                            fontWeight: 700,
                            px: 4,
                        }}
                    >
                        ثبت
                    </Button>
                    <Button
                        onClick={() => dispatch(handlefactorStep("decrease"))}
                        variant="contained"
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            bgcolor: (theme) => theme.palette.warning.main,
                            fontSize: "16px",
                            fontWeight: 700,
                            px: 3,
                        }}
                    >
                        بازگشت
                    </Button>
                </Box>
                <Button
                    onClick={() => {
                        dispatch(handlefactorStep(1));
                        handleClose();
                    }}
                    variant="contained"
                    sx={{
                        color: (theme) => theme.palette.text.primary,
                        bgcolor: (theme) => theme.palette.warning.main,
                        fontSize: "16px",
                        fontWeight: 700,
                        px: 3,
                    }}
                >
                    انصراف
                </Button>
            </Box>
        </Box>
    );
}

export default RegisterFactor;
