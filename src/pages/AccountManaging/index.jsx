import {
    Box,
    Button,
    Divider,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import Title from "../../components/UI/Title";
import { DatePicker } from "@kasraghoreyshi/datepicker";
import "@kasraghoreyshi/calendar/styles.css";
import "@kasraghoreyshi/datepicker/styles.css";
import { customersData } from "../../utils/data";
import { separateBy3, toPersian } from "../../utils/setting";
import moment from "jalali-moment";
import AccountManagingTable from "../../components/AccountManaging/AccountManagingTable";

function AccountManaging() {
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <Box
            sx={{
                bgcolor: (theme) => theme.background.box,
                borderRadius: "18px",
                width: "100%",
                m: 1,
                p: 1,
                height: "85vh",
            }}
        >
            <Title
                title={"مدیریت صندوق"}
                Typoprops={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: (theme) => theme.typography.color,
                }}
            />

            {/* //! filter section */}
            <Box sx={{ ...center, justifyContent: "space-between", mt: 2 }}>
                <Box sx={{ ...center, gap: "10px" }}>
                    <Box sx={{}}>
                        <InputLabel>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                کاربر
                            </Typography>
                        </InputLabel>
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
                            <option value={""}>
                                <Typography sx={{ fontSize: "12px", color: "black" }}>
                                    همه
                                </Typography>
                            </option>
                            {customersData?.map((option, index) => (
                                <option key={index} value={option.name}>
                                    <Typography sx={{ fontSize: "12px", color: "black" }}>
                                        {option.name}
                                    </Typography>
                                </option>
                            ))}
                        </TextField>
                    </Box>

                    <Box sx={{}}>
                        <InputLabel>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                فیلتر
                            </Typography>
                        </InputLabel>
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
                    <Box sx={{}}>
                        <InputLabel>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                تاریخ
                            </Typography>
                        </InputLabel>
                        <DatePicker
                            className="datePicker2"
                            persianDigits={true}
                            // onChange={(e) => props.getDate(e)}
                            style={{ border: "0px" }}
                            value={toPersian(
                                moment(new Date(), "YYYY-MM-DD")
                                    .locale("fa")
                                    .format("dddd D MMMM YYYY")
                            )}
                        />
                    </Box>
                </Box>

                <Box sx={{ ...center, gap: "10px" }}>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "8px",
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                        }}
                    >
                        اکسل
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "8px",
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                            px: 3,
                        }}
                    >
                        چاپ
                    </Button>
                </Box>
            </Box>
            <Divider sx={{ mt: 2 }} />
            <AccountManagingTable />

            <Box
                sx={{
                    ...center,
                    justifyContent: "flex-start",
                    gap: "5px",
                    height: "15%",
                    width: "100%",

                }}
            >
                <Box
                    sx={{
                        border: "1px solid gray",
                        p: 1,
                        borderRadius: "12px",
                        height: "100%",
                        width: "25%",
                    }}
                >
                    <Box sx={{ ...center, gap: "10px", justifyContent: "space-between" }}>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            جمع كل موجودي:
                        </Typography>
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.darkBlue.main,
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            {toPersian(separateBy3("3246346"))} ریال
                        </Typography>
                    </Box>
                    <Box sx={{ ...center, gap: "10px", justifyContent: "space-between" }}>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            موجودي  بانك ملي
                        </Typography>
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.darkBlue.main,
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            {toPersian(separateBy3("3246346"))} ریال
                        </Typography>
                    </Box>
                    <Box sx={{ ...center, gap: "10px", justifyContent: "space-between" }}>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            موجودي  بانك سپه:
                        </Typography>
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.darkBlue.main,
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            {toPersian(separateBy3("3246346"))} ریال
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        border: "1px solid gray",
                        p: 1,
                        borderRadius: "12px",
                        height: "100%",
                        width: "25%",
                    }}
                >
                    <Box sx={{ ...center }}>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            جمع كل فروش
                        </Typography>
                    </Box>

                    <Box sx={{ ...center, gap: "10px", justifyContent: "space-between" }}>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            نقدي:
                        </Typography>
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.darkBlue.main,
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            {toPersian(separateBy3("3246346"))} ریال
                        </Typography>
                    </Box>
                    <Box sx={{ ...center, gap: "10px", justifyContent: "space-between" }}>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            نسيه:
                        </Typography>
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.darkBlue.main,
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            {toPersian(separateBy3("3246346"))} ریال
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        border: "1px solid gray",
                        p: 1,
                        borderRadius: "12px",
                        height: "100%",
                        width: "25%",
                        ...center,
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            ...center,
                            gap: "10px",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            جمع كل بدهكاران
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            جمع كل بستانكاران
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            ...center,
                            gap: "10px",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.darkBlue.main,
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            {toPersian(separateBy3("3246346"))} ریال
                        </Typography>
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.darkBlue.main,
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            {toPersian(separateBy3("3246346"))} ریال
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        border: "1px solid gray",
                        p: 1,
                        borderRadius: "12px",
                        height: "100%",
                        ...center,
                        width: "25%",
                        // flexDirection: "column",
                        // justifyContent: "space-between",
                        // width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            ...center,
                            gap: "10px",

                            width: "100%",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            موجودي روز{" "}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            ...center,
                            gap: "10px",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.darkBlue.main,
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            {toPersian(separateBy3("3246346"))} ریال
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default AccountManaging;
