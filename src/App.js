import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { PageLogin, PageRegister, PageResetPassword, PageUserAuth } from './pages'

import { signIn, signUp, getUserData, checkIfUserIsLoggedIn, sendPasswordResetEmail, logOut } from './auth'

import { useAuthUser } from './contexts/UserContext'

function App() {
  // data from UserContext
  const {
    isUserLoggedIn,
    setUser,
    userEmail,
    clearUser
  } = useAuthUser()

  const handleAsyncAction = React.useCallback(async (asyncAction) => {
    console.log('Loading...')
    try {
      await asyncAction()
    } catch (error) {
      console.log(error.data.error.message)
    } finally {
      console.log('Finally')
    }
  }, [])

  const getUserDataFromApi = React.useCallback(async () => {
    const user = await getUserData()

    setUser({
      email: user.email,
    })
  }, [setUser])

  const onClickLogin = React.useCallback(async (email, password) => {
    handleAsyncAction(async () => {
      await signIn(email, password)
      await Promise.all([
        getUserDataFromApi()
      ])
    })
  }, [handleAsyncAction, getUserDataFromApi])

  const onClickRegister = React.useCallback(async (email, password) => {
    handleAsyncAction(async () => {
      await signUp(email, password)
      await Promise.all([
        getUserDataFromApi()
      ])
    })
  }, [handleAsyncAction, getUserDataFromApi])

  const onClickResetPassword = React.useCallback(async (email) => {
    handleAsyncAction(async () => {
      await sendPasswordResetEmail(email)
      await Promise.all([
        getUserDataFromApi()
      ])
    })
  }, [handleAsyncAction, getUserDataFromApi])

  const onClickLogout = React.useCallback(async () => {
    handleAsyncAction(async () => {
      await logOut()
      await Promise.all([
        clearUser()
      ])
    })
  }, [handleAsyncAction, clearUser])

  React.useEffect(() => {
    handleAsyncAction(async () => {
      const userIsLoggedIn = await checkIfUserIsLoggedIn()
      if (userIsLoggedIn) {
        await Promise.all([
          getUserDataFromApi()
        ])
      }
    })
    // mount only
  }, [getUserDataFromApi, handleAsyncAction])

  return (
    <div>
      {
        !isUserLoggedIn ?
          <Routes>
            <Route
              path={'*'}
              element={
                <PageLogin
                  onClickLogin={onClickLogin}
                />
              }
            />
            <Route
              path={'/register'}
              element={
                <PageRegister
                  onClickRegister={onClickRegister}
                />
              }
            />
            <Route
              path={'/reset-password'}
              element={
                <PageResetPassword
                  onClickResetPassword={onClickResetPassword}
                />
              }
            />
          </Routes>
          :
          <PageUserAuth
            userEmail={userEmail}
            onClickLogout={onClickLogout}
          />
      }
    </div >
  );
}

export default App;
