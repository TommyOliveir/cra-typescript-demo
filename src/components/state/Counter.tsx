import React, { useReducer } from 'react'

type CounterState = {
  count: number
}

type UpdateAction = {
  type: 'INCREMENT' | 'DECREMENT' 
  payload: number // payload is required
}

type ResetAction = {
  type:  'RESET'
  payload?: number // payload is optional for 'RESET' action
}

type CounterAction = UpdateAction | ResetAction

const initialState: CounterState = { count: 0 } // specify the type

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload }
    case 'DECREMENT':
      return { count: state.count - action.payload }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <p className="note">
        useReducer hook - Types props and descriminated unions
      </p>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}

export default Counter
