import {
    Box,
    Button,
    FormControlLabel,
    FormGroup,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { productsFeilds } from "../../utils/data";
import { center } from "../../styles/theme";
import Title from "../UI/Title";
import { AddNewUnits } from "./Dialogs/AddNewUnits";
import { AddNewProductType } from "./Dialogs/AddNewProductType";
import { useDispatch, useSelector } from "react-redux";
import {
    resetPRInfo,
    setNewProduct,
} from "../../Redux/Slices/Accounting/Products/product";
import { getChild } from "../../Redux/Slices/Accounting/Products/ProductType/Type";
import { getPicList } from "../../Redux/Slices/Setting/Gallery/gallery";
import apiRouts from "../../utils/apiRouts";
import { getUnitList } from "../../Redux/Slices/Accounting/Products/ProductUnit/unit";

function ProductDetails({ handlerCloseDialog, next }) {
    const dispatch = useDispatch();
    const { typeList, childList } = useSelector((state) => state.productType);
    const { newProduct } = useSelector((state) => state.product);
    const { picList } = useSelector((state) => state.gallery);
    const { unitList } = useSelector((state) => state.productUnit);

    useEffect(() => {
        if (newProduct.category_id != null)
            dispatch(getChild(newProduct.category_id));
    }, [newProduct.category_id]);
    useEffect(() => {
        dispatch(getPicList());
    }, []);
    useEffect(() => {
        dispatch(getUnitList())
    }, [])

    return (
        <>
            <Title
                title={"افزودن محصول جدید"}
                Typoprops={{
                    fontSize: "24px",
                    fontWeight: "700",
                }}
            />

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
                        {item.name != "productpic_id" ? (
                            <TextField
                                value={newProduct[item.name]}
                                onChange={(e) =>
                                    dispatch(
                                        setNewProduct({
                                            key: item.name,
                                            value: item.type == "select" || item.type == "number" ? +e.target.value : e.target.value,
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
                                                    {item.name == "unit_id" ? (
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
                                ) : item?.name == "subcategory_id" ? (
                                    <>
                                        {" "}
                                        <option value={""}>
                                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                انتخاب کنید
                                            </Typography>
                                        </option>
                                        {childList?.map((option, index) => (
                                            <option key={index} value={option.id}>
                                                <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                    {option.title}
                                                </Typography>
                                            </option>
                                        ))}
                                    </>
                                ) : item?.name == "unit_id" ? <>
                                    {" "}
                                    <option value={""}>
                                        <Typography sx={{ fontSize: "12px", color: "black" }}>
                                            انتخاب کنید
                                        </Typography>
                                    </option>
                                    {unitList?.map((option, index) => (
                                        <option key={index} value={option?.id}>
                                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                {option?.title}
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
                        ) : (
                            <Select
                                value={newProduct[item.name]}
                                onChange={(e) =>
                                    dispatch(
                                        setNewProduct({
                                            key: item.name,
                                            value: e.target.value,
                                        })
                                    )
                                }
                                autoWidth={true}
                                sx={{
                                    width: "100%", background: "#F2F2F2",
                                    color: "#000",
                                    direction: "ltr",
                                    borderRadius: "18px",
                                    "& .MuiNativeSelect-select": {
                                        color: "black",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "white",
                                    },
                                }}

                            >
                                <MenuItem MenuItem value={""}>
                                    <Typography sx={{ fontSize: "12px", color: "black" }}>
                                        انتخاب کنید
                                    </Typography>
                                </MenuItem>
                                {picList?.map((option, index) => (
                                    <MenuItem key={index} value={option.id}>
                                        <Box
                                            // component="li"
                                            sx={{ ...center, gap: "5px" }}
                                        >

                                            <img
                                                src={`${apiRouts.baseUrl}${option?.url}`}
                                                alt="goods"
                                                style={{ width: 20, height: 20 }}
                                            />

                                        </Box>
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
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
                            control={
                                <Switch
                                    name="is_fav"
                                    checked={newProduct.is_fav}
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
                            label="نمایش در صفحه محصولات"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    name="is_bulk"
                                    checked={newProduct.is_bulk}
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
                            dispatch(resetPRInfo());
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
                        dispatch(resetPRInfo());
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
