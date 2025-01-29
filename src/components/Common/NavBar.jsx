import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar(){
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to='/account'>Account</NavLink>
            <NavLink to='/budget'>Budget</NavLink>
        </>

    )
}