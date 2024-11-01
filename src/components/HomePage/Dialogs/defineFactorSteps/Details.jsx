import {
    Box,
    Button,
    Grid,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { defineFactorForm } from "../../../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import {
    handlefactorStep,
    setdeFactorInfoStep1,
} from "../../../../Redux/Slices/HomePage/factor";
import TransactionDialog from "./TransactionDialog";
import Input from "../../../UI/Input";
import CarDg from "./CarDg";
import { center } from "../../../../styles/theme";
import { getTransactions } from "../../../../Redux/Slices/Accounting/Transactions/transactionsSlice";
import { AddFactorDetails, resetfactorDetailForm, setFactorDetailsInfo } from "../../../../Redux/Slices/Accounting/Factor/FactorDetails/details";
import TransactionpartyDg from "../TransactionpartyDg";
import { Add } from "@mui/icons-material";

function Details({ handleClose }) {
    const dispatch = useDispatch();
    const { newDetail } = useSelector(state => state.factorDetails)
    const [openEl, setOpenEl] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const canBeOpen = openEl && Boolean(anchorEl);
    const id = canBeOpen ? "transition-popper" : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenEl((previousOpen) => !previousOpen);
    };

    const onChangeHandler = (name, value, type) => {
        dispatch(
            setFactorDetailsInfo({
                key: name,
                value: type == "number" || type == "select" ? +value : value,

            })
        );
    };

    useEffect(() => {
        dispatch(getTransactions());
    }, []);

    const ContinueHandler = () => {
        dispatch(handlefactorStep("increase"))
        dispatch(AddFactorDetails())
    }
    const [openTransaction, setOpenTransaction] = useState(false);
    const showTransactionDialoghandler = () => {

        setOpenTransaction(true);
    };
    const handlerCloseTransactionDialog = () => {
        setOpenTransaction(false);
    };
    const { TransActionList } = useSelector((state) => state.transactionsSlice);
    return (
        <Box>
            <Grid container spacing={2} sx={{ p: 1, mt: 2 }}>
                {defineFactorForm?.map((item, index) => (
                    <Grid item xs={4} key={index}>
                        <InputLabel>
                            <Typography
                                sx={{ fontSize: "16px", fontWeight: 500, color: item.color }}
                            >
                                {item.lable}
                            </Typography>
                        </InputLabel>
                        {item.type !== "select" ? (
                            <>
                                <Input
                                    value={newDetail[item.name]}
                                    id={id}
                                    onClickHandler={handleClick}
                                    onChange={onChangeHandler}
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    hasText={item.hastext}
                                    hasIcon={item.hasIcon}
                                />
                            </>
                        ) : (
                            <TextField
                                type={item.type}
                                value={newDetail[item.name]}
                                name={item.name}
                                id={item.name}
                                fullWidth
                                onChange={(e) => onChangeHandler(item.name, e.target.value, item.type)}
                                sx={{
                                    "& .MuiNativeSelect-select": {
                                        color: "black",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "white",
                                    },
                                    borderRadius: "18px",
                                }}
                                select={item?.select}
                                InputProps={{
                                    style: {
                                        background: "#F2F2F2",
                                        color: "#000",
                                        direction: "ltr",
                                        borderRadius: "18px",
                                    },
                                    startAdornment: (
                                        <>
                                            {item?.hasIcon && (
                                                <InputAdornment position="end">
                                                    {item?.hastext ? (
                                                        <Typography
                                                            sx={{
                                                                fontSize: "14px",
                                                                fontWeight: 400,
                                                                color: (theme) => theme.palette.disable.main,
                                                            }}
                                                        >
                                                            ریال
                                                        </Typography>
                                                    ) : (
                                                        <Box
                                                            onClick={() => showTransactionDialoghandler()}
                                                            sx={{
                                                                bgcolor: (theme) => theme.palette.text.secondary,
                                                                height: "100%",
                                                                p: 2,
                                                                borderRadius: "50px",
                                                                cursor: "pointer",
                                                                ...center,
                                                            }}
                                                        >
                                                            <Add
                                                                sx={{
                                                                    fill: (theme) => theme.palette.text.primary,
                                                                }}
                                                            />
                                                        </Box>

                                                    )}
                                                </InputAdornment>
                                            )}
                                        </>
                                    ),
                                }}
                                SelectProps={{
                                    native: true,
                                    style: {
                                        background: "#F2F2F2",
                                        color: "#000",
                                        direction: "ltr",
                                        borderRadius: "18px",
                                    },
                                }}
                            >
                                {item.select && item?.name == "cust_id" ? (
                                    <>
                                        {" "}
                                        <option value={""}>
                                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                انتخاب کنید
                                            </Typography>
                                        </option>
                                        {/* option.usertype_id!=5 */}
                                        {TransActionList.filter(
                                            (option) => option.usertype_id != 5
                                        ).map((option, index) => (
                                            <option key={index} value={option.user_id}>
                                                <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                    {option?.fname} {option?.lname}
                                                </Typography>
                                            </option>
                                        ))}
                                    </>
                                ) : item?.name == "order_type_id" ? (
                                    <>
                                        {" "}
                                        <option value={""}>
                                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                انتخاب کنید
                                            </Typography>
                                        </option>
                                        {item.options.map((option, index) => (
                                            <option key={index} value={option.value}>
                                                <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                    {option.title}
                                                </Typography>
                                            </option>
                                        ))}
                                    </>
                                ) : item.name == "delivery_agent_profile_id" ? <>
                                    {" "}
                                    <option value={""}>
                                        <Typography sx={{ fontSize: "12px", color: "black" }}>
                                            انتخاب کنید
                                        </Typography>
                                    </option>

                                    {TransActionList.filter(
                                        (option) => option.usertype_id == 5
                                    ).map((option, index) => (
                                        <option key={index} value={option.user_id}>
                                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                {option?.fname} {option?.lname}
                                            </Typography>
                                        </option>
                                    ))}
                                </> : item.name == "vehicle_type_id" ? <>
                                    {" "}
                                    <option value={""}>
                                        <Typography sx={{ fontSize: "12px", color: "black" }}>
                                            انتخاب کنید
                                        </Typography>
                                    </option>
                                    {item.options.map((option, index) => (
                                        <option key={index} value={option.value}>
                                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                {option.title}
                                            </Typography>
                                        </option>
                                    ))}
                                </> : (
                                    <option value={""}>
                                        <Typography sx={{ fontSize: "12px", color: "black" }}>
                                            ایتمی وجود ندارد
                                        </Typography>
                                    </option>
                                )}
                            </TextField>
                        )}
                    </Grid>
                ))}
            </Grid>
            <TransactionpartyDg
                status={openTransaction}
                handlerCloseDialog={handlerCloseTransactionDialog}
            />
            <Box sx={{ ...center, justifyContent: "space-between", mt: 2 }}>
                <Box sx={{ ...center, gap: "10px" }}>
                    <Button
                        onClick={() => ContinueHandler()}
                        variant="contained"
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            px: 4,
                        }}
                    >
                        ادامه
                    </Button>
                </Box>
                <Button
                    onClick={() => {
                        dispatch(handlefactorStep(1));
                        dispatch(resetfactorDetailForm());
                        handleClose();
                    }}
                    variant="contained"
                    sx={{
                        color: (theme) => theme.palette.text.primary,
                        bgcolor: (theme) => theme.palette.warning.main,
                        px: 4,
                    }}
                >
                    انصراف
                </Button>
            </Box>
        </Box>
    );
}

export default Details;
