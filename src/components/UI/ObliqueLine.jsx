import { Box, Typography } from '@mui/material'
import React from 'react'
import { toPersian } from '../../utils/setting'

function ObliqueLine({ title }) {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'inline-block',
            }}
        >
            <Typography
                sx={{
                    fontSize: '32px',
                    fontWeight: 700,
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {toPersian(title)}
                تومان
            </Typography>
            <Box
                sx={{
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    width: '100%',
                    height: '8px',
                    backgroundColor: 'red',
                    transform: 'rotate(-15deg)',
                    zIndex: 0,
                    borderRadius: '50px'
                }}
            />
        </Box>
    )
}

export default ObliqueLine