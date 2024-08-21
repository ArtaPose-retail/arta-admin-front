import {
    Box,
    Divider,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import logo from "../../Assets/images/logo.png";
import name from "../../Assets/images/logoname.png";
import SigninAD from '../../components/SigninAD';
import reactRouts from "../../utils/reactRouts";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#3A5DF0",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    width: "90%"
}));

const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
function SignIn() {
    const Navigate = useNavigate()

    const loginhandler = () => {
        Navigate(reactRouts.home)
    }

    return (
        <Box sx={{ flexGrow: 1, p: 1 }}>
            <Grid container spacing={2} sx={{ width: "100%" }}>
                <Grid item xs={4.5} sx={{ height: "100vh" }}>
                    <Item sx={{ p: 3, height: "100%" }}>
                        <SigninAD />
                    </Item>
                </Grid>
                <Grid item xs={7} sx={{ height: "100vh", width: "100%" }}>
                    <Box
                        sx={{
                            ...center,
                            flexDirection: "column",
                            height: "100%",
                            justifyContent: "space-evenly",
                            // border: "1px solid red",
                            width: "100%"
                        }}
                    >
                        <Box sx={{ ...center, flexDirection: "column" }}>
                            <img src={logo} width={150} height={110} />
                            <img src={name} width={150} height={40} />
                        </Box>
                        <Box
                            sx={{
                                ...center,
                                flexDirection: "column",
                                gap: "25px",
                                width: "80%",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: (theme) => theme.typography.color,
                                    fontSize: "18px",
                                    fontWeight: "500",
                                }}
                            >
                                اطلاعات خود را برای ورود به نرم‌افزار وارد کنید.
                            </Typography>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="نام‌کاربری / شماره همراه خود را وارد کنید"
                                InputProps={{
                                    shirink: true,
                                    style: {
                                        backgroundColor: "transparent",
                                        color: "#000000",
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                // label="Outlined"
                                variant="outlined"
                                placeholder="رمز عبور خود را وارد کنید"
                                InputProps={{
                                    shirink: true,
                                    style: {
                                        backgroundColor: "transparent",
                                        color: "#000000",
                                    },
                                }}
                            />
                            {/* <Box sx={{ ...center, mt: 3 }}>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: "500",
                                    }}
                                >
                                    آیا رمز عبور خود را فراموش کرده‌اید؟
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.text.secondary,
                                        fontSize: "18px",
                                        fontWeight: "500",
                                    }}
                                >
                                    کلیک کنید.
                                </Typography>
                            </Box> */}
                            <Box
                                onClick={() => loginhandler()}
                                variant="outline"
                                sx={{
                                    backgroundColor: (theme) => theme.palette.text.secondary,
                                    color: (theme) => theme.palette.text.primary,
                                    borderRadius: (theme) => theme.shape.borderRadius,
                                    p: 2,
                                    textAlign: "center",
                                    width: "100%",
                                    cursor: "pointer"
                                }}
                            >
                                ورود به نرم‌افزار آرتـاپـوز
                            </Box>



                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SignIn;
