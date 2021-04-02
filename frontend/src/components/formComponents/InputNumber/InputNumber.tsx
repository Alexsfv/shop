import React from 'react'
import './InputNumber.scss'

type InputNumberProps = {
    value?: number
    onChange?: (value: string) => void
    placeholder?: string
    classes?: string[]
    errorMessage?: string
    min?: number
    max?: number
}

const InputNumber: React.FC<InputNumberProps> = (props) => {
    const {
        value = -1, classes, errorMessage,
        placeholder, min, max,
        onChange,
    } = props

    const handlePlus = () => {
        handleChange(value + 1 + '')
    }

    const handleMinus = () => {
        handleChange(value - 1 + '')
    }

    const handleChange = (newValue: string) => {
        if (onChange) {
            if (min && +newValue < +min) {
                onChange(min + '')
            } else if (max && +newValue > +max) {
                onChange(value + '')
            } else {
                onChange(newValue + '')
            }
        }
    }

    let wrapClasses = ['input-number']
    if (classes) wrapClasses = [...wrapClasses, ...classes]
    if (errorMessage) wrapClasses.push('error')

    return (
        <div className={wrapClasses.join(' ')}>
            <label className="input-number__label">
                <input
                    type="number"
                    className="input-number__input"
                    value={value}
                    placeholder={placeholder}
                    min={min}
                    max={max}
                    onChange={e => handleChange(e.target.value)}
                />
                <button className="input-number__minus btn" onClick={handleMinus}>-</button>
                <button className="input-number__plus btn" onClick={handlePlus}>+</button>
            </label>
            <p className="input-number__error">
                {
                    errorMessage
                }
            </p>
        </div>
    )
}

export default InputNumber