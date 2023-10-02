type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {
  return (
    <>
      <p className="note">onclick Event Types props</p>
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
      <hr />
    </>
  )
}
