import React, { useState } from 'react'

const Accordion = (props) => {

    // useState->uses state inside a fn component
    // activeIndex ->name of the state
    // useState(null)-> initialization of state with default state
    // setActiveindex->updating the state

    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClicked = (index) => {
        console.log('title clicked', index)
        setActiveIndex(index)
    }

    const items = props.items.map((item, index) => {
        return (
            <div key={item.title}>
                <div
                    className='title active'
                    onClick={() => onTitleClicked(index)}
                >
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>

                <div className='content active'>
                    <p>{item.content}</p>
                </div>
            </div>
        )
    })

    return (
        <div className='ui styled accordion'>
            {items}
            <h1>{activeIndex}</h1>
        </div>
    )
}

export default Accordion