import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

const items = [
    {
        title: 'what is react',
        content: 'a library'
    },
    {
        title: 'what is java',
        content: 'OOPS lan'
    },
    {
        title: 'what is laravel',
        content: 'PHP framework'
    }
]

const options = [
    {
        label: 'the color red',
        value: 'red'
    },
    {
        label: 'the color blue',
        value: 'blue'
    },
    {
        label: 'the color green',
        value: 'green'
    },
]

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />
    }
}

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />
    }
}

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown options={options} />
    }
}

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />
    }
}



const App = () => {

    // const [selected, setSelected] = useState(options[0])
    return (
        <div>
            { showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()}
        </div>
    )
}
export default App