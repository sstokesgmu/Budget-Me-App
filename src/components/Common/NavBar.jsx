import React from 'react'
import {NavLink} from 'react-router-dom'
import './nav.scss'

export default function NavBar(){
    return (
        <>
            <section className = "nav">
                <div classNAme = "icon">BudgetMe</div>
                <NavLink to="/" activeClassName='active'>Home</NavLink>
                <NavLink to='/account'activeClassName='active'>Account</NavLink>
                <NavLink to='/budget' activeClassName='active'>Budget</NavLink>
            </section>
        </>

    )
}