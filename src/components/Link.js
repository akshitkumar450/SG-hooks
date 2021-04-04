import React from 'react'

const Link = ({ className, href, children }) => {

    const onClick = (e) => {
        // open a new window search  with ctrl key
        if (e.metaKey || e.ctrlKey) {
            return;
        }
        // to prevent full page refresh when clicking the links
        e.preventDefault()
        // to change the URL
        window.history.pushState({}, '', href)
        // to detect the url change and show content
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }

    return (
        <a onClick={onClick} className={className} href={href} >
            {children}
        </a>
    )
}
export default Link