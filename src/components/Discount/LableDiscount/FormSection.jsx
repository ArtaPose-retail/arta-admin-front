import { Box, Button, Grid, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { lableDiscountForm } from '../../../utils/data'
import { center } from '../../../styles/theme'

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
                        <TextField
                            // value={formInformation[item.name]}
                            name={item.name}
                            id={item.name}
                            fullWidth
                            sx={{
                                "& .MuiNativeSelect-select": {
                                    color: "black",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                                borderRadius: "18px",
                            }}
                            select={item.select}
                            inputProps={{
                                style: {
                                    background: "#F2F2F2",
                                    color: "#000",
                                    direction: "ltr",
                                    borderRadius: "18px",
                                },
                            }}
                            SelectProps={{
                                native: true,
                                style: {
                                    background: "#F2F2F2",
                                    color: "#000",
                                    direction: "ltr",
                                    borderRadius: "18px",
                                },



                            }}
                        >
                            {item.select &&
                                item?.options?.map((option, index) => (
                                    <option key={index} value={option.value}>
                                        <Typography sx={{ fontSize: "12px", color: "black" }}>
                                            {option.title}
                                        </Typography>
                                    </option>
                                ))}
                        </TextField>
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