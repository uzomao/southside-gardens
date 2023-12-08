import React, { useState } from 'react'
import Modal from '../components/modal'
import Draggable from 'react-draggable'

const Garden = ({ setCurrentScreenName, screenNames }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(true)
    const [ gardenImages, setGardenImages ] = useState([])

    const addButtonStyle = {
        position: 'fixed',
        bottom: '15px',
        right: '15px',
        fontSize: '24px',
    }

    const imageStyle = {
        position: 'absolute',
        top: '40%',
        left: '40%',
        maxWidth: '200px'
    }

    const addImageToGarden = (image) => {
        setGardenImages([...gardenImages, image])
    }

  return (
    <div>
        <button style={addButtonStyle} onClick={() => setIsModalOpen(true)}>
            <span role='img' aria-label='plus sign emoji'>➕</span>
        </button>

        { isModalOpen && <Modal setIsModalOpen={setIsModalOpen} addImageToGarden={addImageToGarden} /> }

        {
            gardenImages.map((image) => <Draggable><img style={imageStyle} src={image} alt='' /></Draggable>)
        }
    </div>
  )
}

export default Garden