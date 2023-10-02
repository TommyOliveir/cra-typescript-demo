type ContainerProps = {
  styles: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
  return (
    <>
      <p className="note">style/CSS Types props</p>
      <div style={props.styles}>Container</div>
      <hr />
    </>
  )
}
