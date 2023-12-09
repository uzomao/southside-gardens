import React from 'react'
import Clouds from './clouds'

const Layout = ({ children }) => {
  return (
    <div style={{position: 'fixed', width: '100%'}} id='main-container'>
      <div id='sky'>
        <Clouds numClouds={3} />
      </div>
      <div id='ground'>
        {children}
      </div>
    </div>
  )
}

export default Layout