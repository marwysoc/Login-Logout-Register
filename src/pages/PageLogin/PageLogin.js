import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { FullPageLayout } from '../../components/Layouts'
import { LoginForm } from '../../components'

export const PageLogin = (props) => {
  const {
    sx,
    ...otherProps
  } = props

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
        <LoginForm />
      </FullPageLayout>
    </Box>
  )
}

PageLogin.propTypes = {
  sx: PropTypes.object
}

export default PageLogin
