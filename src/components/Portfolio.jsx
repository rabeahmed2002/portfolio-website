import React from 'react'
import reviews from '../assets/portfolio/reviews.png'
import menu from '../assets/portfolio/menu.png'
import tenzies from '../assets/portfolio/tenzies.png'
import tours from '../assets/portfolio/tours.png'
import grocerycart from '../assets/portfolio/grocerycart.png'
import facebookClone from '../assets/portfolio/facebookClone.png'

const Portfolio = () => {

    const Portfolio=[
        {
          id: 6,
          src: facebookClone,
          href: "https://facebook-clone-expertizo.netlify.app/",
          code: "https://github.com/rabeahmed2002/facebook-login-page"
        },
        {
            id: 1,
            src: menu,
            href: "https://bakerymenu.netlify.app/",
            code: "https://github.com/rabeahmed2002/restuarant-menu"
        },
        {
            id: 2,
            src: reviews,
            href: "https://employeereview.netlify.app/",
            code: "https://github.com/rabeahmed2002/reviews-app"
        },
        {
            id: 3,
            src: tours,
            href: "https://mytourdiary.netlify.app/",
            code: "https://github.com/rabeahmed2002/tours"
        },
        {
            id: 4,
            src: tenzies,
            href: "https://tenziesdiegame.netlify.app/",
            code: "https://github.com/rabeahmed2002/tenzies-game"
        },
        {
          id: 5,
          src: grocerycart,
          href: "https://grocery-shopping-bag.netlify.app/",
          code: "https://github.com/rabeahmed2002/grocery-cart"
        }
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-black text-white md:h-screen flex-auto ">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">

            <p className="text-5xl font-bold py-15 text-center">Portfolio</p>
            <p className="py-6 	text-center">Check out some projects made by me!</p>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {Portfolio.map(({ id, src, href, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

                <a href={href} target="_blank" rel="noreferrer">
                  <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>

                {/* <a href={code} target="_blank" rel="nonreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a> */}
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Portfolio
