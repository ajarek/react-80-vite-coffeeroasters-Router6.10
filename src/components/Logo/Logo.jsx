import React from 'react'
import { Link } from 'react-router-dom'

import './Logo.css'
const Logo = ({imageLogo}) => {
  return (
    <div className='logo'>
      <Link to={'/'}>
        <img
          src={imageLogo}
          alt=''
        />
      </Link>
    </div>
  )
}

export default Logo
