import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../components/context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalAmount } = useContext(StoreContext)

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}฿</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]}฿</p>
                    <img onClick={() => removeFromCart(item._id)} src={assets.remove_icon_red} alt='' />
                  </div>
                  <hr />
                </div>
              )
            }
          })
        }
      </div>
      <div className="cart-bottom">
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
              <p>{10}฿</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Total</p>
              <b>{getTotalAmount() + 10}฿</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>Checkout</button> 
        </div>
        <div className="cart-code">
          <div>
            <p>Enter code</p>
            <div className="cart-code-input">
              <input type="text" placeholder='Enter code' />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart