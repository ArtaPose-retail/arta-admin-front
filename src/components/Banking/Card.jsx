import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { separateBy4, toPersian } from "../../utils/setting";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import EditIcon from "@mui/icons-material/Edit";
import { center } from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { AccountList, DeleteAccount, SingleAccount } from "../../Redux/Slices/Accounting/Bank/Bank";
import bankBlue from "../../Assets/images/Bank/bankBlue.png";
import bankRed from "../../Assets/images/Bank/bankRed.png";
import bankYellow from "../../Assets/images/Bank/bankYellow.png";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CancelBtn from "../UI/CancelBtn";

function Card() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [openCancelBTn, setOpenCancelBTn] = useState(false);
    const handleOpenCancleModal = () => setOpenCancelBTn(true);
    const handleCloseCancleModal = () => setOpenCancelBTn(false);

    const AcceptBtn = (id) => {
        dispatch(DeleteAccount(id))
    }

    const addAcount = () => {
        navigate(reactRouts.banking.addcart);
    };

    const { bankList, update } = useSelector((state) => state.bank);
    useEffect(() => {
        dispatch(AccountList());
    }, [update]);

    const bgList = [bankBlue, bankRed, bankYellow]

    const DeleteHandler = (id) => {
        dispatch(DeleteAccount(id))
    }

    const EditHandler = (id) => {
        dispatch(SingleAccount(id))
        navigate(reactRouts.banking.addcart, {
            state: { type: "edit", id: id }
        });
    }
    return (
        <Box
            sx={{
                width: "100wh",
                display: "flex",
                overflowX: "scroll",
                cursor: "pointer",

            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: "15px",
                    p: 2,
                }}
            >
                {bankList?.map((item, index) => (
                    <Box
                        tabIndex={0}

                        key={index}
                        sx={{
                            background: `url(${bgList[Math.floor(Math.random() * bgList.length)]}) center / auto no-repeat  `,
                            objectFit: "fill",
                            position: "relative",
                            borderRadius: "18px",
                            width: "290px",
                            height: "183px",
                            p: 1,
                            "&:focus": {
                                background: theme => theme.palette.primary.main
                            }
                        }}
                    >
                        <Box sx={{ ...center, justifyContent: "space-between" }}>
                            <Box sx={{ ...center, gap: "5px" }}>
                                <img src={item?.logo} />
                                <Typography sx={{ fontSize: "12px", fontWeight: "regular" }}>
                                    {item?.bank_name?.name}-{item?.bank_type?.title}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    bgcolor: "#FF8A00",
                                    ...center,
                                    p: 1,
                                    borderRadius: "18px 0px 18px 0px",
                                    gap: "5px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        ...center,
                                        fontSize: "10px",
                                        fontWeight: "regular",
                                        color: "white",
                                    }}
                                >
                                    موجودی &nbsp;
                                    {toPersian(item?.amount ?? 0)}
                                    &nbsp; ریال
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                height: "80%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                p: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    ...center,
                                    fontSize: "12px",
                                    fontWeight: "regular",
                                    color: (theme) => theme.palette.text.card,
                                    justifyContent: "flex-start",
                                }}
                            >
                                شماره حساب:&nbsp;
                                {toPersian(item?.account_num ?? 0)}
                            </Typography>

                            <Box sx={{ ...center, flexDirection: "row-reverse", gap: "15%" }}>
                                {separateBy4(item?.card_num ?? 0).map((num) => (
                                    <Typography
                                        sx={{
                                            ...center,
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                            color: (theme) => theme.palette.text.card,
                                        }}
                                    >
                                        {toPersian(num)}
                                    </Typography>
                                ))}
                            </Box>
                            <Typography
                                sx={{
                                    ...center,
                                    fontSize: "12px",
                                    fontWeight: "regular",
                                    color: (theme) => theme.palette.text.card,
                                    justifyContent: "flex-start",
                                }}
                            >
                                صاحب حساب:&nbsp;
                                {item?.owner_name}
                            </Typography>

                            {/* })} */}
                            <Box sx={{ ...center, justifyContent: "space-between" }}>
                                <Typography
                                    sx={{
                                        ...center,
                                        fontSize: "12px",
                                        fontWeight: "regular",
                                        color: (theme) => theme.palette.text.card,
                                        justifyContent: "flex-start",
                                    }}
                                >
                                    شماره شبا:&nbsp;
                                    {toPersian(item?.iban ?? 0)}
                                </Typography>
                                <EditIcon
                                    onClick={() => EditHandler(item?.id)}
                                    fontSize="small"
                                    sx={{
                                        bgcolor: (theme) => theme.palette.darkBlue.main,
                                        fill: (theme) => theme.palette.text.primary,
                                        borderRadius: "8px",
                                        p: 0.2,
                                    }}
                                />
                                {/* <DeleteOutlineIcon
                                    onClick={() => DeleteHandler(item?.id)}
                                    fontSize="small"
                                    sx={{
                                        bgcolor: (theme) => theme.palette.error.main,
                                        fill: (theme) => theme.palette.text.primary,
                                        borderRadius: "8px",
                                        p: 0.2,
                                    }} /> */}
                                <CancelBtn
                                    BtnTitle={
                                        <DeleteOutlineIcon
                                            // onClick={() => DeleteHandler(item?.id)}
                                            fontSize="small"
                                            sx={{
                                                bgcolor: (theme) => theme.palette.error.main,
                                                fill: (theme) => theme.palette.text.primary,
                                                borderRadius: "8px",
                                                p: 0.2,
                                            }} />
                                    }
                                    width="30%"
                                    open={openCancelBTn}
                                    handleClose={handleCloseCancleModal}
                                    handleOpen={handleOpenCancleModal}
                                    title={"حذف درخواست"}
                                    question={`آیا از حذف اطمینان دارید؟`}
                                    AcceptBtn={AcceptBtn}
                                    id={item.id}
                                />
                            </Box>
                        </Box>
                    </Box>
                ))}

                <Box
                    sx={{
                        bgcolor: (theme) => theme.palette.text.secondary,
                        borderRadius: "18px",
                        width: "290px",
                        height: "183px",
                        ...center,
                        flexDirection: "column",
                        gap: "10px",
                        cursor: "pointer",
                    }}
                    onClick={() => addAcount()}
                >
                    <AddCircleOutlineIcon
                        sx={{ fontSize: 64, fill: (theme) => theme.palette.text.primary }}
                    />
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "16px",
                        }}
                    >
                        حساب خود را اضافه کنید
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Card;
