import { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { styled } from "@mui/material";
import { ruleChecker, toPersian } from "../../utils/setting";
import { center } from "../../styles/theme";
import { deleteUser, getAllUser } from "../../Redux/Slices/Manangement/user/user";
import { useDispatch, useSelector } from "react-redux";
import { NoItem } from "../UI/NoItem";
import CreateUserModal from "./CreateUserModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));


function Row(props) {
    const { row, index } = props;
    const dispatch = useDispatch()
    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id))
    }
    return (
        <Fragment>
            <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell
                    align="center"
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                        ...center,
                    }}
                >
                    {toPersian(index + 1)}
                </TableCell>

                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row?.fname}-{row?.lname}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row?.username}
                </TableCell>

                <TableCell
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {row?.password}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {ruleChecker(row?.rules)}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {toPersian(row?.phone ?? 0)}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    <Box sx={{ ...center, gap: "15px" }}>
                        <CreateUserModal type="edit" data={row} />
                        <DeleteOutlineIcon
                            onClick={() => deleteUserHandler(row?.user_id)}
                            sx={{ fill: (theme) => theme.palette.warning.main, cursor: "pointer" }}
                        />
                    </Box>
                </TableCell>
            </StyledTableRow>
        </Fragment>
    );
}

export default function UserList() {
    const dispatch = useDispatch();


    const { userList, update } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getAllUser("User"));
    }, [dispatch, update]);
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                overflowY: "scroll",
                overflowX: "hidden",
            }}
        >
            {userList == null ? (
                <NoItem />
            ) : (
                <TableContainer>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell
                                    sx={{ color: (theme) => theme.palette.disable.main }}
                                    align="center"
                                >
                                    ردیف
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{ color: (theme) => theme.palette.disable.main }}
                                    align="center"
                                >
                                    نام و نام خانوادگی
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{ color: (theme) => theme.palette.disable.main }}
                                    align="center"
                                >
                                    نام کاربری
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{ color: (theme) => theme.palette.disable.main }}
                                    align="center"
                                >
                                    رومز عبور
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{ color: (theme) => theme.palette.disable.main }}
                                    align="center"
                                >
                                    سطح دسترسی
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{ color: (theme) => theme.palette.disable.main }}
                                    align="center"
                                >
                                    شماره همراه
                                </StyledTableCell>

                                <StyledTableCell
                                    sx={{ color: (theme) => theme.palette.disable.main }}
                                    align="center"
                                >
                                    عملیات
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userList?.map((row, index) => (
                                <Row key={index} row={row} index={index} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    );
}
