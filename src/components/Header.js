import React from 'react'
const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <a href='/' className='item'>accordion</a>
            <a href='/list' className='item'>search</a>
            <a href='/dropdown' className='item'>dropdown</a>
            <a href='/translate' className='item'>Translate</a>
        </div>
    )
}
export default Header