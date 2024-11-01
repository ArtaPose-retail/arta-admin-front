import apiRouts from "../../../../../utils/apiRouts";
import AXIOS from "../../../../../utils/setting";

export const AddDetails = async (_, ThunkApi) => {
    const state = ThunkApi.getState();
    const {
        cust_id,
        order_type_id,
        orderpublicid,
        order_public_date,
        bonebagh,
        delivery_agent_profile_id,
        fee,
        extra_expenses,
        vehicle_type_id,
        license_plate,
        weight,
        delivery_company_title
    } = state.factorDetails.newDetail;

    const { user_id } = state.auth.loginInfo;
    return await AXIOS.post(apiRouts.factor.checkin.details.add, {
        cust_id,
        order_type_id,
        orderpublicid,
        order_public_date,
        bonebagh,
        delivery_agent_profile_id,
        fee,
        extra_expenses,
        vehicle_type_id,
        license_plate,
        weight,
        submitter_user_id: +user_id,
        delivery_company_title
    });
};
