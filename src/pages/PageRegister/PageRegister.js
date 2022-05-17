import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useForm, FormProvider } from 'react-hook-form'

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
