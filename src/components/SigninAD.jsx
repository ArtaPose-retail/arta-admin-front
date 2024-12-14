import React from "react";
import logoNm from "../Assets/images/logowhite.png";
import { Box, Typography } from "@mui/material";
import AD from "../Assets/images/sliderSlider.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
    Keyboard,
    Scrollbar,
    Navigation,
    Pagination,
    Autoplay,
} from "swiper/modules";

const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
function SigninAD() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "flex-start",
                    width: "100%",
                }}
            >
                <img src={logoNm} width={180} height={50} />
            </Box>

            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                }}
                scrollbar={false}
                navigation={false}
                pagination={pagination}

                // pagination={{
                //     clickable: true, pagination
                // }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {[1, 2, 3].map((item) => (
                    <SwiperSlide>
                        <Box
                            sx={{
                                ...center,
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%",
                                mt: 2,
                                width: "100%",
                            }}
                        >
                            <Box
                                key={item}
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "25px",
                                    width: "100%",
                                    // height: "100%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.text.primary,
                                        fontSize: "30px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    روزهـای خود را نشــمار٬ روزها را مجـبور به شمارش کن.
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.text.primary,
                                        fontSize: "18px",
                                        mt: 2
                                    }}
                                >
                                    توضیحات کوتاهی از شرکت خود و دلیل انتخاب این مجموعه حسابداری
                                    را در اینجا بنویسید تا کاربر با شما و امکانانی که شما به او
                                    ارائه میدهید آشنا شود.
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 7 }}>
                                <img src={AD} />
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default SigninAD;
