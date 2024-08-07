import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import Title from '../../components/UI/Title'
import { toastHandler } from '../../utils/setting'
import ProductsTable from '../../components/Products/ProductsTable';

function Products() {
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <Box sx={{
            bgcolor: theme => theme.background.box,
            borderRadius: "18px",
            m: 1, p: 1
        }}>

            <Title title={"محصولات"} typoprops={{
                fontSize: "20px",
                fontWeight: 500,
                color: theme => theme.typoprops.color
            }} />

            <Box sx={{ mt: 2 }}>
                <Title
                    title={"نوع محصول"}
                    Typoprops={{
                        color: (theme) => theme.typography.color,
                        fontSize: "18px",
                        fontWeight: 400,
                    }}
                />
                <Box
                    sx={{
                        ...center,
                        justifyContent: "flex-start",
                        gap: "5px",
                        my: 2,
                    }}
                >
                    <TextField
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                        type="number"
                        id="input-with-icon-textfield"
                        placeholder="نام ژنریک را وارد کنید"
                        InputProps={{
                            style: {
                                borderRadius: "0px 18px 18px 0px",
                                background: "#F2F2F2",
                                color: "#000",
                                direction: "ltr",
                            },
                        }}
                        variant="outlined"
                    />
                    <TextField
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                        type="number"
                        id="input-with-icon-textfield"
                        placeholder="نام منتسب را وارد کنید"
                        InputProps={{
                            style: {
                                borderRadius: "0px",
                                background: "#F2F2F2",
                                color: "#000",
                                direction: "ltr",
                            },
                        }}
                        variant="outlined"
                    />
                    <Button
                        onClick={() => {
                            toastHandler("محصول با موفقیت اضافه شد", "success")
                        }}
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.text.secondary,
                            color: (theme) => theme.palette.text.primary,
                            p: 1.75,
                            px: 2.5,
                            borderRadius: "18px 0px 0px 18px",
                        }}
                    >
                        افزودن
                    </Button>
                </Box>
            </Box>

            <ProductsTable />
        </Box>
    )
}

export default Products