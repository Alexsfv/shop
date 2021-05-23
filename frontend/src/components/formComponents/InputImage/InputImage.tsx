import React, { useState } from 'react'
import './InputImage.scss'
import PublishIcon from '@material-ui/icons/Publish';
import { host } from '../../../api/urls';


type InputImageProps = {
    file: File | null
    defaultImgSrc?: string
    onChangeImg: (file: File | null) => void
}

const InputImage: React.FC<InputImageProps> = (props) => {

    const {
        file, defaultImgSrc, onChangeImg,
    } = props

    const [newImageUrl, setNewImageUrl] = useState<string>('')

    const imgSrc = file ? newImageUrl : `${host}${defaultImgSrc}`

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = (e) => {
                const url = e.target?.result
                if (url) {
                    onChangeImg(file)
                    setNewImageUrl(url.toString())
                }
            }
            reader.onerror = () => {
                onChangeImg(null)
                setNewImageUrl('')
            }
        }
    }


    return (
        <div className="input-img">
            <img src={imgSrc} alt="avatar" />
            <label className="input-img__new-field">
                <PublishIcon className="input-img__new-icon" />
                New photo
            <input
                    type="file"
                    className="input-img__input"
                    onChange={handleChangeImage}
                />
            </label>
        </div>
    )
}

export default InputImage

