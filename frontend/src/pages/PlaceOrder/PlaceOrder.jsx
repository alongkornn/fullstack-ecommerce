import React from 'react'
import "./PlaceOrder.css"

const PlaceOrder = () => {
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <h2>Delivery Address</h2>
        <div className="place-order-left-input">
          <input type="text" placeholder='Enter your name' />
        </div>
      </div>
      <div className="place-order-right">
        <h2>Payment Method</h2>
        <div className="place-order-right-input">
          <input type="text" placeholder='Enter your name' />
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder