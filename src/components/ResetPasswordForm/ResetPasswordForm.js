import React from 'react'
import PropTypes from 'prop-types'

import { Box, Button, Typography, Icon } from '@mui/material'

import LockResetIcon from '@mui/icons-material/LockReset';

import { Input } from '../UI'

import isEmail from 'validator/lib/isEmail'
import { useFormContext } from 'react-hook-form'

import {
  EMAIL_VALIDATION_ERROR
} from '../../consts'

import classes from './styles.module.css'

export const ResetPasswordForm = (props) => {
  const {
    sx,
    onSubmit,
    onClickBackToLogin,
    ...otherProps
  } = props

  const methods = useFormContext()

  const { register, formState: { errors } } = methods

  const registeredEmailProps = register('email', {
    validate: (email) => isEmail(email) || EMAIL_VALIDATION_ERROR
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
          Reset Password
          <Icon
            sx={{
              marginLeft: '5px'
            }}>
            <LockResetIcon />
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
          <Button
            variant={'contained'}
            color={'secondary'}
            type={'submit'}
            sx={{
              width: '100%',
              marginBottom: '10px',
            }}
          >
            RESET PASSWORD
          </Button>
          <Button
            variant={'contained'}
            color={'success'}
            onClick={props.onClickBackToLogin}
            sx={{
              width: '100%',
              marginBottom: '10px',
            }}
          >
            BACK TO LOGIN
          </Button>
        </form>
    </Box>
  )
}

ResetPasswordForm.propTypes = {
  sx: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired
}

export default ResetPasswordForm
