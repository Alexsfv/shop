import React from 'react'
import './CheckboxGroup.scss'




import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);



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
            <ul className="checkboxes__list">
                {
                    data.map((item, i) => (
                        <li key={i} className="checkboxes__item">
                            <FormControlLabel
                                control={<GreenCheckbox checked={value.includes(item.value)} onChange={handleChange} name={name} />}
                                label="Custom color"
                            />
                            {/* <label className="checkboxes__label">
                                <input
                                    type="checkbox"
                                    name={name}
                                    value={item.value}
                                    className="checkboxes__input"
                                    checked={value.includes(item.value)}
                                    onChange={handleChange}
                                />
                                {
                                    item.color &&
                                        <div
                                            className="checkboxes__item-color"
                                            style={{ backgroundColor: item.color }}
                                        >
                                        </div>
                                }
                                <span className="checkboxes__text">
                                    { item.title }
                                </span>
                            </label> */}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CheckboxGroup