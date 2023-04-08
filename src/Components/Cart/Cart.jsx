import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products </p>
    }
    else{
        message = <div>
            <h3>vai onak Borolx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h1>order summary: {cart.length} </h1>
            {cart.length > 2 ? <span>Aro kino</span> : <span>Fokira</span>}
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} <button
                     onClick={() =>handleRemoveFromCart(tshirt._id)}
                     >Remove</button></p>)
            }
            {
                cart.length === 2 && <p>Doble Boranja</p>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo na !! </h3>
            }
        </div>
    );
};

export default Cart;
/* 
*   conditional readering
1. use if else to set a variable that will contain an element , components
2. ternary operator : condition ? 'for true' : 'false'
3. Logical &&: (if the condition is true then the next thing will be displayed)
4. Logical || (if the condition is false then the next thing will be displayed)
*/