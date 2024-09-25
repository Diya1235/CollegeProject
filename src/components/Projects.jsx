import React, { useState, useEffect } from 'react';
import Navbar from './shared/Navbar.jsx';
import Footer from './Footer.jsx';
import img1 from './webconst.jpg';
import img2 from './Webdev.jpg';
import img3 from './app.jpg';
import img4 from './app2.jpg';
import img5 from './iot1.jpg';
import img6 from './Iot2.jpg';
import obj from './obj.png';
import time from './time.png';
import risk from './risk.png';
import stake from './stake.png';
import { Button } from './ui/button.jsx';
import iott from './iott.jpg';
import web from './Webdeve.jpg';
import app from './apps.jpg';


const Projects = () => {
  const images = [img1, img2, img3, img4, img5, img6]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 6); // Rotates every 3 seconds
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      {/* Sparkle effect isolated in a fixed container */}
      <div className="sparkle-container">
        <div className="sparkle sparkle-move"></div>
        <div className="sparkle sparkle-move"></div>
        <div className="sparkle sparkle-move"></div>
        <div className="sparkle sparkle-move"></div>
        <div className="sparkle sparkle-move"></div>
      </div>

      <div className="bg-gray-50 h-screen w-screen flex flex-col items-center justify-center -mt-12 lg:flex-row lg:justify-between lg:items-center lg:px-20">
        {/* Text and Button Container */}
        <div className="flex flex-col items-center lg:items-start lg:translate-x-16 lg:mr-2 lg:mb-0 lg:space-y-5">
          <p className="text-4xl text-slate-950 font-bold text-center mb-5 md:-mt-5 lg:text-left lg:-mt-60">
            The Best <span className='text-blue-600'>Online</span> <br />
            <span className="text-blue-500">Project</span> Finder
          </p>
          <p className="text-xl text-center lg:text-left mt-3 lg:mt-0 text-slate-950 font-semibold">
            Now it's easier to find your college project..
          </p>
          {/* Button */}
          <Button className="bg-blue-600 font-semibold lg:self-start mt-5">Find your Project now</Button>
          <p className='font-bold mt-5 px-7 text-xl text-blue-500 font-cursive'>
            Enhance your Resume <span className='text-slate-800'>|</span> Get easy approvals
          </p>
        </div>

        {/* 3D Cube for Flipping Cards */}
        <div className="relative w-64 h-64 perspective-1000 mt-7 lg:mt-0 lg:transform lg:-translate-x-40">
          <div
            className={`w-full h-full relative transform-style-3d transition-transform duration-1000`}
            style={{ transform: `rotateY(${currentIndex * 60}deg)` }}
          >
            {/* Each face of the cube */}
            <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateY(0deg) translateZ(210px)' }}>
              <img src={img1} alt="Image 1" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateY(60deg) translateZ(210px)' }}>
              <img src={img2} alt="Image 2" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateY(120deg) translateZ(210px)' }}>
              <img src={img3} alt="Image 3" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateY(180deg) translateZ(210px)' }}>
              <img src={img4} alt="Image 4" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateY(240deg) translateZ(210px)' }}>
              <img src={img5} alt="Image 5" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateY(300deg) translateZ(210px)' }}>
              <img src={img6} alt="Image 6" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>

        {/* Paragraph below the cube */}

      </div>
      <div className=" mt-8 px-4  lg:w-auto lg:absolute lg:bottom-0 lg:left-20">
        <p className="text-lg text-gray-700 font-semibold text-center lg:text-left">
          Our online project finder offers a quick and easy way to understand project categories in the IT domain,
          their importance, and the technologies required to build them. Its very useful to the students who are finding their
          project.
        </p>
      </div>
      <div className='min-h-screen bg-gradient-to-r from-cyan-200 to-sky-300 py-10 w-full h-full lg:h-[40%]'>
        {/* Header Section */}
        <div className='flex items-center justify-center '>
          <p className='text-3xl font-extrabold font-Cambria animate-bounce mt-10 text-blue-900 text-center'>
            WHAT IS A PROJECT?
          </p>
        </div>

        {/* Description Paragraph */}
        <div className='px-5 flex items-center justify-center mt-2'>
          <p className='text-lg font-medium text-slate-900 text-center max-w-screen-md'>
            A project is about creating software or systems to solve a problem or meet a need. It involves tasks like planning, coding, and testing. The goal is to deliver a functional solution within a set time frame. These projects aim to meet specific business or technical goals within a defined timeline.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-screen-lg mx-auto mt-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-md w-full sm:w-auto transform transition-transform duration-2000 hover:scale-75">
            <img src={obj} alt="Icon 1" className="w-10 mb-2" />
            <h3 className="text-base font-semibold text-gray-900">Defined Objectives</h3>
            <p className="text-xs text-gray-600 mt-1 text-center">
              Clear and specific goals, such as creating software or deploying a system, that guide the project’s direction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-md w-full sm:w-auto transform transition-transform duration-2000 hover:scale-75">
            <img src={time} alt="Icon 2" className="w-10 mb-2" />
            <h3 className="text-base font-semibold text-gray-900">Time Constraints</h3>
            <p className="text-xs text-gray-600 mt-1 text-center">
              A defined timeline that includes deadlines and milestones, ensuring the project progresses in a timely manner.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-md w-full sm:w-auto transform transition-transform duration-2000 hover:scale-75">
            <img src={stake} alt="Icon 3" className="w-10 mb-2" />
            <h3 className="text-base font-semibold text-gray-900">Stakeholder Involvement</h3>
            <p className="text-xs text-gray-600 mt-1 text-center">
              Active engagement with stakeholders (clients, users, and team members) to gather feedback throughout the project lifecycle.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-md w-full sm:w-auto">
            <img src={risk} alt="Icon 4" className="w-10 mb-2" />
            <h3 className="text-base font-semibold text-gray-900">Risk Management</h3>
            <p className="text-xs text-gray-600 mt-1 text-center">
              Proactive identification and assessment of potential risks, along with strategies to mitigate them, ensuring the project can adapt to unforeseen challenges.
            </p>
          </div>
        </div>
        <div className="container mx-auto p-5">
          <div className="text-center">
            <p className="text-4xl font-extrabold text-blue-900 mt-10 mb-7 animate-sparkle-move">
              TYPES OF PROJECT
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Web Development Card */}
            <div className="relative group w-full h-64">
              <div className="absolute w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotateY-180">
                {/* Front Face */}
                <div className="absolute backface-hidden w-full h-full p-4 bg-white rounded-full shadow-xl bg-gradient-to-r from-cyan-100 to-sky-300 flex flex-col items-center justify-center">
                  <img src={web} alt="Image 1" className="w-24 h-24 object-cover rounded-full mb-4" />
                  <h3 className="text-lg font-bold">WEB DEVELOPMENT</h3>
                </div>

                {/* Back Face */}
                <div className="absolute rotateY-180 backface-hidden w-full h-full p-4 bg-white rounded-full shadow-xl flex flex-col items-center justify-center bg-gradient-to-r from-cyan-300 to-sky-400">
                <h3 className="text-lg font-bold">WEB DEVELOPMENT</h3>
                  <ul className="text-sm text-blue-950 mt-2 font-bold text-center">

                    <li>Frontend vs. Backend: Frontend handles user interfaces, while backend manages databases and server logic.</li>
                    <li>Responsive Design: Websites adapt to different devices (desktop, mobile) for a seamless user experience.</li>
                    <li>Hosting: Websites are deployed on servers, making them accessible via the internet.</li>
                  </ul>

                </div>
              </div>
            </div>

            {/* App Development Card */}
            <div className="relative group w-full h-64">
              <div className="absolute w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotateY-180">
                {/* Front Face */}
                <div className="absolute backface-hidden w-full h-full p-4 bg-white rounded-full shadow-xl bg-gradient-to-r from-cyan-100 to-sky-300 flex flex-col items-center justify-center">
                  <img src={app} alt="Image 2" className="w-24 h-24 object-cover rounded-full mb-4" />
                  <h3 className="text-lg font-bold">APP DEVELOPMENT</h3>
                </div>

                {/* Back Face */}
                <div className="absolute rotateY-180 backface-hidden w-full h-full p-4 bg-white rounded-full shadow-xl flex flex-col items-center justify-center bg-gradient-to-r from-cyan-300 to-sky-400">
                <h3 className="text-lg font-bold">APP DEVELOPMENT</h3>
                  <ul className="text-sm text-blue-950 mt-2 font-bold text-center">
                    <li>Platforms: Apps are developed for mobile platforms like iOS and Android, or for cross-platform frameworks (e.g., Flutter).
                      User Interface (UI): Focuses on designing an intuitive and engaging interface for mobile users.
                      Backend Integration: Often requires connecting to databases and APIs to manage data and perform tasks.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* IoT Development Card */}
            <div className="relative group w-full h-64">
              <div className="absolute w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotateY-180">
                {/* Front Face */}
                <div className="absolute backface-hidden w-full h-full p-4 bg-white rounded-full shadow-xl bg-gradient-to-r from-cyan-100 to-sky-300 flex flex-col items-center justify-center">
                  <img src={iott} alt="Image 3" className="w-24 h-24 object-cover rounded-full mb-4" />
                  <h3 className="text-lg font-bold">IOT BASED</h3>
                </div>

                {/* Back Face */}
                <div className="absolute rotateY-180 backface-hidden w-full h-full p-4 bg-white rounded-full shadow-xl flex flex-col items-center justify-center bg-gradient-to-r from-cyan-300 to-sky-400">
                <h3 className="text-lg font-bold ">IOT BASED</h3>
                  <ul className="text-sm text-blue-950 mt-2 font-bold text-center">
                    <li><span className='font-blue-800'>Connectivity</span>: IoT (Internet of Things) projects involve connecting physical devices to the internet, enabling communication between them.</li>
                     <li>Automation: These projects often aim to automate tasks, like smart home systems that control lighting or appliances remotely.</li> 
                    <li>  Data Collection: IoT devices gather and analyze data in real-time, aiding decision-making in industries like healthcare, agriculture, and manufacturing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className='flex items-center justify-center mt-3 mb-2'>
        <Button className="bg-blue-500  w-24px lg:w-[20%] rounded-md">Get Started Now</Button>
      </div>




      <Footer />
    </>
  );
};

export default Projects;
