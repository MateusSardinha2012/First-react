import React from 'react'
import './Button.css'

function Button(proops) {
  return (
    <div>
        <Button onClick={proops.tarefa} className={proops.className}> {proops.children} </Button>
    </div>
  )
}

export default Button