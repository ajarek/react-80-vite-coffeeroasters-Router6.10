import React from 'react'
import './InfoUs.css'
const InfoUs = () => {
  return (
    <div className='info-us'>
      <h1>Why choose us?</h1>
      <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
      <div className="info-us-wrapper">
        <div className="info-us-card">
          <img src="src/assets/home/desktop/icon-coffee-bean.svg" alt="icon" />
          <div className="title">Best quality</div>
          <div className="desc">Discover an endless variety of the world’s best artisan coffee from each of our roasters</div>
        </div>
        <div className="info-us-card">
          <img src="src/assets/home/desktop/icon-gift.svg" alt="icon" />
          <div className="title">Exclusive benefits</div>
          <div className="desc">Special offers and swag when you subscribe, including 30% off your first shipment</div>
        </div>
        <div className="info-us-card">
          <img src="src/assets/home/desktop/icon-truck.svg" alt="icon" />
          <div className="title">Free shipping</div>
          <div className="desc">We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</div>
        </div>
      </div>
    </div>
  )
}

export default InfoUs