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
import { useEffect, useState } from "react";
import profile from "../../Assets/images/Fruits/fruits.svg";
import { productsFeilds } from "../../utils/data";
import { center } from "../../styles/theme";
import Title from "../UI/Title";
import { toastHandler } from "../../utils/setting";
import { AddNewUnits } from "./Dialogs/AddNewUnits";
import { AddNewProductType } from "./Dialogs/AddNewProductType";
import { useDispatch, useSelector } from "react-redux";
import { setNewProduct } from "../../Redux/Slices/Accounting/Products/product";
import { getChild } from "../../Redux/Slices/Accounting/Products/ProductType/Type";

function ProductDetails({ handlerCloseDialog, next }) {
    const [img, setImg] = useState(null);
    const dispatch = useDispatch();
    const { typeList, childList } = useSelector((state) => state.productType);
    const { newProduct } = useSelector((state) => state.product);
    const handlerUploadImg = (e) => {
        setImg(URL.createObjectURL(e.target.files[0]));
    };

    useEffect(() => {
        if (newProduct.category_id != null)
            dispatch(getChild(newProduct.category_id));
    }, [newProduct.category_id]);

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
                            onChange={(e) =>
                                dispatch(
                                    setNewProduct({
                                        key: item.name,
                                        value: e.target.value,
                                    })
                                )
                            }
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
                                                {item.name == "unit" ? (
                                                    <AddNewUnits />
                                                ) : (
                                                    <AddNewProductType />
                                                )}
                                            </InputAdornment>
                                        )}
                                    </>
                                ),
                            }}
                        >
                            {item.select && item?.name == "category_id" ? (
                                <>
                                    {" "}
                                    <option value={""}>
                                        <Typography sx={{ fontSize: "12px", color: "black" }}>
                                            انتخاب کنید
                                        </Typography>
                                    </option>
                                    {typeList.map((option, index) => (
                                        <option key={index} value={option.id}>
                                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                {option.title}
                                            </Typography>
                                        </option>
                                    ))}
                                </>
                            ) : item?.name == "generic" ? (
                                <>
                                    {" "}
                                    <option value={""}>
                                        <Typography sx={{ fontSize: "12px", color: "black" }}>
                                            انتخاب کنید
                                        </Typography>
                                    </option>
                                    {childList.map((option, index) => (
                                        <option key={index} value={option.id}>
                                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                {option.title}
                                            </Typography>
                                        </option>
                                    ))}
                                </>
                            ) : (
                                <option value={""}>
                                    <Typography sx={{ fontSize: "12px", color: "black" }}>
                                        ایتمی وجود ندارد
                                    </Typography>
                                </option>
                            )}
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
                            control={<Switch name="is_fav"
                                onClick={(e) =>
                                    dispatch(
                                        setNewProduct({
                                            key: e.target.name,
                                            value: e.target.checked,
                                        })
                                    )
                                } />}
                            label="نمایش در صفحه محصولات"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    name="is_bulk"
                                    onClick={(e) =>
                                        dispatch(
                                            setNewProduct({
                                                key: e.target.name,
                                                value: e.target.checked,
                                            })
                                        )
                                    }
                                />
                            }
                            label="فعال بودن تعداد"
                        />
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
