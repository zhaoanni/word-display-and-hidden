import React, { useState, useRef, useEffect } from 'react';

export function ChildComponent({ sendWordToParent }) {

    const [searchWord, setSearchWord] = useState('')
    const handleChange = (e) => {
        setSearchWord(e.target.value)
    }

    const handleClick = () => {
        sendWordToParent(searchWord)
    }

return (
    <div className='searchBar'>
        <input type="text"
            className="search"
            onChange={handleChange}
            value={searchWord}
            placeholder='search words'
        >
        </input>
        <button onClick={handleClick}> submit

        </button>

    </div>
)


}
