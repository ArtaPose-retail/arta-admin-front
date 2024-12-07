import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import CustomerFactor from "./CustomerFactor";
import PayStatus from "./PayStatus";
import { toastHandler } from "../../utils/setting";
import CancelBtn from "../UI/CancelBtn";
import { Close } from "@mui/icons-material";
import { center } from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { CalcOrders, DeleteOrder, SaveOrder } from "../../Redux/Slices/Actions/Order/Order";
function PurchaseInformation() {
    const [tabs, setTabs] = useState(2);
    const dispatch = useDispatch();
    const [openCancelBTn, setOpenCancelBTn] = useState(false);
    const handleOpenCancleModal = () => setOpenCancelBTn(true);
    const handleCloseCancleModal = () => setOpenCancelBTn(false);


    const handleChange = (id) => {
        setTabs(+id);
    };


    const { cardId, cardInfo } = useSelector(state => state.Order)
    const AcceptBtn = () => {
        dispatch(DeleteOrder(cardId))
        setOpenCancelBTn(false)
    }

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                borderRadius: "18px",
                ...center,
                flexDirection: "column",
                // justifyContent: "space-between",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    borderRadius: "18px",
                    bgcolor: (theme) => theme.background.box,
                    p: 1.5,
                    height: "90%",
                }}
            >
                <Box sx={{ ...center, flexDirection: "column", height: "100%" }}>
                    <Box
                        sx={{
                            ...center,
                            border: "1px solid #DBDCDE",
                            borderRadius: "7px",
                            gap: "5px",
                            px: 1,
                            p: 0.5,
                        }}
                    >
                        <Button
                            onClick={(e) => handleChange(e.target.id)}
                            id="1"
                            variant="contained"
                            sx={{
                                bgcolor: (theme) =>
                                    tabs === 1
                                        ? theme.palette.divider
                                        : theme.palette.text.primary,
                                color: (theme) =>
                                    tabs === 1
                                        ? theme.palette.text.primary
                                        : theme.palette.disable.main,
                                borderRadius: "7px",
                            }}
                        >
                            {" "}
                            وضعیت پرداخت
                        </Button>
                        <Button
                            onClick={(e) => handleChange(e.target.id)}
                            id="2"
                            variant="contained"
                            sx={{
                                bgcolor: (theme) =>
                                    tabs === 2
                                        ? theme.palette.divider
                                        : theme.palette.text.primary,
                                color: (theme) =>
                                    tabs === 2
                                        ? theme.palette.text.primary
                                        : theme.palette.disable.main,
                                borderRadius: "7px",
                            }}
                        >
                            فاکتور مشتری
                        </Button>
                    </Box>

                    <Box sx={{ width: "100%", overflow: "hidden", height: "100%" }}>
                        {tabs === 1 ? <PayStatus /> : <CustomerFactor />}
                    </Box>
                </Box>
            </Box>

            <Box sx={{ ...center, width: "100%", gap: "5px", mt: 1, height: "10%" }}>
                <Button
                    onClick={() => dispatch(SaveOrder(cardId))}
                    variant="contained"
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        color: (theme) => theme.palette.text.primary,
                        width: "70%",
                        fontSize: "14px",
                        fontWeight: 700,
                        py: 2,
                        borderRadius: "12px",
                    }}
                >
                    ثبت نهایی
                </Button>
                {/* <CancelBtn
                    BtnTitle={
                        <Typography
                            sx={{
                                bgcolor: (theme) => theme.palette.warning.main,
                                color: (theme) => theme.palette.text.primary,
                                width: "100%",
                                fontSize: "14px",
                                py: 2,
                                fontWeight: 700,
                                borderRadius: "12px",
                                "&:hover": {
                                    bgcolor: (theme) => theme.palette.warning.main,
                                    color: (theme) => theme.palette.text.primary,
                                },
                            }}
                        >
                            انصراف
                        </Typography>
                    }
                    width="30%"
                    open={openCancelBTn}
                    handleClose={handleCloseCancleModal}
                    handleOpen={handleOpenCancleModal}
                    title={"انصراف  از درخواست"}
                    question={"آیا از انصراف اطمینان دارید؟"}
                /> */}
                <CancelBtn
                    BtnTitle={
                        <Typography
                            sx={{
                                bgcolor: (theme) => theme.palette.warning.main,
                                color: (theme) => theme.palette.text.primary,
                                width: "100%",
                                fontSize: "14px",
                                py: 2,
                                fontWeight: 700,
                                borderRadius: "12px",
                                "&:hover": {
                                    bgcolor: (theme) => theme.palette.warning.main,
                                    color: (theme) => theme.palette.text.primary,
                                },
                            }}
                        >
                            حذف
                        </Typography>
                    }
                    width="30%"
                    open={openCancelBTn}
                    handleClose={handleCloseCancleModal}
                    handleOpen={handleOpenCancleModal}
                    title={"حذف درخواست"}
                    question={`آیا از حذف فاکتور شماره ${cardInfo?.orderpublicid} اطمینان دارید؟`}
                    AcceptBtn={AcceptBtn}
                />
            </Box>
        </Box>
    );
}

export default PurchaseInformation;
