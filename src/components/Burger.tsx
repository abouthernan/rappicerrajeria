import React, { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5/index.js'

export function Burger() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`burger ${open ? 'active' : ''}`}>
      {open ? (
        <IoClose onClick={() => setOpen(!open)} />
      ) : (
        <IoMenu onClick={() => setOpen(!open)} />
      )}
    </div>
  )
}
