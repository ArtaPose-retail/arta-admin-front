import {
    Autocomplete,
    Box,
    Button,
    Divider,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import LableCard from "./LableCard";
import theme, { center } from "../../styles/theme";
import Description from "./Dialogs/Description";
import PersonIcon from "@mui/icons-material/Person";
import TransactionpartyDg from "./Dialogs/TransactionpartyDg";
import { toPersian } from "../../utils/setting";
import Input from "../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../Redux/Slices/Accounting/Transactions/transactionsSlice";
import { setTransactionInfo } from "../../Redux/Slices/Actions/SellPage/sellPage";

function NewFactor() {
    const dispatch = useDispatch();
    const { TransActionList } = useSelector((state) => state.transactionsSlice);
    const { transactionInfo } = useSelector((state) => state.sellPage);
    const [open, setOpen] = useState(false);
    const [openTransaction, setOpenTransaction] = useState(false);

    const showDialoghandler = () => {
        setOpen(true);
    };
    const handlerCloseDialog = () => {
        setOpen(false);
    };
    const showTransactionDialoghandler = () => {
        setOpenTransaction(true);
    };

    const handlerCloseTransactionDialog = () => {
        setOpenTransaction(false);
    };
    useEffect(() => {
        dispatch(getTransactions());
    }, []);
    return (
        <Box
            sx={{
                width: "100%",
                borderRadius: "18px",
                bgcolor: (theme) => theme.background.box,
                p: 1.5,
            }}
        >
            <LableCard />
            <Box
                sx={{
                    justifyContent: "flex-start",
                    my: 1.5,
                    ...center,
                    gap: "5px",
                    "& hr": {
                        mx: 0.5,
                    },
                }}
            >
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={TransActionList}
                    getOptionKey={(e) => dispatch(setTransactionInfo(e))}
                    getOptionLabel={(option) => `${option?.phone1}`}
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
                            onChange={(e) => {
                                console.log(e.target)
                            }}
                            sx={{
                                color: "#000",
                                background: "#F2F2F2",
                                borderRadius: "12px",
                            }}
                            autoComplete="none"
                            {...params}
                            placeholder={"جستوجو مشتری"}
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
                <Divider orientation="vertical" flexItem />
                <Input
                    width={"20%"}
                    hasIcon={false}
                    type={"number"}
                    placeholder={"تلفن همراه"}
                    value={transactionInfo?.phone1}
                />
                <Input
                    width={"15%"}
                    hasIcon={false}
                    type={"text"}
                    placeholder={"نام"}
                    value={transactionInfo?.fname}
                />
                <Input
                    width={"15%"}
                    hasIcon={false}
                    type={"text"}
                    placeholder={" نام خانوادگی"}
                    value={transactionInfo?.lname}
                />
                <Box sx={{ ...center, gap: "10px" }}>
                    <Button
                        onClick={() => showDialoghandler()}
                        variant="contained"
                        sx={{
                            bgcolor: theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                            p: 1,
                            px: 3,
                            fontSize: "12px",
                            fontWeight: 500,
                        }}
                    >
                        توضیحات
                    </Button>
                    <Button
                        onClick={() => showTransactionDialoghandler()}
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                        }}
                    >
                        <PersonIcon
                            fontSize="medium"
                            sx={{ fill: (theme) => theme.palette.text.primary }}
                        />
                    </Button>
                </Box>
            </Box>
            <Description status={open} handlerCloseDialog={handlerCloseDialog} />
            <TransactionpartyDg
                status={openTransaction}
                handlerCloseDialog={handlerCloseTransactionDialog}
            />
        </Box>
    );
}

export default NewFactor;
