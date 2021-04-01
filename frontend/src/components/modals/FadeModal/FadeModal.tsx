import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './FadeModal.scss'

type FadeModalProps = {
    isShow: boolean
    timeout?: number
    unmountOnExit?: boolean
    onClose: () => void
}

const FadeModal: React.FC<FadeModalProps> = (props) => {
    const {
        isShow, children,
        timeout = 300, unmountOnExit = true,
        onClose,
    } = props

    const handleClose = () => {
        onClose()
    }

    return (
        <CSSTransition
            in={isShow}
            timeout={timeout}
            unmountOnExit={unmountOnExit}
            classNames={{
                enter: 'enter',
                enterDone: 'enter',
                exit: 'exit',
                exitDone: 'exit',
            }}
        >
            <div className="fade-modal">
                <div className="fade-modal__overlay" onClick={handleClose}></div>
                <div className="fade-modal__body">
                    {
                        children
                    }
                </div>
            </div>
        </CSSTransition>
    )
}

export default FadeModal