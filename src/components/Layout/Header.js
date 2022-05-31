import  {Fragment} from "react";

import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from './HeaderCartButton'
import classes from "./Header.module.css"

const Header = props => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}>Cart </HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Meals img"/>
            </div>
        </Fragment>
    )
};

export default Header;