import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { FullPageLayout } from '../../components/Layouts'
import { ResetPasswordForm } from '../../components'

export const PageResetPassword = (props) => {
  const {
    sx,
    onClickResetPassword,
    ...otherProps
  } = props

  const methods = useForm()
  const { handleSubmit } = methods

  const navigate = useNavigate()
  const onClickBackToLogin = React.useCallback(() => navigate('/login'), [navigate])

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
          <ResetPasswordForm
            onSubmit={handleSubmit((data) => props.onClickResetPassword(data.email))}
            onClickBackToLogin={onClickBackToLogin}
          />
        </FormProvider>
      </FullPageLayout>
    </Box>
  )
}

PageResetPassword.propTypes = {
  sx: PropTypes.object
}

export default PageResetPassword
