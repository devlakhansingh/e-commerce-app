import React from 'react'
import slideone from "../assets/slideone.jpg"
import slide2 from "../assets/slide2.jpg"
const Home = () => {
    return (
        <>
            <section id='home' className='pt-2 overflow-hidden'>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slideone} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='text-body-emphasis'>First slide label</h5>
                                <p className='text-body-emphasis'>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slide2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='text-body-emphasis'>Second slide label</h5>
                                <p className='text-body-emphasis'>Some representative placeholder content for the second slide.</p>
                                <button id='slide-btn' className="btn danger">shop now</button>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden text-body-emphasis">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>

            
        </>
    )
}

export default Home
