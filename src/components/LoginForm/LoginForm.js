import React from 'react'
import PropTypes from 'prop-types'

import { Box, TextField, Button, Typography } from '@mui/material'

import classes from './styles.module.css'

export const LoginForm = (props) => {
  const {
    sx,
    ...otherProps
  } = props

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
      <Typography variant="h5" gutterBottom component="div">
        Login
      </Typography>
      <form
        className={`${classes.root}${props.className ? ` ${props.className}` : ''}`}
      >
        <TextField
          id="login-e-mail"
          label="E-mail"
          variant="outlined"
          sx={{
            width: '100%',
            marginBottom: '10px'
          }}
        />
        <TextField
          id="login-password"
          label="Password"
          variant="outlined"
          type="password"
          sx={{
            width: '100%',
            marginBottom: '10px'
          }}
        />
        <Button
          variant="contained"
          color="success"
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
  sx: PropTypes.object
}

export default LoginForm
