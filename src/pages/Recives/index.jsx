import React from 'react'
import FormSection from '../../components/Recives/FormSection'
import { Box } from '@mui/material'
import TableSection from '../../components/Recives/TableSection'

function RecivesParent() {
    return (
        <Box sx={{ display: "flex", width: "100%", height: "90dvh", px: 1, gap: "20px" }}>
            <FormSection />
            <TableSection />
        </Box>
    )
}

export default RecivesParent