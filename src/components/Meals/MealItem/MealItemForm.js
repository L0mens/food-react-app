import classes from "./MealItemForm.module.css";
import Input from "../../Layout/Input";
import { useRef, useState } from 'react'

const MealItemForm = (props) => {
    
    const amountInputRef = useRef();

    const [amountIsValid, setAmountIsValid] = useState(true)

    const submitHandler = (event) => {
        console.log("here");
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber >= 4 || enteredAmountNumber < 1) {
            setAmountIsValid(false);     
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }
    
  return (
    <form className={classes.form} >
      <Input
        ref = {amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="button" onClick={submitHandler}>+ Add</button>
      {!amountIsValid && <p>Pls enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
