import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { FullPageLayout } from '../../components/Layouts'
import { RegisterForm } from '../../components'

export const PageRegister = (props) => {
  const {
    sx,
    onClickRegister,
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
          <RegisterForm
            onSubmit={handleSubmit((data) => props.onClickRegister(data.email, data.password))}
            onClickBackToLogin={onClickBackToLogin}
          />
        </FormProvider>
      </FullPageLayout>
    </Box>
  )
}

PageRegister.propTypes = {
  sx: PropTypes.object
}

export default PageRegister
