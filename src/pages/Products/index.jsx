import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import Title from "../../components/UI/Title";
import ProductsTable from "../../components/Products/ProductsTable";
import { center } from "../../styles/theme";
import Add from "@mui/icons-material/Add";
import AddNewProduct from "../../components/Products/AddNewProduct";

function Products() {
    const [openDg, setOpenDg] = useState(false);
    const openProductDg = () => {
        setOpenDg(true);
    };

    const closeProductDg = () => {
        setOpenDg(false);
    };
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

            <ProductsTable />
            <AddNewProduct status={openDg} handlerCloseDialog={closeProductDg} />
        </Box>
    );
}

export default Products;
