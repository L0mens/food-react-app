import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from './CartItem'
import Checkout from "./Checkout";

import { useContext, useState} from "react";
import React from "react"

import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const [isSubimitting, setIsSubmitting] = useState(false)
    const [didSubimitting, setDidSubmitting] = useState(false)

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
      cartCtx.addItems({...item, amount: 1})

  }
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
}
 const orderHandler = () =>{
    setIsCheckout(true)
 }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true)
        await fetch('https://cours-angular-11dba.firebaseio.com/orders.json', {
            method:'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems : cartCtx.items
            })
        })
        setIsSubmitting(false)
        setDidSubmitting(true)
        cartCtx.clearCart();
    }
  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}></CartItem>
      ))}
    </ul>
  );

  const modalActions = <div className={classes.actions}>
      <button className="btn button--alt" onClick={props.onCloseCart}>
          Close
      </button>
      { hasItems && <button className={classes.button} onClick={orderHandler}>Order</button> }
  </div>

    const cartModalContent = <React.Fragment>
        {cartItems}
        <div className={classes.total}>
            <span className="">Total Amount </span>
            <span className="">{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onCloseCart}></Checkout>}
        {!isCheckout && modalActions}
    </React.Fragment>

    const isSubmittingModalContent = <p>Sending order data</p>

    const didSubmitModalContent = <p>Order is OKAY</p>

  return (
    <Modal className="Cart" onClose={props.onCloseCart}>
        {!isSubimitting && !didSubimitting && cartModalContent}
        {isSubimitting && isSubmittingModalContent}
        {!isSubimitting && didSubimitting && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
