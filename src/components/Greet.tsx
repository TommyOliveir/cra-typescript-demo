type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  // destructure messageCount from props with default value
  const { messageCount = 0 } = props
  return (
    <div>
      <p className="note">
        Basic Types props - sting, number, boolean and optional props
      </p>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : 'Welcome Guest'}
      </h2>
      <hr></hr>
    </div>
  )
}
