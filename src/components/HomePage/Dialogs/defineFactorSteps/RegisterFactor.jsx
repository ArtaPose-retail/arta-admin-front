import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import FactorItemstable from "./FactorItemstable";
import { toPersian, toastHandler } from "../../../../utils/setting";
import { handlefactorStep } from "../../../../Redux/Slices/HomePage/factor";
import { useDispatch, useSelector } from "react-redux";
import { center } from "../../../../styles/theme";
import { finalizeFactorAction } from "../../../../Redux/Slices/Accounting/Factor/FactorRegister/factorRegister";
import { FactorListGet } from "../../../../Redux/Slices/Accounting/Factor/factorPage";
import { resetfactorDetailForm } from "../../../../Redux/Slices/Accounting/Factor/FactorDetails/details";

function RegisterFactor({ handleClose }) {
    const dispatch = useDispatch();
    const { addDetailRes } = useSelector(
        (state) => state.factorDetails
    );


    const registerBn = () => {
        // toastHandler("فاکتور با موفقیت ثبت شد", "info");
        handleClose();
        dispatch(finalizeFactorAction(addDetailRes?.id))
        dispatch(handlefactorStep(1));
        dispatch(resetfactorDetailForm());
        setTimeout(() => {
            dispatch(FactorListGet())
        }, 2000)
    };
    const [img, setImg] = useState(null)
    const handlerUploadImg = (e) => {
        setImg(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <Box>
            <Box>
                <Box sx={{ ...center, justifyContent: "space-between", p: 1 }}>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: (theme) => theme.palette.disable.main,
                            my: 0.5,
                        }}
                    >
                        شماره سند:
                        {toPersian("886677")}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: (theme) => theme.palette.disable.main,
                            my: 0.5,
                        }}
                    >
                        طرف معامله: محمدامین رحمتی
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: (theme) => theme.palette.disable.main,
                            my: 0.5,
                        }}
                    >
                        شماره بارنامه / فاکتور:
                        {toPersian("3842")}
                    </Typography>
                </Box>
                <Divider
                    orientation="horizontal"
                    variant="middle"
                    flexItem
                    sx={{ my: 1 }}
                />
            </Box>
            <FactorItemstable height={350} />
            <Box sx={{ ...center, justifyContent: "space-between", mt: 2 }}>
                <Box sx={{ ...center, gap: "5px" }}>
                    <Button
                        onClick={() => registerBn()}
                        variant="contained"
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            bgcolor: (theme) => theme.palette.green.main,
                            fontSize: "16px",
                            fontWeight: 700,
                            px: 4,
                        }}
                    >
                        ثبت
                    </Button>
                    <Button
                        sx={{ bgcolor: theme => theme.palette.darkBlue.main, color: theme => theme.palette.text.primary }}
                        variant="contained"
                        component="label"

                    >
                        اپلود
                        <input
                            type="file"
                            hidden
                            onChange={(e) => handlerUploadImg(e)}
                        />
                    </Button>
                    <Button
                        onClick={() => dispatch(handlefactorStep("decrease"))}
                        variant="contained"
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            bgcolor: (theme) => theme.palette.warning.main,
                            fontSize: "16px",
                            fontWeight: 700,
                            px: 3,
                        }}
                    >
                        بازگشت
                    </Button>
                </Box>
                <Button
                    onClick={() => {
                        dispatch(handlefactorStep(1));
                        handleClose();
                    }}
                    variant="contained"
                    sx={{
                        color: (theme) => theme.palette.text.primary,
                        bgcolor: (theme) => theme.palette.warning.main,
                        fontSize: "16px",
                        fontWeight: 700,
                        px: 3,
                    }}
                >
                    انصراف
                </Button>
            </Box>
        </Box>
    );
}

export default RegisterFactor;
