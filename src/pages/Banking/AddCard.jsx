import {
    Box,
    Button,
    Grid,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import Title from "../../components/UI/Title";
import { addCartForm } from "../../utils/data";
import Switch from "@mui/material/Switch";
import {
    setFormInfo,
    chelkBoxhandler,
    resetForm,
} from "../../Redux/Slices/Banking/addcard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import BnDialog from "../../components/Banking/Dialog";
import { toastHandler } from "../../utils/setting";
import Input from "../../components/UI/Input";
import { center } from "../../styles/theme";
function AddCard() {
    const { formInformation, checkBox } = useSelector((state) => state.addCard);
    const { isfullScrenn } = useSelector((state) => state.general);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cancelBTN = () => {
        navigate(reactRouts.banking.main);
    };


    const poseItems = ["API_IP", "API_TERMENAL", "posName"];
    const internetbankItems = ["userName", "password", "bankUrl"];

    // console.log(dispatch(findDisableProperty()));

    return (
        <Box
            sx={{
                bgcolor: (theme) => theme.background.box,
                borderRadius: "18px",
                p: 1.5,
                m: 1,
                height: isfullScrenn ? "87vh" : null,
                overflowY: isfullScrenn && "scroll",
                overflowX: isfullScrenn && "hidden",
            }}
        >
            <Title
                title="اضافه کردن حساب جدید"
                Typoprops={{
                    fontSize: "20px",
                    fontWeight: 700,
                }}
            />

            {/* <Box sx={{ ...center, p: 1 }}> */}
            <Grid container spacing={2} sx={{ p: 1 }}>
                {addCartForm?.map((item, index) => (
                    <Grid item xs={4} key={index}>
                        <InputLabel>
                            <Typography
                                sx={{ fontSize: "18px", fontWeight: 400, color: item.color }}
                            >
                                {item.lable}
                            </Typography>
                        </InputLabel>
                        {item?.select ? (
                            <TextField
                                value={formInformation[item.name]}
                                name={item.name}
                                id={item.name}
                                fullWidth
                                disabled={
                                    checkBox.poseGroup === false && poseItems.includes(item.name)
                                        ? true
                                        : checkBox.internet === false &&
                                            internetbankItems.includes(item.name)
                                            ? true
                                            : false
                                }
                                onChange={(newValue) => {
                                    dispatch(
                                        setFormInfo({
                                            key: item.name,
                                            value: newValue.target.value,
                                        })
                                    );
                                }}
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
                                                    <BnDialog name={item.name} />
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
                            <Input
                                name={item.name}
                                newstyle={{
                                    width: "100%",
                                    height: "50px",

                                }}
                                value={formInformation[item.name]}

                                onChange={(newValue) => {
                                    dispatch(
                                        setFormInfo({
                                            key: item.name,
                                            value: newValue.target.value,
                                        })
                                    );
                                }}
                                disable={
                                    checkBox.poseGroup === false && poseItems.includes(item.name)
                                        ? true
                                        : checkBox.internet === false &&
                                            internetbankItems.includes(item.name)
                                            ? true
                                            : false
                                }
                                type={item?.type}
                                placeholder={item?.placeholder}
                            />
                        )}
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ ...center, justifyContent: "space-around", p: 3 }}>
                <Box sx={{ ...center }}>
                    <Typography>متصل به پز</Typography>
                    <Switch
                        name="poseGroup"
                        color="warning"
                        checked={checkBox.poseGroup}
                        onClick={(e) =>
                            dispatch(
                                chelkBoxhandler({
                                    key: e.target.name,
                                    value: e.target.checked,
                                })
                            )
                        }
                    />
                </Box>
                <Box sx={{ ...center }}>
                    <Typography>فعال</Typography>
                    <Switch
                        name="active"
                        checked={checkBox.active}
                        onClick={(e) =>
                            dispatch(
                                chelkBoxhandler({
                                    key: e.target.name,
                                    value: e.target.checked,
                                })
                            )
                        }
                    />
                </Box>
                <Box sx={{ ...center }}>
                    <Typography>دسته چک</Typography>
                    <Switch
                        name="checkBook"
                        checked={checkBox.checkBook}
                        onClick={(e) =>
                            dispatch(
                                chelkBoxhandler({
                                    key: e.target.name,
                                    value: e.target.checked,
                                })
                            )
                        }
                    />
                </Box>
                <Box sx={{ ...center }}>
                    <Typography>اینترنت بانک</Typography>
                    <Switch
                        name="internet"
                        checked={checkBox.internet}
                        onClick={(e) =>
                            dispatch(
                                chelkBoxhandler({
                                    key: e.target.name,
                                    value: e.target.checked,
                                })
                            )
                        }
                    />
                </Box>
                <Box sx={{ ...center }}>
                    <Typography>OTP</Typography>
                    <Switch
                        checked={checkBox.otp}
                        name="otp"
                        onClick={(e) =>
                            dispatch(
                                chelkBoxhandler({
                                    key: e.target.name,
                                    value: e.target.checked,
                                })
                            )
                        }
                    />
                </Box>
            </Box>

            <Box sx={{ ...center, justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", gap: "15px" }}>
                    <Button
                        onClick={() => toastHandler("حساب با موفقیت اضافه شد", "info")}
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.green.main,
                            color: (theme) => theme.palette.text.primary,
                            p: 1,
                            px: 4,
                        }}
                    >
                        ثبت حساب
                    </Button>
                    <Button
                        onClick={() => dispatch(resetForm())}
                        variant="contained"
                        sx={{
                            bgcolor: "#F90",
                            color: (theme) => theme.palette.text.primary,
                            p: 1,
                            px: 4,
                        }}
                    >
                        پاکسازی فرم
                    </Button>
                </Box>
                <Button
                    onClick={() => cancelBTN()}
                    variant="contained"
                    sx={{
                        bgcolor: (theme) => theme.palette.warning.secondary,
                        color: (theme) => theme.palette.text.primary,
                        p: 1,
                        px: 4,
                    }}
                >
                    انصراف
                </Button>
            </Box>
        </Box>
    );
}

export default AddCard;

//todo=>check redux and functions
