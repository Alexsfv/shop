import React, { useState } from 'react'
import CartItem from '../../cards/CartItem/CartItem'
import TabPanel from '../../ui/TabPanel/TabPanel'
import './Cart.scss'

type CartProps = {
    value: number
    index: number
}

const Cart: React.FC<CartProps> = (props) => {
    const {
        value, index
    } = props

    const [number, setNumber] = useState<number>(0)

    const handleChangeCount = (value: string, itemId: string) => {
        console.log('id: ', itemId, 'value: ', value)
        setNumber(+value)
    }

    const handleDelete = (itemId: string) => {
        console.log('Delete, id: ', itemId)
    }

    return (
        <div className="cart">
            <TabPanel value={value} index={index} dir="">
                <div className="cart__content">
                    {
                        new Array(12).fill('').map((v, index) => (
                            <CartItem
                                key={index}
                                name="Women's tracksuit asdasdas da sd as"
                                description="description sada s"
                                countValue={number}
                                imgSrc="https://i.pinimg.com/736x/9d/ec/55/9dec557f5787213563ff128a65de4629--pop-art-illustration-illustration-tutorial.jpg"
                                onChangeCount={val => handleChangeCount(val, index + '')}
                                onDelete={() => handleDelete(index + '')}
                                totalPrice={512}
                                borderBottom={true}
                            />
                        ))
                    }
                </div>
                <div className="cart__footer">
                    <div className="cart__price">
                        <span className="cart__price-text">Total</span>
                        <span className="cart__price-value">$433.99</span>
                    </div>
                    <button className="cart__order-btn btn btn-black">Order</button>
                </div>
            </TabPanel>
        </div>
    )
}

export default Cart