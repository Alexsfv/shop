import React from 'react'
import { OrderParameter } from '../../../types/other'
import CartItem from '../CartItem/CartItem'

type OrderProps = {
    parameters: OrderParameter[]
}

const Order: React.FC<OrderProps> = (props) => {
    const {
        parameters,
    } = props


    return (
        <div className="orders__item">
            <div className="orders__parameters">
                {
                    parameters.map(p => (
                        <div className="orders__parameter">
                            <span className="orders__parameter-name">{ p.name }:</span>
                            <span className="orders__parameter-value">{ p.value }</span>
                        </div>
                    ))
                }
            </div>

            <div className="orders__item-list">
                {
                    new Array(3).fill('').map((v, index) => (
                        <CartItem
                            key={index}
                            name="Women's tracksuit asdasdas da sd as"
                            description="description sada s"
                            imgSrc="https://i.pinimg.com/736x/9d/ec/55/9dec557f5787213563ff128a65de4629--pop-art-illustration-illustration-tutorial.jpg"
                            countValue={12}
                            disabled={true}
                            totalPrice={453}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Order