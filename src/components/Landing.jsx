import React from 'react'
import home2 from "../assets/home2.jpg"
import home3 from "../assets/home3.jpg"
import homeleft from "../assets/homeleft.jpg"
const Landing = () => {
    return (
        <>
            <div className="container">
                <div className="landingpage">
                    <div data-aos="fade-right" className="landingleft">

                        <h1>biggest trusted shoping app in <br /> your town</h1>
                        <buttton className=" landing-btn-left btn btn-dark">Explore now</buttton>
                    </div>
                    <div className="landingright">
                        <div data-aos="fade-left" className="right-first">
                            <h2 className='right-text'>Fasion for upcoming winter <br /> </h2>
                            <buttton className=" right-btn  btn btn-dark">buy this</buttton>
                        </div>
                        <div className="right-second">
                            <h2 data-aos="fade-left" className='right-text'>Fasion for upcoming winter <br /> </h2>
                            <buttton className=" right-btn  btn btn-dark">buy this</buttton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
