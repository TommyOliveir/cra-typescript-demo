type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

//<T extends {}> - covers everything
//<T extends string | number> - covers string or number

export const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      <p className="note">generics</p>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}
          </div>
        )
      })}
      <hr />
    </div>
  )
}
