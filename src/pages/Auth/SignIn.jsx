import {
    Box,
    Button,
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
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, setLogininfo } from "../../Redux/Slices/Auth/auth";
import { center } from "../../styles/theme"
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#3A5DF0",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    width: "90%"
}));

function SignIn() {

    const dispatch = useDispatch()

    const { loginInfo } = useSelector((state) => state.auth)
    const loginhandler = () => {

        dispatch(LoginAction())
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
                                onChange={(e) => dispatch(setLogininfo({
                                    key: "emailorphone",
                                    value: e.target.value
                                }))}
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
                                onChange={(e) => dispatch(setLogininfo({
                                    key: "password",
                                    value: e.target.value
                                }))}
                                placeholder="رمز عبور خود را وارد کنید"
                                InputProps={{
                                    shirink: true,
                                    style: {
                                        backgroundColor: "transparent",
                                        color: "#000000",
                                    },
                                }}
                            />

                            <Button
                                onClick={() => loginhandler()}
                                variant="outline"
                                disabled={loginInfo.password.length > !0 ? false : true}
                                sx={{
                                    backgroundColor: (theme) => theme.palette.text.secondary,
                                    color: (theme) => theme.palette.text.primary,
                                    borderRadius: (theme) => theme.shape.borderRadius,
                                    p: 2,
                                    textAlign: "center",
                                    width: "100%",
                                    cursor: "pointer",

                                    ":hover": {
                                        backgroundColor: (theme) => theme.palette.primary.light,
                                    }
                                }}
                            >
                                ورود به نرم‌افزار آرتـاپـوز
                            </Button>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SignIn;
