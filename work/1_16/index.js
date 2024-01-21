const reactContentRoot = document.getElementById("root");

//const myFirstElement = React.createElement("ul", null, [
//    React.createElement("li", null, "item1"),
//    React.createElement("li", null, "item2"),
//])



const App = () => {
    const myItem = "item 3"
    return (    
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        {/* JS interpolation*/}
        <li>{myItem.toUpperCase()}</li>
    </ul>    
    )
}

ReactDOM.render(App(), reactContentRoot)