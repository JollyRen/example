import { useState } from 'react'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleLogin = async () => {
    setSubmitted(true)
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      const result = await response.json()
      if (response.ok) {
        setToken(result.token)
        localStorage('token', result.token)
      } else {
        console.error(result.error)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="login-container">
      <h2>User Login</h2>
      <p>Please login to your existing account or becoming a new stranger!</p>
      <div className="login-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      {/* Token Authentication */}
      {token && (
        <p>
          <b>INFO:</b> Token Generated
        </p>
      )}
      {!token && submitted && (
        <p>
          <b>ERROR:</b> Login error
        </p>
      )}
    </div>
  )
}
