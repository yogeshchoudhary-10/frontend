import React, { useContext } from 'react'
import '../CartItems/CartItems.css'
import { ShopContext } from '../../ShopContext/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png'

export const CartItems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
           {all_product.map((e)=>{
            /* if quantity>0 then only exist */
            if(cartItems[e.id]>0){
               return(<div> 
                        <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className="carticon-product-icon" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img src={remove_icon} onClick={()=>{removeFromCart(e.id);}} className='cartitems-remove-icon' alt=""/>
                        </div>
                        <hr />
                    </div>)
            }
            return null;
           })}
           <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Free</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If You Have A Promo Code Enter It Here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder="promo code" />
                
                    <button>Submit</button>
                </div>
            </div>
           </div>
    </div>
  )
}
