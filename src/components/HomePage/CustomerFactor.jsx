import { Box, Button, Divider, FormControlLabel, Popover, Radio, Typography } from "@mui/material";
import React from "react";
import { separateBy3, toPersian, toastHandler } from "../../utils/setting";
import CustomerFactorTable from "./CustomerFactorTable";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function CustomerFactor() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const PopoverHandler = () => {
        toastHandler("درخواست ارسال شد", "info");
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            <Box sx={{ ...center, width: "100%", gap: "10px", my: 1 }}>
                <Box
                    sx={{
                        bgcolor: (theme) => theme.palette.darkBlue.main,
                        borderRadius: "7px",
                        width: "50%",
                        ...center,
                        p: 1,
                        gap: "5px",
                    }}
                >
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "12px",
                            fontWeight: 500,
                        }}
                    >
                        شناسه فاکتور:
                    </Typography>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "12px",
                            fontWeight: 500,
                        }}
                    >
                        {toPersian("۲۳۹۰۴۸۵۹۰")}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        borderRadius: "7px",
                        width: "50%",
                        ...center,
                        p: 1,
                        gap: "5px",
                    }}
                >
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "12px",
                            fontWeight: 500,
                        }}
                    >
                        مبلغ فاکتور:
                    </Typography>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "12px",
                            fontWeight: 500,
                        }}
                    >
                        {toPersian(separateBy3("87678"))}
                        &nbsp; ریال
                    </Typography>
                </Box>
            </Box>
            <CustomerFactorTable />
            <Box
                sx={{
                    borderRadius: "0px  0px 18px 18px",
                    bgcolor: (theme) => theme.background.box,
                    width: "100%",
                    ...center,
                    p: 1,
                    mt: 0.5,
                    // boxShadow: "0px 0px 9px 2px rgba(0, 0, 0, 0.25)",
                    borderTop: "1px solid lightgray",
                }}
            >
                <Box sx={{ ...center, width: "100%", gap: "10px" }}>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.divider,
                            borderRadius: "7px",
                            color: (theme) => theme.palette.text.primary,
                        }}
                    >
                        چاپ فاکتور
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.divider,
                            borderRadius: "7px",
                            color: (theme) => theme.palette.text.primary,
                        }}
                    >
                        چاپ لیبل
                    </Button>
                </Box>
                <MoreVertIcon
                    sx={{ cursor: "pointer" }}
                    aria-describedby={id}
                    variant="contained"
                    onClick={handleClick}
                />

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                >
                    <Box sx={{ bgcolor: (theme) => theme.background.box }}>
                        <Typography
                            // onClick={() => PopoverHandler()}
                            sx={{ p: 2, cursor: "pointer", ...center, justifyContent: "space-between", gap: "5px" }}
                        >
                            چاپ خودکار فاکتور{" "}
                            <FormControlLabel
                                sx={{ m: 0, p: 0 }}
                                //   onClick={() => setRadioCheck(!RadioCheck)}
                                control={
                                    <Radio
                                        // checked={RadioCheck}
                                        sx={{
                                            color: (theme) => theme.palette.primary.main,
                                            p: 0,
                                            m: 0,
                                        }}
                                    />
                                }
                            />
                        </Typography>
                        <Divider flexItem variant="middle" />
                        <Typography
                            // onClick={() => PopoverHandler()}
                            sx={{ p: 2, cursor: "pointer", ...center, justifyContent: "space-between", gap: "5px" }}
                        >
                            چاپ خودکار لیبل{" "}
                            <FormControlLabel
                                sx={{ m: 0, p: 0 }}
                                //   onClick={() => setRadioCheck(!RadioCheck)}
                                control={
                                    <Radio
                                        // checked={RadioCheck}
                                        sx={{
                                            color: (theme) => theme.palette.primary.main,
                                            p: 0,
                                            m: 0,
                                        }}
                                    />
                                }
                            />
                        </Typography>
                    </Box>
                </Popover>
            </Box>
        </Box>
    );
}

export default CustomerFactor;
