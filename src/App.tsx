import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const PersonName = {
    first: 'Tommy',
    last: 'Larida'
  }

  const nameList = [
    {
      first: "Tommy",
      last: "Larida",
    },
    {
      first: "Agi",
      last: "Larida",
    },
    {
      first: "Spiderman",
      last: "Larida",
    },
  ];
  return (
    <>
      <Greet name="Tommy" messageCount={10} isLoggedIn={false} />
      <Person name={PersonName} />
      <PersonList names={nameList}/>
    </>
  );
}

export default App;
