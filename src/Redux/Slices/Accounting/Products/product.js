import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    addNewPodThunk,
    AllProductsThunk,
    deleteProdThunk,
    editPodThunk,
    getSingleProd,
    ProdSearch,
    SearchProdByCode,
} from "./productThunk";
import { toastHandler } from "../../../../utils/setting";
const initialState = {
    loading: false,
    update: false,
    newProduct: {
        code: "",
        brandname: "",
        category_id: null,
        category_title: "",
        description: "",
        detail: "",
        instock: null,
        stock_alert: null,
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
        shelf: "",
    },
    productList: [],
    signleProd: null,
    singleProdByCode: null,
    ProdCode: "",
};

export const getProList = createAsyncThunk("product/list", AllProductsThunk);
export const singleProd = createAsyncThunk("product/single", getSingleProd);
export const deleteProd = createAsyncThunk("product/delete", deleteProdThunk);
export const addProd = createAsyncThunk("product/add", addNewPodThunk);
export const editProd = createAsyncThunk("product/edit", editPodThunk);

export const SearchByCategory = createAsyncThunk("product/search", ProdSearch)

export const SearchProdCode = createAsyncThunk(
    "product/searchCode",
    SearchProdByCode
);

export const product = createSlice({
    name: "product",
    initialState,
    reducers: {
        setNewProduct: (state, { payload }) => {
            state.newProduct[payload.key] = payload.value;
        },
        setMetaData: (state, { payload }) => {
            state.newProduct.meta[payload.key] = payload.value;
        },
        setProdCode: (state, { payload }) => {
            state.ProdCode = payload;
        },
        resetPRInfo: (state) => {
            state.newProduct = initialState.newProduct;
        },
        resetSingleProdByCode: (state) => {
            state.singleProdByCode = initialState.singleProdByCode;

        },
        resetProdCode: (state) => {
            state.ProdCode = initialState.ProdCode;
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
            state.productList = payload.data;
        });
        builder.addCase(getProList.rejected, (state, { payload }) => {
            state.loading = false;
            toastHandler("مشکلی پیش امده", "info");
        });
        //?get product list by category
        builder.addCase(SearchByCategory.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(SearchByCategory.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = true;
            state.productList = payload.data;
        });
        builder.addCase(SearchByCategory.rejected, (state, { payload }) => {
            state.loading = false;
            console.log(payload)
            toastHandler("مشکلی پیش امده", "info");
        });

        //?get single  product
        builder.addCase(singleProd.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(singleProd.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = false;
            state.signleProd = payload.data;
            console.log(payload.data)
        });
        builder.addCase(singleProd.rejected, (state) => {
            state.loading = false;
            toastHandler("مشکلی پیش امده مجدد وارد شوید", "info");
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
            toastHandler("مشکلی پیش امده مجدد وارد شوید", "info");
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
            toastHandler("مشکلی پیش امده مجدد تلاش کنید", "info");
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
            toastHandler("مشکلی پیش امده مجدد تلاش کنید", "info");
        });
        //! search product by code
        builder.addCase(SearchProdCode.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(SearchProdCode.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = false;
            state.singleProdByCode = payload.data[0];
            console.log(payload.data);
        });
        builder.addCase(SearchProdCode.rejected, (state) => {
            state.loading = false;
            toastHandler("مشکلی پیش امده مجدد تلاش کنید", "info");
        });
    },
});

export const {
    setNewProduct,
    setMetaData,
    resetPRInfo,
    resetSingleProdByCode,
    setProdCode,
    resetProdCode
} = product.actions;
export default product.reducer;
