type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
//you can pass handlechange by props also
export const Input = ({value, handleChange}: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }
  return (
    <div>
      <p className="note">onChange Event Types props and DESTRUCTURING</p>
      <input type="text" value={value} onChange={handleChange} />
     <hr />
    </div>
  )
}
