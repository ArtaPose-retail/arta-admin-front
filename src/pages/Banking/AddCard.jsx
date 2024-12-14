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

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import BnDialog from "../../components/Banking/Dialog";
import { toastHandler } from "../../utils/setting";
import Input from "../../components/UI/Input";
import { center } from "../../styles/theme";
import { useEffect } from "react";
import { BTlist } from "../../Redux/Slices/Accounting/Bank/BankType/bankType";
import { BankNameList } from "../../Redux/Slices/Accounting/Bank/BankName/bankName";
import {
    AddAccount,
    checkBoxhandler,
    EditAccount,
    resetForm,
    setFormInfo,
} from "../../Redux/Slices/Accounting/Bank/Bank";
function AddCard() {
    const { newBackAccount, checkBox } = useSelector((state) => state.bank);
    const { isfullScrenn } = useSelector((state) => state.general);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cancelBTN = () => {
        navigate(reactRouts.banking.main);
        dispatch(resetForm());
    };

    const poseItems = ["API_IP", "API_TERMENAL", "posName"];
    const internetbankItems = ["userName", "password", "bankUrl"];

    const { bankNamekList } = useSelector((state) => state.bankName);
    const { bankTypeList } = useSelector((state) => state.bankType);

    useEffect(() => {
        dispatch(BTlist());
        dispatch(BankNameList());
    }, []);

    const location = useLocation();
    const { type, id } = location.state || {};

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
                                value={newBackAccount[item.name]}
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
                                onChange={(e) => {
                                    dispatch(
                                        setFormInfo({
                                            key: item.name,
                                            value:
                                                item.type == "number"
                                                    ? +e.target.value
                                                    : e.target.value,
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
                                {item.select && item?.name == "type_id" ? (
                                    <>
                                        {" "}
                                        <option value={""}>
                                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                انتخاب کنید
                                            </Typography>
                                        </option>
                                        {bankTypeList != null ? (
                                            bankTypeList.map((option, index) => (
                                                <option key={index} value={option?.id}>
                                                    <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                        {option?.title}
                                                    </Typography>
                                                </option>
                                            ))
                                        ) : (
                                            <option value={""}>
                                                <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                    ایتمی وجود ندارد
                                                </Typography>
                                            </option>
                                        )}
                                    </>
                                ) : item?.name == "bank_id" ? (
                                    <>
                                        {" "}
                                        <option value={""}>
                                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                انتخاب کنید
                                            </Typography>
                                        </option>
                                        {bankNamekList != null ? (
                                            bankNamekList.map((option, index) => (
                                                <option key={index} value={option?.id}>
                                                    <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                        {option?.title}
                                                    </Typography>
                                                </option>
                                            ))
                                        ) : (
                                            <option value={""}>
                                                <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                    ایتمی وجود ندارد
                                                </Typography>
                                            </option>
                                        )}
                                    </>
                                ) : (
                                    <option value={""}>
                                        <Typography sx={{ fontSize: "12px", color: "black" }}>
                                            ایتمی وجود ندارد
                                        </Typography>
                                    </option>
                                )}
                            </TextField>
                        ) : (
                            <Input
                                name={item.name}
                                newstyle={{
                                    width: "100%",
                                    height: "50px",
                                }}
                                value={
                                    item.meta == true
                                        ? newBackAccount.meta[item.name]
                                        : newBackAccount[item.name]
                                }
                                onChange={(name, value, type) => {
                                    dispatch(
                                        setFormInfo({
                                            key: name,
                                            value: value,
                                        })
                                    );
                                }}
                                disable={
                                    checkBox.has_pos === false && poseItems.includes(item.name)
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
                        name="has_pos"
                        color="warning"
                        checked={newBackAccount.has_pos ?? checkBox.has_pos}
                        onClick={(e) =>
                            dispatch(
                                checkBoxhandler({
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
                        name="enabled"
                        checked={newBackAccount.enabled ?? checkBox.enabled}
                        onClick={(e) =>
                            dispatch(
                                checkBoxhandler({
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
                        name="has_check"
                        checked={newBackAccount.has_check ?? checkBox.has_check}
                        onClick={(e) =>
                            dispatch(
                                checkBoxhandler({
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
                        name="has_internet_bank"
                        checked={newBackAccount.has_internet_bank ?? checkBox.has_internet_bank}
                        onClick={(e) =>
                            dispatch(
                                checkBoxhandler({
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
                        checked={newBackAccount.has_otp ?? checkBox.has_otp}
                        name="has_otp"
                        onClick={(e) =>
                            dispatch(
                                checkBoxhandler({
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
                    {type != "edit" ? <Button
                        onClick={() => {
                            dispatch(AddAccount())
                            dispatch(resetForm())
                            navigate(reactRouts.banking.main)
                        }}
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.green.main,
                            color: (theme) => theme.palette.text.primary,
                            p: 1,
                            px: 4,
                        }}
                    >
                        ثبت حساب
                    </Button> :
                        <Button
                            onClick={() => {
                                dispatch(EditAccount(id))
                                dispatch(resetForm())
                                navigate(reactRouts.banking.main)
                            }}
                            variant="contained"
                            sx={{
                                bgcolor: (theme) => theme.palette.green.main,
                                color: (theme) => theme.palette.text.primary,
                                p: 1,
                                px: 4,
                            }}
                        >
                            ویرایش حساب
                        </Button>}
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

