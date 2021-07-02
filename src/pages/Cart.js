import React, {useContext, useState} from "react"
import CartItem from "../components/CartItem"
import {Context} from "../Context";
import {Link} from "react-router-dom"

function Cart() {
    const {cartItems, removeFromCart, emptyCart} = useContext(Context)
    const [order, setOrder] = useState("Place Order")
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
    ))

    function handleOrder() {
        setOrder("Ordering...")
        setTimeout(() => {
            console.log("Order placed")
            setOrder("Place Order")
            emptyCart()
        }, 3000)
    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                {cartItems.length > 0 ?  <button onClick={handleOrder}>{order}</button> 
                : <span>No item in Cart <Link to="/" style={{color: "Blue"}}>Back</Link> to product page</span> }
                
            </div>
        </main>
    )
}
export default Cart