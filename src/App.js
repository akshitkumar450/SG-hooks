import React from 'react'
// import Accordion from './components/Accordion'
// import Search from './components/Search'
import Dropdown from './components/Dropdown'

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
const App = () => {
    return (
        <div>
            <Dropdown options={options} />
        </div>
    )
}
export default App