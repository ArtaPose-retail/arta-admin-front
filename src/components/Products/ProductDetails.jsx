import {
    Avatar,
    Box,
    Button,
    FormControlLabel,
    FormGroup,
    Grid,
    InputAdornment,
    InputLabel,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import profile from "../../Assets/images/Fruits/fruits.svg";
import { productsFeilds } from "../../utils/data";
import { center } from "../../styles/theme";
import Title from "../UI/Title";
import { toastHandler } from "../../utils/setting";
import { AddNewUnits } from './Dialogs/AddNewUnits';
import { AddNewProductType } from "./Dialogs/AddNewProductType";



function ProductDetails({ handlerCloseDialog, next }) {
    const [img, setImg] = useState(null);
    const handlerUploadImg = (e) => {
        setImg(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <>
            <Title
                title={"افزودن محصول جدید"}
                Typoprops={{
                    fontSize: "24px",
                    fontWeight: "700",
                }}
            />

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
                    sx={{
                        bgcolor: (theme) => theme.palette.darkBlue.main,
                        color: (theme) => theme.palette.text.primary,
                    }}
                    variant="contained"
                    component="label"
                >
                    اپلود عکس محصول
                    <input type="file" hidden onChange={(e) => handlerUploadImg(e)} />
                </Button>
            </Box>
            <Grid container spacing={2} sx={{ p: 1, mt: 1 }}>
                {productsFeilds?.map((item, index) => (
                    <Grid item xs={3} key={index}>
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
                                                {item.name == "unit" ? <AddNewUnits />
                                                    : <AddNewProductType />}
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
                <Grid xs={6}>
                    <InputLabel>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 400,
                                color: "#6D6D6D",
                                mt: 3,
                            }}
                        >
                            تنظیمات
                        </Typography>
                    </InputLabel>
                    <FormGroup row={true}>
                        <FormControlLabel
                            control={<Switch />}
                            label="نمایش در صفحه محصولات"
                        />
                        <FormControlLabel control={<Switch />} label="فعال بودن تعداد" />
                    </FormGroup>
                </Grid>
            </Grid>
            <Box
                sx={{
                    ...center,
                    mt: 4,
                    gap: "15px",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ ...center, gap: "5px" }}>
                    <Button
                        onClick={() => {
                            next("2");
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
                        ادامه
                    </Button>
                    <Button
                        onClick={() => {
                            toastHandler("توضیحات با موفقیت ثبت شد", "info");
                            handlerCloseDialog();
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
        </>
    );
}

export default ProductDetails;
