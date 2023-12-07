import React from 'react'
import Clouds from './clouds'

const Layout = ({ children }) => {
  return (
    <div>
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