import { useState } from 'react'

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }
  return (
    <div>
      <p className="note">
        useState hook - typescript is intelligent to track usestate props types
        like if you access isLoggedIn.length it will cause an error cause the
        useState(false) value is boolean
      </p>
      LoggedIn
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
      <hr />
    </div>
  )
}
