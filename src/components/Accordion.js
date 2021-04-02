import React, { useState } from 'react'

const Accordion = (props) => {

    // useState->uses state inside a fn component
    // activeIndex ->name of the state
    // useState(null)-> initialization of state with default state
    // setActiveindex->updating the state

    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClicked = (index) => {
        console.log('title clicked', index)
        // when the state is updated the component will rerender
        setActiveIndex(index)
    }

    const items = props.items.map((item, index) => {
        // if the current index is equal to the activeIndex (by clicking) then put active class
        const active = index === activeIndex ? 'active' : ''
        // active (semantic ui) class is used to expand the accordion
        return (
            <div key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClicked(index)}
                >
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>

                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </div>
        )
    })

    return (
        <div className='ui styled accordion'>
            {items}
        </div>
    )
}

export default Accordion