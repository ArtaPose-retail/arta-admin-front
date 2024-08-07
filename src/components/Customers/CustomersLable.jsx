import { Avatar, Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import profile from "../../Assets/images/profileImage.png";
import { toPersian } from "../../utils/setting";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomerDetails from "./CustomerDetails";
function CustomersLable({ data }) {
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <>
            <Box
                sx={{
                    bgcolor: (theme) => theme.background.box,
                    borderRadius: "18px",
                    ...center,
                    p: 1,
                    justifyContent: "flex-start",
                    boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.08)",
                    gap: "10px",
                }}
            >
                <Avatar
                    alt="ARTA-POSE"
                    src={data?.image}
                    onClick={() => profilehandler()}
                    sx={{
                        bgcolor: "#41669A",
                        width: 40,
                        height: 40,

                        ...center,
                        cursor: "pointer",
                        "& .MuiAvatar-img": {
                            width: "60%",
                            height: "80%",
                        },
                    }}
                />
                <Box
                    sx={{
                        ...center,
                        justifyContent: "space-between",
                        width: '100%'
                    }}
                >
                    <Box
                        sx={{
                            ...center,
                            flexDirection: "column",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "22x",
                                fontWeight: 700,
                                color: (theme) => theme.typography.color,
                            }}
                        >
                            {data?.name}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "12x",
                                fontWeight: 400,
                                color: (theme) => theme.palette.disable.main,
                            }}
                        >
                            {toPersian(data?.mobile)}
                        </Typography>
                    </Box>
                    <Box sx={{ ...center }}>
                        <CustomerDetails data={data} />
                        <Checkbox color="primary" />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default CustomersLable;
