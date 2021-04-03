import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Convert = (props) => {
    // this will when either text or language props changes
    const [translated, setTranslated] = useState('')

    useEffect(() => {
        // console.log('new language or text');
        // for post req in axios 2ns parameter is object of data we want to send in the body
        // and 3rd paramter is object of query string parameters

        const translation = async () => {
            const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: props.text,
                    target: props.language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            // console.log(response.data.data.translations[0].translatedText);
            setTranslated(response.data.data.translations[0].translatedText)
        }
        translation()

    }, [props.text, props.language])

    return (
        <div>
            <h1 className='ui header'>
                {translated}
            </h1>
        </div>
    )
}
export default Convert
