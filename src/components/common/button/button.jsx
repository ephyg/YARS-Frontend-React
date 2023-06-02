import React from 'react'
import './buttonStyle.scss'
function Button({className,text}) {
  return (
      <button className={["btn",className].join(" ")}>{text}</button>
  )
}

export default Button