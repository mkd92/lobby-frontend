import { Box, Paper } from '@mui/material'
import React from 'react'
import PropertySelector from '../components/PropertySelector'
import TransactionsList from '../components/TransactionsList'
import UnitSelector from '../components/UnitSelector'

function DashboardPage() {
  return (
    <Box sx={{margin:"1rem"}}>
      <Box sx={{display:"flex", height:"50vh"}}>
        <PropertySelector/>
        <UnitSelector/>
      </Box>
      <TransactionsList/>

    </Box>
  )
}

export default DashboardPage