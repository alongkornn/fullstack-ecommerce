import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For the best experience, download our app now!</p>
        <div className="app-download-platforms">
            <img src={assets.playstore} alt="" />
            <img src={assets.appstore} alt="" />
        </div>
    </div>
  )
}

export default AppDownload