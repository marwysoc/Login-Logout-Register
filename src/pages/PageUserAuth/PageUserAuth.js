import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography, Button } from '@mui/material'
import { FullPageLayout } from '../../components/Layouts'

export const PageUserAuth = (props) => {
  const {
    sx,
    userEmail,
    onClickLogout,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <FullPageLayout>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
          >
            Welcome {props.userEmail}!
          </Typography>
          <Button
            variant={'contained'}
            color={'warning'}
            onClick={props.onClickLogout}
            sx={{
              width: '100%',
              marginBottom: '10px',
            }}
          >
            Logout
          </Button>
        </Box>
      </FullPageLayout>
    </Box>
  )
}

PageUserAuth.defaultProps = {
  userEmail: "User Email"
}

PageUserAuth.propTypes = {
  sx: PropTypes.object,
  userEmail: PropTypes.string,
  onClickLogout: PropTypes.func.isRequired
}

export default PageUserAuth
