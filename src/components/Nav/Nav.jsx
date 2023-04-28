import Logo from '../../components/Logo/Logo'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <Link className='link' to={'/'}><Logo /></Link>
      <div className="nav-wrapper">
      <Link className='link' to={'/'}>Home</Link>
      <Link className='link' to={'/about-us'}>About Us</Link>
      <Link className='link' to={'/plan'}>Create Your Plan</Link>
      </div>
    </nav>
  )
}

export default Nav
