import {
    Autocomplete,
    Box,
    Button,
    Divider,
    Grid,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import Title from "../UI/Title";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { separateBy3, toPersian } from "../../utils/setting";
import ReciveForDl from "../Payment/ReciveForDl";
import CheckRegister from "./CheckRegister";
import Input from "../UI/Input";
import TransactionpartyDg from "../HomePage/Dialogs/TransactionpartyDg";
import { center } from "../../styles/theme";
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from "react-redux";

function FormSection() {
    const [checkStep, setStep] = useState(false);
    const [openTransaction, setOpenTransaction] = useState(false);
    const { TransActionList } = useSelector(state => state.transactionsSlice)
    const showTransactionDialoghandler = () => {
        setOpenTransaction(true);
    };
    const handlerCloseTransactionDialog = () => {
        setOpenTransaction(false);
    };


    const stephandler = () => {
        setStep(!checkStep);
    };
    return (
        <>
            {!checkStep ? (
                <Box
                    sx={{
                        width: "60%",
                        bgcolor: (theme) => theme.background.box,
                        borderRadius: "18px",
                        height: "100%",
                        p: 1,
                        overflowY: "scroll",
                    }}
                >
                    <Box sx={{ ...center, justifyContent: "space-between" }}>
                        <Title
                            title={"دریافتی‌ها"}
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
                                        fontWeight: 400,
                                        color: (theme) => theme.typography.color,
                                    }}
                                >
                                    طرف معامله
                                </Typography>
                            </InputLabel>
                            <Box
                                sx={{
                                    ...center,
                                    bgcolor: (theme) => theme.background.field,
                                    borderRadius: "12px",
                                }}
                            >
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={TransActionList}
                                    getOptionLabel={(option) => `${option?.title}`}
                                    sx={{ width: 300, color: "#000000" }}
                                    renderOption={(props, option) => (
                                        <Box
                                            // component="li"
                                            sx={{ ...center, gap: "5px" }}
                                            {...props}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: 500,
                                                    color: (theme) => theme.palette.text.primary,
                                                }}
                                            >{`${option?.fname} ${option?.lname} `}</Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: 500,
                                                    color: (theme) => theme.palette.text.primary,
                                                }}
                                            >{`${toPersian(option?.phone1)} `}</Typography>
                                        </Box>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            sx={{
                                                color: "#000", background: "#F2F2F2", borderRadius: "12px",
                                                "& .MuiNativeSelect-select": {
                                                    color: "black",
                                                },
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#f2f2f2",
                                                },
                                            }}
                                            autoComplete="none"
                                            {...params}
                                            placeholder={"جستوجو طرف معامله"}
                                            inputProps={{
                                                ...params.inputProps,
                                                autoComplete: "none", // disable autocomplete and autofill
                                            }}
                                            InputProps={{
                                                ...params.InputProps,
                                                sx: {
                                                    "& .MuiInputBase-input": {
                                                        color: "#000000",
                                                    },
                                                },
                                            }}
                                        />
                                    )}
                                />

                                <Box
                                    onClick={() => showTransactionDialoghandler()}
                                    sx={{
                                        bgcolor: (theme) => theme.palette.text.secondary,
                                        height: "100%",
                                        p: 1,
                                        borderRadius: "50px",
                                        cursor: "pointer",
                                        ...center,
                                    }}
                                >

                                    <AddIcon
                                        fontSize="medium"
                                        sx={{ fill: (theme) => theme.palette.text.primary }}
                                    />
                                </Box>
                                <TransactionpartyDg
                                    status={openTransaction}
                                    handlerCloseDialog={handlerCloseTransactionDialog}
                                />
                            </Box>
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
                                    جزییات
                                </Typography>
                            </InputLabel>
                            <Box
                                sx={{
                                    ...center,
                                    bgcolor: (theme) => theme.background.field,
                                    borderRadius: "12px",
                                    justifyContent: "space-between",
                                    p: 1.75,
                                }}
                            >
                                <Box sx={{ ...center, gap: "10px" }}>
                                    <Typography
                                        sx={{
                                            p: 1,
                                            borderRadius: "4px",
                                            bgcolor: (theme) => theme.palette.darkBlue.main,
                                            fontSize: "10px",
                                            fontWeight: 700,
                                            color: (theme) => theme.palette.text.primary,
                                            px: 1,
                                        }}
                                    >
                                        {toPersian("09138090933")}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            p: 1,
                                            borderRadius: "4px",
                                            bgcolor: (theme) => theme.palette.darkBlue.main,
                                            fontSize: "10px",
                                            fontWeight: 700,
                                            color: (theme) => theme.palette.text.primary,
                                            px: 1,
                                        }}
                                    >
                                        مشتری
                                    </Typography>
                                    <Typography
                                        sx={{
                                            p: 1,
                                            borderRadius: "4px",
                                            bgcolor: (theme) => theme.palette.green.main,
                                            fontSize: "10px",
                                            fontWeight: 700,
                                            color: (theme) => theme.palette.text.primary,
                                            px: 1,
                                        }}
                                    >
                                        {toPersian(separateBy3("4500000"))}ریال
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        p: 1,
                                        borderRadius: "4px",
                                        bgcolor: (theme) => theme.palette.warning.main,
                                        fontSize: "10px",
                                        fontWeight: 700,
                                        color: (theme) => theme.palette.text.primary,
                                        px: 3,
                                    }}
                                >
                                    بدهکار
                                </Typography>
                            </Box>
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
                                    مبلغ را وارد کنید:
                                </Typography>
                            </InputLabel>
                            <Input
                                height={"55px"}
                                hasText={true}
                                type={"number"}
                                placeholder={"مبلغ را وارد کنید"}
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
                                    به حساب:
                                </Typography>
                            </InputLabel>
                            <TextField
                                select
                                sx={{
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "white",
                                    },
                                }}
                                fullWidth
                                id="input-with-icon-textfield"
                                placeholder="حساب"
                                InputProps={{
                                    style: {
                                        background: "#F2F2F2",
                                        color: "#000",
                                        direction: "ltr",
                                    },
                                }}
                                variant="outlined"
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option value="">
                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                            color: (theme) => theme.typography.color,
                                            fontWeight: 400,
                                        }}
                                    >
                                        حساب
                                    </Typography>
                                </option>
                            </TextField>
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
                                    بابت:
                                </Typography>
                            </InputLabel>
                            <TextField
                                select
                                sx={{
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "white",
                                    },
                                }}
                                fullWidth
                                id="input-with-icon-textfield"
                                placeholder="بابت"
                                InputProps={{
                                    style: {
                                        background: "#F2F2F2",
                                        color: "#000",
                                        direction: "ltr",
                                    },
                                    startAdornment: (
                                        <>
                                            <InputAdornment position="start">
                                                <ReciveForDl title="دلیل پرداختی" />
                                            </InputAdornment>
                                        </>
                                    ),
                                }}
                                variant="outlined"
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option value="">
                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                            color: (theme) => theme.typography.color,
                                            fontWeight: 400,
                                        }}
                                    >
                                        بابت
                                    </Typography>
                                </option>
                            </TextField>
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
                                    تاریخ:
                                </Typography>
                            </InputLabel>

                            <Input
                                height={"55px"}
                                hasText={false}
                                type={"date"}
                                placeholder={"مبلغ را وارد کنید"}
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
                                    عملیات:
                                </Typography>
                            </InputLabel>

                            <Button
                                onClick={() => stephandler()}
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: (theme) => theme.palette.darkBlue.main,
                                    borderRadius: "12px",
                                    color: (theme) => theme.palette.text.primary,
                                    height: "55px",
                                }}
                            >
                                ثبت چک
                            </Button>
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

                            <Input
                                height={"auto"}
                                hasIcon={false}

                                type={"text"}
                                placeholder="توضیحات خود را وارد کنید"
                            />
                        </Grid>
                    </Grid>

                    <Divider sx={{ mt: 3 }} flexItem />
                    <Box sx={{ ...center, p: 2, justifyContent: "space-evenly" }}>
                        <Box sx={{ ...center, gap: "10px" }}>
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                تعداد چک:
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    color: (theme) => theme.palette.darkBlue.main,
                                }}
                            >
                                {toPersian("5")}
                                عدد چک
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box sx={{ ...center, gap: "10px" }}>
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                مبلغ:
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    color: (theme) => theme.palette.darkBlue.main,
                                }}
                            >
                                {toPersian(separateBy3("5600000"))}
                                ریال
                            </Typography>
                        </Box>
                    </Box>
                    <Divider flexItem />


                </Box>
            ) : (
                <CheckRegister stephandler={stephandler} />
            )}
        </>
    );
}

export default FormSection;
