import React from "react";
import { Box } from "@mui/material";
import { center } from "../../../styles/theme";
import apiRouts from "../../../utils/apiRouts";
import Title from "../../UI/Title";
import { useDispatch } from "react-redux";
import { singleProd } from "../../../Redux/Slices/Accounting/Products/product";

function SingleProd({ data }) {
    const dispatch = useDispatch()
    const clickHandler = (id) => {
        dispatch(singleProd(id))
    }
    return (
        <Box
            onClick={() => clickHandler(data?.prod_id)}
            sx={{
                cursor: "pointer",
                background: "#fff",
                textAlign: "center",
                height: 100,
                width: '100%',
                boxShadow: "0px 0px 17px 1px rgb(0 0 0 / 17%)",
                borderRadius: "12px",
                ...center,
                justifyContent: "start",
                gap: "5px",
                px: 1,

            }}
        >
            {/* header */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                    sx={{
                        width: "80px",
                        height: "56px",
                        borderRadius: "8px",
                        ...center,
                        bgcolor: "#FFDBDF",
                    }}
                >
                    <img
                        src={`${apiRouts.baseUrl}${data?.productpic_path}`}
                        width={35}
                        height={35}
                        style={{
                            padding: "0px",
                            margin: "0px",
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <Title
                    title={data?.title}
                    Typoprops={{
                        fontSize: "16px",
                        fontWeight: 900,
                        textAlign: "start",
                    }}
                />
            </Box>
        </Box>
    );
}

export default SingleProd;
