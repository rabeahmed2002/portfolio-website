import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold text-center">
            About
          </p>
        </div>

        <p className="text-xl text-center">
        As a current student pursuing a Bachelor's degree in Computer Science from the University of Karachi, I am passionate about web development, mobile app development, and blockchain research. My interests are fueled by my skills in problem-solving, object-oriented programming, and data structures.

        {'\n'}

While my experience as a web developer is still in its early stages, I am committed to learning and growing as a professional in this field. I believe that my education and skills, combined with my enthusiasm for exploring new technologies, will enable me to make valuable contributions to any project I work on.

I am always eager to collaborate with like-minded individuals and organizations that share my passion for innovation and creativity. If you're looking for a dedicated and hardworking team player with a keen eye for detail and a thirst for knowledge, please don't hesitate to reach out to me.

        </p>
      </div>
    </div>
  );
};

export default About;
