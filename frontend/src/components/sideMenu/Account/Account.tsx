import React, { useEffect } from 'react'
import './Account.scss'
import TabPanel from '../../ui/TabPanel/TabPanel'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers/rootReducer';
import { UserState } from '../../../store/reducers/userReducer';
import { useFormik } from 'formik';
import { AccountFormValues } from '../../../types/forms';
import { initialAccountForm, validateAccountForm } from '../../forms/AccountForm/formData.ts/accountFormData';
import AccountFormInputs from '../../forms/AccountForm/AccountFormInputs/AccountFormInputs';
import { userSagaActions } from '../../../store/saga/userSaga';
import { userActions } from '../../../store/actions/userActions';

type AccountProps = {
    value: number
    index: number
}

const Account: React.FC<AccountProps> = (props) => {
    const { value, index } = props

    const user = useSelector<RootState>(state => state.user.info) as UserState['info']

    const dispatch = useDispatch()

    const formik = useFormik<AccountFormValues>({
        initialValues: initialAccountForm,
        validate: validateAccountForm,
        onSubmit: (values) => {
            dispatch(userSagaActions.updateInfo(values))
            resetChanges()
        }
    })

    const handleUploadImg = () => {
        const file = formik.values._img
        if (file) dispatch(userSagaActions.updateAvatar(file))
    }

    const resetChanges = () => {
        formik.setValues({
            ...formik.values,
            name: user.name,
            imageSrc: user.image,
            email: user.email,
            phone: user.phone,
            country: user.country,
            city: user.city,
        })
    }

    const onExit = () => dispatch(userActions.logout())

    useEffect(() => {
        resetChanges()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <div className="account">
            <TabPanel value={value} index={index}>
                <div className="account__content">
                    <form className="account__body" onSubmit={e => e.preventDefault()}>
                        <AccountFormInputs
                            values={formik.values}
                            errors={formik.errors}
                            setFieldValue={formik.setFieldValue}
                            handleChange={formik.handleChange}
                            onUploadImg={handleUploadImg}
                            onResetChanges={resetChanges}
                            onSubmit={formik.submitForm}
                            onExit={onExit}
                        />
                    </form>
                </div>
            </TabPanel>
        </div>
    )
}

export default Account