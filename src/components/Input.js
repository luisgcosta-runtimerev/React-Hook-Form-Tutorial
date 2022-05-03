import React, { forwardRef } from 'react'
import { TextField } from '@mui/material'

const Input = forwardRef((props, ref) => {
  return (
    <TextField ref={ref} variant='outlined' margin='normal' fullWidth {...props}/>
  )
})

export default Input
