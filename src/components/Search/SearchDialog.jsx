import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import {
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Title from "../UI/Title";
import { products } from "../../utils/data";
import SingleProduct from "../HomePage/SingleProduct";
import CustomerFactorTable from "../HomePage/CustomerFactorTable";
import CloseIcon from '@mui/icons-material/Close';
import { ProductsDashbord } from "../Dashbord/ProductsDashbord";
export default function SearchDialog() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div>
            <IconButton
                onClick={handleClickOpen}
                aria-label="delete"
                size="large"
                sx={{
                    border: "1px solid #DEDEDE",
                    borderRadius: "8px",
                    p: 2,
                    "&:hover": { bgcolor: (theme) => theme.palette.text.secondary },
                    bgcolor: (theme) => theme.background.box,
                }}
            >
                <SearchOutlinedIcon fontSize="inherit" />
            </IconButton>
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent sx={{ bgcolor: "white", p: 2, m: 0 }}>
                    <Box sx={{ ...center, justifyContent: "space-between" }}>


                        <TextField

                            autoComplete={false}
                            sx={{
                                width: "80%",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                            }}
                            type="text"
                            id="input-with-icon-textfield"
                            placeholder="جستوجو "
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" sx={{}}>
                                        <Box sx={{ p: 0.5, px: 1, borderRadius: "7px", bgcolor: theme => theme.palette.darkBlue.main }}>

                                            <SearchIcon sx={{ cursor: "pointer", fill: theme => theme.palette.text.primary }} />
                                        </Box>
                                    </InputAdornment>
                                ),
                                style: {
                                    background: "#F2F2F2",
                                    color: "#000",
                                    direction: "ltr",
                                    height: "60px",
                                },
                            }}
                            variant="outlined"
                        />
                        <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
                    </Box>

                    <Box sx={{ mt: 2, width: "100%" }}>
                        <Title
                            title={"محصولات"}
                            Typoprops={{
                                fontSize: "24px",
                                fontWight: 500,
                                color: (theme) => theme.palette.text.card,
                            }}
                        />
                        <Box sx={{ height: "15rem", overflowY: "scroll", overflowX: "hidden", p: 0, m: 0, width: "100%" }}>

                            <Grid container spacing={2} sx={{ mr: 2 }}>
                                {products?.map((item, index) => (
                                    <Grid key={index} item xs={3} sx={{ mt: 1, p: 0.5 }}>
                                        <ProductsDashbord data={item} hasAvatar={false} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Divider sx={{ m: 2 }} />
                        <Title
                            title={"فاکتور مشتری"}
                            Typoprops={{
                                fontSize: "24px",
                                fontWight: 500,
                                color: (theme) => theme.palette.text.card,
                            }}
                        />

                    </Box>
                    <Box sx={{ height: "15rem" }}>

                        <CustomerFactorTable />
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
