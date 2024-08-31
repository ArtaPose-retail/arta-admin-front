import { Box, Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
import DigitalLable from "./DigitalLable";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductDetails from "./ProductDetails";
function AddNewProduct({ status, handlerCloseDialog }) {
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleButtonClick = (tabValue) => {
        setValue(tabValue);
    };
    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth={"lg"}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                open={status}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent
                    sx={{
                        bgcolor: "white",
                    }}
                >
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList onChange={handleChange}>
                                <Tab label="افزودن محصول جدید" value="1" />
                                <Tab label="جزییات لیبل دیجیتال" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ProductDetails handlerCloseDialog={handlerCloseDialog} next={handleButtonClick} />
                        </TabPanel>
                        <TabPanel value="2">
                            <DigitalLable handlerCloseDialog={handlerCloseDialog} />
                        </TabPanel>
                    </TabContext>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddNewProduct;
