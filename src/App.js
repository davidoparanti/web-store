import React from "react"
import Header from "./components/Header"
import {Switch, Route} from "react-router-dom"
import './styles.css';
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                     <h1>Home Page</h1>
                    <Photos />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default App