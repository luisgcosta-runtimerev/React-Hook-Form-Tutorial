import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}))

export default function MainContainer({ children, ...props}) {

    const classes = useStyles()

  return (
    <Container className={classes.root} component="main" maxWidth="xs" {...props}>
        {
            children
        }
    </Container>
  )
}
