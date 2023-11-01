import { useState } from 'react'
import '../style/form.css'

export const Signup = () => {
  // States for registration
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [errormsg, setErrormsg] = useState('')
  const [success, setSuccess] = useState(false)

  // Handling the firstname change
  const handleFirstName = (e) => {
    setFirstname(e.target.value)
    setSubmitted(false)
  }

  // Handling the lastname change
  const handleLastName = (e) => {
    setLastname(e.target.value)
    setSubmitted(false)
  }

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setSubmitted(false)
  }

  // Handling the username change
  const handleUsername = (e) => {
    setUsername(e.target.value)
    setSubmitted(false)
  }

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setSubmitted(false)
  }

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (firstname === '' || email === '' || password === '' || lastname === '' || username === '') {
      setError(true)
    } else {
      setSubmitted(true)
      setError(false)
      setSuccess(false)

      try {
        const response = await fetch('https://fakestoreapi.com/users', {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            username: username,
            password: password,
            name: {
              firstname: firstname,
              lastname: lastname
            }
          })
        })

        const data = await response.json()
        if (response.ok) {
          setSuccess(true)
          setErrormsg('User ' + username + ' successfully registered!!')
        } else {
          setError(true)
          setErrormsg('An error occurred while registering.')
        }
      } catch (error) {
        setError(true)
        setErrormsg('An error occurred while registering.')
      }
    }
  }

  // Showing success message
  const successMessage = () => {
    return <div>{submitted && success && <p>INFO: {errormsg}</p>}</div>
  }

  // Showing error message if error is true
  const errorMessage = () => {
    return <div>{submitted && error && <p>ERROR: {errormsg}</p>}</div>
  }

  return (
    <div>
      <div>
        <h2>User Registration</h2>
      </div>
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form className="form">
        {/* Labels and inputs for form data */}
        <div className="form-row">
          <label htmlFor="firstname">First Name:</label>
          <input
            id="firstname"
            onChange={handleFirstName}
            value={firstname}
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastname">Last Name:</label>
          <input
            id="lastname"
            onChange={handleLastName}
            value={lastname}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">E-mail:</label>
          <input id="email" onChange={handleEmail} value={email} type="text" placeholder="E-mail" />
        </div>
        <div className="form-row">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            onChange={handleUsername}
            value={username}
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            onChange={handlePassword}
            value={password}
            type="password"
            placeholder="Password"
          />
        </div>

        <div>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
