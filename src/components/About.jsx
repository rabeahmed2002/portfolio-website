import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold text-center">
            About
          </p>
        </div>

        <p className="text-xl text-center">
        A junior web developer focused on MERN stack development, having an experience of 3 months in building React.js apps. I am currently in 2nd year of my Bachelors of Computer Science from the University of Karachi, UBIT.
        I have worked on a range of technologies which demonstrates my ability adapt to work environment and my quick learning ability. I am always motivated to design and develop websites and solve complex problems.
        </p>
      </div>
    </div>
  );
};

export default About;
