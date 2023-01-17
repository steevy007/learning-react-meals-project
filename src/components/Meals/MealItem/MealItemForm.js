import React,{useRef,useState} from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
    const [amountIsValid,setAmountIsValid]=useState(true)
    const inputRefAmount=useRef()
    const submitHandler=event=>{
        event.preventDefault()

        const enteredAmount=inputRefAmount.current.defaultValue
        const enteredAmountNumber=parseInt(inputRefAmount.current.defaultValue)

        if(enteredAmount.trim().length===0 || enteredAmountNumber < 1 || enteredAmount > 5){
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(enteredAmountNumber)
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRefAmount}
        label="Amount"
        input={{
          id: "amount_"+props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add</button>
      {!amountIsValid && <p>Please Enter a valid amount !</p>}
    </form>
  );
};

export default MealItemForm;
