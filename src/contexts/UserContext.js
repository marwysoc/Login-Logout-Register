import React from 'react'
import PropTypes from 'prop-types'

const errorProviderNotFound = () => {
  console.error('UserContext.Provider not found!')
}

const initialContextState = {
  isUserLoggedIn: false,
  userEmail: '',
  setIsUserLoggedIn: errorProviderNotFound,
  setUserEmail: errorProviderNotFound,
  clearUser: errorProviderNotFound
}

export const UserContext = React.createContext(initialContextState)

export const useAuthUser = () => {
  const authUserContextValue = React.useContext(UserContext)
  return authUserContextValue
}

export const UserContextProvider = (props) => {
  const { children } = props

  // user/auth state
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(initialContextState.isUserLoggedIn)
  const [userEmail, setUserEmail] = React.useState(initialContextState.userEmail)

  const clearUser = React.useCallback(() => {
    setIsUserLoggedIn(false)
    setUserEmail('')
  }, [])

  const setUser = React.useCallback((user) => {
    setIsUserLoggedIn(() => true)
    if (user.email !== undefined) setUserEmail(user.email)
  }, [])

  return (
    <UserContext.Provider
      value={{
        isUserLoggedIn,
        userEmail,
        clearUser,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

UserContextProvider.propTypes = {
  children: PropTypes.node
}

export default UserContextProvider