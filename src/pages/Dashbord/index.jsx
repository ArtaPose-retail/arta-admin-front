import {
    Box,
    Button,
    Chip,
    Grid,
    TextField,
    Typography,
    Divider,
    InputAdornment,
} from "@mui/material";
import { Fragment, useState } from "react";
import Title from "../../components/UI/Title";
import { BarChartData, months, products } from "../../utils/data";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { separateBy3, toPersian } from "../../utils/setting";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { BarChart } from "./BarChart";
import { useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import CustomerTable from "../../components/Dashbord/CustomerTable";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import FactorDT from "../../components/Dashbord/FactorDT";
import { ProductsDashbord } from "../../components/Dashbord/ProductsDashbord";
function Dashbord() {
    const navigate = useNavigate();

    const [month, setMonth] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const selectMonth = (month) => {
        setMonth(month);

        setSelectedMonth(months.find((item) => item.value === month));
        console.log(months.find((item) => item.value === month));
    };

    const [showQRField, setShowQRField] = useState(false);
    const showFieldHandler = () => {
        setShowQRField(!showQRField);
    };
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const [chartData, setChartData] = useState({
        labels: BarChartData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained ",
                data: BarChartData.map((data) => data.userGain),
                backgroundColor: ["#45BFFF", "#FF7782"],
                borderColor: "black",
                borderWidth: 0,
                borderRadius: 7,
            },
        ],
    });

    return (
        <>
            <Box
                sx={{ ...center, justifyContent: "space-between", gap: "15px", m: 2 }}
            >
                <Title
                    title={"داشبــورد"}
                    Typoprops={{
                        fontSize: "24px",
                        fontWeight: 700,
                        color: (theme) => theme.palette.text.card,
                    }}
                />
                <Button
                    onClick={() => navigate(reactRouts.sellpage)}
                    variant="contained"
                    sx={{
                        color: (theme) => theme.palette.text.primary,
                        bgcolor: (theme) => theme.palette.darkBlue.main,
                        p: 2,
                        width: "150px",
                        borderRadius: "12px",
                    }}
                >
                    عملیات
                </Button>
            </Box>

            <Box
                sx={{ px: 2, width: "100%", height: "35vh", gap: "10px", ...center }}
            >
                <Box
                    sx={{
                        width: "70%",
                        height: "100%",
                        bgcolor: (theme) => theme.background.box,
                        borderRadius: "12px",
                        ...center,
                        justifyContent: "space-between",
                        p: 1,
                    }}
                >
                    <Box
                        sx={{
                            ...center,
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                            // width: '100%'
                        }}
                    >
                        <Box>
                            <Title
                                title={"مجموع خرید و فروش"}
                                Typoprops={{
                                    fontSize: "24px",
                                    fontWeight: 500,
                                    color: (theme) => theme.palette.text.card,
                                }}
                            />
                            <Typography
                                sx={{
                                    my: 1,
                                    fontSize: "14px",
                                    color: (theme) => theme.palette.text.disabled,
                                    mt: 1,
                                }}
                            >
                                {month === ""
                                    ? "در ۳۰ روز گذشته"
                                    : `در ${selectedMonth?.title} ماه  `}
                            </Typography>
                        </Box>
                        <Box>
                            <Box
                                sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <Typography
                                        sx={{
                                            fontSize: "26px",
                                            fontWeight: 700,
                                            color: (theme) => theme.palette.text.secondary,
                                        }}
                                    >
                                        {toPersian(separateBy3("750000"))} تومان
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
                                            bgcolor: (theme) => theme.palette.green.main,
                                            "& .MuiChip-label": {},
                                        }}
                                    />
                                </Box>

                                <Box sx={{ display: "flex", gap: "5px", mt: 1 }}>
                                    <Typography
                                        sx={{
                                            color: (theme) => theme.palette.green.main,
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
                                        در ۱۰ روز گذشته کسب کرده‌اید
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ ...center, flexDirection: "column" }}>
                        <Box
                            sx={{ ...center, justifyContent: "space-between", width: "100%" }}
                        >
                            <Title
                                title={"آنالیز درآمد"}
                                Typoprops={{
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    color: (theme) => theme.palette.text.card,
                                }}
                            />
                            <TextField
                                value={month}
                                onChange={(e) => selectMonth(e.target.value)}
                                sx={{
                                    p: 0.5,
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

                        <BarChart chartData={chartData} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        bgcolor: (theme) => theme.background.box,
                        borderRadius: "12px",
                        ...center,
                        justifyContent: "space-between",
                        p: 1,
                        flexDirection: "column",
                        width: "30%",
                        height: "100%",
                    }}
                >
                    <Box
                        sx={{ ...center, justifyContent: "space-between", width: "100%" }}
                    >
                        <Title
                            title={"مشتریان"}
                            Typoprops={{
                                fontSize: "24px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.text.card,
                            }}
                        />
                        <TextField
                            select
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                            }}
                            type="text"
                            id="input-with-icon-textfield"
                            InputProps={{
                                style: {
                                    background: "#F2F2F2",
                                    color: "#000",
                                    direction: "ltr",
                                    height: "40px",
                                },
                            }}
                            variant="outlined"
                            SelectProps={{
                                native: true,
                            }}
                        >
                            <option value="">
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        color: (theme) => theme.typography.color,
                                        fontWeight: 400,
                                    }}
                                >
                                    فیلتر براساس
                                </Typography>
                            </option>
                            <option value="customerName">
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        color: (theme) => theme.typography.color,
                                        fontWeight: 400,
                                    }}
                                >
                                    نام مشتری
                                </Typography>
                            </option>
                            <option value="mobile">
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        color: (theme) => theme.typography.color,
                                        fontWeight: 400,
                                    }}
                                >
                                    شماره تماس
                                </Typography>
                            </option>
                        </TextField>
                    </Box>
                    <CustomerTable />
                </Box>
            </Box>
            <Box
                sx={{
                    px: 2,
                    width: "100%",
                    height: "35vh",
                    gap: "10px",
                    mt: 2,
                    ...center,
                }}
            >
                <Box
                    sx={{
                        bgcolor: (theme) => theme.background.box,
                        borderRadius: "12px",
                        ...center,
                        flexDirection: "column",
                        p: 1,
                        width: "70%",
                        height: "100%",
                    }}
                >
                    <Box
                        sx={{
                            ...center,
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <Title
                            title={"فاکتور ها"}
                            Typoprops={{
                                fontSize: "24px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.text.card,
                            }}
                        />
                        <Box sx={{ ...center, gap: "10px" }}>
                            {!showQRField ? (
                                <QrCode2Icon
                                    onClick={() => showFieldHandler()}
                                    sx={{ cursor: "pointer" }}
                                />
                            ) : (
                                <TextField
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "white",
                                        },
                                    }}
                                    type="text"
                                    id="input-with-icon-textfield"
                                    placeholder="کد محصول"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment
                                                position="start"
                                                onClick={() => showFieldHandler()}
                                                sx={{ cursor: "pointer" }}
                                            >
                                                <CloseIcon
                                                    sx={{ fill: (theme) => theme.palette.warning.main }}
                                                />
                                            </InputAdornment>
                                        ),
                                        style: {
                                            background: "#F2F2F2",
                                            color: "#000",
                                            direction: "ltr",
                                            height: "40px",
                                        },
                                    }}
                                    variant="outlined"
                                />
                            )}
                            <Divider orientation="vertical" flexItem />
                            <TextField
                                value={month}
                                onChange={(e) => selectMonth(e.target.value)}
                                sx={{
                                    height: "40px",
                                    overflow: "hidden",
                                    color: "white",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: (theme) => theme.palette.darkBlue.main,
                                    },
                                    "& .MuiNativeSelect-select": {
                                        color: "white",
                                        borderColor: (theme) => theme.palette.darkBlue.main,
                                    },
                                    borderRadius: "18px",
                                    bgcolor: (theme) => theme.palette.darkBlue.main,
                                }}
                                select
                                SelectProps={{
                                    native: true,
                                    style: {
                                        height: "40px",
                                    },
                                }}
                            >
                                <option value="">
                                    <Typography sx={{ fontSize: "12px", color: "black" }}>
                                        ماه ها
                                    </Typography>
                                </option>

                                {months?.map((item, index) => (
                                    <option key={index} value={item.value}>
                                        {item.title}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            ...center,
                            width: "100%",
                            justifyContent: "flex-start",
                        }}
                    >
                        <Box sx={{ ...center, gap: "10px" }}>
                            <TextField
                                value={month}
                                onChange={(e) => selectMonth(e.target.value)}
                                sx={{
                                    height: "40px",
                                    overflow: "hidden",
                                    color: "white",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "transparent",
                                    },
                                    "& .MuiNativeSelect-select": {
                                        color: "black",
                                    },
                                    borderRadius: "7px",
                                    bgcolor: "#F2F2F2",
                                }}
                                select
                                SelectProps={{
                                    native: true,
                                    style: {
                                        height: "40px",
                                    },
                                }}
                            >
                                <option value="">
                                    <Typography sx={{ fontSize: "12px", color: "black" }}>
                                        وضیعت محصول
                                    </Typography>
                                </option>

                                {months?.map((item, index) => (
                                    <option key={index} value={item.value}>
                                        {item.title}
                                    </option>
                                ))}
                            </TextField>
                            <TextField
                                value={month}
                                onChange={(e) => selectMonth(e.target.value)}
                                sx={{
                                    height: "40px",
                                    overflow: "hidden",
                                    color: "white",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "transparent",
                                    },
                                    "& .MuiNativeSelect-select": {
                                        color: "black",
                                    },
                                    borderRadius: "7px",
                                    bgcolor: "#F2F2F2",
                                }}
                                select
                                SelectProps={{
                                    native: true,
                                    style: {
                                        height: "40px",
                                    },
                                }}
                            >
                                <option value="">
                                    <Typography sx={{ fontSize: "12px", color: "black" }}>
                                        مقدار خرید
                                    </Typography>
                                </option>

                                {months?.map((item, index) => (
                                    <option key={index} value={item.value}>
                                        {item.title}
                                    </option>
                                ))}
                            </TextField>
                            <Divider orientation="vertical" flexItem />
                            <TextField
                                sx={{
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "white",
                                    },
                                }}
                                type="text"
                                id="input-with-icon-textfield"
                                placeholder="جستوجو مشتری"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon
                                                sx={{ fill: (theme) => theme.palette.divider }}
                                            />
                                        </InputAdornment>
                                    ),
                                    style: {
                                        background: "#F2F2F2",
                                        color: "#000",
                                        direction: "ltr",
                                        height: "40px",
                                    },
                                }}
                                variant="outlined"
                            />
                        </Box>
                    </Box>
                    <FactorDT />
                </Box>
                <Box
                    sx={{
                        bgcolor: (theme) => theme.background.box,
                        borderRadius: "12px",
                        ...center,
                        justifyContent: "space-between",
                        p: 1,
                        flexDirection: "column",
                        width: "30%",
                        height: "100%",
                    }}
                >
                    <Box
                        sx={{ ...center, justifyContent: "space-between", width: "100%" }}
                    >
                        <Title
                            title={"محصولات"}
                            Typoprops={{
                                fontSize: "24px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.text.card,
                            }}
                        />
                        <TextField
                            select
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                            }}
                            type="text"
                            id="input-with-icon-textfield"
                            InputProps={{
                                style: {
                                    background: "#F2F2F2",
                                    color: "#000",
                                    direction: "ltr",
                                    height: "40px",
                                },
                            }}
                            variant="outlined"
                            SelectProps={{
                                native: true,
                            }}
                        >
                            <option value="">
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        color: (theme) => theme.typography.color,
                                        fontWeight: 400,
                                    }}
                                >
                                    وضیعت محصول
                                </Typography>
                            </option>
                            <option value="customerName">
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        color: (theme) => theme.typography.color,
                                        fontWeight: 400,
                                    }}
                                >
                                    نام مشتری
                                </Typography>
                            </option>
                            <option value="mobile">
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        color: (theme) => theme.typography.color,
                                        fontWeight: 400,
                                    }}
                                >
                                    شماره تماس
                                </Typography>
                            </option>
                        </TextField>
                    </Box>

                    <Grid
                        container
                        spacing={1}
                        sx={{ height: "15rem", ...center, overflow: "scroll", mt: 1 }}
                    >
                        {products?.map((item, index) => (
                            <Grid key={index} item xs={6} sx={{ ...center }}>
                                <ProductsDashbord data={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default Dashbord;
