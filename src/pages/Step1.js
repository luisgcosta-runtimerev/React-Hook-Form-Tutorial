import { Typography} from '@mui/material';
import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import MainContainer from '../components/MainContainer'
import Form from '../components/Form';
import Input from '../components/Input';
import PrimaryButton from '../components/PrimaryButton';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { MyContext} from '../DataContext';


const schema = yup.object().shape({
    firstName: yup.string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required('First name is a required field'),
    lastName: yup.string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required('Last name is a required field'),
})

export default function Step1() {
    const context = useContext(MyContext)
    console.log(context)
    const { register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
        mode:'onBlur',
        defaultValues: {
            firstName: context?.myData.firstName,
            lastName: context?.myData.lastName,
        }
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        navigate('/step2')
        context.setValues(data)
    };
    
    const firstName = register('firstName');
    const lastName = register('lastName')
  return (
      <MainContainer> 
          <Typography component="h2" variant='h5'>
                Step 1
          </Typography>
          
          <Form onSubmit={handleSubmit(onSubmit)}>
              {/* !! -> cast a value to boolean */}
              <Input inputRef={firstName.ref} onChange={firstName.onChange} onBlur={firstName.onBlur} name="firstName" type="text" label="First Name" error={!!errors.firstName} helperText={errors?.firstName?.message}/>
              <Input inputRef={lastName.ref} onChange={lastName.onChange} onBlur={lastName.onBlur} name="lastName" type="text" label="Last Name" error={!!errors.lastName} helperText={errors?.lastName?.message}/>
              <PrimaryButton>Next</PrimaryButton>
          </Form>
      </MainContainer>
  )
}
