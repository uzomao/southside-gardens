import React, { useState } from 'react'
import Modal from '../components/modal'

const Garden = ({ setCurrentScreenName, screenNames }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(true)

    const addButtonStyle = {
        position: 'absolute',
        bottom: '15px',
        right: '15px',
        fontSize: '24px',
    }
  return (
    <div>
        <button style={addButtonStyle} onClick={() => setIsModalOpen(true)}>
            <span role='img' aria-label='plus sign emoji'>➕</span>
        </button>
        { isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  )
}

export default Garden