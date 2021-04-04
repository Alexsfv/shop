import { SvgIconTypeMap } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import React from 'react'
import './Benefit.scss'

type BenefitProps = {
    title: string
    description: string
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

const Benefit: React.FC<BenefitProps> = (props) => {
    const {
        title, description, Icon
    } = props

    return (
        <div className="benefit-item">
            <Icon className="benefit-item__icon"/>
            <div className="benefit-item__text">
                <p className="benefit-item__title">{ title }</p>
                <p className="benefit-item__description">{ description }</p>
            </div>
        </div>
    )
}

export default Benefit