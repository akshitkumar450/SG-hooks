import React, { useState, useEffect } from 'react'

const Search = () => {
    const [term, setTerm] = useState('')

    console.log('i run every render');

    useEffect(() => {
        console.log('first time');
    })
    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>search</label>
                    <input
                        className='input'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}
export default Search