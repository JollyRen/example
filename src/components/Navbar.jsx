import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <img src="https://internationalhockeywiki.com/ihw/images/5/5a/Misto-Logo.png" />
      <div className="navbar">
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/Cart'}>Cart</Link>
          </li>
          <li>
            <Link to={'/Login'}>Login</Link>
          </li>
          <li>
            <Link to={'/Signup'}>Signup</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
