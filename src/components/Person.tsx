type PersonProps = {
    name: {
        first: string
        last: string
    }
}
export const Person = (props : PersonProps) => {
  return (
    <div>
      <h2>Object props</h2>
      {props.name.first} {props.name.last}
      <hr></hr>
    </div>
  );
}
