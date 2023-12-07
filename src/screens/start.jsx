import React from 'react'

const Start = ({ setCurrentScreenName, screenNames }) => {
  const styles = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const buttonContainer = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  }

  const buttonStyle = {
    cursor: 'pointer'
  }
  
  return (
    <div style={styles}>
      <h1>Welcome</h1>
      <div style={{buttonContainer}}>
        <button style={buttonStyle} onClick={() => setCurrentScreenName(screenNames.garden)}>Create a new garden</button>
        <button style={buttonStyle}>Explore other gardens</button>
      </div>
    </div>
  )
}

export default Start