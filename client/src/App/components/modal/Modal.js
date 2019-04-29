// credits to james King [UPMOSTLY]
// https://upmostly.com/tutorials/modal-components-react-custom-hooks/
import React from 'react';
import ReactDOM from 'react-dom';

import './modal.scss';

const Modal = ({isOpen, close, children, title=""}) => isOpen ? ReactDOM.createPortal(
    <>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal" >
                <div className="modal-header">
                    <span className="modal-title">{title}</span>
                    <button 
                        type="button" 
                        className="modal-close" 
                        data-dismiss="modal" 
                        aria-label="Close" 
                        onClick={close}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    </>, document.body )
    : null;

export default Modal;