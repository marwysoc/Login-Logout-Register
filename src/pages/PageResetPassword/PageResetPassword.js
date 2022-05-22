import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useForm, FormProvider } from 'react-hook-form'

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
