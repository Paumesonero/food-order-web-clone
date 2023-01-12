import React from 'react'
import ReactDOM from 'react-dom';
import cssClasses from './Modal.module.css'

const Backdrop = props => {
    const { onClose } = props
    return (
        <div className={cssClasses.backdrop} onClick={onClose}></div>
    )
};
const ModalOverlay = props => {
    return (
        <div className={cssClasses.modal}>
            <div className={cssClasses.content}>{props.children}</div>
        </div>
    )

};
//We portal the overlay and the backdrop purely for semantic reasons 
//with the html, to poral in our index.html we create another div above
// the one with id root and we give the created div an id of 'overlays', this is
//where we will portal the backdrop and overlay.
const portalElement = document.getElementById('overlays')

export default function Modal(props) {
    const { onClose } = props
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}
