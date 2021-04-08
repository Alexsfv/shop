import React from 'react'
import './Parameters.scss'

type ParametersProps = {
    value: Array<{
        name: string
        value: string
    }>
}

const Parameters: React.FC<ParametersProps> = ({ value }) => {
    return (
        <div className="product__parameters">
            <p className="product__parameters-title">Additional information</p>
            <ul className="product__parameters-list">
                {
                    value.map((p, i) => (
                        <li className="product__parameters-item" key={i}>
                            <p className="product__parameters-name">
                                {p.name}:
                            </p>
                            <p className="product__parameters-value">
                                {p.value}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Parameters