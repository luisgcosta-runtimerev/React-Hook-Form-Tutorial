import { TableCell, TableContainer, Typography, Table, TableHead, TableRow, Paper, TableBody, List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import React, { useContext } from 'react'
import MainContainer from '../components/MainContainer'
import { MyContext } from '../DataContext'
import { InsertDriveFile } from '@mui/icons-material'
import PrimaryButton from '../components/PrimaryButton'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({  
  root: {
    marginBottom: theme.spacing(2)
  },
  table: {
    marginBottom: theme.spacing(2)
  }
}))


export default function Result() {
  const { myData } = useContext(MyContext)

  const styles = useStyles()
  const entries = Object.entries(myData).filter(e => e[0] !== 'files');
  const { files } = myData;

  const onSubmit = async () => {
      const formData = new FormData()
      if(files){
        files.forEach(file => {
          formData.append('files', file, file.name)
        });
      }
      entries.forEach(entry => {
        formData.append(entry[0], entry[1])
      })

      const res = await fetch('http://localhost:4000/', {
        method: 'POST',
        body: formData,
      })

      if(res.status === 200){
        Swal.fire('Great job!', 'You have passed the challenge!', 'success')
      }
    }

    const onSubmitTest = () => (
      Swal.fire('Great job!', 'You have passed the challenge!', 'success')
    )
  return (
    <MainContainer>
      <Typography variant='h2' element='h5'>
          Form Values
      </Typography>
      <TableContainer className={styles.root} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align='right'>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { entries.map(e => (
              <TableRow key={e[0]}>
              <TableCell>{e[0]}</TableCell>
              <TableCell align='right'>{e[1].toString()}</TableCell>
              </TableRow>
            )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      { files && (
        <>
        <Typography>
          files
        </Typography>
        <List>
          {files.map((f, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <InsertDriveFile />
              </ListItemIcon>
              <ListItemText primary={f.name} secondary={f.size} />
            </ListItem>
          ))}
        </List>
        </>
      )}
      <PrimaryButton onClick={onSubmitTest}>Submit</PrimaryButton>
      <PrimaryButton><Link to='/'>Start Over</Link></PrimaryButton>
    </MainContainer>
  )
}
