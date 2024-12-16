import {
    Box,
    Button,
    Divider,
    Grid,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
    Discount,
    DiscountPercentage,
    FinalBuyFee,
    profitPercentage,
    separateBy3,
    sumSell,
    toPersian,
    TotalBuy,
} from "../../../../utils/setting";
import { factorItemForm } from "../../../../utils/data";
import FactorItemstable from "./FactorItemstable";
import { handlefactorStep } from "../../../../Redux/Slices/HomePage/factor";
import { useDispatch, useSelector } from "react-redux";
import PackageType from "./PackageType";
import Input from "../../../UI/Input";
import { center } from "../../../../styles/theme";
import { getProList } from "../../../../Redux/Slices/Accounting/Products/product";
import { EditOrderItem, FactorItemsAdd, setFactorItems } from "../../../../Redux/Slices/Accounting/Factor/FactorItems/factorItems";

function FactorItems({ handleClose }) {
    const dispatch = useDispatch();

    const { addDetailRes } = useSelector(
        (state) => state.factorDetails
    );
    const { newFacrtorItems } = useSelector((state) => state.factorItems);
    const { productList } = useSelector((state) => state.product);
    const [singleProd, setSingleProd] = useState();

    const onChangeHandler = (name, value, type) => {
        dispatch(
            setFactorItems({
                key: name,
                value: type == "number" || type == "select" ? +value : value,
            })
        );
    };

    useEffect(() => {
        dispatch(getProList());
    }, []);

    useEffect(() => {
        if (newFacrtorItems.product_id != null) {
            setSingleProd(
                productList.find((item) => item.prod_id == newFacrtorItems.product_id)
            );
        }
    }, [newFacrtorItems.product_id]);

    const AddItemHandler = () => {
        dispatch(FactorItemsAdd(addDetailRes?.id))
    }

    const EditItemHandler = (prodID) => {
        dispatch(EditOrderItem(prodID))
    }

    return (
        <Box>
            <Box>
                <Box sx={{ ...center, justifyContent: "space-between", p: 1 }}>

                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: (theme) => theme.palette.disable.main,
                            my: 0.5,
                        }}
                    >
                        طرف معامله:{addDetailRes?.customer?.fname} {addDetailRes?.customer?.lname}
                    </Typography>


                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: (theme) => theme.palette.disable.main,
                            my: 0.5,
                        }}
                    >
                        شماره بارنامه / فاکتور:
                        {toPersian(addDetailRes?.orderpublicid ?? 0)}
                    </Typography>
                </Box>
                <Divider
                    orientation="horizontal"
                    variant="middle"
                    flexItem
                    sx={{ my: 1 }}
                />
            </Box>
            <Grid container spacing={2} sx={{ p: 1 }}>
                {factorItemForm?.map((item, index) => (
                    <Grid item xs={3} key={index}>
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
                                    value={newFacrtorItems[item.name]}
                                    onChange={onChangeHandler}
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    height={"55px"}
                                    hasText={item.hastext}
                                    hasIcon={item.hasIcon}
                                    disabled={
                                        singleProd?.is_bulk && item.lable.trim() === "وزن"
                                            ? true
                                            : !singleProd?.is_bulk && item.lable.trim() === "تعداد"
                                                ? true
                                                : false
                                    }
                                />
                            </>
                        ) : (
                            <TextField
                                value={newFacrtorItems[item.name]}
                                name={item.name}
                                id={item.name}
                                onChange={(e) =>
                                    onChangeHandler(item.name, e.target.value, item.type)
                                }
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
                                                    <PackageType />
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
                                {item?.select && item.name == "product_id" ? (
                                    <>
                                        <option value={""}>
                                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                انتخاب کنید
                                            </Typography>
                                        </option>
                                        {productList.map((option, index) => (
                                            <option key={index} value={option?.prod_id}>
                                                <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                    {option?.title}
                                                </Typography>
                                            </option>
                                        ))}{" "}
                                    </>
                                ) : (
                                    ""
                                )}
                            </TextField>
                        )}
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ ...center, width: "100%", gap: "5px", my: 2 }}>
                <Typography
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        color: (theme) => theme.palette.text.primary,
                        borderRadius: "15px",
                        px: 3,
                    }}
                >
                    جمع کل خرید:{" "}
                    {toPersian(
                        separateBy3(
                            TotalBuy(
                                newFacrtorItems.initial_buy_price,
                                newFacrtorItems.quantity,
                                newFacrtorItems.tax
                            ) -
                            newFacrtorItems.discount
                        )
                    )}
                </Typography>
                <Typography
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        color: (theme) => theme.palette.text.primary,
                        borderRadius: "15px",
                        px: 3,
                    }}
                >
                    فی نهایی خرید:{" "}
                    {toPersian(
                        separateBy3(
                            Math.ceil(
                                FinalBuyFee(
                                    TotalBuy(
                                        newFacrtorItems.initial_buy_price,
                                        newFacrtorItems.quantity,
                                        newFacrtorItems.tax
                                    ),
                                    newFacrtorItems.discount,
                                    newFacrtorItems.quantity
                                )
                            )
                        )
                    )}

                </Typography>
                <Typography
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        color: (theme) => theme.palette.text.primary,
                        borderRadius: "15px",
                        px: 3,
                    }}
                >
                    جمع کل فروش:{" "}
                    {toPersian(
                        separateBy3(
                            sumSell(
                                newFacrtorItems.original_price,
                                newFacrtorItems.quantity
                            )
                        )
                    )}
                </Typography>
                <Typography
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        color: (theme) => theme.palette.text.primary,
                        borderRadius: "15px",
                        px: 3,
                    }}
                >
                    مبلغ تخفیف فروش:{" "}
                    {toPersian(
                        separateBy3(
                            Discount(
                                newFacrtorItems.original_price,
                                newFacrtorItems.unitprice
                            )
                        )
                    )}
                </Typography>
                <Typography
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        color: (theme) => theme.palette.text.primary,
                        borderRadius: "15px",
                        px: 3,
                    }}
                >
                    درصد تخفیف فروش: %{toPersian(parseFloat(DiscountPercentage(Discount(
                        newFacrtorItems.original_price,
                        newFacrtorItems.unitprice
                    ), newFacrtorItems.original_price)).toFixed(2))}
                </Typography>
                <Typography
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        color: (theme) => theme.palette.text.primary,
                        borderRadius: "15px",
                        px: 3,
                    }}
                >
                    درصد سود: %
                    {toPersian(
                        parseFloat(
                            profitPercentage(
                                FinalBuyFee(
                                    TotalBuy(
                                        newFacrtorItems.initial_buy_price,
                                        newFacrtorItems.quantity,
                                        newFacrtorItems.tax
                                    ),
                                    Discount(
                                        newFacrtorItems.original_price,
                                        newFacrtorItems.unitprice
                                    ),
                                    newFacrtorItems.quantity
                                ),
                                newFacrtorItems.unitprice
                            )
                        ).toFixed(2)
                    )}
                </Typography>
            </Box>
            <Box sx={{ ...center, justifyContent: "space-between" }}>

                <Button
                    onClick={() => AddItemHandler()}
                    variant="contained"
                    sx={{
                        bgcolor: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 3,
                    }}
                >
                    افزودن
                </Button>
                {newFacrtorItems?.id && <Button
                    onClick={() => EditItemHandler()}
                    variant="contained"
                    sx={{
                        bgcolor: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 3,
                    }}
                >
                    ویرایش
                </Button>}

            </Box>

            <FactorItemstable height={200} />

            <Box sx={{ ...center, justifyContent: "space-between", mt: 2 }}>
                <Box sx={{ ...center, gap: "5px" }}>
                    <Button
                        onClick={() => dispatch(handlefactorStep("increase"))}
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                            px: 4,
                        }}
                    >
                        ادامه
                    </Button>
                    <Button
                        onClick={() => dispatch(handlefactorStep("decrease"))}
                        variant="contained"
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            bgcolor: (theme) => theme.palette.warning.main,
                            px: 3,
                        }}
                    >
                        بازگشت
                    </Button>
                </Box>

                <Button
                    onClick={() => {
                        dispatch(handlefactorStep(1));
                        handleClose();
                    }}
                    variant="contained"
                    sx={{
                        bgcolor: (theme) => theme.palette.warning.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 3,
                    }}
                >
                    انصراف
                </Button>
            </Box>
        </Box>
    );
}

export default FactorItems;
