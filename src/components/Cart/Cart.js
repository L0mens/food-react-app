import classes from 'Cart.module.css'

const Cart = (props) => {
    const cartItems = <ul className="cart-items">{[{id: 'c1', name: 'Sushi', amount  : 2, price:1.99},]
    .map((item) => <li>{item.name}</li>)}</ul>;
    return (
        <div className="Cart">
            {cartItems}
            <div className={classes.totel}>
                <span className="">Total Amount</span>
                <span className="">12.58</span>
            </div>
            <div className={classes.actions}>
                <button className="btn button--alt">Close</button>
                <button className={classes.button}>Close</button>
            </div>
        </div>
    )
}  

export default Cart;