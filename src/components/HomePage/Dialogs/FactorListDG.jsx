import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import CustomerFactorTable from "../CustomerFactorTable";
import CustomerFactorListTable from "./CustomerFactorListTable";
import { useDispatch } from "react-redux";
import { handleShowNewFactorDialog } from "../../../Redux/Slices/HomePage/factor";
import { center } from "../../../styles/theme";
export default function FactorListDG({ handleClose }) {

    const dispatch = useDispatch()



    return (
        <div>


            <Box>
                <Box sx={{ ...center, gap: "10px" }}>


                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            fontSize: "16px",
                            fontWeight: 700,
                            color: (theme) => theme.palette.text.primary,
                        }}
                        onClick={() => dispatch(handleShowNewFactorDialog(true))}
                    >
                        ایجاد فاکتور جدید
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.warning.main,
                            fontSize: "16px",
                            fontWeight: 700,
                            color: (theme) => theme.palette.text.primary,
                            px: 3
                        }}
                        onClick={handleClose}
                    >
                        انصراف
                    </Button>
                </Box>

                <Box sx={{ mt: 1 }}>
                    <CustomerFactorListTable />
                </Box>
            </Box>
        </div>
    );
}
