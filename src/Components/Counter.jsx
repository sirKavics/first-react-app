import "./Counter.css";
import React, { useState } from "react";

function Counter() {
  const [cart, setCart] = useState({
    item: "",
    quantity: 0,
  });

  function removeApple () {
    // 1. Use a callback to get the previous value
    // 2. Spread out all the properties of the previous state (...prevCart)
    // 3. Only change the property that you need to change
    setCart(prevCart => ({
        ...prevCart,
        quantity: prevCart.quantity - 1
    }))
  }

  function addApple () {
    setCart(prevCart => ({
        ...prevCart,
        quantity: prevCart.quantity + 1,
    }))
  }

  return (
    <>
      <div className="counter">
        <button className="counter__button" onClick={removeApple}>
          -
        </button>
        <div className="counter__print">{cart.quantity} {cart.item}</div>
        <button className="counter__button" onClick={addApple}>
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
