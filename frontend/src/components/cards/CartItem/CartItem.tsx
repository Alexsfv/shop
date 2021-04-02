import React from 'react'
import './CartItem.scss'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import InputNumber from '../../formComponents/InputNumber/InputNumber';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

type CartItemProps = {
    imgSrc: string
    name: string
    description?: string
    onChangeCount?: (value: string) => void
    onDelete?: () => void
    onAddCart?: () => void
    totalPrice?: string | number
    countValue?: number
    min?: number
    max?: number
    borderBottom?: boolean
}

const CartItem: React.FC<CartItemProps> = (props) => {
    const {
        imgSrc, totalPrice, countValue,
        min, max, name, description,
        borderBottom = false,
        onChangeCount, onDelete, onAddCart
    } = props


    return (
        <div className={borderBottom ? 'cart-item cart-item_border' : 'cart-item'}>
            <div className="cart-item__img">
                <img src={imgSrc} alt="cart-item__image" />
            </div>

            <div className="cart-item__body">
                <p className="cart-item__title">{name}</p>

                {description && <p className="cart-item__info">{description}</p>}

                <div className="cart-item__footer">
                    {
                        onChangeCount &&
                        <div className="cart-item__summary">
                            <InputNumber
                                value={countValue}
                                onChange={onChangeCount}
                                placeholder="Количество"
                                classes={['cart-item__count']}
                                min={min}
                                max={max}
                            />
                            <p className="cart-item__price">$ {totalPrice}</p>
                        </div>
                    }


                    <div className="cart-item__controls">
                        {
                            onDelete &&
                            <button
                                className="cart-item__control-btn btn btn-danger"
                                onClick={onDelete}
                            >
                                <DeleteOutlineIcon />
                            </button>
                        }
                        {
                            onAddCart &&
                            <button
                                className="cart-item__control-btn btn btn-primary"
                                onClick={onAddCart}
                            >
                                <AddShoppingCartIcon />
                            </button>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartItem