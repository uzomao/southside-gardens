import React from 'react'
import { images } from '../utils/default-images'

const Modal = ({ setIsModalOpen, addImageToGarden }) => {

    const modalStyles = {
        background: `rgba(34, 34, 34, 0.9)`,
        width: '45%',
        height: '100%',
        overflow: 'scroll',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 99
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

    const selectImage = (imageUrl) => {
        addImageToGarden(imageUrl)
        setIsModalOpen(false)
    }

    return (
        <div style={modalStyles}>
            <button style={closeButtonStyles} onClick={() => setIsModalOpen(false)}>
                <span role='img' aria-label='close or times sign emoji'>✖️</span>
            </button>
            <div style={imagesContainer}>
                {
                    images.map((imageUrl) => 
                        <div style={{width: '40%', padding: '2.5%'}}>
                            <img 
                                style={{maxWidth: '100%', cursor: 'pointer'}} 
                                src={imageUrl} 
                                alt='' 
                                onClick={() => selectImage(imageUrl)}
                            />
                        </div>
                )}
            </div>
        </div>
    )
}

export default Modal