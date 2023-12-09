import React, { useState } from 'react'
import Modal from '../components/modal'
import Draggable from 'react-draggable'

const Garden = ({ setCurrentScreenName, screenNames }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(true)
    const [ gardenImages, setGardenImages ] = useState([])
    const [ foregroundZIndex, setForegroundZIndex ] = useState(0)

    const addButtonStyle = {
        position: 'fixed',
        bottom: '15px',
        right: '15px',
        fontSize: '24px',
        zIndex: 99
    }

    const imageContainerStyle = {
        position: 'absolute',
        top: '40%',
        left: '40%',
        maxWidth: '200px',
        resize: 'both',
        overflow: 'hidden',
        // boxShadow: `0px 20px 4px rgba(0,0,0,0.25)`
    }

    const imageStyle = {
        width: '100%',
        height: '100%'
    }

    const addImageToGarden = (image) => {
        setGardenImages([...gardenImages, image])
    }

    const foregroundImage = (e) => {
        setForegroundZIndex(foregroundZIndex + 1)
        e.target.style.zIndex = foregroundZIndex;
    }

  return (
    <div>
        <button style={addButtonStyle} onClick={() => setIsModalOpen(true)}>
            <span role='img' aria-label='plus sign emoji'>➕</span>
        </button>

        { isModalOpen && <Modal setIsModalOpen={setIsModalOpen} addImageToGarden={addImageToGarden} /> }

        {
            gardenImages.map((imageUrl) => 
                <Draggable onStart={(event) => foregroundImage(event)}>
                    <div style={imageContainerStyle}>
                        <img style={imageStyle} src={imageUrl} alt='' />
                    </div>
                </Draggable>
        )}
    </div>
  )
}

export default Garden