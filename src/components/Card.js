import React from 'react'

const Card = (props) => {
  return (
    <div className={`${props.className} border shadow-md rounded-xl bg-gray-50`}>
        {props.children}
    </div>
  )
}

export default Card