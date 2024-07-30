import React from 'react'
import logo from '../Images/logo.png'

function RestaurantCard() {
  return (
    <div className='res-card'>
        <img className='res-logo' src={logo} alt='Res'/>
        <h3>Meghana Foods</h3>
        <h4>Biryani, North Indian, Asian</h4>
        <h4>4.4 stars</h4>
        <h4>38 minutes</h4>
    </div>
  )
}

export default RestaurantCard