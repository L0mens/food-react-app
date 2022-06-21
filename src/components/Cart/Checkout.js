import classes from './Checkout.module.css';

import {useRef, useState} from "react";

const isEmpty = val => val.trim() === "";
const isNotFiveChar = val => val.trim().length !== 5;

const Checkout = (props) => {

    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const cityInputRef = useRef()
    const postalInputRef = useRef()
    const [formInputValidity, setFormInputValidity] = useState({
        name:true,
        street: true,
        city: true,
        postal: true,
    })
    const confirmHandler = (event) => {

        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredCityIsValid = !isEmpty(enteredCity)
        const enteredPostalIsValid = !isNotFiveChar(enteredPostal)

        setFormInputValidity({
            name: enteredNameIsValid,
            city:enteredNameIsValid,
            postal: enteredPostalIsValid,
            street: enteredStreetIsValid
        })

        const formIsValid = enteredPostalIsValid && enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid;


        if (!formIsValid)
            return

        props.onConfirm({
            name:enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity
        })



    };



    const nameControleClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid} `
    const streetControleClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid} `
    const postalControleClasses = `${classes.control} ${formInputValidity.postal ? '' : classes.invalid} `
    const cityControleClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid} `

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControleClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef}/>
                {!formInputValidity.name && <p>Plz enter a valid name</p>}
            </div>
            <div className={streetControleClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef}/>
                {!formInputValidity.street && <p>Plz enter a valid street</p>}
            </div>
            <div className={postalControleClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
                {!formInputValidity.postal && <p>Plz enter a valid postal code</p>}
            </div>
            <div className={cityControleClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputValidity.city && <p>Plz enter a valid city</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
