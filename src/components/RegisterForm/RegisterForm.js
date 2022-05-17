import React from 'react'
import PropTypes from 'prop-types'

import { Box, Button, Typography, Icon } from '@mui/material'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { Input } from '../UI'

import isEmail from 'validator/lib/isEmail'
import { useFormContext } from 'react-hook-form'

import classes from './styles.module.css'

import {
  EMAIL_VALIDATION_ERROR,
  PASSWORD_VALIDATION_ERROR,
  PASSWORD_REQUIRED_ERROR,
  REPEAT_PASSWORD_VALIDATION_ERROR
} from '../../consts'

export const RegisterForm = (props) => {
  const {
    sx,
    onSubmit,
    ...otherProps
  } = props

  const methods = useFormContext()

  const { register, formState: { errors }, watch } = methods
  const password = watch('password')

  const registeredEmailProps = register('email', {
    validate: (email) => isEmail(email) || EMAIL_VALIDATION_ERROR
  })

  const registeredPasswordProps = register('password', {
    required: {
      value: true,
      message: PASSWORD_REQUIRED_ERROR
    },
    minLength: {
      value: 6,
      message: PASSWORD_VALIDATION_ERROR
    }
  })

  const registeredRepeatPasswordProps = register('repeatPassword', {
    required: {
      value: true,
      message: REPEAT_PASSWORD_VALIDATION_ERROR
    },
    minLength: {
      value: 6,
      message: REPEAT_PASSWORD_VALIDATION_ERROR
    },
    validate: (repeatPassword) => repeatPassword === password || REPEAT_PASSWORD_VALIDATION_ERROR
  })

  return (
    <Box
      sx={{
        margin: '10px',
        display: 'block',
        width: '250px',
        ...sx
      }}
      {...otherProps}
    >
      <Typography
        variant="h5"
        gutterBottom
        component="div"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          Register
          <Icon
            sx={{
              marginLeft: '5px'
            }}>
            <PersonAddAltIcon />
          </Icon>
        </Box>
      </Typography>
      <form
        className={`${classes.root}${props.className ? ` ${props.className}` : ''}`}
        onSubmit={props.onSubmit}
      >
        <Input
          label={'E-mail'}
          variant={'outlined'}
          errorMessage={errors.email && errors.email.message}
          {...registeredEmailProps}
          sx={{
            width: '100%',
            marginBottom: '8px'
          }}
        />
        <Input
          label={'Password'}
          variant={'outlined'}
          type={'password'}
          errorMessage={errors.password && errors.password.message}
          {...registeredPasswordProps}
          sx={{
            width: '100%',
            marginBottom: '8px'
          }}
        />
        <Input
          label={'Repeat Password'}
          variant={'outlined'}
          type={'password'}
          errorMessage={errors.repeatPassword && errors.repeatPassword.message}
          {...registeredRepeatPasswordProps}
          sx={{
            width: '100%',
            marginBottom: '8px'
          }}
        />
        <Button
          variant={'contained'}
          color={'primary'}
          type={'submit'}
          sx={{
            width: '100%',
            marginBottom: '10px',
          }}
        >
          REGISTER
        </Button>
      </form>
    </Box>
  )
}

RegisterForm.propTypes = {
  sx: PropTypes.object,
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
}

export default RegisterForm
