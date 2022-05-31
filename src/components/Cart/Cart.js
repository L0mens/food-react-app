import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from './CartItem'

import { useContext } from "react";

import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = () => {

  }
  const cartItemRemoveHandler = () => {
      
}
  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal className="Cart" onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.totel}>
        <span className="">Total Amount </span>
        <span className="">{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className="btn button--alt" onClick={props.onCloseCart}>
          Close
        </button>
        { hasItems && <button className={classes.button}>Order</button> }
      </div>
    </Modal>
  );
};

export default Cart;
