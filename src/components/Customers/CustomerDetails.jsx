import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Title from "../UI/Title";

import { persianDate, separateBy3, toPersian, toastHandler } from "../../utils/setting";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import moment from "jalali-moment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Customerfactors from "./Customerfactors";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { center } from "../../styles/theme";
import { useDispatch } from "react-redux";
import { deleteTransactions } from "../../Redux/Slices/Accounting/Transactions/transactionsSlice";
export default function CustomerDetails({ data, avatarPic }) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const deleteBtn = (id) => {
        dispatch(deleteTransactions(id))
        setOpen(false)
    };

    return (
        <div>
            <MoreVertIcon onClick={handleClickOpen} sx={{ cursor: "pointer" }} />
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                open={open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent sx={{ bgcolor: "white" }}>
                    {/* //! header */}
                    <Box sx={{ ...center, justifyContent: "space-between" }}>
                        <Title
                            title={"اطلاعات طرف معامله"}
                            Typoprops={{
                                color: (theme) => theme.palette.text.card,
                                fontSize: "24px",
                                fontWeight: 500,
                            }}
                        />
                        <Box sx={{ ...center, gap: "10px" }}>
                            <Box
                                sx={{
                                    ...center,
                                    bgcolor: (theme) => theme.palette.text.secondary,
                                    // width: "",
                                    px: 1,
                                    borderRadius: "12px",
                                }}
                            >
                                <CalendarMonthIcon
                                    sx={{ fill: (theme) => theme.palette.text.primary }}
                                />
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        p: 1,
                                        color: (theme) => theme.palette.text.primary,
                                    }}
                                >
                                    تاریخ تشکیل:
                                    {
                                        persianDate(data?.created_at)

                                    }
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    ...center,
                                    bgcolor: (theme) => theme.palette.green.main,
                                    borderRadius: "12px",
                                    gap: "5px",
                                    px: 1,
                                    cursor: "pointer",
                                }}
                            >
                                <AccountBalanceWalletOutlinedIcon
                                    sx={{ fill: (theme) => theme.palette.text.primary }}
                                />

                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        color: (theme) => theme.palette.text.primary,
                                        py: 1,
                                    }}
                                >
                                    میزان اعتبار:
                                    {toPersian(0)}
                                    تومان
                                </Typography>
                            </Box>
                            <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />

                        </Box>
                    </Box>
                    <Box
                        sx={{ ...center, justifyContent: "flex-start", mt: 2, gap: "15px" }}
                    >
                        <Avatar
                            alt="ARTA-POSE"
                            src={avatarPic}
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
                        <Typography
                            sx={{
                                color: (theme) => theme.typography.color,
                                fontSize: "22px",
                                fontWeight: 500,
                            }}
                        >
                            {`${data?.fname} ${data?.lname}`}
                        </Typography>
                    </Box>
                    <Divider sx={{ mt: 2 }} />
                    <Box sx={{ ...center, justifyContent: "space-between", p: 1 }}>
                        <Box>
                            <Box
                                sx={{
                                    ...center,
                                    borderBottom: "1px solid #DEDEDE",
                                    gap: "5px",
                                    p: 1,
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    شماره همراه:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.darkBlue.main,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {toPersian(data?.phone)}
                                </Typography>
                                <Box>
                                    <LocalPhoneIcon />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    ...center,
                                    borderBottom: "1px solid #DEDEDE",
                                    gap: "5px",
                                    p: 1,
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    شماره تماس ۱:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.darkBlue.main,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {toPersian(data?.phone1)}
                                </Typography>
                                <Box>
                                    <LocalPhoneIcon />
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    ...center,
                                    borderBottom: "1px solid #DEDEDE",
                                    gap: "5px",
                                    p: 1,
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    شماره تماس ۲:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.darkBlue.main,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {toPersian(data?.phone2)}
                                </Typography>
                                <Box>
                                    <LocalPhoneIcon />
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    ...center,
                                    border: "1px solid #DEDEDE",
                                    gap: "5px",
                                    p: 2,
                                    borderRadius: "12px",
                                    mt: 0.5,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "14px",
                                        fontWeight: 400,
                                    }}
                                >
                                    {data?.description}
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    ...center,
                                    borderBottom: "1px solid #DEDEDE",
                                    gap: "5px",
                                    p: 1,
                                    justifyContent: "flex-start",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    کارت ملی:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.darkBlue.main,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {toPersian(data?.shmeli)}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    ...center,
                                    borderBottom: "1px solid #DEDEDE",
                                    gap: "5px",
                                    p: 1,
                                    justifyContent: "flex-start",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    ادرس محل سکونت:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "16px",
                                        fontWeight: 500,
                                        wordBreak: "break-all",
                                    }}
                                >
                                    {toPersian(data?.home_adress)}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    ...center,
                                    borderBottom: "1px solid #DEDEDE",
                                    gap: "5px",
                                    p: 1,
                                    justifyContent: "flex-start",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    عنوان طرف معامله:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {toPersian(data?.title)}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    ...center,
                                    borderBottom: "1px solid #DEDEDE",
                                    gap: "5px",
                                    p: 1,
                                    justifyContent: "flex-start",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    معرف:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {toPersian(data?.referer)}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Title
                        title={"۳ فاکتور آخر"}
                        Typoprops={{
                            color: (theme) => theme.palette.text.card,
                            fontSize: "24px",
                            fontWeight: 500,
                            mt: 2,
                        }}
                    />
                    {/* <Customerfactors rows={data?.Last_factor} /> */}

                    <Box sx={{ ...center, justifyContent: "flex-start", gap: "15px", mt: 3 }}>
                        <Button
                            onClick={() => deleteBtn(data?.user_id)}
                            variant="contained"
                            sx={{
                                bgcolor: (theme) => theme.palette.warning.main,
                                color: (theme) => theme.palette.text.primary,
                                gap: "15px"
                            }}
                        >

                            حذف کاربر
                            <DeleteOutlineIcon
                                sx={{ fill: (theme) => theme.palette.text.primary, cursor: "pointer" }}

                            />
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: (theme) => theme.palette.darkBlue.main,
                                color: (theme) => theme.palette.text.primary,
                                gap: "15px"

                            }}
                        >

                            تغییرات در کاربر
                            <EditIcon
                                sx={{ fill: (theme) => theme.palette.text.primary }}
                            />
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
