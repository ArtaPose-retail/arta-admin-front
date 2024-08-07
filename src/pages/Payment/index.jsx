import { Box } from '@mui/material'
import React from 'react'
import FormSection from '../../components/Payment/FormSection'
import TableSection from '../../components/Payment/TableSection'
import PurchaseInformation from '../../components/HomePage/PurchaseInformation'

function PaymentParent() {
    return (
        <Box sx={{ display: "flex", width: "100%", height: "660px", px: 1, gap: "20px" }}>
            <FormSection />

            <TableSection />
        </Box >
    )
}

export default PaymentParent