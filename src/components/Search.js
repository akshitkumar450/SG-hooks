import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    console.log(results);
    // means, when the component rerenders and the term has been changed run useEffect code
    // we can't use async await direct inside useEffect(rather make helper fun with async code and run it inside useEffect)
    useEffect(() => {
        const searchWiki = async () => {
            const response = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            })
            // console.log(response.data.query.search);
            // get the result and update the state 
            setResults(response.data.query.search)
        }
        // if we dont have a search term we will not call this fn for api request
        if (term) {
            searchWiki()
        }

    }, [term])

    // showing result
    const renderResults = results.map((result) => {
        return (
            <div className='item' key={result.pageid}>
                <div className='content'>
                    <div className='header'>
                        <h2>{result.title}</h2>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
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
            <div className='ui celled list'>
                {renderResults}
            </div>
        </div>
    )
}
export default Search