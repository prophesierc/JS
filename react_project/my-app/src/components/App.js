import React, {useEffect, useState} from "react"
import CountButton from './CountButton/CountButton';
import SearchBar from './SearchBar/SearchBar';
import Button from "./Button/Button";
//import { lazy } from "react"; // allows code splitting

const App = () => 
{
    const [productsState, setProductsState] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((productsArray) => {
            const newProductsstate = productsArray.map((product) => {
            return product.title
            })
            setProductsState(newProductsstate)
        })
    }, [])
    
    /*const [productsState, setProductsState] = useState([])

    
    useEffect(() => {
        setTimeout(() => {
            setProductsState([
                'tooth paste', 
                'tooth brush', 
                'mouth wash',
                'dental floss',
                'mouth guard',
            ])
            }, 2000)
            }, [])
    */

    return(
        <div>
            <SearchBar products={productsState} />
            <CountButton incrementBy={1} buttonColor={'red'}/>
            <CountButton incrementBy={5} buttonColor={'blue'}/>
            <Button>Helllo </Button>
        
            
            {/* 
            props.function allows passings of values into objects created and parsed by App.js
            */} 
            {/* 
            <CountButton /> 
            -- can duplicate entire code by calling the page in App.js again
            */} 

        </div>
    )
}

export default App