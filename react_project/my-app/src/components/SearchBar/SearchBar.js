import { useState } from "react"
import "./SearchBar.css"

const SearchBar = (props) => 
{
     //destructuring array
    const [currentSearchValue, setCurrentSearchValue] = useState('')
    const [showResults, setShowResults] = useState(false); //defaults state to false as to not display anything with the showResults attribute
        const handleChange = (event) =>
        {
            setCurrentSearchValue(event.target.value)
            setShowResults(false);

        }
        const handleClear = () => 
        {
            setCurrentSearchValue('')
            setShowResults(false);

        }
        const handleSubmission = () => 
        {
            setShowResults(true); // only shows the attribute of showResults through the onClick eventHandler
        }

        const shouldDisplayButton = currentSearchValue.length > 0

        const filteredProducts = props.products.filter((product) => {
            if (shouldDisplayButton)
            { 
                return product.includes(currentSearchValue)
            }
            else return null
        })
        
    return( 
    <div>
        <input className='search-bar' type="text" value={currentSearchValue} onChange={handleChange}/>
        {shouldDisplayButton && <button className='button-clear' type="button" onClick={handleClear}>Clear</button>}
        {shouldDisplayButton && <button className='button-submit' type="button" onClick={handleSubmission}>Submit</button>}

        {showResults && (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product}>{product}</li>
          ))}
        </ul>
      )}
    </div>
  )}

export default SearchBar