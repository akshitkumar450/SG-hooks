import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('programming')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            // when this run the debounncedTerm has been changes and  2nd useEffect will run bcz that useEffect will only run when debouncedTerm is changed
            // as the term changes , we will update the debounced term also
            setDebouncedTerm(term)
        }, 1000)
        // to clear timeout
        // if user type input very quickly, we will clear the previous timeout and set a new timer 
        return () => {
            clearTimeout(timeoutId)
        }
    }, [term])

    useEffect(() => {
        const searchWiki = async () => {
            const response = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                }
            })
            // console.log(response.data.query.search);
            // get the result and update the state 
            setResults(response.data.query.search)
        }
        searchWiki()
    }, [debouncedTerm])

    // showing result
    const renderResults = results.map((result) => {
        return (
            <div className='item' key={result.pageid}>
                <div className='right floated content'>
                    <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>GO</a>
                </div>
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