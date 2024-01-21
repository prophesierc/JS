import { useState, useEffect } from "react"
import "./CountButton.css"

const CountButton = (props) => { //react function layout
    //props allows passing values into each obeject of this function
    const [currentCount, setCurrentCount] = useState(0) //destructuring array
    

    const iterator = () => {
        setCurrentCount(currentCount + props.incrementBy)
        //currentCount ++ => using the Reacthook useState we can refresh the display of the currentCount variable
    }
    const deiterator = () => {
        setCurrentCount(currentCount - props.incrementBy)
        //currentCount ++ => using the Reacthook useState we can refresh the display of the currentCount variable
    }
    const clear = () => {
        setCurrentCount(0)
        //currentCount ++ => using the Reacthook useState we can refresh the display of the currentCount variable
    }

    const buttonStyle = {
        background: props.buttonColor, // uses created prop on App.js to change each Object's color
    }

    useEffect(() => { // will call {} whenever [] is updated and onload
        console.log('test')
    }, [currentCount]) 
    useEffect(() => { // will call {} whenever [] is updated and onload
        if (currentCount === 10)
        {
            clear()
        }
    }, [currentCount] )// dependancy array 

    return <div>
            <button style={buttonStyle} onClick = {deiterator}>-{props.incrementBy}</button>
            <button style={buttonStyle} onClick = {iterator}> +{props.incrementBy}</button>
            <button style={buttonStyle} onClick = {clear}>clear</button>
            <div className={'count-display'}>{currentCount}</div>
        </div>
}
export default CountButton