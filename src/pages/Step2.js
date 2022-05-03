import React, {useContext} from 'react'
import { FormControlLabel, Typography} from '@mui/material';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import MainContainer from '../components/MainContainer'
import Form from '../components/Form';
import Input from '../components/Input';
import PrimaryButton from '../components/PrimaryButton';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { MyContext} from '../DataContext';
import Checkbox from '@mui/material/Checkbox';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const normalizePhoneNumber = (number) => {
  console.log(number)
  const phoneNumber = parsePhoneNumberFromString(number)
  if(!phoneNumber){
    return number
  }
  return phoneNumber.formatInternational()
}

const schema = yup.object().shape({
    email: yup.string()
    .email("Email should have correct format")
    .required('Email is a required field'),
    phoneNumber: yup.string()
})

export default function Step2() {
    const context = useContext(MyContext)
    console.log(context)
    const { register, watch, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
        mode:'onBlur',
        defaultValues: {
            email: context?.myData.email,
            hasPhone: context?.myData.hasPhone,
            phoneNumber: context?.myData.phoneNumber,
        }
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        navigate('/step3')
        context.setValues(data)
    };
    
    const email = register('email');
    const hasPhone = register('hasPhone')
    const phoneNumber = register('phoneNumber')
    const checkboxPhone = watch('hasPhone', false)

  return (
      <MainContainer> 
          <Typography component="h2" variant='h5'>
                Step 2
          </Typography>
          
          <Form onSubmit={handleSubmit(onSubmit)}>
              {/* !! -> cast a value to boolean */}
              <Input inputRef={email.ref} onChange={email.onChange} onBlur={email.onBlur} name="email" type="text" label="Email*" error={!!errors.email} helperText={errors?.email?.message}/>
              
              <FormControlLabel label="Do you have a phone number?" control={<Checkbox inputProps={{ 'aria-label': 'controlled' }} checked={checkboxPhone} name="hasPhone" color='primary' inputRef={hasPhone.ref} onChange={hasPhone.onChange} onBlur={hasPhone.onBlur}/>}/>
              {checkboxPhone &&
              <Input inputRef={phoneNumber.ref} onChange={e => {
                e.target.value = normalizePhoneNumber(e.target.value)
                phoneNumber.onChange(e)
              }} onBlur={phoneNumber.onBlur} name="phoneNumber" type="tel" label="Phone number" error={!!errors.phoneNumber} helperText={errors?.phoneNumber?.message}/>
              }
              
              <PrimaryButton>Next</PrimaryButton>
          </Form>
      </MainContainer>
  )
}
