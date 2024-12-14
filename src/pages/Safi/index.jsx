import { useState } from "react";
import Title from "../../components/UI/Title";
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
import { months, safiFrom } from "../../utils/data";
import Input from "../../components/UI/Input";
import AddIcon from "@mui/icons-material/Add";
import TransactionDialog from "../../components/HomePage/Dialogs/defineFactorSteps/TransactionDialog";
import AmaniTable from "../../components/Safi/AmaniTable";
import { useLocation } from "react-router-dom";
import KharidariTable from "../../components/Safi/KharidariTable";
import VehicleDl from "../../components/Safi/VehicleDl";
import Gallery from "../../components/Documents/Gallery";

export default function Safi() {
    const [month, setMonth] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [img, setImg] = useState(null)

    const selectMonth = (month) => {
        setMonth(month);

        setSelectedMonth(months.find((item) => item.value === month));
        console.log(months.find((item) => item.value === month));
    };

    const handlerUploadImg = (e) => {
        setImg(URL.createObjectURL(e.target.files[0]))
    }

    const location = useLocation();
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <Box
            sx={{
                bgcolor: (theme) => theme.background.box,
                m: 1,
                p: 1,
                borderRadius: "18px",
            }}
        >
            <Box sx={{ ...center, justifyContent: "flex-start" }}>
                <Title
                    title={`فاکتور (${location?.state?.key})`}
                    Typoprops={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: (theme) => theme.typography.color,
                    }}
                />
            </Box>
            <Grid container spacing={2} sx={{ p: 1, mt: 1 }}>
                {safiFrom?.map((item, index) => (
                    <Grid item xs={2} key={index}>
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
                                                <InputAdornment position="start">
                                                    {item.name !== "auto-type" ? <TransactionDialog title={"طرف معامله"} /> :
                                                        <VehicleDl />}
                                                </InputAdornment>
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
                            <Box
                                sx={{
                                    ...center,
                                    borderRadius: "12px",
                                    bgcolor: (theme) => theme.background.field,
                                    px: 1,
                                }}
                            >
                                <Input
                                    name={item.name}
                                    newstyle={{
                                        width: "100%",
                                        height: "50px",
                                    }}
                                    type={item?.type}
                                    placeholder={item?.placeholder}
                                />
                                {item.hasIcon && <TransactionDialog title={"طرف معامله"} />}
                            </Box>
                        )}
                    </Grid>
                ))}
            </Grid>

            <Box>{location?.state?.key === "امانی" ? <AmaniTable /> : <KharidariTable />}</Box>
            <Divider sx={{ my: 2, borderColor: theme => theme.palette.divider }} />
            <Box sx={{ ...center, gap: '15px' }}>
                <Button
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 4
                    }}
                >
                    قابل پرداخت
                </Button>
                <Button
                    sx={{
                        bgcolor: (theme) => theme.palette.disable.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 2
                    }}
                >
                    اپلود اسکن تصویر
                </Button>
                <Button
                    sx={{ bgcolor: theme => theme.background.field, color: theme => theme.palette.primary.main, px: 4 }}
                    // variant="contained"
                    component="label"

                >
                    برای انتخاب تصویر کلیک کنید
                    <input
                        type="file"
                        hidden
                        onChange={(e) => handlerUploadImg(e)}
                    />
                </Button>
                <Gallery />
            </Box>
            <Divider sx={{ my: 2, borderColor: theme => theme.palette.divider }} />
            <Box sx={{ ...center, gap: '15px' }}>
                <Button
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 3
                    }}
                >
                    تایید
                </Button>
                <Button
                    sx={{
                        bgcolor: (theme) => theme.palette.warning.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 4
                    }}
                >
                    بستن صافی
                </Button>
                <Button
                    sx={{
                        bgcolor: (theme) => theme.palette.divider,
                        color: (theme) => theme.palette.text.primary,
                        px: 4
                    }}
                >
                    چاپ
                </Button>
                <Button
                    sx={{
                        bgcolor: (theme) => theme.palette.divider,
                        color: (theme) => theme.palette.text.primary,
                        px: 4
                    }}
                >
                    اشتراک گذاری
                </Button>
                <TextField
                    value={month}
                    onChange={(e) => selectMonth(e.target.value)}
                    sx={{

                        height: "40px",
                        overflow: "hidden",
                        color: "white",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: (theme) => theme.palette.darkBlue.main,
                        },
                        "& .MuiNativeSelect-select": {
                            color: "white",
                            borderColor: (theme) => theme.palette.darkBlue.main,
                        },
                        borderRadius: "12px",
                        bgcolor: (theme) => theme.palette.darkBlue.main,
                    }}
                    select
                    SelectProps={{
                        native: true,
                        style: {
                            height: "40px",


                        },
                    }}
                >
                    <option value="">
                        <Typography sx={{ fontSize: "12px", color: "black" }}>
                            ارسال پیامک
                        </Typography>
                    </option>

                    {months?.map((item, index) => (
                        <option key={index} value={item.value}>
                            {item.title}
                        </option>
                    ))}
                </TextField>
                <Button
                    sx={{
                        bgcolor: (theme) => theme.palette.warning.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 4
                    }}
                >
                    حذف
                </Button>
                <Button
                    sx={{
                        bgcolor: (theme) => theme.palette.warning.secondary,
                        color: (theme) => theme.palette.text.primary,
                        px: 4
                    }}
                >
                    انصراف
                </Button>

            </Box>
        </Box>
    );
}
