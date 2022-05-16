import React from 'react'
import PropTypes from 'prop-types'

import { Box, TextField } from '@mui/material'

export const Input = React.forwardRef((props, ref) => {
  const {
    sx,
    errorMessage,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <TextField
        ref={ref}
        sx={props.sx}
        error={props.errorMessage ? true : null}
        helperText={props.errorMessage ? props.errorMessage : null}
        {...otherProps}
      />
    </Box>
  )
})

Input.propTypes = {
  sx: PropTypes.object,
  errorMessage: PropTypes.string
}

export default Input
