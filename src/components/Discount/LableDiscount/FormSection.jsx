import { Box, Button, Grid, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { lableDiscountForm } from '../../../utils/data'
import { center } from '../../../styles/theme'
import Input from '../../UI/Input';

function FormSection() {
    return (
        <Box>
            <Grid container spacing={2} sx={{ p: 1, mt: 1, ...center }}>
                {lableDiscountForm?.map((item, index) => (
                    <Grid item xs={5} key={index}>
                        <InputLabel>
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 400,
                                    color: item.color,
                                }}
                            >
                                {item.lable}
                            </Typography>
                        </InputLabel>
                        <Input
                            name={item.name}
                            id={item.name}
                            hasIcon={item.hasIcon}
                            type={item.type}
                            options={item.options}
                        />

                    </Grid>
                ))}


            </Grid>
            <Box sx={{ ...center, justifyContent: "space-around", mt: 2 }}>
                <Button variant='contained' color='success'>
                    ثبت
                </Button>
                <Button variant='contained' color='warning'>
                    انصراف
                </Button>
            </Box>
        </Box>
    )
}

export default FormSection