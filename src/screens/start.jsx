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
  
  return (
    <div style={styles}>
      <h1>Welcome</h1>
      <div style={{buttonContainer}}>
        <button onClick={() => setCurrentScreenName(screenNames.intro)}>Create a new garden</button>
        <button >Explore other gardens</button>
      </div>
    </div>
  )
}

export default Start