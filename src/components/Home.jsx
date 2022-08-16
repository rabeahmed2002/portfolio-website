import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-900'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4cl sm:text-6xl font-bold text-white'>
                    I'm a MERN Stack Developer
                </h2>
                <p className='text-gray-500 text-1xl py-5 max-w-md'>
                With a 3 months experience in building MERN apps, having several projects created, I hold command in building React apps, having to know how to use hooks, jsx, forms etc
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>      <MdOutlineKeyboardArrowRight size={25} className=''/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="Image" className='rounded-3xl mx-auto w-1/3 md:w-80'/>
            </div>
        </div>
    </div>
  )
}

export default Home
