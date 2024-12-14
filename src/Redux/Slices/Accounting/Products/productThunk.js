import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

export const AllProductsThunk = async () => {
    return await AXIOS.get(apiRouts.product.main.list);
};

export const getSingleProd = async (id) => {
    return await AXIOS.get(`${apiRouts.product.main.list}${id}`)
}

export const deleteProdThunk = async (id) => {
    return await AXIOS.delete(`${apiRouts.product.main.list}${id}`);
};

export const ProdSearch = async (title) => {
    return await AXIOS.get(`${apiRouts.product.main.list}?category=${title}`)
}

export const addNewPodThunk = async (_, ThunkApi) => {
    const state = ThunkApi.getState();
    const {
        code,
        category_id,
        stock_alert,
        is_bulk,
        is_fav,
        max_stock,
        meta,
        min_stock,
        productpic_id,
        shelf,
        subcategory_id,
        title,
        unit_id,
    } = state.product.newProduct;

    return await AXIOS.post(apiRouts.product.main.add, {
        code,
        category_id,
        stock_alert,
        is_bulk,
        is_fav,
        max_stock,
        meta,
        min_stock,
        productpic_id,
        shelf,
        subcategory_id,
        title,
        unit_id,
    });
};
export const editPodThunk = async (id, ThunkApi) => {
    const state = ThunkApi.getState();
    const {
        code,
        category_id,
        stock_alert,
        is_bulk,
        is_fav,
        max_stock,
        meta,
        min_stock,
        productpic_id,
        shelf,
        subcategory_id,
        title,
        unit_id,
    } = state.product.newProduct;

    return await AXIOS.put(`${apiRouts.product.main.list}${id}`, {
        code,
        category_id,
        stock_alert,
        is_bulk,
        is_fav,
        max_stock,
        meta,
        min_stock,
        productpic_id,
        shelf,
        subcategory_id,
        title,
        unit_id,
    });
};

export const SearchProdByCode = async (code) => {
    return await AXIOS.get(`${apiRouts.product.main.list}?code=${code}`)
}
