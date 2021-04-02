import React from 'react'

const Accordion = (props) => {

    const onTitleClicked = (index) => {
        console.log('title clicked', index)
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
        </div>
    )
}

export default Accordion