import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

import { useContext } from 'react'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {

    const cartCtx = useContext(CartContext)
    
    const onAddToCartHandler = (amount) => {
        cartCtx.addItems({id : props.id, amount : amount, name : props.name, price : props.price})
    }

    const price = `$${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.title} - {props.price}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <MealItemForm id={props.id} onAddToCart={onAddToCartHandler}/>

        </li>
    )
}

export default MealItem;