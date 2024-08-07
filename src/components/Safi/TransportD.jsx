import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Title from "../UI/Title";
import { separateBy3, separateBy4, toPersian } from "../../utils/setting";
import moment from "jalali-moment";

export default function TransportD({ data }) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

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
            <Button
                onClick={() => handleClickOpen()}
                variant="outlined"
                sx={{
                    px: 4,
                }}
            >
                انتقال
            </Button>
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
                <DialogContent sx={{ bgcolor: "white" }}>
                    <Title
                        title={"انتقال"}
                        Typoprops={{
                            fontSize: "20px",
                            fontWeight: 500,
                            color: (theme) => theme.typography.color,
                            my: 2
                        }}
                    />

                    <Box
                        sx={{
                            borderRadius: "12px",
                            bgcolor: (theme) => theme.background.field,
                            ...center,
                            gap: "15px",
                            p: 2,
                        }}
                    >
                        <Box sx={{ ...center, gap: "5px" }}>
                            <Typography>نام محصول:</Typography>
                            <Typography>{data?.productName}</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />

                        <Box sx={{ ...center, gap: "5px" }}>
                            <Typography>طرف معامله:</Typography>
                            <Typography>{data?.productName}</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />

                        <Box sx={{ ...center, gap: "5px" }}>
                            <Typography>شماره بارنامه / فاکتور:</Typography>
                            <Typography>{toPersian(separateBy4("92303270"))}</Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            borderRadius: "12px",
                            bgcolor: (theme) => theme.palette.divider,
                            ...center,
                            gap: "15px",
                            p: 2,
                            mt: 2,
                        }}
                    >
                        <Box sx={{ ...center, gap: "5px" }}>
                            <Typography>تعداد محصول:</Typography>
                            <Typography sx={{ color: (theme) => theme.palette.text.primary }}>
                                {toPersian("20")}عدد
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />

                        <Box sx={{ ...center, gap: "5px" }}>
                            <Typography> وزن ناخالص:</Typography>
                            <Typography sx={{ color: (theme) => theme.palette.text.primary }}>
                                {toPersian("20")}کیلوگرم
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box sx={{ ...center, gap: "5px" }}>
                            <Typography>وزن خالص:</Typography>
                            <Typography sx={{ color: (theme) => theme.palette.text.primary }}>
                                {toPersian("10")}کیلوگرم
                            </Typography>
                        </Box>
                    </Box>

                    <Title
                        title={"انتقال به فاکتور:"}
                        Typoprops={{
                            fontSize: "20px",
                            fontWeight: 500,
                            color: (theme) => theme.typography.color,
                            mt: 2,
                        }}
                    />

                    <Box
                        sx={{
                            borderRadius: "12px",
                            bgcolor: (theme) => theme.background.field,
                            ...center,
                            gap: "15px",
                            p: 2,
                        }}
                    >
                        <Box sx={{ ...center, gap: "5px" }}>
                            <Typography>شماره سریال::</Typography>
                            <Typography>{data?.productName}</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />

                        <Box sx={{ ...center, gap: "5px" }}>
                            <Typography>طرف معامله:</Typography>
                            <Typography>{data?.productName}</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />

                        <Box sx={{ ...center, gap: "5px" }}>
                            <Typography>تاریخ:</Typography>
                            <Typography>
                                {toPersian(
                                    moment(new Date(), "YYY-MM-DD")
                                        .locale("fa")
                                        .format("YYYY/MM/D")
                                )}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            borderRadius: "12px",
                            bgcolor: (theme) => theme.palette.divider,
                            ...center,
                            gap: "15px",
                            p: 2,
                            mt: 2,
                        }}
                    >
                        <Box sx={{ ...center, gap: "5px" }}>
                            <Typography>تعداد محصول:</Typography>
                            <Typography sx={{ color: (theme) => theme.palette.text.primary }}>
                                {toPersian("20")}عدد
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />

                        <Box sx={{ ...center, gap: "5px" }}>
                            <Typography> وزن ناخالص:</Typography>
                            <Typography sx={{ color: (theme) => theme.palette.text.primary }}>
                                {toPersian("20")}کیلوگرم
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box sx={{ ...center, gap: "5px" }}>
                            <Typography>وزن خالص:</Typography>
                            <Typography sx={{ color: (theme) => theme.palette.text.primary }}>
                                {toPersian("10")}کیلوگرم
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ ...center, mt: 2, gap: "15px" }}>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: (theme) => theme.palette.green.main,
                                color: (theme) => theme.palette.text.primary,
                                width: "20%",
                                py: 2

                            }}
                        >
                            ثبت
                        </Button>
                        <Button
                            onClick={() => handleClose()}
                            variant="contained"
                            sx={{
                                bgcolor: (theme) => theme.palette.warning.main,
                                color: (theme) => theme.palette.text.primary,
                                width: "20%",
                                py: 2
                            }}
                        >
                            بستن
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
