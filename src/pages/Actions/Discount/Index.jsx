import React, { useState } from "react";
import Title from "../../../components/UI/Title";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductDetails from "../../../components/Products/ProductDetails";
import DigitalLable from "../../../components/Products/DigitalLable";
import { LableDiscount } from "../../../components/Discount/LableDiscount/Index";

function Discount() {
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
        console.log(event, newValue);
        setValue(newValue);
    };

    const handleButtonClick = (tabValue) => {
        setValue(tabValue);
    };
    return (
        <Box
            sx={{

                width: "100%",
                borderRadius: "18px",
                height: "85vh",
                m: 1,
            }}
        >
            <TabContext value={value} sx={{ width: "100%" }}>
                <Box >
                    <TabList onChange={handleChange}>
                        <Tab
                            label={
                                <Title
                                    title="کد تخفیف  لیبلی"
                                    Typoprops={{
                                        fontSize: "24px",
                                        fontWeight: 700,
                                    }}
                                />
                            }
                            value="1"
                        />
                        <Tab
                            label={
                                <Title
                                    title="کد تخفیف  محصولی"
                                    Typoprops={{
                                        fontSize: "24px",
                                        fontWeight: 700,
                                    }}
                                />
                            }
                            value="2"
                        />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ height: "80dvh", overflow: "scroll", }}>
                    <LableDiscount />
                </TabPanel>
                <TabPanel value="2">
                    محصولی
                </TabPanel>
            </TabContext>

        </Box>
    );
}

export default Discount;
