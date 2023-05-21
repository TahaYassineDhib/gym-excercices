import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>GY<span>M</span></h1>
        <ul className='links' >
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>BMI CALCULATOR</li>
            <li>GYM EXCERCICES</li>
            
        </ul>
        <ul className="icons">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-instagram"></i>
        </ul>
    </div>
    
  )
}

export default Navbar