import { useState } from 'react'

type AutUser = {
  name: string
  email: string
}

export const User = () => {
  // const [user, setUser] = useState<AutUser | null>(null)
  const [user, setUser] = useState<AutUser>({} as AutUser)
  const handleLogin = () => {
    setUser({
      name: 'tommy',
      email: 'l@gamil.com',
    })
  }

  // const handleLogout = () => {
  //   setUser(null)
  // }
  return (
    <div>
      <p className="note">
        useState future value - usestate value either null or authuser/ type assertion using as keyword
      </p>
      LoggedIn
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      <div>User name is {user.email}</div>
      {/* <div>User name is {user?.name}</div>
      <div>User name is {user?.email}</div> */}
      <hr />
    </div>
  )
}
