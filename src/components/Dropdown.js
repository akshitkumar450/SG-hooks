import React from 'react'

const Dropdown = (props) => {
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
                <div className='ui selection dropdown visible active'>
                    <i className='dropdown icon'></i>
                    <div className='text'>
                        {props.selected.label}
                    </div>
                    <div className='menu visible transition'>
                        {result}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown