import {
    Box,
    Button,
    Collapse,
    Dialog,
    DialogContent,
    Divider,
    Grid,
    IconButton,
    InputLabel,
    Switch,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../UI/Title";
import { separateBy3, toPersian, toastHandler } from "../../../utils/setting";
import moment from "jalali-moment";
import { ProductItemInfoForm } from "../../../utils/data";
import UndoIcon from "@mui/icons-material/Undo";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Input from "../../UI/Input";
import NewProductParentDialog from ".";
import CancelBtn from "../../UI/CancelBtn";
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

function ProductDetails({ status, handlerCloseDialog, iteminfo }) {
    const [expanded, setExpanded] = useState(false);
    const [Date, seDate] = useState(false);
    const [Price, setPrice] = useState(false);
    const { productformInformation } = useSelector(
        (state) => state.Productinformation
    );
    const handerPrice = () => {
        setPrice(!Price);
    };
    const dispatch = useDispatch();

    const handlerDate = () => {
        seDate(!Date);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // const [open, setOpen] = useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const [DPClicked, setDpClicked] = useState(false);
    // const clickhandlerDp = () => {
    //     setDpClicked(true);
    // };

    const getDate = (e) => {
        console.log(e);
        setDpClicked(false);
    };

    const deleteBtn = () => {
        toastHandler("ایتم مورد  نظر حذف شد", "warning");
    };

    const [openCancelBTn, setOpenCancelBTn] = useState(false);
    const handleOpenCancleModal = () => setOpenCancelBTn(true);
    const handleCloseCancleModal = () => setOpenCancelBTn(false);

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                open={status}
                // onClose={handlerCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent
                    sx={{
                        bgcolor: (theme) => theme.background.box,
                        order: 1,
                    }}
                >
                    <Box sx={{ ...center, justifyContent: "space-between" }}>
                        <Title
                            title={"اطلاعات کالا"}
                            Typoprops={{
                                fontSize: "20px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.text.card,
                            }}
                        />
                        <Box
                            sx={{
                                ...center,
                                gap: "10px",
                                justifyContent: "space-between",
                                width: "50%",
                            }}
                        >
                            <Box sx={{ ...center, gap: "15px" }}>
                                <Box
                                    sx={{
                                        bgcolor: `${iteminfo?.color}`,
                                        borderRadius: "12px",
                                        px: 0.5,
                                        pt: 0.5,
                                    }}
                                >
                                    <img
                                        src={iteminfo?.logo}
                                        width={35}
                                        height={35}
                                        style={{
                                            padding: "0px",
                                            margin: "0px",
                                        }}
                                    />
                                </Box>

                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: 500,
                                        color: (theme) => theme.typography.color,
                                    }}
                                >
                                    نام کالا:{iteminfo?.title}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    bgcolor: (theme) => theme.palette.darkBlue.main,
                                    color: (theme) => theme.palette.text.primary,
                                    borderRadius: "12px",
                                    p: 1,
                                }}
                            >
                                شماره قفسه:{toPersian(13243)}
                            </Typography>
                        </Box>
                    </Box>

                    <Grid container spacing={2} sx={{ p: 1, mt: 1 }}>
                        {ProductItemInfoForm?.map((item, index) => (
                            <Grid item xs={4} key={index}>
                                <InputLabel>
                                    <Typography
                                        sx={{
                                            fontSize: "18px",
                                            fontWeight: 400,
                                            color: item.color,
                                        }}
                                    >
                                        {item?.placeholder}
                                    </Typography>
                                </InputLabel>

                                <Input
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    disabled={
                                        (!Price && item.name === "price") ||
                                            (!Date && item.name === "date")
                                            ? true
                                            : false
                                    }
                                    name={item.name}
                                    id={item.name}
                                    // width={"55px"}
                                    height={"55px"}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ ...center, justifyContent: "space-between" }}>
                        <Box
                            sx={{
                                ...center,
                                justifyContent: "flex-start",
                                gap: "10px",
                                my: 1,
                            }}
                        >
                            <Button
                                onClick={() => {
                                    toastHandler("محصول با موفقیت ثبت شد");
                                    handlerCloseDialog();
                                }}
                                variant="contained"
                                sx={{
                                    bgcolor: (theme) => theme.palette.green.main,
                                    color: (theme) => theme.palette.text.primary,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    px: 4,
                                }}
                            >
                                ثبت محصولات
                            </Button>
                            <Button
                                onClick={() => handlerCloseDialog()}
                                variant="contained"
                                sx={{
                                    bgcolor: (theme) => theme.palette.warning.main,
                                    color: (theme) => theme.palette.text.primary,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                }}
                            >
                                لغو محصول
                            </Button>
                        </Box>
                        {/* <MoreVertIcon onClick={() => handleClickOpen()} /> */}
                        <Box
                            sx={{
                                ...center,
                                justifyContent: "flex-start",
                                gap: "10px",
                                my: 1,
                            }}
                        >
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </Box>
                    </Box>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Box sx={{ ...center, justifyContent: "space-between", p: 2, mt: 1 }}>
                            <NewProductParentDialog type={"edit"} />
                            <Button
                                variant="outlined"
                                sx={{
                                    ...center,
                                    m: 1,
                                    gap: "5px",
                                }}
                                onClick={() => deleteBtn()}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: 500,
                                        // color: (theme) => theme.palette.,
                                    }}
                                >
                                    اتمام محصول
                                </Typography>
                                <UndoIcon
                                    sx={{
                                        // fill: (theme) => theme.palette.warning.main,
                                        cursor: "pointer",
                                    }}
                                />
                            </Button>
                            <Button
                                sx={{
                                    ...center,
                                    m: 1,
                                    gap: "5px",


                                }}
                                variant="outlined"
                                onClick={() => deleteBtn()}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: 500,
                                        // color: (theme) => theme.palette.,
                                    }}
                                >
                                    مرجوعی
                                </Typography>
                                <UndoIcon
                                    sx={{
                                        // fill: (theme) => theme.palette.warning.main,
                                        cursor: "pointer",
                                    }}
                                />
                            </Button>
                            <Button
                                sx={{
                                    ...center,
                                    m: 1,
                                    gap: "5px",
                                }}
                                variant="outlined"

                                onClick={() => deleteBtn()}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: 500,
                                        color: (theme) => theme.palette.warning.main,
                                    }}
                                >
                                    دور ریز
                                </Typography>
                                <DeleteOutlineIcon
                                    sx={{
                                        fill: (theme) => theme.palette.warning.main,
                                        cursor: "pointer",
                                    }}
                                />
                            </Button>
                            <Box sx={{ ...center, m: 1 }}>
                                <Box sx={{ ...center }}>
                                    <Switch
                                        name="Date"
                                        onClick={() => handlerDate()}
                                        checked={Date}
                                        size="small"
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            color: (theme) => theme.typography.color,
                                        }}
                                    >
                                        تاریخ
                                    </Typography>
                                </Box>
                                <Box sx={{ ...center }}>
                                    <Switch
                                        name="Price"
                                        onClick={() => handerPrice()}
                                        checked={Price}
                                        size="small"
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            color: (theme) => theme.typography.color,
                                        }}
                                    >
                                        قیمت
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Collapse>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ProductDetails;
