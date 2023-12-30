import React from 'react'
import offer2 from "../assets/offer2.jpg"
import { BsFillBagHeartFill } from "react-icons/bs"
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { Add } from '../features/cart/CartSlice'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()

    const handleAdd = (product) => {
        dispatch(Add(product))
    }

    return (

        <>
            <motion.div animate={{ x: [0, 100, 0] }} className="product-card card mt-4" >
                <div className='cardImagee'>
                    <img data-aos="fade-up"
                        data-aos-duration="1000" src={product.image} class=" cardImagee card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="title">{product.title}</h5>
                    <span><h5 className='price'>{product.price}</h5>
                        <button data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="btn btn-dark product-btn" onClick={() => handleAdd(product)} >Add to cart<BsFillBagHeartFill /> </button></span>
                </div>
            </motion.div>
        </>
    )
}

export default ProductCard
