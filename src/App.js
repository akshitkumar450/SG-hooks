import React from 'react'
// import Accordion from './components/Accordion'
import Search from './components/Search'

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

            <Search />
        </div>
    )
}
export default App