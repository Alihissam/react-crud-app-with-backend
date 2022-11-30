import React from 'react'
import { Link, NavLink } from 'react-router-dom'



function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Crud <span className="logo">App</span>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mt-1">
                            <li className="nav-item">
                                <NavLink activeclassName="active-menu" className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeclassName="active-menu" className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeclassName="active-menu" className="nav-link" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-outline-light w-23" to="/user/add">add user</Link>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
