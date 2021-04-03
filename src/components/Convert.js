import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Convert = (props) => {
    // this will when either text or language props changes
    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(props.text)
    // this will run when the text changes 
    // and as the text changes debouncedText will also changes which will run the 2dn useEffect
    // bcz 2nd useEffect will run when the debouncedText changes

    // with the debounced concept we will not make request for each character type in input

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(props.text)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [props.text])

    useEffect(() => {
        // console.log('new language or text');
        // for post req in axios 2ns parameter is object of data we want to send in the body
        // and 3rd paramter is object of query string parameters

        const translation = async () => {
            const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: props.language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            // console.log(response.data.data.translations[0].translatedText);
            setTranslated(response.data.data.translations[0].translatedText)
        }
        translation()

    }, [debouncedText, props.language])

    return (
        <div>
            <h1 className='ui header'>
                {translated}
            </h1>
        </div>
    )
}
export default Convert
