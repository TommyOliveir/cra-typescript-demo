// Note: see Person.types.ts for extracting types tips

import { PersonProps } from './Person.types'

export const Person = (props: PersonProps) => {
  return (
    <div>
      <p className="note">Object Types props and import, export and reusability Tips</p>
      <h2>
        Person -{props.name.first} {props.name.last}
      </h2>
      <hr></hr>
    </div>
  )
}
