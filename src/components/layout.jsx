import React from 'react'
import Clouds from './clouds'

const Layout = ({ children, showSky }) => {
  
  return (
    <div style={{position: 'fixed', width: '100%'}} id='main-container'>
      {showSky && 
        <div id='sky'>
          <Clouds numClouds={3} />
        </div>
      }
      <div id='ground' className={showSky ? '' : 'is-garden-screen'}>
        {children}
      </div>
    </div>
  )
}

export default Layout