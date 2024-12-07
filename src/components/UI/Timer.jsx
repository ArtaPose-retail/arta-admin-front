import React from "react";
import { useTimer } from "react-timer-hook";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { OTPRequest } from "../../Redux/Slices/Accounting/Bank/Bank";
import { useDispatch } from "react-redux";



function Timer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        isRunning,
        restart,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn("onExpire called"),
    });


    const dispatch = useDispatch()


    return (
        <Box>
            {isRunning ? (
                <Typography
                    sx={{
                        fontSize: 12,
                        fontWeight: 400,
                        my: 2
                    }}
                >
                    ایا پیامکی برای شما ارسال نشد؟
                    ارسال مجدد تا {minutes}:{seconds} ثانیه دیگر
                </Typography>
            ) : (

                <Button
                    onClick={() => {
                        const time = new Date();
                        time.setSeconds(time.getSeconds() + 120);
                        restart(time);
                        dispatch(OTPRequest())
                    }}
                    fullWidth
                    sx={{
                        borderRadius: "16px",
                        my: 2,
                        color: theme => theme.palette.text.secondary
                    }}

                    variant="contained"
                >
                    <Typography
                        sx={{
                            fontWeight: 400,
                            color: theme => theme.palette.text.primary
                        }}
                    >
                        ارسال مجدد
                    </Typography>
                </Button>
            )
            }
        </Box >
    );
}

export default Timer;
