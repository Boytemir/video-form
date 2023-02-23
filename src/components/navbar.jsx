import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {logo} from '../constants'

const Navbar = () => {

  const {loggedIn, user} = useSelector(state => state.auth)

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 mb-4 border-bottom container pt=3">
      <Link to={'/'} className="logo">
        <img src={logo} alt="Logo" />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
             <p className='me-3 py-2 m-0 text-dark text-decoration-none'>{user.username}</p>
             <button className='btn btn-outline-danger'>Logout</button>
          </>
        ) : (
          <>
             <Link to={'/login'} className="me-3 py-2 text-dark text-decoration-none" >
               Login
             </Link>
             <Link to={'/register'} className="me-3 py-2 text-dark text-decoration-none" >
                Register
             </Link>
          </>
        )}
      </nav>
    </div>
  )
}

export default Navbar