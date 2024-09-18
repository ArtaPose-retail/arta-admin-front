import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



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
        vender_id: null
    }

};



export const product = createSlice({
    name: "product",
    initialState,
    reducers: {
        setNewProduct: (state, { payload }) => {
            state.newProduct[payload.key] = payload.value
        }
    },
    extraReducers: (builder) => {

    },
});

export const { setNewProduct } = product.actions;
export default product.reducer;
