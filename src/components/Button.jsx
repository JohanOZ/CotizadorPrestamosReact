import React from 'react'

function Button(props) {
  return (
    <button
        type='button'
        className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-verde rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-verde'
        onClick={props.fn}
    >{props.operador}</button>
  )
}

export default Button