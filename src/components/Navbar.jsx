import React from 'react'
import logo from "../assets/logo.png"
import { BsFillBagHeartFill } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Navbar = () => {

    const {cart} = useSelector(state=>state.cart)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white text-dark bg-opacity-50 position-fixed-top">
                <div className="container">
                  <Link to={"/home"}>  <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="mynav navbar-nav ms-auto">
                           <Link to={"/home"}> <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li></Link>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Men's clothing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">woman's clothing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Register</a>
                            </li>
                           <Link to={'/login'}> <li className="nav-item">
                                <button className="btn btn-dark">login</button>
                            </li></Link>
                            <Link to={"/cart"}>
                                <li>
                                    <button className='btn btn-white'>  cart{cart.length}  <BsFillBagHeartFill /></button>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
