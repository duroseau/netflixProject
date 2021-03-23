import React from 'react';
import './search.css'

const Search = (props) => {
    return (
        <div>
            <label htmlFor='search'>find: </label>
            <input id='search' type ='text' onChange={props.handleChange} />
        </div>
    )
}


export default Search