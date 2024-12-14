import { Box, Button, Grid, InputLabel, Typography } from "@mui/material";
import React from "react";
import Title from "../../components/UI/Title";
import { center } from "../../styles/theme";
import { roundPage } from "../../utils/data";
import Input from "../../components/UI/Input";

function Round() {
    return (
        <Box sx={{ p: 1 }}>
            <Box sx={{ ...center, justifyContent: "space-between" }}>
                <Title
                    title={"رند کردن"}
                    Typoprops={{
                        fontSize: "24px",
                        fontWeight: 700,
                        color: (theme) => theme.palette.text.card,
                    }}
                />
            </Box>

            <Box
                sx={{
                    bgcolor: (theme) => theme.background.box,
                    width: "100%",
                    borderRadius: "18px",
                    p: 4,
                    mt: 1,
                    height: "85dvh",
                }}
            >
                {roundPage?.map((item, index) => (
                    <>
                        <Title
                            title={item.title}
                            Typoprops={{
                                fontSize: "24px",
                                fontWeight: 700,
                                color: (theme) => theme.palette.text.card,
                            }}
                        />
                        <Box sx={{ width: "100%", ...center, mt: 4 }}>
                            <Box
                                sx={{
                                    width: "40%",
                                    boxShadow: 4,
                                    borderRadius: "15px",
                                    ...center,
                                    p: 3,
                                }}
                            >
                                <Grid
                                    container
                                    spacing={2}
                                    sx={{ p: 1, mt: 1, justifyContent: "space-evenly" }}
                                >
                                    {item.box?.map((item, index) => (
                                        <Grid item xs={4} key={index}>
                                            <InputLabel>
                                                <Typography
                                                    sx={{
                                                        fontSize: "18px",
                                                        fontWeight: 400,
                                                        color: item.color,
                                                    }}
                                                >
                                                    {item?.lable}
                                                </Typography>
                                            </InputLabel>

                                            <Input
                                                type={item.type}
                                                placeholder={item.placeholder}
                                                name={item.name}
                                                id={item.name}
                                                newstyle={{ overflow: "hidden", width: "100%" }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                    </>
                ))}

                <Box sx={{ width: "100%", ...center, mt: 5, justifyContent: "space-evenly" }}>
                    <Button variant="contained" color="success" sx={{ width: "10%" }}>ثبت</Button>
                    <Button variant="contained" color="error" sx={{ width: "10%" }}>انصراف</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Round;
