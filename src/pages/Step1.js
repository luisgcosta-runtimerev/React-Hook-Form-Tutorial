import { Typography, Container, Input, Button } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import MainContainer from '../components/MainContainer'

export default function Step1() {
    const { register, handleSubmit, errors} = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => navigate('/step2');

  return (
      <MainContainer>
          <Typography variant='h2'>
                Step 1
          </Typography>
          <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Input {...register('firstName')} name="firstName" type="text" placeholder="First Name"/>
              <Input {...register('lastName')} name="lastName" type="text" placeholder="Last Name"/>
              <Button type='submit'>Next</Button>
          </form>
      </MainContainer>
  )
}
