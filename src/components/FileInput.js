import React from 'react'
import Dropzone from 'react-dropzone'
import { Controller } from 'react-hook-form'
import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import { CloudUpload, InsertDriveFile } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: 'lightgrey',
        cursor: 'pointer',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        marginTop: theme.spacing(2)
    },
    icon: {
        marginBottom: theme.spacing(1),
        color: '#888',
        fontSize:'42px'
    }
}))

export default function FileInput(props) {

    const styles = useStyles();

  return (
    <Controller control={props.control} name={props.name} defaultValue={[]} 
    render={({field: {onChange, onBlur, value}}) => (
        <>
        <Dropzone onDrop={onChange}>
           {({getRootProps, getInputProps}) => (
               <Paper className={styles.root} variant="outlined" {...getRootProps()}>
                   <CloudUpload className={styles.icon}/>
                   <input {...getInputProps()} name={props.name} onBlur={onBlur}/>
                   <Typography>Drag and drop files here, or click to select files</Typography>
               </Paper>
           )} 
        </Dropzone>
        <List>
            {console.log(value)}
            {value?.map((f, index) => (
                <ListItem key={index}>
                    <ListItemIcon>
                        <InsertDriveFile /> 
                    </ListItemIcon>
                    <ListItemText primary={f.name} secondary={f.size}/>
                </ListItem>
            ))}
        </List>
        </>
        )} />
  )
}
