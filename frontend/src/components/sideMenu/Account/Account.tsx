import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import './Account.scss'
import TabPanel from '../../ui/TabPanel/TabPanel'
import PublishIcon from '@material-ui/icons/Publish';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';

type AccountProps = {
    value: number
    index: number
}

const Account: React.FC<AccountProps> = (props) => {
    const { value, index } = props

    const [isEdit, setEdit] = useState<boolean>(false)

    const [newImage, setNewImage] = useState<File | null>(null)
    const [newImageUrl, setNewImageUrl] = useState<string>('')

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = (e) => {
                const url = e.target?.result
                if (url) {
                    setNewImage(file)
                    setNewImageUrl(url.toString())
                }
            }
            reader.onerror = () => {
                setNewImage(null)
                setNewImageUrl('')
            }
        }
    }

    const handleClickUploadImage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setNewImageUrl('')
        setNewImage(null)
    }
    const handleClickCancelImage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setNewImageUrl('')
        setNewImage(null)
    }

    return (
        <div className="account">
            <TabPanel value={value} index={index}>
                <div className="account__content">
                    <form className="account__body">

                        <div className="account__top">
                            <div className="account__img">
                                <img src={newImageUrl || "/static/img/defaultAvatar.jpg"} alt="avatar" />
                                <label className="account__new-img-field">
                                    <PublishIcon className="account__new-img-icon" />
                                    New photo
                                    <input
                                        type="file"
                                        className="account__img-input"
                                        onChange={handleChangeImage}
                                    />
                                </label>
                            </div>
                            {
                                newImage && newImageUrl &&
                                <div className="account__new-img-controls">
                                    <p className="account__new-img-title">Change the photo?</p>
                                    <button
                                        className="account__new-img-agree btn btn-primary"
                                        onClick={handleClickUploadImage}
                                    >
                                        <SaveIcon />
                                    </button>
                                    <button
                                        className="account__new-img-cancel btn btn-danger"
                                        onClick={handleClickCancelImage}
                                    >
                                        <CancelIcon />
                                    </button>
                                </div>
                            }
                        </div>

                        <div className="account__fields">
                            <TextField
                                label="Name"
                                value="Alex"
                                variant="outlined"
                                size="small"
                                className="account__field"
                                disabled={!isEdit}
                            />
                            <TextField
                                label="Email"
                                value="safronov.sanya37@gmail.com"
                                variant="outlined"
                                size="small"
                                className="account__field"
                                disabled={!isEdit}
                            />
                            <TextField
                                label="Phone"
                                value="+79512720000"
                                variant="outlined"
                                size="small"
                                className="account__field"
                                disabled={!isEdit}
                            />
                            <TextField
                                label="Country"
                                value="Russia"
                                variant="outlined"
                                size="small"
                                className="account__field"
                                disabled={!isEdit}
                            />
                            <TextField
                                label="City"
                                value="Kurgan"
                                variant="outlined"
                                size="small"
                                className="account__field"
                                disabled={!isEdit}
                            />
                        </div>

                        <div className="account__controls">
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
                                        onClick={() => setEdit(false)}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className="account__form-btn"
                                        onClick={() => setEdit(false)}
                                    >
                                        Cancel
                                    </Button>
                                </>
                            }
                        </div>

                    </form>
                </div>
            </TabPanel>
        </div>
    )
}

export default Account