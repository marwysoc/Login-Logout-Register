import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useForm, FormProvider } from 'react-hook-form'

import { FullPageLayout } from '../../components/Layouts'
import { LoginForm } from '../../components'

export const PageLogin = (props) => {
  const {
    sx,
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
          <LoginForm
            // onSubmit={handleSubmit((data) => props.onClickLogin(data.email, data.password))}
            onSubmit={handleSubmit((data) => console.log(data.email, data.password))}
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
