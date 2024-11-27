import { Box, Divider, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { center } from "../../styles/theme";
import { useEffect } from "react";
import { getallType } from "../../Redux/Slices/Accounting/Products/ProductType/Type";
import Input from "../UI/Input";
import {
    resetSingleProdByCode,
    SearchProdCode,
} from "../../Redux/Slices/Accounting/Products/product";
import {
    AddProdOrder,
    setSingleOrderInfo,
} from "../../Redux/Slices/Actions/SellPage/sellPage";
import { toastHandler } from "../../utils/setting";

function PtoductSFilter() {
    const dispatch = useDispatch();
    const { typeList } = useSelector((state) => state.productType);
    const { singleProdByCode, loading, ProdCode } = useSelector(
        (state) => state.product
    );
    const { cardId } = useSelector((state) => state.Order);
    useEffect(() => {
        dispatch(getallType());
    }, []);

    const AddProdByCode = () => {
        console.log("here");
        if (singleProdByCode != null) {
            dispatch(
                setSingleOrderInfo({
                    key: "product_id",
                    value: singleProdByCode.prod_id,
                })
            );
            if (cardId != 0) {
                dispatch(AddProdOrder(cardId));
            } else {
                toastHandler("ابتدا یک طرف معامله مشخص کنید", "info");
            }
        }
    };

    const BarcodeSearchHandler = (name, value, type) => {
        dispatch(SearchProdCode(value));
    };

    useEffect(() => {
        if (singleProdByCode != null) {
            console.log("here");
            AddProdByCode();
        }
        dispatch(resetSingleProdByCode());
    }, [loading]);
    return (
        <Box sx={{ ...center, justifyContent: "end", gap: "10px" }}>
            <TextField
                select
                sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                }}
                type="text"
                id="input-with-icon-textfield"
                InputProps={{
                    style: {
                        background: "#F2F2F2",
                        color: "#000",
                        direction: "ltr",
                        height: "auto",
                    },
                }}
                variant="outlined"
                SelectProps={{
                    native: true,
                }}
            >
                <option value="">
                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: (theme) => theme.typography.color,
                            fontWeight: 400,
                        }}
                    >
                        وضیعت محصول
                    </Typography>
                </option>
                {typeList?.map((item, index) => (
                    <option value={item.id} key={item.id}>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                color: (theme) => theme.typography.color,
                                fontWeight: 400,
                            }}
                        >
                            {item?.title}
                        </Typography>
                    </option>
                ))}
            </TextField>

            <Divider orientation="vertical" flexItem />
            <Input
                value={ProdCode}
                type={"text"}
                placeholder={"بار کد محصول را وارد کنید"}
                onChange={BarcodeSearchHandler}
            />
        </Box>
    );
}

export default PtoductSFilter;
