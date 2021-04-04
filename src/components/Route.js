import { useEffect, useState } from 'react'

const Route = (props) => {
    // to only render the component if the url changes
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            // console.log('location chnage');
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])

    return currentPath === props.path ? props.children : null

}

export default Route