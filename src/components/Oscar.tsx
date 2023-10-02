type OscarProps = {
  children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
  return (
    <>
      <p className="note">
        React.ReactNode - when passing children as component{' '}
      </p>
      <div>{props.children}</div>
    </>
  )
}
