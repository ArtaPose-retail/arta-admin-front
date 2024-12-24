import { Box, Divider, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { center } from "../../styles/theme";
import { useEffect } from "react";
import { getallType } from "../../Redux/Slices/Accounting/Products/ProductType/Type";
import Input from "../UI/Input";
import {
    getProList,
    resetProdCode,
    resetSingleProdByCode,
    SearchByCategory,
    SearchProdCode,
    setProdCode,
} from "../../Redux/Slices/Accounting/Products/product";
import {
    AddProdOrder,
    resetSingleOrder,
    setSingleOrderInfo,
} from "../../Redux/Slices/Actions/SellPage/sellPage";
import { toastHandler } from "../../utils/setting";
import { Close, RestartAlt } from "@mui/icons-material";

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
        if (singleProdByCode != null) {
            dispatch(
                setSingleOrderInfo({
                    key: "product_id",
                    value: singleProdByCode.prod_id,
                })
            );
            dispatch(
                setSingleOrderInfo({
                    key: "quantity",
                    value: 1,
                })
            );
            if (cardId != 0) {
                dispatch(AddProdOrder(cardId));
                // dispatch(resetSingleOrder());
            } else {
                toastHandler("ابتدا یک طرف معامله مشخص کنید", "info");
            }
        }
    };

    const BarcodeSearchHandler = (name, value, type) => {
        dispatch(setProdCode(value))
        // dispatch(SearchProdCode(value));

    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            dispatch(SearchProdCode(ProdCode));

        }
    };

    useEffect(() => {
        if (singleProdByCode != null) {
            AddProdByCode();
            dispatch(resetProdCode())
            dispatch(resetSingleOrder());
        }
        dispatch(resetSingleProdByCode());
    }, [loading]);

    const IconHandler = () => {
        dispatch(resetProdCode())
    }
    return (
        <Box sx={{ ...center, justifyContent: "end", gap: "10px" }}>
            <TextField
                select
                onChange={(e) => dispatch(SearchByCategory(e.target.value))}
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
                <option value="" onClick={() => dispatch(getProList())}>
                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: (theme) => theme.typography.color,
                            fontWeight: 400,
                        }}
                    >
                        همه
                    </Typography>
                </option>
                {typeList?.map((item, index) => (
                    <option value={item.title} key={item.id}>
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
            <RestartAlt sx={{ cursor: "pointer" }} onClick={() => dispatch(getProList())} />

            <Divider orientation="vertical" flexItem />
            <Input
                value={ProdCode}
                type={"text"}
                placeholder={"بار کد محصول را وارد کنید"}
                onChange={BarcodeSearchHandler}
                hasIcon={true}
                icon={"close"}
                children={<Close />}
                onIconClick={IconHandler}
                onKeyDown={handleKeyDown}
            />
        </Box>
    );
}

export default PtoductSFilter;
