import { Button } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    root:{
        margin: theme.spacing(2,0,2)
    }
}))

export default function PrimaryButton(props) {
    const styles = useStyles()
  return (
    <Button type='submit' fullWidth variant="contained" color="primary" className={styles.root} {...props}>
        {props.children}
    </Button>
  )
}
