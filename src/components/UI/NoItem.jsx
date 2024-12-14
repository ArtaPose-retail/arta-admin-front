import { Box, Typography } from '@mui/material'
import React from 'react'
import noItem from "../../Assets/images/NoItem.png"
import { center } from '../../styles/theme'
export const NoItem = ({ height }) => {
    return (
        <Box sx={{ ...center, flexDirection: "column", height: height ?? "100%", width: "100%" }}>
            <img src={noItem} alt="no item found" width={400} height={400} />
            <Typography sx={{ fontSize: "24px", fontWeight: "900", color: theme => theme.palette.primary.main }}>
                موردی برای نمایش یافت نشد
            </Typography>
        </Box>
    )
}

