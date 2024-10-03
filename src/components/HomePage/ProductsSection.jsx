import { Box, Grid } from "@mui/material";
import Title from "../UI/Title";
import PtoductSFilter from "./PtoductSFilter";
import SingleProduct from "./SingleProduct.jsx";
import { useDispatch, useSelector } from "react-redux";
import { center } from "../../styles/theme.js";
import { useEffect } from "react";
import { getProList } from "../../Redux/Slices/Accounting/Products/product.js";
import { NoItem } from '../UI/NoItem';

function ProductsSection() {
    const dispatch = useDispatch();
    const { productList } = useSelector((state) => state.product);


    useEffect(() => {
        dispatch(getProList());
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                borderRadius: "18px",
                bgcolor: (theme) => theme.background.box,
                p: 1.5,
            }}
        >
            <Box sx={{ ...center, justifyContent: "space-between", mb: 1 }}>
                <Title
                    title={"محصولات"}
                    Typoprops={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: (theme) => theme.palette.text.card,
                    }}
                />
                <PtoductSFilter />
            </Box>
            <Grid
                container
                spacing={2}
                sx={{ mt: 1, overflowY: "scroll", height: "500px" }}
            >
                {productList?.filter(item => item.is_fav).length > 0 ? (
                    productList.filter(item => item.is_fav).map((item, index) => (
                        <Grid key={index} item xs={3} sx={{ mt: 1, p: 0.5 }}>
                            <SingleProduct data={item} />
                        </Grid>
                    ))
                ) : (
                    <NoItem />
                )}

            </Grid>
        </Box>
    );
}

export default ProductsSection;
