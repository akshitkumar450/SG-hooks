import React, { useState } from 'react'

const Dropdown = (props) => {
    // to show and hide the dropdown
    // initially dropdown will be hidden
    const [open, setOpen] = useState(false)

    const result = props.options.map((option, index) => {
        // filtering the selected option from the list
        if (option.value === props.selected.value) {
            // means dont render anything
            return null
        }
        return (
            <div
                onClick={() => props.onSelectedChange(option)}
                key={index}
                className='item'
            >
                {option.label}
            </div>
        )
    })
    return (
        <div className='ui form'>
            <div className='field'>
                <label className='label'>
                    select a color
                </label>
                { /*classes active visible active was responsible for opening the dropdown
                but now it will open only when the state value of open is true*/    }
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>
                        {props.selected.label}
                    </div>

                    { /*classes active visible transition was responsible for opening the dropdown
                    but now it will open only when the state value of open is true*/    }
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {result}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown