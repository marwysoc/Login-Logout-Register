import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { FullPageLayout } from '../../components/Layouts'
import { LoginForm } from '../../components'

export const PageLogin = (props) => {
  const {
    sx,
    onClickLogin,
    ...otherProps
  } = props

  const methods = useForm()
  const { handleSubmit } = methods

  const navigate = useNavigate()
  const onClickRegister = React.useCallback(() => navigate('/register'), [navigate])
  const onClickResetPassword = React.useCallback(() => navigate('/reset-password'), [navigate])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx
      }}
      {...otherProps}
    >
      <FullPageLayout>
        <FormProvider
          {...methods}
        >
          <LoginForm
            onSubmit={handleSubmit((data) => props.onClickLogin(data.email, data.password))}
            onClickRegister={onClickRegister}
            onClickResetPassword={onClickResetPassword}
          />
        </FormProvider>
      </FullPageLayout>
    </Box>
  )
}

PageLogin.propTypes = {
  sx: PropTypes.object
}

export default PageLogin
