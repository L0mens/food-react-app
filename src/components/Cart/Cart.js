import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = (props) => {
    const cartItems = <ul className="cart-items">{[{key: 'c1', id: 'c1', name: 'Sushi', amount  : 2, price:1.99},]
    .map((item) => <li key={item.key}>{item.name}</li>)}</ul>;
    return (
        <Modal className="Cart" onClose={props.onCloseCart}>
            {cartItems}
            <div className={classes.totel}>
                <span className="">Total Amount </span>
                <span className="">12.58</span>
            </div>
            <div className={classes.actions}>
                <button className="btn button--alt" onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}  

export default Cart;