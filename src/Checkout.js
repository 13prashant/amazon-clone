import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://dkemhji6i1k0x.cloudfront.net/000_clients/489816/page/489816udYiX0wU.jpg"
                    alt=""
                />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>
            </div>
            <div className="checkout__">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
