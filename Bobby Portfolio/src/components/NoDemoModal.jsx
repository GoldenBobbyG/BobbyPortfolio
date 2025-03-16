import React from 'react';
import '../styles/Modal.css';

function NoDemoModal({ isOpen, onClose, title}){
    if (!isOpen) return null;

    return (
       <div className='modal-overlay'>
            <div className="modal-content">
                <h2>Demo Not Provided</h2>
                <p>
                    Live demo for <strong>{title}</strong> is not available.
                </p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default NoDemoModal;