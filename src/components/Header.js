import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3,0,2),
        fontFamily: "Permanent Marker",
        textAlign: "center",
        fontSize: "40px",
        color: "deeppink",
        textShadow: "1px 1px darkmagenta"
    }
}));


export default function Header() {
    const classes = useStyles();

  return (
    <Typography className={classes.root} component='h1'>
        The Ultimate Form Challenge 
    </Typography>
  )
}
