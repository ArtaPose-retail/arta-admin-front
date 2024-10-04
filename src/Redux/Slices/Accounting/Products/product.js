import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewPodThunk, AllProductsThunk, deleteProdThunk, editPodThunk, getSingleProd } from "./productThunk";
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
        prod_id: "",
        productpic_id: null,
        productpic_path: "",
        rate: "",
        ratecount: "",
        subcategory_id: null,
        subcategory_pic: "",
        subcategory_title: "",
        title: "",
        tsv: "",
        unit_id: null,
        meta: {},
        shelf: ""
    },
    productList: [],
    signleProd: null
};

export const getProList = createAsyncThunk("product/list", AllProductsThunk);
export const singleProd = createAsyncThunk("product/single", getSingleProd);
export const deleteProd = createAsyncThunk("product/delete", deleteProdThunk);
export const addProd = createAsyncThunk("product/add", addNewPodThunk);
export const editProd = createAsyncThunk("product/edit", editPodThunk);

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

        //?get single  product 
        builder.addCase(singleProd.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(singleProd.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = false;
            state.signleProd = payload.data
        });
        builder.addCase(singleProd.rejected, (state) => {
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
        builder.addCase(addProd.fulfilled, (state) => {
            state.loading = false;
            state.update = true;

        });
        builder.addCase(addProd.rejected, (state) => {
            state.loading = false;
            toastHandler("مشکلی پیش امده مجدد تلاش کنید", "info")
        });
        //? add product
        builder.addCase(editProd.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(editProd.fulfilled, (state) => {
            state.loading = false;
            state.update = true;

        });
        builder.addCase(editProd.rejected, (state) => {
            state.loading = false;
            toastHandler("مشکلی پیش امده مجدد تلاش کنید", "info")
        });

    },
});

export const { setNewProduct, setMetaData, resetPRInfo } = product.actions;
export default product.reducer;
