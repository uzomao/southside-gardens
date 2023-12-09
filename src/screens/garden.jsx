import React, { useState } from 'react'
import Modal from '../components/modal'
import Draggable from 'react-draggable'
import html2canvas from 'html2canvas'
import { saveGardenToDb } from '../utils/supabase'

const Garden = ({ setCurrentScreenName, screenNames, currentVisitor }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ gardenImages, setGardenImages ] = useState([])
    const [ foregroundZIndex, setForegroundZIndex ] = useState(0)
    const [ imgData, setImgData ] = useState(null)

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

    const buttonContainer = {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
      }

    const addImageToGarden = (image) => {
        setGardenImages([...gardenImages, image])
    }

    // const removeImageFromGarden = (imageUrl) => {
    //     console.log('delete clicked')
    //     gardenImages.splice(gardenImages.indexOf(imageUrl), 1)
    // }

    const saveGarden = () => {
        document.getElementById('buttons-container').style.display = 'none'

        const element = document.getElementById('ground');

        html2canvas(element).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            setImgData(imgData)
            // saveGardenToDb({
            //     name: currentVisitor.garden,
            //     gardener: currentVisitor.name,
            //     image_url: imgData
            // })
        })
    }

    const setActiveImage = (e, index) => {
        // Place the image in the foreground
        setForegroundZIndex(foregroundZIndex + 1)
        e.target.parentElement.style.zIndex = foregroundZIndex;
        
        // Disable any currently active image
        // Array.from(document.getElementsByClassName('drag-active')).forEach((elem) => elem.className = '')

        // Set the current image to be acitve
        // e.target.className = 'drag-active'
        // document.getElementById(`delete-btn-${index}`).className = 'drag-active'
    }

    return (
        !imgData ? (
          <>
            <div>
              {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} addImageToGarden={addImageToGarden} />}
      
              {gardenImages.map((imageUrl, index) => (
                <Draggable key={index} onStart={(event) => setActiveImage(event, index)}>
                  <div style={imageContainerStyle}>
                    <img style={imageStyle} src={imageUrl} alt='' />
                  </div>
                </Draggable>
              ))}
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
        ) : (
          <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
            {/* <p className='higher-display'>Garden saved successfully</p> */}
            {<img src={imgData} alt='' style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />}
            {/* <div style={{buttonContainer}} className='higher-display'>
                <button onClick={() => setCurrentScreenName(screenNames.start)}>Return to start screen</button>
                {/* <button>Explore other gardens</button>
            </div> */}
          </div>
        )
      );
      
                    
}

export default Garden