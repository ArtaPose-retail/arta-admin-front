import {
    Box,
    Button,
    Chip,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import Title from "../UI/Title";
import { months } from "../../utils/data.js";
import { toPersian } from "../../utils/setting.js";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Transections = () => {
    const [month, setMonth] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const selectMonth = (month) => {
        setMonth(month);

        setSelectedMonth(months.find((item) => item.value === month));
        console.log(months.find((item) => item.value === month));
    };
    return (
        <Box
            sx={{
                bgcolor: (theme) => theme.background.box,
                borderRadius: "18px",
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: "50px"
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "space-between", px: 1 }}>
                <Box>
                    <Title
                        title={"مجموع هزینه‌های امروز"}
                        Typoprops={{ fontSize: "18px", fontWeight: "bold" }}
                    />
                    <Typography
                        sx={{
                            my: 1,
                            fontSize: "14px",
                            color: (theme) => theme.palette.text.disabled,
                            mt: 1
                        }}
                    >
                        {month === ""
                            ? "در ۶۰ روز گذشته"
                            : `در ${selectedMonth?.title} ماه  `}
                    </Typography>
                </Box>
                <TextField
                    value={month}
                    onChange={(e) => selectMonth(e.target.value)}
                    sx={{
                        p: .5,
                        overflow: "hidden",
                        color: "black",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                        },
                        "& .MuiNativeSelect-select": {
                            color: "black",
                        },
                        borderRadius: "18px",
                        bgcolor: "#FFFFF",
                    }}
                    select
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option value="">
                        <Typography sx={{ fontSize: "12px", color: "black" }}>
                            ماه انتخابی{" "}
                        </Typography>
                    </option>

                    {months?.map((item, index) => (
                        <option key={index} value={item.value}>
                            {item.title}
                        </option>
                    ))}
                </TextField>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <Typography
                            sx={{
                                fontSize: "26px",
                                fontWeight: 700,
                                color: (theme) => theme.palette.warning.main,
                            }}
                        >
                            ۷۵/۳۵۰/۵۰۰ تومان
                        </Typography>
                        <Chip
                            label={
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.text.primary,
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <KeyboardArrowUpIcon
                                        fontSize="samll"
                                        sx={{ fill: (theme) => theme.palette.text.primary }}
                                    />
                                    {toPersian(" 5.4 % +")}
                                </Typography>
                            }
                            // color="success"
                            sx={{
                                bgcolor: (theme) => theme.palette.warning.main,
                                "& .MuiChip-label": {},
                            }}
                        />
                    </Box>

                    <Box sx={{ display: "flex", gap: "5px", mt: 1 }}>
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.text.secondary,
                                fontSize: "14px",
                                fontWeight: "bold",
                            }}
                        >
                            ۵/۲۰۰/۰۰۰ تومان{" "}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: "bold",
                            }}
                        >
                            در ۱۰ روز گذشته کاسته شده است
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Transections;
