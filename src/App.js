import React from 'react'
import Accordion from './components/Accordion'

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
const App = () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}
export default App