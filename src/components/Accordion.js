import React from 'react'

const Accordion = (props) => {
    const items = props.items.map((item) => {
        return (
            <div key={item.title}>
                <div className='title active'>
                    <i className='dropdown icon'></i>
                    <h1>{item.title}</h1>
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
        </div>
    )
}

export default Accordion