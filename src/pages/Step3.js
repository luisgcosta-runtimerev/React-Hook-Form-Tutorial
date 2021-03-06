import { Typography } from '@mui/material'
import React, {useContext} from 'react'
import MainContainer from '../components/MainContainer'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../DataContext'
import { useForm } from 'react-hook-form'
import PrimaryButton from '../components/PrimaryButton'
import FileInput from '../components/FileInput'

export default function Step3() {
  const navigate = useNavigate();
  const context = useContext(MyContext)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: context.myData.files,
    }
  })

  const onSubmit = (data) => {
    navigate('/result')
    context.setValues(data)
  }

  return (
    <MainContainer>
      <Typography component="h2" variant='h5'>
        Step3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  )
}
