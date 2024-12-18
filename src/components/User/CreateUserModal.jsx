import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import Title from "../UI/Title";
import Close from "@mui/icons-material/Close";
import { center } from "../../styles/theme";
import EditIcon from "@mui/icons-material/Edit";

import { FormControlLabel, Grid, InputLabel } from "@mui/material";
import { createUserCheckbox, createUserForm } from "../../utils/data";
import Checkbox from "@mui/material/Checkbox";
import Input from "../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import {
    addUser,
    editUser,
    resSetUserInfo,
    setUserInfo,
    setUserRule,
} from "../../Redux/Slices/Manangement/user/user";
import { ruleChecker } from "../../utils/setting";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
};

export default function CreateUserModal({ type, data }) {
    const [open, setOpen] = React.useState(false);

    // useEffect(() => {
    //     if (type == "edit") {
    //         console.log(data)
    //         for (const key in data?.rules) {
    //             setUserRule({
    //                 key: key,
    //                 value: data?.rules[key],
    //             })
    //         }
    //     }
    // }, [])
    const handleOpen = () => {
        setOpen(true)
        dispatch(resSetUserInfo())

    };
    const handleClose = () => setOpen(false);
    const { UserInfo } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const checkHandler = (e) => {
        dispatch(
            setUserRule({
                key: e.target.id,
                value: e.target.checked,
            })
        );
    };
    const onChangeHandler = (name, value) => {
        dispatch(
            setUserInfo({
                key: name,
                value: value,
            })
        );
    };

    const submitHandler = () => {
        if (type == "add") {
            dispatch(addUser());
            setOpen(false)
        } else {
            dispatch(editUser(data?.user_id))
            setOpen(false)
        }
    };
    return (
        <div>
            {type == "add" ? (
                <Button
                    onClick={handleOpen}
                    variant="contained"
                    sx={{
                        bgcolor: (theme) => theme.palette.darkBlue.main,
                        color: (theme) => theme.palette.text.primary,
                    }}
                >
                    <AddIcon
                        fontSize="medium"
                        sx={{ fill: (theme) => theme.palette.text.primary }}
                    />
                </Button>
            ) : (
                <EditIcon
                    fontSize="medium"
                    onClick={handleOpen}
                    sx={{ cursor: "pointer" }}
                />
            )}

            <Modal
                open={open}

                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ ...center, justifyContent: "space-between" }}>
                        <Title
                            title={"ایجاد کاربر جدید"}
                            Typoprops={{
                                fontSize: "20px",
                                fontWeight: 700,
                                color: (theme) => theme.palette.text.card,
                            }}
                        />
                    </Box>
                    <Grid container spacing={3} sx={{ p: 1, mt: 1 }}>
                        {createUserForm?.map((item, index) => (
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
                                    name={item.name}
                                    id={item.name}
                                    value={UserInfo[item?.name]}
                                    onChange={onChangeHandler}
                                />
                                <Typography sx={{ fontSize: "10px", fontWeight: "bold" }}>
                                    {type == "edit" ? `${item.placeholder} فعلی شما :   ${data[item.name]}` : ""}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>

                    <Title
                        title={"سطح دسترسی"}
                        Typoprops={{
                            fontSize: "16px",
                            fontWeight: 700,
                            color: (theme) => theme.palette.text.card,
                            my: 2,
                        }}
                    />
                    <Typography sx={{ fontSize: "10px", fontWeight: "bold" }}>
                        {type == "edit" ? `سطح دسترسی فعلی شما :   ${ruleChecker(data?.rules)}` : ""}
                    </Typography>
                    <Box
                        sx={{
                            ...center,
                            justifyContent: "space-evenly",
                            gap: "5px",
                            mt: 1,
                        }}
                    >
                        {createUserCheckbox.map((item, index) => (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        checked={UserInfo.rule[item.id]}
                                        id={item.id}
                                        onClick={(e) => checkHandler(e)}
                                    />
                                }
                                label={item.title}
                            />
                        ))}
                    </Box>
                    <Box sx={{ ...center, justifyContent: "space-between", mt: 3 }}>
                        <Button
                            onClick={submitHandler}
                            variant="contained"
                            color="success"
                            sx={{ width: "15%" }}
                        >
                            تایید
                        </Button>
                        <Button onClick={handleClose} variant="contained" color="warning" sx={{ width: "15%" }}>
                            انصراف
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
