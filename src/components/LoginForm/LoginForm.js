import React from 'react'
import PropTypes from 'prop-types'

import { Box, Button, Typography } from '@mui/material'

import { Input } from '../UI'

import isEmail from 'validator/lib/isEmail'
import { useFormContext } from 'react-hook-form'

import classes from './styles.module.css'

import {
  EMAIL_VALIDATION_ERROR,
  PASSWORD_VALIDATION_ERROR,
  PASSWORD_REQUIRED_ERROR,
} from '../../consts'

export const LoginForm = (props) => {
  const {
    sx,
    onSubmit,
    ...otherProps
  } = props

  const methods = useFormContext()

  const { register, formState: { errors } } = methods

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
        Log in 👋
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
        <Button
          variant={'contained'}
          color={'success'}
          type={'submit'}
          sx={{
            width: '100%',
            marginBottom: '10px',
          }}
        >
          LOGIN
        </Button>
      </form>
    </Box>
  )
}

LoginForm.propTypes = {
  sx: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm
