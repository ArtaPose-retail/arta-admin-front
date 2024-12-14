import {
    Box,
    Button,
    Divider,
    Grid,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import Title from "../UI/Title";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TransactionDialog from "../HomePage/Dialogs/defineFactorSteps/TransactionDialog";
import { separateBy3, toPersian } from "../../utils/setting";
import ReciveForDl from "../Payment/ReciveForDl";
import CheckCard from "../UI/CheckCard";

function CheckRegister({ stephandler }) {
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <Box
            sx={{
                width: "60%",
                bgcolor: (theme) => theme.background.box,
                borderRadius: "18px",
                height: "1005",
                p: 1,
                overflowY: "scroll",
            }}
        >
            <Box sx={{ ...center, justifyContent: "space-between" }}>
                <Title
                    title={"پرداختی‌ها / ثبت چک"}
                    Typoprops={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: (theme) => theme.palette.text.card,
                    }}
                />
                <MoreVertIcon sx={{ cursor: "pointer" }} />
            </Box>
            <Grid container spacing={2} sx={{ p: 1 }}>
                <Grid item xs={6}>
                    <InputLabel>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 500,
                                color: (theme) => theme.typography.color,
                            }}
                        >
                            بانک
                        </Typography>
                    </InputLabel>
                    <TextField
                        type="text"
                        placeholder="بانک خود را وارد کنید"
                        fullWidth
                        sx={{
                            "& .MuiNativeSelect-select": {
                                color: "black",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                            borderRadius: "18px",
                        }}
                        InputProps={{
                            // startAdornment: (
                            //     <InputAdornment position="start">
                            //         <TransactionDialog />
                            //     </InputAdornment>
                            // ),
                            style: {
                                background: "#F2F2F2",
                                color: "#000",
                                direction: "ltr",
                                // height: "40px",
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 500,
                                color: (theme) => theme.typography.color,
                            }}
                        >
                            حساب
                        </Typography>
                    </InputLabel>
                    <TextField
                        type="text"
                        placeholder="حساب..."
                        fullWidth
                        sx={{
                            "& .MuiNativeSelect-select": {
                                color: "black",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                            borderRadius: "18px",
                        }}
                        InputProps={{
                            // startAdornment: (
                            //     <InputAdornment position="start">
                            //         <TransactionDialog />
                            //     </InputAdornment>
                            // ),
                            style: {
                                background: "#F2F2F2",
                                color: "#000",
                                direction: "ltr",
                                // height: "40px",
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 400,
                                color: (theme) => theme.typography.color,
                            }}
                        >
                            مبلغ چک را وارد کنید:
                        </Typography>
                    </InputLabel>
                    <TextField
                        placeholder="مبلغ چک را وارد کنید:"
                        type="number"
                        fullWidth
                        sx={{
                            "& .MuiNativeSelect-select": {
                                color: "black",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                            borderRadius: "18px",
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            color: (theme) => theme.palette.disable.main,
                                        }}
                                    >
                                        ریال
                                    </Typography>
                                </InputAdornment>
                            ),
                            style: {
                                background: "#F2F2F2",
                                color: "#000",
                                direction: "ltr",
                                // height: "40px",
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 400,
                                color: (theme) => theme.typography.color,
                            }}
                        >
                            تاریخ چک را انتخاب کنید:
                        </Typography>
                    </InputLabel>
                    <TextField
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                        fullWidth
                        id="input-with-icon-textfield"
                        placeholder="تاریخ چک را انتخاب کنید"
                        InputProps={{
                            style: {
                                background: "#F2F2F2",
                                color: "#000",
                                direction: "ltr",
                            },
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 400,
                                color: (theme) => theme.typography.color,
                            }}
                        >
                            کدملی:
                        </Typography>
                    </InputLabel>
                    <TextField
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                        fullWidth
                        id="input-with-icon-textfield"
                        placeholder="کدملی صاحب چک ..."
                        InputProps={{
                            style: {
                                background: "#F2F2F2",
                                color: "#000",
                                direction: "ltr",
                            },
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 400,
                                color: (theme) => theme.typography.color,
                            }}
                        >
                            در وجه:
                        </Typography>
                    </InputLabel>
                    <TextField
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                        fullWidth
                        id="input-with-icon-textfield"
                        placeholder="در وجه..."
                        InputProps={{
                            style: {
                                background: "#F2F2F2",
                                color: "#000",
                                direction: "ltr",
                            },
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 400,
                                color: (theme) => theme.typography.color,
                            }}
                        >
                            شماره چک:
                        </Typography>
                    </InputLabel>
                    <TextField
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                        fullWidth
                        id="input-with-icon-textfield"
                        placeholder="شماره چک..."
                        InputProps={{
                            style: {
                                background: "#F2F2F2",
                                color: "#000",
                                direction: "ltr",
                            },
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 400,
                                color: (theme) => theme.typography.color,
                            }}
                        >
                            شماره صیادی:
                        </Typography>
                    </InputLabel>
                    <TextField
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                        fullWidth
                        id="input-with-icon-textfield"
                        placeholder="شماره صیادی..."
                        InputProps={{
                            style: {
                                background: "#F2F2F2",
                                color: "#000",
                                direction: "ltr",
                            },
                        }}
                        variant="outlined"
                    />
                </Grid>

                <Grid item xs={12}>
                    <InputLabel>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 400,
                                color: (theme) => theme.typography.color,
                            }}
                        >
                            توضیحات:
                        </Typography>
                    </InputLabel>
                    <TextField
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                            bgcolor: "#F2F2F2",
                            borderRadius: "12px",
                        }}
                        inputProps={{
                            style: {
                                color: "#000",
                                direction: "rtl",
                                padding: "0px",
                            },
                        }}
                        fullWidth
                        placeholder="توضیحات خود را وارد کنید"
                        multiline
                        maxRows={8}
                    />
                </Grid>
            </Grid>
            <Box sx={{ ...center, p: 2, justifyContent: "space-between", gap: "15px" }}>
                <Box sx={{ ...center, gap: "15px" }}>

                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                            px: 3,
                        }}
                    >
                        افزودن
                    </Button>
                </Box>
                <Button
                    onClick={() => stephandler()}
                    variant="contained"
                    sx={{
                        bgcolor: (theme) => theme.palette.warning.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 3,
                    }}
                >
                    بازگشت
                </Button>
            </Box>

            <Grid container spacing={2} sx={{ p: 1 }}>
                {[1, 2, 4, 5].map((item, index) => (

                    <Grid item xs={6} key={index}>
                        <CheckCard />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default CheckRegister;
