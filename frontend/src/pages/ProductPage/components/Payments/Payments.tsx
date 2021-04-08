import React from 'react'
import './Payments.scss'

const Payments: React.FC<{}> = React.memo(() => {
    return (
    <div className="product__payments">
        <div className="product__payments-img">
            <img src="/static/img/payments.png" alt="payments"/>
        </div>
        <p className="product__payments-text">
            guaranteed safe checkout
        </p>
    </div>
    )
})

export default Payments