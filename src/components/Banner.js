import React from 'react'
import './Banner.css'

let bannerData = {
    title :" SearchTrees ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet nunc lacus, nec sodales orci pharetra quis. Donec tortor leo, efficitur ac aliquet at, viverra sed urna. Aliquam tincidunt dui non eros fermentum, commodo volutpat ex blandit."
}

function Banner() {
    return (
        
        <div className="banner-bg">
            <div className="overlay"></div>
            <div className="container">
                
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>{bannerData.title}</h1>
                           <p>
                               {bannerData.desc}
                           </p>
                           
                    
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Banner
