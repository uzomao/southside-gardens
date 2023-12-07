import React from 'react'
import { images } from '../utils/default-images'

const Modal = ({ setIsModalOpen }) => {

    const modalStyles = {
        background: `rgba(0, 0, 0, 0.85)`,
        width: '45%',
        height: '100%',
        overflow: 'scroll',
        position: 'absolute',
        top: 0,
        right: 0
    }

    const closeButtonStyles = {
        position: 'absolute',
        top: '10px',
        right: '10px'
    }

    const imagesContainer = {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '10px',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div style={modalStyles}>
            <button style={closeButtonStyles} onClick={() => setIsModalOpen(false)}>
                <span role='img' aria-label='close or times sign emoji'>✖️</span>
            </button>
            <div style={imagesContainer}>
                {
                    images.map((image) => 
                        <div style={{width: '40%', padding: '2.5%'}}>
                            <img style={{maxWidth: '100%'}} src={image} alt='' />
                        </div>
                )}
            </div>
        </div>
    )
}

export default Modal