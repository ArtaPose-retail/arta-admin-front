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
import { center } from "../../styles/theme";
import Description from "./Dialogs/Description";
import PersonIcon from "@mui/icons-material/Person";
import TransactionpartyDg from "./Dialogs/TransactionpartyDg";
import { toPersian } from "../../utils/setting";
import Input from "../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import {
    addTransactions,
    getTransactions,
    resetNewTransaction,
    setNewTransaction,
    setSingleTransaction,
} from "../../Redux/Slices/Accounting/Transactions/transactionsSlice";
import { setTransactionInfo } from "../../Redux/Slices/Actions/SellPage/sellPage";
import { Add } from "@mui/icons-material";
import { addOrder } from "../../Redux/Slices/Actions/Order/Order";

function NewFactor() {
    const dispatch = useDispatch();
    const { TransActionList, update, newTransaction, singleTransaction } = useSelector((state) => state.transactionsSlice);
    const { transactionInfo } = useSelector((state) => state.sellPage);
    const [open, setOpen] = useState(false);
    const [openTransaction, setOpenTransaction] = useState(false);

    const handlerCloseDialog = () => {
        setOpen(false);
    };
    const showTransactionDialoghandler = () => {
        dispatch(
            setNewTransaction({
                key: "user_type",
                value: "Customer",
            })
        );
        setOpenTransaction(true);
    };

    const handlerCloseTransactionDialog = () => {
        setOpenTransaction(false);
    };

    const onSearchHandler = (e) => {
        console.log(e)
        dispatch(setSingleTransaction(e))
        // dispatch(addOrder())
    }
    useEffect(() => {
        dispatch(getTransactions("Customer"));

    }, [update]);

    useEffect(() => {
        dispatch(
            setNewTransaction({
                key: "user_type",
                value: "Customer",
            })
        );
    }, [])

    const addCustomer = () => {
        dispatch(addTransactions());
        // dispatch(resetNewTransaction());
    }
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
                    my: 1.5,
                    ...center,
                    justifyContent: "flex-start",
                    gap: "15px",
                    "& hr": {
                        mx: 0.5,
                    },
                }}
            >
                <Autocomplete
                    freeSolo
                    // value={transactionInfo?.phone1 }
                    disablePortal
                    id="combo-box-demo"
                    options={TransActionList}
                    onClose={() => console.log("man")}
                    onChange={(_, e) => onSearchHandler(e)}
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
                            // value={transactionInfo?.phone1}
                            onChange={(e) => dispatch(
                                setNewTransaction({
                                    key: "phone1",
                                    value: e.target.value,
                                })
                            )}
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
                    hasIcon={false}
                    type={"text"}
                    placeholder={"نام"}
                    name={"fname"}
                    // value={transactionInfo !== null ? transactionInfo?.fname : singleTransaction != null ? singleTransaction?.fname : ""}
                    value={newTransaction?.fname}
                    onChange={(name, value) => {
                        dispatch(
                            setNewTransaction({
                                key: name,
                                value: value,
                            })
                        );
                    }}
                />
                <Input
                    hasIcon={false}
                    type={"text"}
                    name={"lname"}
                    placeholder={" نام خانوادگی"}
                    value={newTransaction?.lname}
                    onChange={(name, value) => {
                        dispatch(
                            setNewTransaction({
                                key: name,
                                value: value,
                            })
                        );
                    }}
                />
                <Box sx={{ ...center, gap: "10px" }}>
                    <Button
                        onClick={() => addCustomer()}
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                        }}
                    >
                        <Add
                            fontSize="medium"
                            sx={{ fill: (theme) => theme.palette.text.primary }}
                        />
                        ثبت مشتری
                    </Button>
                    <Button
                        onClick={() => showTransactionDialoghandler()}
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                        }}
                    >
                        <Add
                            fontSize="medium"
                            sx={{ fill: (theme) => theme.palette.text.primary }}
                        />
                        ثبت با جزییات
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
