import React, { useState, useEffect } from 'react'

const Convert = (props) => {
    // this will when either text or language props changes
    useEffect(() => {
        console.log('new language or text');
    }, [props.text, props.language])

    return (
        <div>
        </div>
    )
}
export default Convert
