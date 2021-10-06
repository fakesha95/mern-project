import React from 'react'
import {NavLink} from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div>
                <h1>ERROR 404 PAGE NOT FOUND</h1>
                <h2>the page you're looking for doesn't exist</h2>
                <NavLink to="/">redirect to home page</NavLink>
            </div>  
        </>
    )
}

export default Error
