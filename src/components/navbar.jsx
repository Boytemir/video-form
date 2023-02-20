import { Link } from 'react-router-dom'
import {logo} from '../constants'

const Navbar = () => {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center p-3 mb-4 border-bottom container pt=3">
      <Link to={'/'} className="logo">
        <img src={logo} alt="Logo" />
      </Link>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to={'/login'} class="me-3 py-2 text-dark text-decoration-none" >
            Login
        </Link>
        <Link to={'/register'} class="me-3 py-2 text-dark text-decoration-none" >
            Register
        </Link>
      </nav>
    </div>
  )
}

export default Navbar