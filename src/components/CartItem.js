import React, {useState} from "react"

function CartItem({item, removeFromCart}) {
    const [hovered, setHovered] = useState(false)
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i className={iconClassName}
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                
            ></i>
            <img src={item.url} width="130px" height="130px" alt=""/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem