import React from 'react'
import poster from '../assets/landing-poster.png'
import power from '../assets/power-tiller.webp'
import tracktor from '../assets/tracktor.webp'
import unicorn from '../assets/unicorn.jpg'
import shine from '../assets/shine.jpg'

const Home = () => {
  return (
    <>
    <div className="grid gap-4 mt-10">
    <div>
        <img className="h-auto max-w-full" src={poster} alt="poster" />
    </div>
    <div className="grid grid-cols-4 gap-3 m-7">
    <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
        <img className="  h-auto max-w-full rounded-sm" src={power} alt="" />
    </div>
    <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
        <img className="  h-auto max-w-full rounded-sm" src={tracktor} alt="" />
    </div>
    <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
        <img className="  h-auto max-w-full rounded-sm" src={unicorn} alt="" />
    </div>
    <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
        <img className="  h-auto max-w-full rounded-sm" src={shine} alt="" />
    </div>
</div>

</div>


 
    </>
  )
}

export default Home