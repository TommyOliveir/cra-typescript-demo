import React from 'react'
import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'
import { LoggedIn } from './components/state/LoggedIn'
import { User } from './components/state/User'
import Counter from './components/state/Counter'
import { Box } from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { UserContextProvider } from './components/context/UserContext'
import { User2 } from './components/context/User2'

function App() {
  const PersonName = {
    first: 'Tommy',
    last: 'Larida',
  }

  const nameList = [
    {
      first: 'Tommy',
      last: 'Larida',
    },
    {
      first: 'Agi',
      last: 'Larida',
    },
    {
      first: 'Spiderman',
      last: 'Larida',
    },
  ]
  return (
    <>
      <Greet name="Tommy" messageCount={10} isLoggedIn={true} />
      <Person name={PersonName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>placeholder</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonarado Dicaprio!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log('btn click', event, id)
        }}
      ></Button>
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <LoggedIn />
      <User />
      <Counter />

      {/* bound ThemeContextProvider and Box */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User2 />
      </UserContextProvider>
    </>
  )
}

export default App
