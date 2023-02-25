import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {logo} from '../constants'
import { removeItem } from '../helpers/persistance-storage'
import { logoutUser } from '../slice/auth'

const Navbar = () => {

  const {loggedIn, user} = useSelector(state => state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
     dispatch(logoutUser());
     removeItem('token');
     navigate('/login')
  }

  return (
     <nav className='navbar navbar-expand-lg bg-body-tertiary py-3'>
       <div className="container">
         <Link to={'/'} className="logo">
           <img src={logo} alt="Logo" />
         </Link>

         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>

            <div className='d-flex'>
              {loggedIn ? (
                <>
                   <p className='me-3 py-2 m-0 text-dark text-decoration-none'>{user.username}</p>
                   <button type="button" class="btn btn-outline-info mx-2">
                     <Link to={'/create-article'} className="text-decoration-none" >
                        Create
                     </Link>
                   </button>
                   <button className='btn btn-outline-danger' onClick={logoutHandler}>Logout</button>
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
            </div>
         </div>
       </div>
     </nav>
  )
}

export default Navbar