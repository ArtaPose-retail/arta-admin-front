import React, { forwardRef } from "react";
import {
    Box,
    Typography,
    Divider,
    Grid,
} from "@mui/material";
import StoreLogo from "../../Assets/images/StoreLogo.png"
import { Instagram, Phone, Web } from "@mui/icons-material";
import { center } from "../../styles/theme";
import { persianDate, persianTime, separateBy3, toPersian } from "../../utils/setting";
import { useSelector } from "react-redux";


const ReceiptTemplate = forwardRef((props, ref) => {

    const { OrderProductList, userInfo, OrderPrice } = props

    const { loginInfo } = useSelector(state => state.auth)

    return (
        <Box ref={ref} sx={{ width: "80mm", margin: "0 auto", p: 1 }}>
            {/* Header */}
            <Box sx={{ border: "1px solid black ", borderRadius: "15px" }}>

                <Grid container spacing={1} sx={{ justifyContent: "space-between", p: 2 }} >
                    <Grid item xs={7}>
                        <img src={StoreLogo} />
                    </Grid>

                    <Grid item xs={4}>
                        <Box sx={{ ...center, gap: "3px" }}>

                            <Typography variant="body2">Almfresh.ir</Typography>
                            <Instagram />
                        </Box>
                        <Box sx={{ ...center, gap: "3px" }}>

                            <Typography variant="body2">۰۱۱-۳۲۲۵۰۲۳۶</Typography>
                            <Phone />
                        </Box>
                        <Box sx={{ ...center, gap: "3px" }}>

                            <Typography variant="body2">almfresh.ir</Typography>
                            <Web />
                        </Box>
                    </Grid>
                </Grid>
                <Divider />
                <Box sx={{}}>
                    <Box sx={{ ...center, gap: "2px", py: 1 }}>

                        <Typography sx={{ fontSize: "10px" }} >
                            شماره فاکتور: {toPersian(userInfo?.orderpublicid ?? 0)}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography sx={{ fontSize: "10px" }} >
                            زمان: {persianDate(userInfo?.updated_at)}- {persianTime(userInfo?.create_at)}
                        </Typography>
                        <Divider orientation="vertical" flexItem />

                        <Typography sx={{ fontSize: "10px" }} >
                            کاربر:  {loginInfo?.fname} {loginInfo?.lname}
                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ ...center, gap: "2px", py: 1, justifyContent: "space-evenly" }}>

                        <Typography sx={{ fontSize: "12px" }}>
                            مشتری: <strong>{userInfo?.cust_fullname}</strong>
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            شناسه مشتری: <strong>{userInfo?.cust_id}</strong>
                        </Typography>
                    </Box>
                </Box>
            </Box>



            {/* Product Table */}
            {/* {header} */}
            <Box sx={{ ...center, p: 1, borderRadius: "10px", bgcolor: "black", mt: 1, justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: "12px", color: "white" }}>
                    وزن/تعداد
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "white" }}>
                    فی
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "white" }}>
                    قیمت مصزف کننده
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "white" }}>
                    تخفیف
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "white" }}>
                    قابل پرداخت
                </Typography>
            </Box>
            {/* body */}
            {OrderProductList?.map((item, index) =>

                <Box Box sx={{ p: 1, border: "1px solid black", borderRadius: '12px' }}>
                    <Box sx={{ ...center }}>

                        <Typography sx={{ fontSize: "14px", fontWeight: "900" }}>
                            {toPersian(index + 1)}.
                        </Typography>
                        <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>
                            {item?.Title}
                        </Typography>
                    </Box>
                    <Box sx={{ ...center, justifyContent: "space-between" }}>

                        <Typography sx={{ fontSize: "12px" }}>
                            {toPersian(separateBy3(item?.quantity ?? 0))}
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            {toPersian(separateBy3(item?.unitprice ?? 0))}
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            {toPersian(separateBy3(item?.totalprice ?? 0))}
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            {toPersian(separateBy3(item?.discount ?? 0))}
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            {toPersian(separateBy3(item?.finalprice ?? 0))}
                        </Typography>
                    </Box>
                </Box>
            )}


            {/* Footer */}
            <Box sx={{ mt: 2 }}>
                <Typography variant="body2">
                    مجموع قیمت مصرف کننده: <strong>{toPersian(separateBy3(OrderPrice?.order_price ?? 0))}</strong> ریال
                </Typography>
                <Typography variant="body2">
                    تخفیف: <strong>{toPersian(separateBy3(OrderPrice?.calculated_discount ?? 0))}</strong> ریال
                </Typography>
                <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                    قابل پرداخت: <strong>{toPersian(separateBy3((OrderPrice?.order_price - OrderPrice?.calculated_discount) ?? 0))}</strong> ریال
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" textAlign="center">
                    آدرس: مازندران - بابل - روبروی پمپ بنزین پارک نوشیروانی - بسیج 18
                </Typography>
                <Typography variant="caption" textAlign="center" display="block">
                    Artapos | Powered by arta-tech.ir
                </Typography>
            </Box>
        </Box>
    );
});

export default ReceiptTemplate;
