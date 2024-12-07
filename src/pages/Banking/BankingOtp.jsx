import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import logoNm from "../../Assets/images/logoname.png";
import logo from "../../Assets/images/logo.png";
import Timer from "../../components/UI/Timer";

import { useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import Input from "../../components/UI/Input";
import Input2 from "../../components/UI/Input2";
import { center } from "../../styles/theme";
import { useDispatch } from "react-redux";
import { OTPRequest, VerifyOTP } from "../../Redux/Slices/Accounting/Bank/Bank";


function BankingOtp() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const time = new Date();
    time.setSeconds(time.getSeconds() + 120);

    const bankingOtpHandler = () => {
        dispatch(VerifyOTP())

    };

    useEffect(() => {
        dispatch(OTPRequest())
    }, [])
    return (
        <Box sx={{ ...center, height: "80vh", gap: "15px" }}>
            <Paper
                elevation={0}
                sx={{ background: (theme) => theme.background.box, width: "50%", p: 4 }}
            >
                <Box sx={{ ...center, flexDirection: "column" }}>
                    <img src={logo} width={90} height={80} />
                    <img src={logoNm} />
                </Box>

                <Box sx={{ ...center, flexDirection: "column", gap: "15px", m: 2 }}>
                    <Typography
                        sx={{
                            fontSize: 16,
                            fontWeight: "medium",
                            color: (theme) => theme.typography.color,
                            mt: 2,
                        }}
                    >
                        رمز پیامک شده را برای ورود به بخش بانکداری وارد کنید.
                    </Typography>


                    <Input
                        type={"number"}
                        placeholder={"پیامک ارسال شده به شماره همراه خود را وارد کنید"}

                    />

                    <Timer expiryTimestamp={time} />
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.text.secondary,
                            width: "65%",
                            p: 2,
                        }}
                        onClick={() => bankingOtpHandler()}
                    >
                        <Typography sx={{ color: "white" }}>
                            ورود به بخش بانکداری آرتــاپــوز
                        </Typography>
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default BankingOtp;
