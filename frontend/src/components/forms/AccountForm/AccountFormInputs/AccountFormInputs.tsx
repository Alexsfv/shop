import React, { useState } from 'react'
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import { TextField } from '@material-ui/core'
import InputImage from '../../../formComponents/InputImage/InputImage';
import { AccountFormValues } from '../../../../types/forms';
import { FormikErrors } from 'formik';


type AccountFormInputsProps = {
    values: AccountFormValues
    errors: FormikErrors<AccountFormValues>
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<FormikErrors<AccountFormValues>> | Promise<void>
    onUploadImg: () => void
    handleChange: React.ChangeEventHandler
    onResetChanges: () => void
    onSubmit: () => void
    onExit: () => void
}

const AccountFormInputs: React.FC<AccountFormInputsProps> = (props) => {

    const {
        values, errors,
        setFieldValue, onUploadImg,
        handleChange, onResetChanges,
        onSubmit, onExit,
    } = props

    const [isEdit, setEdit] = useState<boolean>(false)

    const onSave = () => {
        onSubmit()
        setEdit(false)
    }

    const onCancel = () => {
        onResetChanges()
        setEdit(false)
    }

    const onUpdateImg = () => {
        onUploadImg()
        setFieldValue('_img', null)
    }

    return (
        <>
            <div className="account__top">
                <InputImage
                    file={values._img}
                    defaultImgSrc={values.imageSrc}
                    onChangeImg={file => setFieldValue('_img', file)}
                />
                {
                    values._img &&
                    <div className="account__new-img-controls">
                        <p className="account__new-img-title">Change the photo?</p>
                        <button
                            className="account__new-img-agree btn btn-primary"
                            onClick={onUpdateImg}
                        >
                            <SaveIcon />
                        </button>
                        <button
                            className="account__new-img-cancel btn btn-danger"
                            onClick={() => setFieldValue('_img', null)}
                        >
                            <CancelIcon />
                        </button>
                    </div>
                }
            </div>

            <div className="account__fields">
                <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    name="name"
                    className="account__field"
                    value={values.name}
                    error={!!errors.name}
                    helperText={errors.name}
                    disabled={!isEdit}
                    onChange={handleChange}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    name="email"
                    className="account__field"
                    value={values.email}
                    error={!!errors.email}
                    helperText={errors.email}
                    disabled={!isEdit}
                    onChange={handleChange}
                />
                <TextField
                    label="Phone"
                    variant="outlined"
                    size="small"
                    name="phone"
                    className="account__field"
                    value={values.phone}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    disabled={!isEdit}
                    onChange={handleChange}
                />
                <TextField
                    label="Country"
                    variant="outlined"
                    size="small"
                    name="country"
                    className="account__field"
                    value={values.country}
                    error={!!errors.country}
                    helperText={errors.country}
                    disabled={!isEdit}
                    onChange={handleChange}
                />
                <TextField
                    label="City"
                    variant="outlined"
                    size="small"
                    name="city"
                    className="account__field"
                    value={values.city}
                    error={!!errors.city}
                    helperText={errors.city}
                    disabled={!isEdit}
                    onChange={handleChange}
                />
            </div>

            <div className="account__controls">
                <div className="account__controls-left">
                    <Button
                        variant="contained"
                        color="secondary"
                        className="account__form-btn"
                        onClick={onExit}
                    >
                        Exit
                        </Button>
                </div>
                <div className="account__controls-right">
                    {
                        !isEdit &&
                        <Button
                            variant="contained"
                            color="primary"
                            className="account__form-btn"
                            onClick={() => setEdit(true)}
                        >
                            Edit
                    </Button>
                    }
                    {
                        isEdit &&
                        <>
                            <Button
                                variant="contained"
                                color="primary"
                                className="account__form-btn"
                                onClick={onSave}
                            >
                                Save
                        </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                className="account__form-btn"
                                onClick={onCancel}
                            >
                                Cancel
                        </Button>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default AccountFormInputs