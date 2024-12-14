import {
    Backdrop,
    Box,
    Button,
    Dialog,
    DialogContent,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    Modal,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Title from "../../UI/Title";
import { separateBy3, toPersian, toastHandler } from "../../../utils/setting";
import moment from "jalali-moment";
import { ProductItemInfoForm } from "../../../utils/data";
import UndoIcon from "@mui/icons-material/Undo";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IosShareIcon from '@mui/icons-material/IosShare';
import PrintIcon from '@mui/icons-material/Print';
function Customerinfo({ status, handlerCloseDialog, iteminfo }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteBtn = () => {
        toastHandler("ایتم مورد  نظر حذف شد", "warning");
    };

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const style = {
        position: "absolute",
        top: "70%",
        left: "67%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        borderRadius: "12px",
        p: 1,
        order: 1,
    };
    const listStyle = {
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
    };
    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                sx={{
                    backdropFilter: "blur(10px)",
                    "& .MuiDialog-container": {
                        alignItems: "flex-start",
                    },
                }}
                open={status}
                onClose={handlerCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent
                    sx={{
                        bgcolor: "white",
                        order: 1,
                    }}
                >
                    <Box sx={{ ...center, justifyContent: "space-between" }}>
                        <Title
                            title={"اطلاعات فاکتور"}
                            Typoprops={{
                                fontSize: "20px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.text.card,
                            }}
                        />
                        <Box sx={{ ...center, gap: "10px" }}>
                            <Typography
                                sx={{
                                    bgcolor: (theme) => theme.palette.green.main,
                                    color: (theme) => theme.palette.text.primary,
                                    borderRadius: "12px",
                                    p: 1,
                                }}
                            >
                                مبلغ دریافتی:
                                {toPersian(separateBy3("55350000"))}
                            </Typography>
                            <Typography
                                sx={{
                                    bgcolor: (theme) => theme.palette.darkBlue.main,
                                    color: (theme) => theme.palette.text.primary,
                                    borderRadius: "12px",
                                    p: 1,
                                }}
                            >
                                تاریخ فاکتور :{" "}
                                {toPersian(
                                    moment(iteminfo?.date, "YYYY-MM-DD")
                                        .locale("fa")
                                        .format("YYYY/MM/D")
                                )}
                            </Typography>
                            <CloseIcon
                                // sx={{ cursor: "pointer" }}
                                sx={{
                                    cursor: "pointer",
                                    border: "1px solid red",
                                    ...center,
                                    borderRadius: "12px",
                                    bgcolor: (theme) => theme.palette.warning.main,
                                    fill: (theme) => theme.palette.text.primary,
                                }}
                                onClick={() => handlerCloseDialog()}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ ...center, justifyContent: "space-around", my: 2 }}>
                        <Box sx={{ ...center }}>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                عنوان فاکتور: دریافتی
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" variant="middle" flexItem />

                        <Box sx={{ ...center }}>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                شماره فاکتور: {toPersian(iteminfo?.factorNumber)}
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Box sx={{ ...center }}>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                نوع دریافتی: چک مدت‌دار
                            </Typography>
                        </Box>
                    </Box>
                    <Divider orientation="horizontal" variant="middle" flexItem />
                    <Box
                        sx={{ ...center, justifyContent: "flex-start", p: 1, gap: "15px" }}
                    >
                        <AccountCircleIcon
                            fontSize="large"
                            sx={{ fill: (theme) => theme.palette.primary.main }}
                        />
                        <Box sx={{ ...center }}>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                نام مشتری: {iteminfo?.name}
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Box sx={{ ...center }}>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                شماره تماس: {toPersian(iteminfo?.mobile)}
                            </Typography>
                        </Box>
                    </Box>
                    <Divider orientation="horizontal" variant="middle" flexItem />
                    <Box sx={{ height: "150px", overflowY: "scroll" }}>
                        {iteminfo?.products?.map((item, index) => (
                            <Box key={index} sx={{ ...center, justifyContent: "space-around", my: 2 }}>
                                <Box
                                    sx={{
                                        bgcolor: `${item?.color}`,
                                        borderRadius: "12px",
                                        px: 0.5,
                                        pt: 0.5,
                                    }}
                                >
                                    <img
                                        src={item?.image}
                                        width={35}
                                        height={35}
                                        style={{
                                            padding: "0px",
                                            margin: "0px",
                                        }}
                                    />
                                </Box>
                                <Box sx={{ ...center }}>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            color: (theme) => theme.typography.color,
                                        }}
                                    >
                                        نام محصول:{item?.name}
                                    </Typography>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />

                                <Box sx={{ ...center }}>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            color: (theme) => theme.typography.color,
                                        }}
                                    >
                                        تعداد خرید (کیلوگرم): {toPersian(item?.amount)} کیلوگرم
                                    </Typography>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box sx={{ ...center }}>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            color: (theme) => theme.typography.color,
                                        }}
                                    >
                                        فی محصول: {toPersian(separateBy3(item?.fee))}
                                        ریال
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <Box sx={{ ...center, justifyContent: "space-between" }}>
                        <MoreVertIcon onClick={() => handleClickOpen()} />
                    </Box>
                </DialogContent>
            </Dialog>

            <Modal
                open={open}
                // onClose={handlerCloseDialog}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                hideBackdrop={true}
            >
                <Box sx={listStyle}>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <Box
                            sx={{ ...center, justifyContent: "flex-end" }}
                            onClick={() => handleClose()}
                        >
                            <Box
                                sx={{
                                    border: "1px solid red",
                                    ...center,
                                    borderRadius: "12px",
                                    bgcolor: (theme) => theme.palette.warning.main,
                                }}
                            >
                                {/* <Typography>بستن</Typography> */}
                                <CloseIcon
                                    onClick={() => handleClose()}
                                    sx={{ fill: (theme) => theme.palette.text.primary }}
                                />
                            </Box>
                        </Box>
                        <ListItem sx={{ ...center, justifyContent: "space-between" }}>
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                اشتراک گذاری فاکتور
                            </Typography>
                            <IosShareIcon />
                        </ListItem>
                        <Divider />
                        <ListItem sx={{ ...center, justifyContent: "space-between" }}>
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                چاپ پیشفرض فاکتور
                            </Typography>
                            <PrintIcon />
                        </ListItem>
                        <ListItem sx={{ ...center, justifyContent: "space-between" }}>
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                تغییرات در فاکتور
                            </Typography>
                            <EditIcon />
                        </ListItem>
                        <Divider />
                        <ListItem sx={{ ...center, justifyContent: "space-between" }}>
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    color: (theme) => theme.palette.warning.main,
                                }}
                            >
                                حذف فاکتور
                            </Typography>
                            <DeleteOutlineIcon
                                onClick={() => deleteBtn()}
                                sx={{
                                    fill: (theme) => theme.palette.warning.main,
                                    cursor: "pointer"
                                }}
                            />
                        </ListItem>

                    </List>
                </Box>
            </Modal>
        </div>
    );
}

export default Customerinfo;
