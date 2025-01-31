import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='md:h-screen mt:48 pt-40 pb-36 md:w-full flex justify-center bg-black to-gray-900'>

        <div className='mt-15 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-5/6 md:h-full px-4 md:flex-row'>

            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-5xl  md:text-6xl font-bold text-white'>
                    I'm a MERN Stack Developer
                </h2>
                <p className='text-gray-500 text-1xl py-5 max-w-md '>
                Junior MERN stack developer with a demonstrated history of working in the computer software industry. Skilled in Javascript, React.js, Node.js, Python, C++, Microsoft Excel, and Graphic Design with a Bachelor of Science - BS focused in Computer Science from Karachi University.
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>      <MdOutlineKeyboardArrowRight size={25} className=''/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className='w-5/6 mt-24 flex justify-center'>
                <img src={HeroImage} alt="Image" className='rounded-3xl     md:mx-auto w-2/3 md:w-80 mb-20'/>
            </div>
        </div>
    </div>
  )
}

export default Home
