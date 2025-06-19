import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../components/context/StoreContext'

const PlaceOrder = () => {

  const { getTotalAmount } = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Street Address'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone Number'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>{getTotalAmount()}฿</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>{getTotalAmount() === 0 ? 0 : 10}฿</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Total</p>
              <b>{getTotalAmount() === 0 ? 0 : getTotalAmount() + 10}฿</b>
            </div>
          </div>
          <button>Payment</button>  
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder