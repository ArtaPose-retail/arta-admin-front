

import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import Title from "../UI/Title";
import Input from "../UI/Input";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RegistrationCostData, accountstable, vehicleType } from "../../utils/data";
import { separateBy3, toPersian, toastHandler } from "../../utils/setting";
import { useNavigate } from "react-router-dom";
import moment from "jalali-moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloseIcon from '@mui/icons-material/Close';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {},
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

export default function VehicleDl() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const deleteBtn = () => {
        toastHandler("ایتم مورد  نظر حذف شد", "warning");
    };

    return (
        <div>
            <Box
                onClick={() => handleClickOpen()}
                sx={{
                    bgcolor: (theme) => theme.palette.text.secondary,
                    height: "100%",
                    p: 0.5,
                    borderRadius: "50px",
                    cursor: "pointer",
                    ...center,
                }}
            >
                <AddIcon
                    sx={{
                        fill: (theme) => theme.palette.text.primary,
                    }}
                />
            </Box>
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
                    <Box sx={{ ...center, justifyContent: "space-between" }}>

                        <Title
                            title={"نوع خودرو"}
                            Typoprops={{
                                fontSize: "20px",
                                fontWeight: 500,
                                color: (theme) => theme.typography.color,
                            }}
                        />
                        <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />

                    </Box>

                    <Box sx={{ ...center, justifyContent: "flex-start", gap: "12px", mt: 2 }}>
                        <Input
                            type={"text"}
                            height={"55px"}
                            placeholder={"نوع خودرو را وارد کنید"}
                            hasText={true}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                color: (theme) => theme.palette.text.primary,
                                bgcolor: (theme) => theme.palette.green.main,
                                borderRadius: "12px",
                                p: 2,
                                px: 4,
                            }}
                        >
                            افزودن
                        </Button>
                    </Box>

                    <TableContainer sx={{ maxHeight: 250, mt: 2 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell
                                        sx={{ color: (theme) => theme.typography.color }}
                                        align="center"
                                    >
                                        ردیف
                                    </StyledTableCell>
                                    <StyledTableCell
                                        sx={{ color: (theme) => theme.typography.color }}
                                        align="center"
                                    >
                                        نوع خودرو
                                    </StyledTableCell>


                                    <StyledTableCell
                                        sx={{ color: (theme) => theme.typography.color }}
                                        align="center"
                                    >
                                        واحد عملیات
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {vehicleType.map((item, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell
                                            sx={{ color: (theme) => theme.typography.color }}
                                            width={"10%"}
                                            align="center"
                                        >
                                            {toPersian(index + 1)}
                                        </StyledTableCell>

                                        <StyledTableCell
                                            sx={{ color: (theme) => theme.typography.color }}
                                            align="center"
                                        >
                                            {item.name}
                                        </StyledTableCell>

                                        <StyledTableCell align="center">
                                            <Box
                                                sx={{
                                                    ...center,
                                                    gap: "15px",
                                                }}
                                            >
                                                <EditIcon />
                                                <DeleteOutlineIcon
                                                    onClick={() => deleteBtn()}
                                                    sx={{ fill: (theme) => theme.palette.warning.main, cursor: "pointer" }}
                                                />
                                            </Box>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>



                </DialogContent>
            </Dialog>
        </div>
    );
}
