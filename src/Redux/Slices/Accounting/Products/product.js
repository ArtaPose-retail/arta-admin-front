import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewPodThunk, AllProductsThunk, deleteProdThunk } from "./productThunk";
import { toastHandler } from "../../../../utils/setting";
const initialState = {
    loading: false,
    update: false,
    newProduct: {
        barcode: "",
        brandname: "",
        category_id: "",
        category_title: "",
        description: "",
        detail: "",
        instock: "",
        is_bulk: false,
        is_fav: false,
        max_stock: "",
        min_stock: "",
        orderlimit: "",
        originalprice: "",
        price: "",
        prod_id: "",
        productpic_id: "",
        productpic_path: "",
        rate: "",
        ratecount: "",
        subcategory_id: "",
        subcategory_pic: "",
        subcategory_title: "",
        title: "",
        tsv: "",
        unit_id: "",
        vender_id: "",
        meta: {}
    },
    productList: [],
};

export const getProList = createAsyncThunk("product/list", AllProductsThunk);
export const deleteProd = createAsyncThunk("product/delete", deleteProdThunk);
export const addProd = createAsyncThunk("product/add", addNewPodThunk);

export const product = createSlice({
    name: "product",
    initialState,
    reducers: {
        setNewProduct: (state, { payload }) => {
            state.newProduct[payload.key] = payload.value;
        },
        setMetaData: (state, { payload }) => {
            state.newProduct.meta[payload.key] = payload.value
        },
        resetPRInfo: (state) => {
            state.newProduct = initialState.newProduct
        }
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
        //? add product
        builder.addCase(addProd.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addProd.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = true;

        });
        builder.addCase(addProd.rejected, (state) => {
            state.loading = false;
            toastHandler("مشکلی پیش امده مجدد تلاش کنید", "info")
        });

    },
});

export const { setNewProduct, setMetaData, resetPRInfo } = product.actions;
export default product.reducer;
