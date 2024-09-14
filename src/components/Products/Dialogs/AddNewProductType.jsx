import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    TextField,
    Typography,
} from "@mui/material";
import { BankAccountType } from "../../../utils/data";
import { center } from "../../../styles/theme";
import Title from "../../UI/Title";
import CloseIcon from "@mui/icons-material/Close";
import { toPersian } from "../../../utils/setting";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from "react-redux";
import { addType, deleteType, getallType, setNewType } from "../../../Redux/Slices/Accounting/Products/ProductType/Type";
export const AddNewProductType = () => {
    const [open, setOpen] = useState(false);
    const { typeList, update } = useSelector(state => state.productType)
    const dispatch = useDispatch()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getallType())
    }, [update])

    const deleteHandler = (id) => {
        dispatch(deleteType(id))
    }

    const addnewTypeHandler = () => {
        dispatch(addType())
    }
    return (
        <>
            <Box
                onClick={handleClickOpen}
                sx={{
                    bgcolor: (theme) => theme.palette.text.secondary,
                    // height: "100%",
                    p: 1,
                    borderRadius: "50px",
                    cursor: "pointer",
                    ...center,
                }}
            >
                <AddIcon
                    sx={{
                        fill: (theme) => theme.palette.text.primary,
                    }}
                />
            </Box>

            <Dialog
                fullWidth={true}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent sx={{ bgcolor: "white" }}>
                    <Box>
                        <Box sx={{ ...center, justifyContent: "space-between" }}>
                            <Title
                                title={"تعریف دسته محصولات "}
                                Typoprops={{ fontSize: "20px", fontWeight: 500 }}
                            />
                            <Box
                                onClick={() => handleClose()}
                                sx={{
                                    bgcolor: (theme) => theme.palette.disable.main,
                                    ...center,
                                    borderRadius: "12px",
                                    p: 1,
                                    cursor: "pointer",
                                }}
                            >
                                <CloseIcon fontSize="medium" sx={{ fill: "white" }} />
                            </Box>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Title
                                title={"نام دسته"}
                                Typoprops={{
                                    color: (theme) => theme.typography.color,
                                    fontSize: "18px",
                                    fontWeight: 400,
                                }}
                            />
                            <Box
                                sx={{
                                    ...center,
                                    justifyContent: "flex-start",
                                    gap: "5px",
                                    my: 2,
                                }}
                            >
                                <TextField
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "white",
                                        },
                                    }}
                                    onChange={(e) => dispatch(setNewType(e.target.value))}
                                    type="text"
                                    id="input-with-icon-textfield"
                                    placeholder="نام دسته را وارد کنید"
                                    InputProps={{
                                        style: {
                                            borderRadius: "0px 18px 18px 0px",
                                            background: "#F2F2F2",
                                            color: "#000",
                                            direction: "ltr",
                                        },
                                    }}
                                    variant="outlined"
                                />

                                <Button
                                    variant="contained"
                                    onClick={addnewTypeHandler}
                                    sx={{
                                        bgcolor: (theme) => theme.palette.text.secondary,
                                        color: (theme) => theme.palette.text.primary,
                                        p: 1.75,
                                        px: 2.5,
                                        borderRadius: "18px 0px 0px 18px",
                                    }}
                                >
                                    افزودن
                                </Button>
                            </Box>
                        </Box>

                        <Box>
                            <Box
                                sx={{
                                    ...center,
                                    justifyContent: "space-between",
                                    borderBottom: "2px solid #DEDEDE",
                                    p: 1,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    ردیف
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    نام دسته
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    عملیات
                                </Typography>
                            </Box>

                            <Box sx={{ my: 2, maxHeight: "300px", overflow: "scroll" }}>
                                {typeList?.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            borderRadius: "12px",
                                            bgcolor: "#F5F6F8",
                                            ...center,
                                            justifyContent: "space-between",
                                            p: 2,
                                            m: 1,
                                        }}
                                    >
                                        <Typography>{toPersian(`${index + 1}`)}</Typography>
                                        <Typography>{item.title}</Typography>
                                        <Box sx={{ ...center, gap: "5px" }}>
                                            <Button
                                                variant="outlined"
                                                sx={{ p: 0, color: "#6D6D6D", borderColor: "#6D6D6D" }}
                                            >
                                                ویرایش
                                            </Button>
                                            <Button onClick={() => deleteHandler(item.id)} variant="outlined" color="warning" sx={{ p: 0 }}>
                                                حذف{" "}
                                            </Button>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
};
