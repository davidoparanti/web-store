import React, {useState, useEffect} from "react";

const Context = React.createContext();


function ContextProvider ({children}) {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
     


    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"; 
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

   function toggleFavorite(id) {
        const updatedItems = items.map(item => {
            if(item.id === id) {
                return {...item, isFavorite: !item.isFavorite}
            }
            return item
        })
        
        setItems(updatedItems)
    }

    function addToCart(newItem) {
        return setCartItems(prevItem => [...prevItem, newItem])  
    }
    

    return (
        <Context.Provider value= {{allPhotos: items, toggleFavorite, addToCart, cartItems}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

