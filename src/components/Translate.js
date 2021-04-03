import React, { useState } from 'react'
import DropDown from './Dropdown'

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

    const [selected, setSelectedLang] = useState(options[0])
    return (
        <div>
            <DropDown
                options={options}
                selected={selected}
                onSelectedChange={setSelectedLang}
            />
        </div>
    )
}

export default Translate