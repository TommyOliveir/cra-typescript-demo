import { useRef, useEffect } from 'react'

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <p className="note">Ref - types in Dom Ref</p>
      <input type="text" ref={inputRef} />
      <hr />
    </div>
  )
}
