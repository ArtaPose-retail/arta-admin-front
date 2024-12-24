import React from "react";
import { Box, GlobalStyles, Typography } from "@mui/material";
import { separateBy3, toPersian } from "../../utils/setting";
import { center } from "../../styles/theme";

const ProdA4 = (props) => {
    const { data, id } = props;
    return (
        <>

            <Box
                id={id}
                sx={{
                    width: "297mm", // عرض برای حالت افقی
                    height: "210mm", // ارتفاع برای حالت افقی
                    border: "1px solid #000",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20mm", // فضای داخلی مناسب
                    backgroundColor: "#fff",
                    boxSizing: "border-box",
                    overflow: "hidden", // جلوگیری از ایجاد صفحه دوم
                    "@media print": {
                        "@page": {
                            size: "A4 landscape",
                            margin: "0", // حذف حاشیه پیش‌فرض
                        },
                        "&": {
                            margin: 0, // حذف حاشیه اضافی
                            padding: 0,
                            border: "none", // حذف خط‌های دور صفحه
                        },
                    },
                }}
            >
                {/* Header */}
                <Typography
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "90px", mb: 8 }}
                >
                    {data?.title}
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "90px" }} align="center">
                    {toPersian(separateBy3(data?.price ?? 0))} ریال
                </Typography>
            </Box>
        </>
    );
};

export default ProdA4;
