import React from 'react'
import './RadioGroup.scss'

type InputRadioGroup = {
    value: string
    inputText?: string
    inputImgSrc?: string
    inputImgAlt?: string
}

type RadioGroupProps = {
    value: string,
    nameGroup: string,
    inputs: InputRadioGroup[]
    title?: string
    inputClasses?: string[]
    inputWrapperClasses?: string[]
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
    const {
        inputs, inputClasses, inputWrapperClasses,
        nameGroup, value, title,
        onChange,
    } = props

    const getItemClasses = (item: InputRadioGroup) => {
        const isActive = item.value === value
        const itemClasses = []

        if (item.inputImgSrc) itemClasses.push('radio-group__fake-img-input')
        if (item.inputText) itemClasses.push('radio-group__fake-text-input')
        if (isActive) itemClasses.push('active')
        if (inputClasses) itemClasses.push(...inputClasses)

        return itemClasses
    }

    const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }

    const wrapperClasses = ['radio-group']

    if (inputWrapperClasses) wrapperClasses.push(...inputWrapperClasses)

    return (
        <div className={wrapperClasses.join(' ')}>
            <div className="radio-group__text-block">
                <p className="radio-group__title">{title}: </p>
                <p className="radio-group__value">{value}</p>
            </div>
            <div className="radio-group__inputs-container">
                {
                    inputs.map(item => (
                        <label className="radio-group__label">
                            <input
                                type="radio"
                                name={nameGroup}
                                value={item.value}
                                checked={value === item.value}
                                className="radio-group__input"
                                onChange={handleChangeColor}
                            />
                            {
                                item.inputImgSrc &&
                                <div className={getItemClasses(item).join(' ')}>
                                    <img src={item.inputImgSrc} alt={item.inputImgAlt} />
                                </div>
                            }
                            {
                                item.inputText &&
                                <div className={getItemClasses(item).join(' ')}>
                                    <p className="radio-group__radio-text">{item.inputText}</p>
                                </div>
                            }
                        </label>
                    ))
                }
            </div>
        </div>
    )
}

export default RadioGroup