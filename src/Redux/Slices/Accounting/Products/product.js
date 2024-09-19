import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AllProductsThunk, deleteProdThunk } from "./productThunk";
import { toastHandler } from "../../../../utils/setting";
const initialState = {
    loading: false,
    update: false,
    newProduct: {
        barcode: "",
        brandname: "",
        category_id: null,
        category_title: "",
        description: "",
        detail: "",
        instock: null,
        is_bulk: false,
        is_fav: false,
        max_stock: null,
        min_stock: null,
        orderlimit: null,
        originalprice: null,
        price: null,
        prod_id: null,
        productpic_id: null,
        productpic_path: "",
        rate: null,
        ratecount: null,
        subcategory_id: null,
        subcategory_pic: "",
        subcategory_title: "",
        title: "",
        tsv: "",
        unit_id: null,
        vender_id: null,
    },
    productList: [],
};

export const getProList = createAsyncThunk("product/list", AllProductsThunk);
export const deleteProd = createAsyncThunk("product/delete", deleteProdThunk);

export const product = createSlice({
    name: "product",
    initialState,
    reducers: {
        setNewProduct: (state, { payload }) => {
            state.newProduct[payload.key] = payload.value;
        },
    },
    extraReducers: (builder) => {
        //?get product list
        builder.addCase(getProList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getProList.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = false;
            state.productList = payload.data
        });
        builder.addCase(getProList.rejected, (state) => {
            state.loading = false;
            toastHandler("مشکلی پیش امده مجدد وارد شوید", "info")
        });

        //? delete product
        builder.addCase(deleteProd.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteProd.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = true;

        });
        builder.addCase(deleteProd.rejected, (state) => {
            state.loading = false;
            toastHandler("مشکلی پیش امده مجدد وارد شوید", "info")
        });

    },
});

export const { setNewProduct } = product.actions;
export default product.reducer;
