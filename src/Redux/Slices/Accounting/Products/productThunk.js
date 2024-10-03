import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

export const AllProductsThunk = async () => {
    return await AXIOS.get(apiRouts.product.main.list);
};

export const deleteProdThunk = async (id) => {
    return await AXIOS.delete(`${apiRouts.product.main.list}${id}`);
};

export const addNewPodThunk = async (_, ThunkApi) => {
    const state = ThunkApi.getState();
    const {
        barcode,
        category_id,
        instock,
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
        barcode,
        category_id,
        instock,
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
        barcode,
        category_id,
        instock,
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
        barcode,
        category_id,
        instock,
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
