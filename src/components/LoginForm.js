import React, { useState, useEffect, createContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import AuthMessage from './AuthMessage'

export const AuthContext = createContext()

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username || !password) {
      setStatus({ type: 'error', message: 'username and password required' })
      return
    }
    if (password.length < 8) {
      setStatus({ type: 'error', message: 'password must be at least 8 characters' })
      return
    }
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await res.json()
      const user = users.find(u => u.username === username && u.email === password)
      if (user) {
        setStatus({ type: 'success', message: 'login successful' })
        setTimeout(() => {
          navigate('/courses')
        }, 2000)
      } else {
        setStatus({ type: 'error', message: 'invalid credentials' })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'login failed' })
    }
  }

  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      <div>
        <Header />
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
          <h2>login</h2>
          <input 
            type="text" 
            placeholder="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            style={{ margin: '10px', padding: '5px' }}
          />
          <br />
          <input 
            type="password" 
            placeholder="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: '10px', padding: '5px' }}
          />
          <br />
          <button type="submit" style={{ padding: '5px 10px' }}>login</button>
          <br />
          <Link to="/forgot" style={{ fontSize: '12px' }}>forgot password?</Link>
        </form>
        <AuthMessage />
        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default LoginForm
