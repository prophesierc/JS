import React from "react"

const Button = (props) => {
    return(
        <div style={{color: 'blue', background: 'red',}}>{props.children}</div>
        //can use html tags by inserting props.children into div
    )
}
export default Button