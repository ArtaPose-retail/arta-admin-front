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
import { separateBy3, toPersian } from "../../utils/setting";


const ReceiptTemplate = forwardRef((props, ref) => {

    return (
        <Box ref={ref} sx={{ width: "80mm", margin: "0 auto", }}>
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

                            <Typography variant="body2">Almfresh.ir</Typography>
                            <Web />
                        </Box>
                    </Grid>
                </Grid>
                <Divider />
                <Box sx={{}}>
                    <Box sx={{ ...center, gap: "2px", py: 1 }}>

                        <Typography sx={{ fontSize: "10px" }} >
                            شماره فاکتور: 23456
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography sx={{ fontSize: "10px" }} >
                            زمان: 23:50:19 | 1402/07/05
                        </Typography>
                        <Divider orientation="vertical" flexItem />

                        <Typography sx={{ fontSize: "10px" }} >
                            کاربر: مصطفی نژاد
                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ ...center, gap: "2px", py: 1, justifyContent: "space-evenly" }}>

                        <Typography sx={{ fontSize: "12px" }}>
                            مشتری: <strong>مهرداد مقدسی امیری</strong>
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            شناسه مشتری: <strong>123456</strong>
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) =>

                <Box Box sx={{ p: 1, border: "1px solid black", borderRadius: '12px' }}>
                    <Box sx={{ ...center }}>

                        <Typography sx={{ fontSize: "14px", fontWeight: "900" }}>
                            {toPersian(index + 1)}.
                        </Typography>
                        <Typography sx={{ fontSize: "12px", fontWeight: "900" }}>
                            سیب سبزوار دماوند
                        </Typography>
                    </Box>
                    <Box sx={{ ...center, justifyContent: "space-between" }}>

                        <Typography sx={{ fontSize: "12px" }}>
                            {toPersian(separateBy3(10 ?? 0))}
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            {toPersian(separateBy3(10000 ?? 0))}
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            {toPersian(separateBy3(10000 ?? 0))}
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            {toPersian(separateBy3(10 ?? 0))}
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            {toPersian(separateBy3(100000 ?? 0))}
                        </Typography>
                    </Box>
                </Box>
            )}


            {/* Footer */}
            <Box sx={{ mt: 2 }}>
                <Typography variant="body2">
                    مجموع قیمت مصرف کننده: <strong>2,700,000</strong> ریال
                </Typography>
                <Typography variant="body2">
                    تخفیف: <strong>120,000</strong> ریال
                </Typography>
                <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                    قابل پرداخت: <strong>2,580,000</strong> ریال
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" textAlign="center">
                    آدرس: مازندران - بابل - روبروی پمپ بنزین نوشیروانی - بسیج 18
                </Typography>
                <Typography variant="caption" textAlign="center" display="block">
                    Artapos | Powered by arta-tech.ir
                </Typography>
            </Box>
        </Box>
    );
});

export default ReceiptTemplate;