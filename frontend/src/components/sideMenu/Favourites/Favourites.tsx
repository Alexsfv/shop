import React from 'react'
import CartItem from '../../cards/CartItem/CartItem'
import TabPanel from '../../ui/TabPanel/TabPanel'
import './Favourites.scss'


type FavouritesProps = {
    value: number
    index: number
}

const Favourites: React.FC<FavouritesProps> = (props) => {
    const {
        value, index,
    } = props

    const handleDelete = (itemId: string) => {
        console.log('Delete, id: ', itemId)
    }

    const handleAddCart = (itemId: string) => {
        console.log('Add to cart, id: ', itemId)
    }

    return (
        <div className="favourites">
            <TabPanel value={value} index={index} dir="">
                <div className="favourites__content">
                    <div className="favourites__body">
                        {
                            new Array(12).fill('').map((v, index) => (
                                <CartItem
                                    key={index}
                                    name="Women's tracksuit asdasdas da sd as"
                                    description="description sada s"
                                    imgSrc="https://i.pinimg.com/736x/9d/ec/55/9dec557f5787213563ff128a65de4629--pop-art-illustration-illustration-tutorial.jpg"
                                    onDelete={() => handleDelete(index + '')}
                                    onAddCart={() => handleAddCart(index + '')}
                                    totalPrice={512}
                                    borderBottom={true}
                                />
                            ))
                        }
                    </div>
                </div>
            </TabPanel>
        </div>
    )
}

export default Favourites