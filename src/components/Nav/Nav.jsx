import Logo from '../../components/Logo/Logo'
import imageLogo1 from '../../assets/shared/desktop/logo.svg'
import imageLogo2 from '../../assets/shared/desktop/footer-logo.svg'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = ({display,color,background,lol=true}) => {
  return (
    <nav className='nav' style={{background:background,color:color}}>
      <Link className='link' to={'/'}><Logo imageLogo={lol?imageLogo1:imageLogo2} /></Link>
      <div className="nav-wrapper">
      <Link style={{color:color}} className='link' to={'/'}>Home</Link>
      <Link style={{color:color}} className='link' to={'/about-us'}>About Us</Link>
      <Link style={{color:color}} className='link' to={'/plan'}>Create Your Plan</Link>
      </div>
      <ul className="wrapper-social" style={{display:display}}>
          <li><a href="#"><img src="src/assets/shared/desktop/icon-facebook.svg" alt="icon facebook" /></a></li>
          <li><a href="#"><img src="src/assets/shared/desktop/icon-instagram.svg" alt="icon-instagram" /></a></li>
          <li><a href="#"><img src="src/assets/shared/desktop/icon-twitter.svg" alt="icon twitter" /></a></li>
      </ul>
    </nav>
  )
}

export default Nav
