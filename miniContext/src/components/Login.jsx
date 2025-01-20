import React, {useEffect, useContext, useState} from 'react'
import userContext from '../context/userContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)


    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login Submission</h2>
        <input type='text'
        value={username}
        onClick={(e)=> setUsername(e.target.value)} 
        placeholder='username' />
        <input type='text' 
        value={password}
        onClick={(e)=> setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login