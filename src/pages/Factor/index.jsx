import {
    Box,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import Title from "../../components/UI/Title";
import { months } from "../../utils/data";
import FactorTable from "../../components/FactorPage/FactorTable";
import Input from "../../components/UI/Input";

import NewProductParentDialog from "../../components/HomePage/Dialogs";
import { center } from "../../styles/theme";

function FactorPage() {
    const [month, setMonth] = useState("");
    const selectMonth = (month) => {
        setMonth(month);
    };

    return (
        <Box
            sx={{
                bgcolor: (theme) => theme.background.box,
                width: "100%",
                borderRadius: "18px",
                height: "85vh",
                m: 1,
                p: 1,
            }}
        >
            <Box sx={{ ...center, justifyContent: "space-between", width: "100%" }}>
                <Title
                    title={"فاکتور"}
                    Typoprops={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: (theme) => theme.palette.text.card,
                    }}
                />

                <Box
                    sx={{
                        ...center,
                        width: "100%",
                        justifyContent: "flex-end",
                        gap: "10px",
                    }}
                >
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
                                مرتب کردن براساس
                            </Typography>
                        </option>

                        {months?.map((item, index) => (
                            <option key={index} value={item.value}>
                                {item.title}
                            </option>
                        ))}
                    </TextField>

                    <Input
                        icon={"search"}
                        type={"text"}
                        hasIcon={true}
                        placeholder={"جستجو براساس نام محصول"}
                    />
                    <NewProductParentDialog type={"add"} />

                </Box>
            </Box>

            <FactorTable />
        </Box>
    );
}

export default FactorPage;
