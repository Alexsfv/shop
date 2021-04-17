import React from 'react'
import './Checkbox.scss'
import CheckIcon from '@material-ui/icons/Check';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    wrapClasses?: string[]
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const {
        label, name,
        value, checked, onChange,
        wrapClasses,
        ...otherProps
    } = props

    const labelClasses = () => {
        let classes = ['checkbox']
        if (wrapClasses) classes = [...classes, ...wrapClasses]
        return classes.join(' ')
    }

    return (
        <label className={labelClasses()}>
            <input
                type="checkbox"
                name={props.name}
                value={props.value}
                className="checkbox__input"
                checked={props.checked}
                onChange={onChange}
                {...otherProps}
            />
            <div className="checkbox__fake-box">
                <div className="checkbox__fake-box-bg"/>
                <CheckIcon className="checkbox__icon"/>
            </div>
            <span className="checkbox__text">
                {label}
            </span>
        </label>
    )
}

export default Checkbox