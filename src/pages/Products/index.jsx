import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Title from "../../components/UI/Title";
import ProductsTable from "../../components/Products/ProductsTable";
import { center } from "../../styles/theme";
import Add from "@mui/icons-material/Add";
import AddNewProduct from "../../components/Products/AddNewProduct";
import { useDispatch } from "react-redux";
import { getProList, SearchByTitle } from "../../Redux/Slices/Accounting/Products/product";
import { RestoreOutlined } from "@mui/icons-material";

function Products() {
    const [openDg, setOpenDg] = useState(false);
    const [searchText, setSearchText] = useState(null);

    const dispatch = useDispatch()
    const openProductDg = () => {
        setOpenDg(true);
    };

    const closeProductDg = () => {
        setOpenDg(false);
    };


    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };




    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            dispatch(SearchByTitle(searchText)); // ارسال مقدار به اکشن
            console.log("Searching for:", searchText);
        }
    };

    const ResetSearch = () => {
        dispatch(getProList())
        setSearchText("")
    }

    return (
        <Box
            sx={{
                bgcolor: (theme) => theme.background.box,
                borderRadius: "18px",
                m: 1,
                p: 1,
                height: "90dvh",
            }}
        >
            <Title
                title={"محصولات"}
                typoprops={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: (theme) => theme.typoprops.color,
                }}
            />

            <Box
                sx={{
                    ...center,
                    justifyContent: "space-between",
                    gap: "5px",
                    my: 2,
                }}
            >
                <Title
                    title={"نوع محصول"}
                    Typoprops={{
                        color: (theme) => theme.typography.color,
                        fontSize: "18px",
                        fontWeight: 700,
                    }}
                />

                <Box sx={{ ...center, gap: "10px" }}>


                    <TextField
                        value={searchText}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown} // مدیریت کلید Enter
                        sx={{
                            color: "#000",
                            background: "#F2F2F2",
                            borderRadius: "12px",
                            width: "17rem",
                        }}
                        autoComplete="off"
                        placeholder="جستجو محصول"
                        inputProps={{
                            autoComplete: "none", // غیرفعال کردن تکمیل خودکار
                        }}
                        InputProps={{
                            sx: {
                                "& .MuiInputBase-input": {
                                    color: "#000000",
                                },
                            },
                        }}
                    />

                    <Button sx={{
                        bgcolor: (theme) => theme.palette.primary.dark,
                        color: (theme) => theme.palette.text.primary,
                        p: 2,
                        borderRadius: "18px",
                        ...center,
                        gap: "5px",
                    }} variant="contained" onClick={() => ResetSearch()}>

                        <RestoreOutlined />
                    </Button>

                    <Button
                        onClick={() => openProductDg()}
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.text.secondary,
                            color: (theme) => theme.palette.text.primary,
                            p: 2,
                            borderRadius: "18px",
                            ...center,
                            gap: "5px",
                        }}
                    >
                        <Add sx={{ fill: (theme) => theme.palette.text.primary }} />
                        افزودن
                    </Button>
                </Box>


            </Box>

            <ProductsTable />
            <AddNewProduct status={openDg} handlerCloseDialog={closeProductDg} />
        </Box>
    );
}

export default Products;
