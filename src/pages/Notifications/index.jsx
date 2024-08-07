import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Title from "../../components/UI/Title";
import { toPersian, toastHandler } from "../../utils/setting";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import persianJs from "persianjs";
import moment from "jalali-moment";
import ReactReadMoreReadLess from "react-read-more-read-less";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
function Notificatins() {
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const deleteBtn = () => {
        toastHandler("ایتم مورد  نظر حذف شد", "warning");
    };
    return (
        <Box
            sx={{
                bgcolor: (theme) => theme.background.box,
                width: "100%",
                height: "80vh",
                borderRadius: "18px",
                mx: 2,
                p: 2,
            }}
        >
            <Title
                title={"نوتیفیکیشن‌ و اطلاع رسانی‌"}
                Typoprops={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: (theme) => theme.palette.text.card,
                }}
            />

            <Box sx={{ mt: 2, height: "90%", overflowY: "scroll" }}>
                {[1, 2, 4, 4, 5, 6, 7].map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            borderRadius: "12px",
                            bgcolor: (theme) => theme.background.default,
                            py: 1,
                            my: 1,
                        }}
                    >
                        {/* //!header */}
                        <Box sx={{ ...center, justifyContent: "space-between", p: 2 }}>
                            <Box sx={{ ...center, gap: "10px" }}>
                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: 500,
                                        color: (theme) => theme.typography.color,
                                    }}
                                >
                                    {toPersian(index + 1)}
                                </Typography>
                                <Divider flexItem orientation="vertical" />
                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: 500,
                                        color: (theme) => theme.typography.color,
                                    }}
                                >
                                    مدیریت
                                </Typography>
                            </Box>
                            <DeleteOutlineIcon
                                onClick={() => deleteBtn()}
                                sx={{
                                    fill: (theme) => theme.palette.warning.main,
                                    fontSize: "30px",
                                    cursor: "pointer"
                                }}
                            />
                        </Box>
                        <Box sx={{ px: 2 }}>
                            <ReactReadMoreReadLess
                                charLimit={100}
                                readMoreText={<ExpandMoreIcon />}
                                readLessText={<ExpandLessIcon />}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                                در ستون و سطرآنچنان که لازم است ....
                            </ReactReadMoreReadLess>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    textAlign: "end",
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                {persianJs(
                                    moment(new Date(), "YYYY-MM-DD")
                                        .locale("fa")
                                        .format("HH:mm - YYYY/MM/D")
                                )
                                    .englishNumber()
                                    .toString()}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Notificatins;
