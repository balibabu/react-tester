import React from 'react'
import Swipe from './Swipe'
import Storage from './Storage'
import Framer from '../FramerMotion/Framer'

export default function Carosel() {
    return (
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner overflow-auto" style={{height:'100dvh'}}>
                <div class="carousel-item active">
                    {/* <Swipe /> */}
                    <div>hello world</div>
                </div>
                <div class="carousel-item">
                    <Storage />
                </div>
                <div class="carousel-item">
                    <Framer />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
