export type ProfileProps = {
  name: string
}

export const Profile = ({ name }: ProfileProps) => {
  return (
    <div>
      <p className="note">Passing component as props</p>Private Profile
      component. Name is {name}
      <hr />
    </div>
  )
}
