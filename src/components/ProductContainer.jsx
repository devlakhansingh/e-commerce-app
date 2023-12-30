import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../features/product/ProductSlice'
import Spinner from './Spinner'

const ProductContainer = () => {

    const dispatch = useDispatch()
    const { products, isLoading, isError, isSuccess } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    if (isLoading) {
        return (
        <Spinner/>
        )
    }
    if (isError) {
        return (
            <div className="container">
                <h1 className='text-center'>somethning went wrong</h1>
            </div>
        )
    }

if(products || isSuccess){

    return (
        <>
            <div data-aos="zoom-in-down" className="product-container">
                <div className="product-page-upper">
                    <h1 className='  text-center mt-2'>features products</h1>
                </div>

                <div className="container product-c  ">
                    {
                        products.map(product => <ProductCard key={product.id} product={product} />)
                    }



                </div>
            </div>
        </>
    )
}
}

export default ProductContainer
