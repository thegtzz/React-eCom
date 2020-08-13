import React, {useEffect, useState} from 'react';
import {Route} from "react-router-dom";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {setPizzas} from "./redux/actions/pizzas";


function App() {
    const pizzas = useSelector(state => state.pizzas)
    const dispatch = useDispatch()
    useEffect(  () => {
        const fetchData = async () => {
            const data = await axios.get('http://localhost:3000/db.json')
            await dispatch(setPizzas(data.data.pizzas))
        }
        fetchData()
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' render={() => <Home items={pizzas.items}/>} />
                <Route exact path='/cart' render={() => <Cart/>} />
            </div>
        </div>
    )
}

export default App;
