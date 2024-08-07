import {
    Box,
    Button,
    Divider,
    Grid,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import Title from "../../components/UI/Title";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Input from "../../components/UI/Input";
import { addchceckFrom } from "../../utils/data";
import { separateBy3, toPersian, toastHandler } from "../../utils/setting";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
function AddCheck() {
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
                borderRadius: "12px",
                m: 1,
                p: 1,
                height: "85vh",
                ...center,
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
            }}
        >
            <Box sx={{ ...center, justifyContent: "space-between", width: "100%" }}>
                <Title
                    title={"ثبت چک"}
                    Typoprops={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: (theme) => theme.typography.color,
                    }}
                />
                <MoreVertIcon />
            </Box>
            <Box sx={{ width: "100%", ...center }}>
                <Grid container spacing={2} sx={{ width: "70%", ...center }}>
                    {addchceckFrom?.map((item, index) => (
                        <Grid item xs={6} key={index}>
                            <InputLabel>
                                <Typography
                                    sx={{ fontSize: "18px", fontWeight: 400, color: item.color }}
                                >
                                    {item.lable}
                                </Typography>
                            </InputLabel>
                            {item?.select ? (
                                <TextField
                                    name={item.name}
                                    id={item.name}
                                    fullWidth
                                    sx={{
                                        "& .MuiNativeSelect-select": {
                                            color: "black",
                                        },
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "white",
                                        },
                                        borderRadius: "18px",
                                    }}
                                    select={item.select}
                                    inputProps={{
                                        style: {
                                            background: "#F2F2F2",
                                            color: "#000",
                                            direction: "ltr",
                                            borderRadius: "18px",
                                        },
                                    }}
                                    SelectProps={{
                                        native: true,
                                        style: {
                                            background: "#F2F2F2",
                                            color: "#000",
                                            direction: "ltr",
                                            borderRadius: "18px",
                                        },

                                        startAdornment: (
                                            <>
                                                {item.hasIcon && (
                                                    <InputAdornment position="start"></InputAdornment>
                                                )}
                                            </>
                                        ),
                                    }}
                                >
                                    {item.select &&
                                        item?.options?.map((option, index) => (
                                            <option key={index} value={option.value}>
                                                <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                    {option.title}
                                                </Typography>
                                            </option>
                                        ))}
                                </TextField>
                            ) : (
                                <Input
                                    name={item.name}
                                    newstyle={{
                                        width: "100%",
                                        height: "50px",
                                    }}
                                    type={item?.type}
                                    placeholder={item?.placeholder}
                                />
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box
                sx={{ ...center, justifyContent: "space-around", mt: 2, width: "100%" }}
            >
                <Box sx={{ ...center, gap: "20px" }}>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.green.main,
                            color: (theme) => theme.palette.text.primary,
                            px: 4,
                        }}
                    >
                        ثبت چک
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                            px: 4,
                        }}
                    >
                        افزودن{" "}
                    </Button>
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: (theme) => theme.palette.warning.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 4,
                    }}
                >
                    انصراف{" "}
                </Button>
            </Box>

            <Box
                sx={{

                    width: "50%",
                    bgcolor: (theme) => theme.background.field,
                    borderRadius: "12px",
                    ...center,
                    justifyContent: "space-evenly",
                    p: 2,
                    m: 1
                }}
            >
                <Box sx={{ ...center, gap: "5px" }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: "500", color: theme => theme.typography.color }}>
                        شماره چک:
                    </Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: "500", color: theme => theme.palette.disable.main }}>
                        {
                            toPersian("784356")
                        }
                    </Typography>
                </Box>
                <Divider orientation="vertical" />
                <Box sx={{ ...center, gap: "5px" }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: "500", color: theme => theme.typography.color }}>
                        مبلغ چک:
                    </Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: "500", color: theme => theme.palette.disable.main }}>
                        {
                            toPersian(separateBy3("690000000"))
                        }ریال
                    </Typography>
                </Box>
                <Divider orientation="vertical" />

                <Box sx={{ ...center, gap: "10px", }}>
                    <EditIcon />
                    <DeleteOutlineIcon onClick={() => deleteBtn()} sx={{ fill: theme => theme.palette.warning.main, cursor: "pointer" }} />
                </Box>
            </Box>
        </Box>
    );
}

export default AddCheck;
