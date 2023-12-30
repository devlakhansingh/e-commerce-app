import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../features/cart/CartSlice'

const Cartll = ({ cartitem, item }) => {

    const dispatch = useDispatch()
 
    const handleremove = (id) => {
        dispatch(remove(id))

    }

    const [quantity, setQuantity] = useState(cartitem.quantity);

    // Define functions to increment and decrement the quantity
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <>
            <div className="project">
                <div className="shop">
                    <div className="box">
                        <img src={cartitem.image} />
                        <div className="content">
                            <h3>{cartitem.title}</h3>
                            <h4>Price: ${cartitem.price}</h4>
                            <span>
                                <p className="unit">Quantity:{quantity} </p>
                                <button onClick={decrementQuantity} className='minus'>-</button> 2<button onClick={incrementQuantity} className='plus'>+</button>
                            </span>
                            <p className="btn-area"><i aria-hidden="true" className="fa fa-trash"></i> <span className="btn2" onClick={() => handleremove(cartitem.id)}>Remove</span></p>
                        </div>
                    </div>


                </div>

            </div>


        </>
    )
}

export default Cartll
