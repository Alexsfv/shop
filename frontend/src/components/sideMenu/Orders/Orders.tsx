import React from 'react'
import Order from '../../cards/Order/Order'
import TabPanel from '../../ui/TabPanel/TabPanel'
import './Orders.scss'


type OrdersProps = {
    value: number
    index: number
}

const Orders: React.FC<OrdersProps> = (props) => {
    const { value, index } = props

    const parameters = [
        {
            name: 'Order id',
            value: '123123bg2y8gn8hhdh23hd112s'
        },
        {
            name: 'Status',
            value: 'Pending'
        },
        {
            name: 'Total price',
            value: '31231231'
        },
    ]

    return (
        <div className="orders">
            <TabPanel value={value} index={index}>
                <div className="orders__content">
                    <div className="orders__body">
                        {
                            new Array(3).fill('').map((v, i) => (
                                <Order key={i} parameters={parameters}/>
                            ))
                        }
                    </div>
                </div>
            </TabPanel>
        </div>
    )
}

export default Orders