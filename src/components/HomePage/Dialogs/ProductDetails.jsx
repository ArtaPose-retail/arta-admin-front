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
    const [Refrigrate, setRefrigrate] = useState(false);
    const [Weight, setWeight] = useState(false);
    const { productformInformation } = useSelector(
        (state) => state.Productinformation
    );
    const handerWeight = () => {
        setWeight(!Weight);
    };
    const dispatch = useDispatch();

    const handlerRefrigrate = () => {
        setRefrigrate(!Refrigrate);
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
                        bgcolor: (theme) =>
                            !Refrigrate ? theme.background.box : theme.palette.primary.second,
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
                        <Box sx={{ ...center, gap: "10px" }}>
                            <Typography
                                sx={{
                                    bgcolor: (theme) => theme.palette.green.main,
                                    color: (theme) => theme.palette.text.primary,
                                    borderRadius: "12px",
                                    p: 1,
                                }}
                            >
                                فی محصول:{toPersian(separateBy3(iteminfo && iteminfo?.amount))}
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
                                {iteminfo?.date &&
                                    toPersian(
                                        moment(iteminfo?.date, "YYYY-MM-DD")
                                            .locale("fa")
                                            .format("YYYY/MM/D")
                                    )}
                            </Typography>

                            <Typography
                                sx={{
                                    bgcolor: (theme) => theme.palette.darkBlue.main,
                                    color: (theme) => theme.palette.text.primary,
                                    borderRadius: "12px",
                                    p: 1,
                                }}
                            >
                                شماره فاکتور/ بارنامه : {toPersian("12345")}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ ...center, justifyContent: "space-around", mt: 2 }}>
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
                        <Divider orientation="vertical" variant="middle" flexItem />

                        <Box sx={{ ...center }}>
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: 500,
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                نام خودرو:{iteminfo.transportInfo?.vehicle}
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" variant="middle" flexItem />

                        <Box sx={{ ...center }}>
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: 500,
                                    color: (theme) => theme.typography.color,
                                }}
                            >
                                طرف معامله:
                                {iteminfo?.transportInfo?.driver}
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
                                        (!Weight && item.name === "weight") ||
                                            (!Refrigrate && item.name === "date")
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
                        <Grid
                            container
                            spacing={1}
                            sx={{
                                border: "1px solid gray",

                                borderRadius: "12px",
                                mt: 1,
                                bgcolor: "white",
                                overflow: "hidden",
                            }}
                        >
                            <Grid
                                item
                                xs={2.5}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        bgcolor: (theme) => theme.palette.green.main,
                                    },
                                }}
                            >
                                <Box sx={{ ...center }}>

                                    <CancelBtn
                                        BtnTitle={
                                            <Box sx={{ ...center, gap: "5px" }}>
                                                <Typography
                                                    sx={{
                                                        fontSize: "16px",
                                                        fontWeight: 500,
                                                        color: (theme) => theme.typography.color,

                                                    }}
                                                >
                                                    اتمام محصول
                                                </Typography>
                                                <UndoIcon />
                                            </Box>
                                        }
                                        width="100%"
                                        open={openCancelBTn}
                                        handleClose={handleCloseCancleModal}
                                        handleOpen={handleOpenCancleModal}
                                        title={"ثبت درخواست"}
                                        question={"آیا از اتمام محصول اطمینان دارید؟"} />
                                </Box>
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid
                                item
                                xs={3}
                                sx={{
                                    "&:hover": {
                                        bgcolor: (theme) => theme.palette.green.main,
                                    },
                                    cursor: "pointer",
                                }}
                            >
                                <Box sx={{ ...center, gap: "5px", m: 1 }}>


                                    <NewProductParentDialog type={"edit"} />
                                </Box>
                            </Grid>
                            <Divider orientation="vertical" flexItem />

                            <Grid
                                item
                                xs={2.5}
                                sx={{
                                    "&:hover": {
                                        bgcolor: (theme) => theme.palette.green.main,
                                    },
                                    cursor: "pointer",
                                }}
                            >
                                <Box
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
                                            color: (theme) => theme.palette.warning.main,
                                        }}
                                    >
                                        حذف محصول
                                    </Typography>
                                    <DeleteOutlineIcon

                                        sx={{
                                            fill: (theme) => theme.palette.warning.main,
                                            cursor: "pointer",
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Divider orientation="vertical" flexItem />

                            <Grid
                                item
                                xs={3.5}
                                sx={{
                                    cursor: "pointer",
                                }}
                            >
                                <Box sx={{ ...center, m: 1 }}>
                                    <Box sx={{ ...center }}>
                                        <Switch
                                            name="Refrigrate"
                                            onClick={() => handlerRefrigrate()}
                                            checked={Refrigrate}
                                            size="small"
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                color: (theme) => theme.typography.color,
                                            }}
                                        >
                                            سردخانه
                                        </Typography>
                                    </Box>
                                    <Box sx={{ ...center }}>
                                        <Switch
                                            name="Weight"
                                            onClick={() => handerWeight()}
                                            checked={Weight}
                                            size="small"
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                color: (theme) => theme.typography.color,
                                            }}
                                        >
                                            وزن ناخالص
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Collapse>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ProductDetails;
