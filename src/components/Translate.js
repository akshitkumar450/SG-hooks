import React, { useState } from 'react'
import DropDown from './Dropdown'
import Convert from './Convert'

const options = [
    {
        label: 'afrikaans',
        value: 'af'
    },
    {
        label: 'arabic',
        value: 'ar'
    },
    {
        label: 'hindi',
        value: 'hi'
    }
]

const Translate = () => {

    const [language, setSelectedLang] = useState(options[0])
    const [text, setText] = useState('')
    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>

            <DropDown
                label='select a language'
                options={options}
                selected={language}
                onSelectedChange={setSelectedLang}
            />
            <hr />
            <h3 className='ui header'>output</h3>

            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate