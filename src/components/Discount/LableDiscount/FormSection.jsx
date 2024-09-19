import {
    Box,
    Button,
    Grid,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { lableDiscountForm } from "../../../utils/data";
import { center } from "../../../styles/theme";
import Input from "../../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import {
    addPC,
    resetForm,
    setNewLableinfo,
} from "../../../Redux/Slices/Actions/PromoCode/Lable/lable";

function FormSection() {
    const { newPromoInfo } = useSelector((state) => state.lable);
    const dispatch = useDispatch();
    const onChangeHandler = (name, value) => {
        dispatch(
            setNewLableinfo({
                key: name,
                value: value,
            })
        );
    };

    const submithandler = () => {
        dispatch(addPC());
        dispatch(resetForm());
    };
    const cancelhandler = () => {

        dispatch(resetForm());
    };
    return (
        <Box>
            <Grid container spacing={2} sx={{ p: 1, mt: 1, ...center }}>
                {lableDiscountForm?.map((item, index) => (
                    <Grid item xs={5} key={index}>
                        <InputLabel>
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 400,
                                    color: item.color,
                                }}
                            >
                                {item.lable}
                            </Typography>
                        </InputLabel>
                        <Input
                            value={newPromoInfo[item.name]}
                            name={item.name}
                            id={item.name}
                            hasIcon={item.hasIcon}
                            type={item.type}
                            options={item.options}
                            onChange={onChangeHandler}
                            disabled={
                                (item.name == "how_many" && newPromoInfo.txtType == "manual") ||
                                    (item.name == "code" && newPromoInfo.txtType == "system")
                                    ? true
                                    : false
                            }
                        />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ ...center, justifyContent: "space-around", mt: 2 }}>
                <Button onClick={submithandler} variant="contained" color="success">
                    ثبت
                </Button>
                <Button onClick={cancelhandler} variant="contained" color="warning">
                    انصراف
                </Button>
            </Box>
        </Box>
    );
}

export default FormSection;
