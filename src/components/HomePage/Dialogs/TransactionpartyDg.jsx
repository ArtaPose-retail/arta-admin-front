import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogContent,
    Grid,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import Title from "../../UI/Title";
import { toastHandler } from "../../../utils/setting";
import { transactionpartyField } from "../../../utils/data";
import profile from "../../../Assets/images/profileImage.png";
import AddTransactionType from "./AddTransactionType";
import { center } from "../../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import {
    addTransactions,
    resetNewTransaction,
    setNewTransaction,
} from "../../../Redux/Slices/Accounting/Transactions/transactionsSlice";

function TransactionpartyDg({ status, handlerCloseDialog, iteminfo }) {
    const { newTransaction } = useSelector((state) => state.transactionsSlice);
    const dispatch = useDispatch();

    const submitHandler = () => {
        dispatch(addTransactions());
        dispatch(resetNewTransaction());
        handlerCloseDialog();
    };
    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                open={status}
                onClose={handlerCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent
                    sx={{
                        bgcolor: "white",
                    }}
                >
                    <Title
                        title={"افزودن طرف معامله"}
                        Typoprops={{
                            fontSize: "24px",
                            fontWeight: "700",
                        }}
                    />

                    <Box sx={{ ...center, flexDirection: "column", gap: "5px" }}>
                        <Avatar
                            alt="ARTA-POSE"
                            src={profile}
                            sx={{
                                bgcolor: "#41669A",
                                width: 60,
                                height: 60,

                                ...center,
                                cursor: "pointer",
                                "& .MuiAvatar-img": {
                                    width: "60%",
                                    height: "80%",
                                },
                            }}
                        />
                    </Box>
                    <Grid container spacing={2} sx={{ p: 1, mt: 1 }}>
                        {transactionpartyField?.map((item, index) => (
                            <Grid item xs={4} key={index}>
                                <InputLabel>
                                    <Typography
                                        sx={{
                                            fontSize: "18px",
                                            fontWeight: 400,
                                            color: item.color,
                                        }}
                                    >
                                        {item.lable}
                                    </Typography>
                                </InputLabel>
                                <TextField
                                    value={newTransaction[item.name]}
                                    name={item.name}
                                    id={item.name}
                                    fullWidth
                                    onChange={(e) => {
                                        dispatch(
                                            setNewTransaction({
                                                key: item.name,
                                                value: e.target.value,
                                            })
                                        );
                                    }}
                                    sx={{
                                        "& .MuiNativeSelect-select": {
                                            color: "black",
                                        },
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "white",
                                        },
                                        borderRadius: "18px",
                                    }}
                                    select={item.select}
                                    inputProps={{
                                        style: {
                                            background: "#F2F2F2",
                                            color: "#000",
                                            direction: "ltr",
                                            borderRadius: "18px",
                                        },
                                    }}
                                    SelectProps={{
                                        native: true,
                                        style: {
                                            background: "#F2F2F2",
                                            color: "#000",
                                            direction: "ltr",
                                            borderRadius: "18px",
                                        },

                                        startAdornment: (
                                            <>
                                                {item.hasIcon && (
                                                    <InputAdornment position="start">
                                                        <AddTransactionType />
                                                    </InputAdornment>
                                                )}
                                            </>
                                        ),
                                    }}
                                >
                                    {item.select &&
                                        item?.options?.map((option, index) => (
                                            <option key={index} value={option.value}>
                                                <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                    {option.title}
                                                </Typography>
                                            </option>
                                        ))}
                                </TextField>
                            </Grid>
                        ))}
                    </Grid>

                    <Box
                        sx={{
                            ...center,
                            mt: 1,
                            gap: "15px",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box sx={{ ...center, gap: "5px" }}>
                            <Button
                                onClick={submitHandler}
                                variant="contained"
                                sx={{
                                    bgcolor: (theme) => theme.palette.green.main,
                                    color: (theme) => theme.palette.text.primary,
                                    px: 5,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                }}
                            >
                                ذخیره
                            </Button>
                            <Button
                                onClick={() => {
                                    dispatch(resetNewTransaction());
                                }}
                                variant="contained"
                                sx={{
                                    bgcolor: "#F90",
                                    color: (theme) => theme.palette.text.primary,
                                    px: 4,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                }}
                            >
                                پاکسازی فرم
                            </Button>
                        </Box>

                        <Button
                            onClick={() => {
                                handlerCloseDialog();
                            }}
                            variant="contained"
                            sx={{
                                bgcolor: (theme) => theme.palette.warning.main,
                                color: (theme) => theme.palette.text.primary,
                                px: 4,
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            انصراف
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default TransactionpartyDg;
