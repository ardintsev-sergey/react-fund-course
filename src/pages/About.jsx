import React, { useRef, useState } from 'react'
import { useHover } from '../components/hooks/useHover'
import { useInput } from '../components/hooks/useInput'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'

const About = () => {  
  const username = useInput('')
  const password = useInput('')

  const ref = useRef()
  const isHovering = useHover(ref)

  return (
    <div>
      <h1>
          Пробное приложение
      </h1>
      
      <MyInput {...username} type="text" placeholder='Username'/>
      <MyInput {...password} type="password" placeholder='Password'/>
      <button ref={ref} 
        onClick={() => console.log(username.value, password.value)} 
        style={{background: isHovering ? 'teal' : 'transparent', padding: '5px 15px', fontSize: '14px'}}
        >
          Click
      </button>
    </div>    
  )
}

export default About