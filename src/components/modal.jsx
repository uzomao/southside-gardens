import React from 'react'

const Modal = ({ setIsModalOpen }) => {

    const modalStyles = {
        height: '100%',
        background: `rgba(0, 0, 0, 0.85)`,
        width: '45%',
        position: 'absolute',
        top: 0,
        right: 0
    }

    const closeButtonStyles = {
        position: 'absolute',
        top: '10px',
        right: '10px'
    }

    return (
        <div style={modalStyles}>
            <button style={closeButtonStyles} onClick={() => setIsModalOpen(false)}>
                <span role='img' aria-label='close or times sign emoji'>✖️</span>
            </button>
        </div>
    )
}

export default Modal