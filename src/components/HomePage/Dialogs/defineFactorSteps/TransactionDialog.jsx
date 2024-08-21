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
import { useState } from "react";

import profile from "../../../../Assets/images/profileImage.png";
import AddIcon from '@mui/icons-material/Add';
import { transactionpartyField } from "../../../../utils/data";
import { toastHandler } from "../../../../utils/setting";
import Title from '../../../UI/Title';
import AddTransactionType from "../AddTransactionType";
import { center } from "../../../../styles/theme";

function TransactionDialog({ title }) {
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState(null)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handlerUploadImg = (e) => {
        setImg(URL.createObjectURL(e.target.files[0]))
    }


    return (
        <div>
            <Box
                onClick={() => handleClickOpen()}
                sx={{
                    bgcolor: (theme) => theme.palette.text.secondary,
                    height: "100%",
                    p: 0.5,
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
                maxWidth={"md"}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent
                    sx={{
                        bgcolor: "white",
                    }}
                >
                    <Title title={title} Typoprops={{
                        fontSize: "24px",
                        fontWeight: "700",

                    }} />

                    <Box sx={{ ...center, flexDirection: "column", gap: "5px" }}>
                        <Avatar
                            alt="ARTA-POSE"
                            src={img ?? profile}

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

                        <Button
                            sx={{ bgcolor: theme => theme.palette.darkBlue.main, color: theme => theme.palette.text.primary }}
                            variant="contained"
                            component="label"

                        >
                            اپلود عکس مشتری/طرف معامله
                            <input
                                type="file"
                                hidden
                                onChange={(e) => handlerUploadImg(e)}
                            />
                        </Button>

                    </Box>
                    <Grid container spacing={2} sx={{ p: 1, mt: 1 }}>
                        {transactionpartyField?.map((item, index) => (
                            <Grid item xs={4} key={index}>
                                <InputLabel>
                                    <Typography
                                        sx={{ fontSize: "18px", fontWeight: 400, color: item.color }}
                                    >
                                        {item.lable}
                                    </Typography>
                                </InputLabel>
                                <TextField
                                    // value={formInformation[item.name]}
                                    name={item.name}
                                    id={item.name}
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
                                                        {/* <AddIcon /> */}
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
                        sx={{ ...center, mt: 1, gap: "15px", justifyContent: "space-between" }}
                    >
                        <Box sx={{ ...center, gap: "5px" }}>
                            <Button
                                onClick={() => {
                                    toastHandler(" با موفقیت ثبت شد", "success")
                                    handleClose()
                                }}
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

                                    handleClose()
                                }}
                                variant="contained"
                                sx={{
                                    bgcolor: "#F90", color: (theme) => theme.palette.text.primary,
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

                                handleClose()
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

export default TransactionDialog;
