import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react';
const PromoCodePrint = () => {
    return (
        <Paper elevation={3} sx={{ padding: 2, maxWidth: 450, borderRadius: '10px' }}>
            <Grid container spacing={2} alignItems="center">
                {/* QR Code */}
                <Grid item xs={4}>
                    <Box
                        sx={{ width: '100%', height: 'auto' }}
                    >
                        <QRCodeCanvas value="https://reactjs.org/" />,
                    </Box>
                </Grid>

                {/* Promo Code Details */}
                <Grid item xs={8}>
                    <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                        {/* Promo Code Number */}
                        <Typography variant="h5" textAlign="center" fontWeight="bold">
                            ۱۲۳۴۵۶۷۸۹
                        </Typography>

                        {/* Expiration Date */}
                        <Typography
                            variant="body1"
                            textAlign="center"
                            sx={{ border: '1px solid black', padding: '5px', borderRadius: '5px', marginTop: '10px' }}
                        >
                            مدت استفاده تا ۱۴۰۳/۰۵/۱۲
                        </Typography>

                        {/* Amount */}
                        <Typography
                            variant="h4"
                            textAlign="center"
                            sx={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '10px' }}
                        >
                            ۲۰۰ هزار تومان
                        </Typography>

                        {/* Purchase Condition */}
                        <Typography
                            variant="body1"
                            textAlign="center"
                            sx={{ border: '1px solid black', padding: '5px', borderRadius: '5px', marginTop: '10px' }}
                        >
                            از خرید بالای ۲۰۰ هزار تومان
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default PromoCodePrint;
