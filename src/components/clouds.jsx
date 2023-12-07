import React from 'react'
import styles from '../styles/clouds.module.css'

const cloudTopPositions = [0,10,20,30]

export default function Clouds ({ numClouds }) {

    const clouds = []

    for(let i = 0; i < numClouds; i++){
        clouds.push(<div className={styles.cloud} key={i} style={{
            animationDelay: `${i*10}s`,
            // top: `${cloudTopPositions[Math.floor(Math.random()*cloudTopPositions.length)]}px`
          }}></div>)
    }

    return (
        <>
            {clouds.map((cloud) => cloud)}
        </>
    )
}