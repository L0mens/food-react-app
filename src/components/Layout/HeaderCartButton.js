import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'

import { useContext, useEffect, useState } from 'react'

import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)
    const [btnIsBump, setBtnIsBump] = useState(false)
    const numberOfCartItems = cartCtx.items.reduce((acc, item) => { return acc + item.amount }, 0);

    const btnClasses = `${classes.button} ${btnIsBump ? classes.bump : ''}`;

    const { items } = cartCtx;

    useEffect(() => { 
        if(items.length === 0)
            return;
        setBtnIsBump(true);
        const timer = setTimeout(() => {
            setBtnIsBump(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
    )
};

export default HeaderCartButton;