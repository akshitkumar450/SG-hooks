import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('')

    // means, when the component rerenders and the term has been changed run useEffect code
    // we can't use async await direct inside useEffect(rather make helper fun with async code and run it inside useEffect)
    useEffect(() => {
        const searchWiki = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            })
        }
        searchWiki()

    }, [term])

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