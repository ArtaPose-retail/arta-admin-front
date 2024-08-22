import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../../components/UI/Title";
import { DatePicker } from "@kasraghoreyshi/datepicker";
import "@kasraghoreyshi/calendar/styles.css";
import "@kasraghoreyshi/datepicker/styles.css";
import moment from "jalali-moment";
import { persianDate, separateBy3, toPersian } from "../../utils/setting";
import { report } from "../../utils/data";
import PayDialog from "../../components/Report/PayDialog";
import { center } from '../../styles/theme'
//! this page is for AMALIAt page

function Report() {

    return (
        <Box
            sx={{
                bgcolor: (theme) => theme.background.box,
                width: "100%",
                borderRadius: "18px",
                mx: 1,
                height: "85vh",
            }}
        >
            <Box sx={{ p: 1, ...center, justifyContent: "space-between" }}>
                <Title
                    title={"گزارش صندوق"}
                    Typoprops={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: (theme) => theme.palette.text.card,
                    }}
                />

                <Typography
                    sx={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: (theme) => theme.palette.text.card,
                    }}
                >
                    {persianDate()}
                </Typography>
            </Box>
            <Box sx={{ px: 2, mt: 4 }}>
                <Grid container spacing={2}>
                    {report.sectionTop.map((item, index) => (
                        <Grid key={index} Grid item xs={2.95}>
                            <Box
                                sx={{
                                    border: "1px solid #98A4B5",
                                    ...center,
                                    flexDirection: "column",
                                    borderRadius: "18px",
                                    overflow: "hidden",
                                }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: (theme) => theme.palette.disable.main,
                                        width: "100%",
                                        ...center,

                                        gap: "5px",
                                        p: 1,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 500,
                                            color: (theme) => theme.palette.text.primary,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    {item?.hasIcon && <PayDialog />}
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: 500,
                                        color: (theme) => theme.typography.color,
                                        p: 1,
                                    }}
                                >
                                    {toPersian(separateBy3(item.value))}ریال
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={4}>
                    {report.sectionBotton.map((item, index) => (
                        <Grid key={index} Grid item xs={2}>
                            <Box
                                sx={{
                                    border: "1px solid #345BFF",
                                    ...center,
                                    flexDirection: "column",
                                    borderRadius: "18px",
                                    overflow: "hidden",
                                }}
                            >
                                <Typography
                                    sx={{
                                        p: 1,
                                        fontSize: "20px",
                                        fontWeight: 500,
                                        color: (theme) => theme.palette.darkBlue.main,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Box
                                    sx={{
                                        bgcolor: (theme) => theme.palette.darkBlue.main,
                                        width: "100%",
                                        ...center,
                                        p: 1,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 500,
                                            color: (theme) => theme.palette.text.primary,
                                            p: 1,
                                        }}
                                    >
                                        {toPersian(separateBy3(item.value))}ریال
                                    </Typography>
                                </Box>
                                <Box />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ m: 3, ...center, justifyContent: "flex-start", gap: "15px" }}>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        color: (theme) => theme.palette.text.primary,
                    }}
                >
                    بستن صندوق
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: (theme) => theme.palette.disable.main,
                        color: (theme) => theme.palette.text.primary,
                    }}
                >
                    چاپ گزارش
                </Button>
            </Box>
        </Box>
    );
}

export default Report;
