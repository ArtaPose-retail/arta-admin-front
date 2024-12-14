import { Avatar, AvatarGroup, Box, Paper, Typography } from "@mui/material";
import ProfileImg from "../../Assets/images/profileImage.png";
import { toPersian } from "../../utils/setting";
export const ProductsDashbord = ({ data, hasAvatar = true }) => {
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <>
            <Box
                sx={{
                    cursor: "pointer",
                    background: !data?.refrigerating ? "#fff" : "#00a7ff59",
                    textAlign: "center",
                    height: 200,
                    width: 152,
                    lineHeight: "60px",
                    position: "relative",
                    boxShadow: "0px 0px 17px 1px rgb(0 0 0 / 17%)",
                    borderRadius: "12px",
                }}
            >
                {/* header */}
                <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "56px",
                            bgcolor: `${data.color}`,
                            borderRadius: "8px",
                            ...center,
                        }}
                    >
                        <img src={data.logo} width={35} height={35} style={{}} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        ...center,
                        flexDirection: "column",
                        height: "50%",
                        gap: "20px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: (theme) => theme.typography.color,
                        }}
                    >
                        {data?.title}
                    </Typography>

                    {hasAvatar && (
                        <AvatarGroup
                            max={3}
                            sx={{
                                "& .MuiAvatarGroup-avatar": {
                                    width: 30,
                                    height: 30,
                                },
                            }}
                        >
                            {[1, 2, 3, 4, 5].map((item, index) => (
                                <Avatar
                                    key={index}
                                    sx={{
                                        bgcolor: "#41669A",
                                        width: 30,
                                        height: 30,

                                        cursor: "pointer",
                                        "& .MuiAvatar-img": {
                                            width: "60%",
                                            height: "80%",
                                        },
                                    }}
                                    alt="Remy Sharp"
                                    src={ProfileImg}
                                />
                            ))}
                        </AvatarGroup>
                    )}
                </Box>
            </Box>
        </>
    );
};
