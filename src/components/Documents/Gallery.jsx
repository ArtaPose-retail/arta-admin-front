import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./gallery.module.css";
// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import AddIcon from "@mui/icons-material/Add";
import {
    Backdrop,
    Box,
    Button,
    CircularProgress,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../UI/Title";

export default function Gallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [open, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);

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
                variant="contained"
                sx={{ color: (theme) => theme.palette.text.primary }}
            >
                تصاویر
            </Button>
            <Dialog
                fullWidth={true}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent sx={{ bgcolor: "white" }}>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{
                            swiper:
                                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                        }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {[
                            "1هندوانه شیرین",
                            "2هندوانه شیرین",
                            "3هندوانه شیرین",
                            "4هندوانه شیرین",
                            "5هندوانه شیرین",
                        ].map((item, index) => (
                            <SwiperSlide className={styles.SwiperSlide} key={index}>
                                <Box
                                    onClick={() => handleClose()}
                                    sx={{
                                        position: "absolute",
                                        left: 5,
                                        top: 5,
                                        ...center,
                                        borderRadius: "18px",
                                        p: 0.5,
                                        bgcolor: (theme) => theme.background.box,
                                    }}
                                >
                                    <CloseIcon
                                        sx={{ fill: (theme) => theme.palette.warning.main }}
                                    />
                                </Box>
                                <img
                                    src={`https://swiperjs.com/demos/images/nature-${index + 1
                                        }.jpg`}
                                    height={450}
                                />

                                <Box
                                    className={styles.description}
                                    sx={{
                                        width: "94%",
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        ...center,
                                        p: 2,
                                        borderRadius: "0px 0px 18px 18px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Typography
                                        sx={{ color: (theme) => theme.palette.text.primary }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Box sx={{ mt: 2 }}>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            {[
                                "هندوانه شیرین",
                                "هندوانه شیرین",
                                "هندوانه شیرین",
                                "هندوانه شیرین",
                                "هندوانه شیرین",
                            ].map((item, index) => (
                                <SwiperSlide className={styles.SwiperSlide} key={index}>
                                    <img
                                        src={`https://swiperjs.com/demos/images/nature-${index + 1
                                            }.jpg`}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
