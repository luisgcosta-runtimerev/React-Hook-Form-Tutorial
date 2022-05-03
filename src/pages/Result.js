import { TableCell, TableContainer, Typography, Table, TableHead, TableRow, Paper, TableBody } from '@mui/material'
import React, { useContext } from 'react'
import MainContainer from '../components/MainContainer'
import { MyContext } from '../DataContext'

export default function Result() {
  const { myData } = useContext(MyContext)
  console.log(myData)

  const entries = Object.entries(myData).filter(e => e[0] !== 'files');
  const { files } = myData;


  return (
    <MainContainer>
      <Typography variant='h2' element='h5'>
          Form Values
      </Typography>
      <TableContainer component={Paper}>
        <Table>
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
    </MainContainer>
  )
}
