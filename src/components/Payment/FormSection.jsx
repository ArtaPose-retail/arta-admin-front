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
import { separateBy3, toPersian } from "../../utils/setting";
import ReciveForDl from "./ReciveForDl";
import CheckRegister from "./CheckRegister";
import Input from "../UI/Input";
import { center } from "../../styles/theme";
import { useSelector } from "react-redux";
import TransactionpartyDg from "../HomePage/Dialogs/TransactionpartyDg";
import AddIcon from '@mui/icons-material/Add';

function FormSection() {
    const [tabs, setTabs] = useState(2);

    const handleChange = (id) => {
        setTabs(+id);
    };

    const [checkStep, setStep] = useState(false)
    const stephandler = () => {
        setStep(!checkStep)
    }
    const { TransActionList } = useSelector(state => state.transactionsSlice)
    const showTransactionDialoghandler = () => {
        setOpenTransaction(true);
    };
    const handlerCloseTransactionDialog = () => {
        setOpenTransaction(false);
    };
    const [openTransaction, setOpenTransaction] = useState(false);


    return (
        <>
            {!checkStep ? <Box
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
                        title={"پرداختی ها"}
                        Typoprops={{
                            fontSize: "20px",
                            fontWeight: 500,
                            color: (theme) => theme.palette.text.card,
                        }}
                    />
                    <Box
                        sx={{
                            ...center,
                            border: "1px solid #DBDCDE",
                            borderRadius: "7px",
                            gap: "5px",
                            px: 1,
                            p: 0.5,
                        }}
                    >
                        <Button
                            onClick={(e) => handleChange(e.target.id)}
                            id="1"
                            variant="contained"
                            sx={{
                                bgcolor: (theme) =>
                                    tabs === 1
                                        ? theme.palette.divider
                                        : theme.palette.text.primary,
                                color: (theme) =>
                                    tabs === 1
                                        ? theme.palette.text.primary
                                        : theme.palette.disable.main,
                                borderRadius: "7px",
                            }}
                        >
                            {" "}
                            پرداخت
                        </Button>
                        <Button
                            onClick={(e) => handleChange(e.target.id)}
                            id="2"
                            variant="contained"
                            sx={{
                                bgcolor: (theme) =>
                                    tabs === 2
                                        ? theme.palette.divider
                                        : theme.palette.text.primary,
                                color: (theme) =>
                                    tabs === 2
                                        ? theme.palette.text.primary
                                        : theme.palette.disable.main,
                                borderRadius: "7px",
                            }}
                        >
                            هزینه
                        </Button>
                    </Box>

                </Box>
                <Grid container spacing={2} sx={{ p: 1, mt: 1 }}>
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
                                            <ReciveForDl title="دلیل دریافتی" />
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

                <Box sx={{ ...center, p: 2, justifyContent: "flex-start", gap: "15px" }}>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.green.main,
                            color: (theme) => theme.palette.text.primary,
                            px: 3,
                        }}
                    >
                        ثبت
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.warning.main,
                            color: (theme) => theme.palette.text.primary,
                            px: 3,
                        }}
                    >
                        انصراف
                    </Button>
                </Box>
            </Box > : <CheckRegister stephandler={stephandler} />
            }
        </>
    );
}

export default FormSection;
