import { Badge, Box, Typography } from "@mui/material";
import { separateBy3, toPersian } from "../../utils/setting";
import { OldFactor } from "../../utils/data";
import moment from "jalali-moment";

function SingleLable({ item, index, selectedIndex, onCardSelect }) {


    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const isSelected = index === selectedIndex;

    const handleCardSelect = () => {
        onCardSelect(index);
    };

    return (
        <Box>
            <Badge
                badgeContent={OldFactor.length - index}
                sx={{
                    "& .MuiBadge-badge": {
                        fontSize: "14px",
                        color: (theme) => theme.palette.text.primary,
                        height: "32px",
                        width: "32px",
                        borderRadius: "50%",
                        bgcolor: theme => isSelected ? "green" : theme.palette.darkBlue.main,
                    },
                }}
            >
                <Box
                    onClick={handleCardSelect}
                    sx={{
                        boxShadow: " 0px 4px 40px 0px rgba(0, 0, 0, 0.08)",
                        borderRadius: "12px",
                        width: "194px",
                        height: "87px",
                        p: 1,
                        mx: 1,
                        cursor: "pointer",
                        bgcolor: theme => isSelected ? theme.palette.darkBlue.main : theme.background.box,
                        "&:hover": {
                            bgcolor: theme => isSelected ? theme.palette.darkBlue.main : theme.palette.darkBlue.main,
                        },
                    }}
                >
                    <Box
                        sx={{
                            ...center,
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                        }}
                    >
                        <Box
                            sx={{
                                ...center,
                                flexDirection: "column",
                                gap: "5px",
                            }}
                        >
                            <Typography
                                sx={{
                                    ...center,
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: (theme) => (isSelected ? theme.palette.text.primary : ""),
                                }}
                            >
                                {item?.name}
                            </Typography>
                            <Typography
                                sx={{
                                    ...center,
                                    fontSize: "10px",
                                    fontWeight: "regular",
                                    color: (theme) =>
                                        isSelected ? theme.palette.text.primary : theme.palette.divider,
                                }}
                            >
                                شماره فاکتور: {toPersian(item?.factorNumber)}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                ...center,
                                fontSize: "14px",
                                fontWeight: 500,
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    ...center,
                                }}
                            >
                                <Typography
                                    sx={{
                                        ...center,
                                        fontSize: "10px",
                                        fontWeight: 500,
                                        color: (theme) =>
                                            isSelected
                                                ? theme.palette.text.primary
                                                : theme.palette.divider,
                                    }}
                                >
                                    مبلغ:
                                </Typography>
                                <Typography
                                    sx={{
                                        ...center,
                                        fontSize: "10px",
                                        fontWeight: "regular",
                                        color: (theme) =>
                                            isSelected
                                                ? theme.palette.text.primary
                                                : theme.palette.divider,
                                    }}
                                >
                                    {toPersian(separateBy3(item?.amount))}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    ...center,
                                    fontSize: "10px",
                                    fontWeight: 500,
                                    color: (theme) =>
                                        isSelected ? theme.palette.text.primary : theme.palette.divider,
                                }}
                            >
                                {toPersian(
                                    moment(item.date, "YYYY-MM-DD")
                                        .locale("fa")
                                        .format("YYYY/MM/D")
                                )}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Badge>
        </Box>
    );
}

export default SingleLable;
