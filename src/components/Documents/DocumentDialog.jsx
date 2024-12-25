import React from 'react';
import { Dialog, DialogContent, Button, Box } from '@mui/material';
import Title from '../UI/Title';
import Paytable from './Paytable';
import DocOrder from './DocOrder';




const DocumentDialog = ({ open, handleClose, data }) => {

    return (
        <Dialog open={open} maxWidth="md" fullWidth>
            <DialogContent sx={{ bgcolor: "white", }}>
                <Title Typoprops={{ fontSize: "20px", fontWeight: "bold" }} title={" جزییات  فاکتور فروش"} />
                <Box sx={{ p: 2 }}>
                    <Title title={" جزییات  پرداختی"} />
                    <Paytable />
                    {/* <Title title={" جزییات  محصولات"} />
                    <DocOrder /> */}
                </Box>

                <Button onClick={handleClose} sx={{ float: "left", bgcolor: theme => theme.palette.error.light }} variant='contained' >
                    بستن
                </Button>
            </DialogContent>

        </Dialog >
    );
};

export default DocumentDialog;