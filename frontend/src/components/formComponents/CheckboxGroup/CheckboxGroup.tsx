import React from 'react'
import Checkbox from '../Checkbox/Checkbox'
import './CheckboxGroup.scss'

type CheckboxGroupProps = {
    value: string[]
    title: string
    name: string
    data: { title: string, value: string, color?: string }[]
    onChange: (value: string) => void
    classes?: string[]
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
    const {
        title, data, name,
        classes, value, onChange,
    } = props

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    let wrapClasses = ['checkboxes']
    if (classes) wrapClasses = [...wrapClasses, ...classes]

    return (
        <div className={wrapClasses.join(' ')}>
            <p className="checkboxes__title">{title}</p>
            <ul>
                {
                    data.map((item, i) => (
                        <li key={i} className="checkboxes__item">
                            <Checkbox
                                label={item.title}
                                name={name}
                                value={item.value}
                                checked={value.includes(item.value)}
                                onChange={handleChange}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CheckboxGroup