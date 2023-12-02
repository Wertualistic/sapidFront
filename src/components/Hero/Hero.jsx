import React from 'react'
import './hero.css'
import Poster from '../Sale/Poster/Poster'
import Sale from '../Sale/Sale'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero_item container'>
                <Sale />
                <Poster />
            </div>
        </section>
    )
}

export default Hero