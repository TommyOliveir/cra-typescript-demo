type HeadingProps = {
  children: string
}

export const Heading = (props: HeadingProps) => {
  return (
    <>
      <p className="note">Children Types props</p>
      <h2>{props.children}</h2>
      <hr />
    </>
  )
}
