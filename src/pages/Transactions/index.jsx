


import { Box, Button, Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../../components/UI/Title";
import SearchIcon from '@mui/icons-material/Search';
import { customersData, months } from "../../utils/data";
import CustomersLable from "../../components/Customers/CustomersLable";
import TransactionpartyDg from "../../components/HomePage/Dialogs/TransactionpartyDg";
import AddIcon from '@mui/icons-material/Add';
import { center } from "../../styles/theme"
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../Redux/Slices/Accounting/Transactions/transactionsSlice";

export default function Transactions() {

    const dispatch = useDispatch()
    const [month, setMonth] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [openTransaction, setOpenTransaction] = useState(false);
    const { update, TransActionList } = useSelector(state => state.transactionsSlice)
    const showTransactionDialoghandler = () => {
        setOpenTransaction(true);
    };

    const handlerCloseTransactionDialog = () => {
        setOpenTransaction(false);
    };
    const selectMonth = (month) => {
        setMonth(month);

        setSelectedMonth(months.find((item) => item.value === month));
        console.log(months.find((item) => item.value === month));
    };


    useEffect(() => {
        dispatch(getTransactions())
    }, [update])
    return (
        <Box sx={{ p: 1 }}>
            <Title
                title={"طرف های معامله"}
                Typoprops={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: (theme) => theme.palette.text.card,
                }}
            />

            <Box
                sx={{
                    bgcolor: (theme) => theme.background.box,
                    width: "100%",
                    borderRadius: "18px",
                    p: 1,
                    mt: 1,
                    height: "75vh"
                }}
            >
                <Box sx={{ ...center, gap: "10px", justifyContent: "flex-start" }}>
                    <TextField
                        value={month}
                        onChange={(e) => selectMonth(e.target.value)}
                        sx={{
                            height: "40px",
                            overflow: "hidden",
                            color: "white",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                            "& .MuiNativeSelect-select": {
                                color: "black",
                            },
                            borderRadius: "7px",
                            bgcolor: "#F2F2F2",
                        }}
                        select
                        SelectProps={{
                            native: true,
                            style: {
                                height: "40px",
                            },
                        }}
                    >
                        <option value="">
                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                وضیعت   طرف های معامله
                            </Typography>
                        </option>

                        {months?.map((item, index) => (
                            <option key={index} value={item.value}>
                                {item.title}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        value={month}
                        onChange={(e) => selectMonth(e.target.value)}
                        sx={{
                            height: "40px",
                            overflow: "hidden",
                            color: "white",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                            "& .MuiNativeSelect-select": {
                                color: "black",
                            },
                            borderRadius: "7px",
                            bgcolor: "#F2F2F2",
                        }}
                        select
                        SelectProps={{
                            native: true,
                            style: {
                                height: "40px",
                            },
                        }}
                    >
                        <option value="">
                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                مرتب کردن براساس
                            </Typography>
                        </option>

                        {months?.map((item, index) => (
                            <option key={index} value={item.value}>
                                {item.title}
                            </option>
                        ))}
                    </TextField>
                    <Divider orientation="vertical" flexItem />
                    <TextField
                        sx={{
                            width: "30%",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                        type="text"
                        id="input-with-icon-textfield"
                        placeholder="جستجو براساس نام و نام‌خانوادگی"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon
                                        sx={{ fill: (theme) => theme.palette.divider }}
                                    />
                                </InputAdornment>
                            ),
                            style: {
                                background: "#F2F2F2",
                                color: "#000",
                                direction: "ltr",
                                height: "40px",
                            },
                        }}
                        variant="outlined"
                    />
                    <Box sx={{ ...center, gap: "15px" }}>
                        <Button
                            variant="contained"


                            sx={{
                                bgcolor: (theme) => theme.palette.darkBlue.main,

                                color: (theme) => theme.palette.text.primary,

                                borderColor: "transparent",
                                "&:hover": {
                                    bgcolor: (theme) => theme.palette.darkBlue.main,
                                    color: (theme) => theme.palette.text.primary,
                                },
                            }}
                        >
                            خروجی اکسل
                        </Button>
                        <Button

                            sx={{
                                bgcolor: (theme) => theme.palette.darkBlue.main,

                                color: (theme) => theme.palette.text.primary,

                                borderColor: "transparent",
                                "&:hover": {
                                    bgcolor: (theme) => theme.palette.darkBlue.main,
                                    color: (theme) => theme.palette.text.primary,
                                },
                            }}
                        >
                            چاپ
                        </Button>

                        <Button

                            sx={{
                                bgcolor: (theme) => theme.palette.darkBlue.main,

                                color: (theme) => theme.palette.text.primary,

                                borderColor: "transparent",
                                "&:hover": {
                                    bgcolor: (theme) => theme.palette.darkBlue.main,
                                    color: (theme) => theme.palette.text.primary,
                                },
                            }}
                        >
                            انتخاب همه
                        </Button>
                        <Button

                            sx={{
                                bgcolor: (theme) => theme.palette.warning.main,

                                color: (theme) => theme.palette.text.primary,

                                borderColor: "transparent",
                                "&:hover": {
                                    bgcolor: (theme) => theme.palette.darkBlue.main,
                                    color: (theme) => theme.palette.text.primary,
                                },
                            }}
                        >
                            حذف
                        </Button>
                        <Button
                            onClick={() => showTransactionDialoghandler()}
                            variant="contained"
                            sx={{
                                bgcolor: theme => theme.palette.darkBlue.main,
                                color: (theme) => theme.palette.text.primary,
                            }}
                        >
                            <AddIcon
                                fontSize="medium"
                                sx={{ fill: (theme) => theme.palette.text.primary }}
                            />
                        </Button>
                        <TransactionpartyDg
                            status={openTransaction}
                            handlerCloseDialog={handlerCloseTransactionDialog}
                        />
                    </Box>
                </Box>
                <Grid container spacing={2} sx={{ mt: 1, height: "90%", overflowY: "scroll" }}>
                    {TransActionList.map((item, index) =>
                        < Grid item xs={3} key={index}>
                            <CustomersLable data={item} />

                        </Grid>


                    )}
                </Grid>
            </Box>
        </Box>
    );
}


