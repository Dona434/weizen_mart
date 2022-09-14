import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './cart.css';
import Items from './Items';
import { Link} from 'react-router-dom';


const Cart = () => {
  return (
    <>
      <header>
        <div className='continue-shopping'>
            <div className='arrow-icon'>
            <ArrowBackIcon/>
            </div>
            <h3>Continue Shopping</h3>
            
        </div>
        <div className='cart-icon'>
            <ShoppingCartOutlinedIcon/>
            <p>7</p>
        </div>
      </header>
      <section className='main-cart-section'>
        <h1>shopping Cart</h1>
        <p className='total-items'>you have <span className='total-items-count'>7</span> items in your shopping cart</p>
      <div className='cart-items'>
        <div className='cart-items-container'>
          <Items/>
        </div>
      </div>
      <div className='cart-total'>
        <h3>Cart Total :<span>25000</span></h3>
        <button>Checkout</button>
      </div>
      </section>
    </>
  )
}

export default Cart
