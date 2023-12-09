import React, { useState } from 'react'
import Modal from '../components/modal'
import Draggable from 'react-draggable'
import html2canvas from 'html2canvas'

const Garden = ({ setCurrentScreenName, screenNames }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ gardenImages, setGardenImages ] = useState([])
    const [ foregroundZIndex, setForegroundZIndex ] = useState(0)

    const buttonsContainer = {
        position: 'fixed',
        bottom: '15px',
        right: '15px',
        fontSize: '24px',
        zIndex: 99,
        display: 'flex',
        justifyContent: 'space-between',
        width: '10%'
    }

    const imageContainerStyle = {
        position: 'absolute',
        top: '40%',
        left: '40%',
        maxWidth: '200px',
        resize: 'both',
        overflow: 'hidden',
        cursor: 'pointer'
        // boxShadow: `0px 20px 4px rgba(0,0,0,0.25)`
    }

    const imageStyle = {
        width: '100%',
        height: '100%'
    }

    const deleteBtnStyle = {
        background: 'red',
        color: 'white',
        textAlign: 'center',
        display: 'none',
        borderRadius: '100%',
        width: '10px', height: '10px', padding: '5px',
        justifyContent: 'center', alignItems: 'center',
        position: 'absolute', top: 0, right: 0,
        border: `none !important`,
        cursor: 'pointer',
        zIndex: 98
    }

    const addImageToGarden = (image) => {
        setGardenImages([...gardenImages, image])
    }

    const removeImageFromGarden = (imageUrl) => {
        console.log('delete clicked')
        gardenImages.splice(gardenImages.indexOf(imageUrl), 1)
    }

    const saveGarden = () => {
        document.getElementById('buttons-container').style.display = 'none'

        const element = document.getElementById('main-container');

        html2canvas(element).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            console.log(imgData)
        })
    }

    const setActiveImage = (e, index) => {
        // Place the image in the foreground
        setForegroundZIndex(foregroundZIndex + 1)
        e.target.parentElement.style.zIndex = foregroundZIndex;
        
        // Disable any currently active image
        Array.from(document.getElementsByClassName('drag-active')).forEach((elem) => elem.className = '')

        // Set the current image to be acitve
        e.target.className = 'drag-active'
        document.getElementById(`delete-btn-${index}`).className = 'drag-active'
    }

  return (
    <>
        <div>
            { isModalOpen && <Modal setIsModalOpen={setIsModalOpen} addImageToGarden={addImageToGarden} /> }

            {
                gardenImages.map((imageUrl, index) => 
                    <Draggable onStart={(event) => setActiveImage(event, index)}>
                        <div style={imageContainerStyle}>
                            <img style={imageStyle} src={imageUrl} alt='' />
                            <span 
                                style={deleteBtnStyle} 
                                id={`delete-btn-${index}`}
                                onClick={() => removeImageFromGarden(imageUrl)}
                            >
                                x
                            </span>
                        </div>
                    </Draggable>
            )}
        </div>
        <div style={buttonsContainer} id='buttons-container'>
            <button onClick={() => setIsModalOpen(true)}>
                <span role='img' aria-label='plus sign emoji'>➕</span>
            </button>
            <button onClick={() => saveGarden()}>
                💾
            </button>
        </div>
    </>
  )
}

export default Garden