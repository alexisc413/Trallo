import { NavLink } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import alexisImage from '../assets/alexisChan.jpg';
import aishwaryaImage from '../assets/aishwaryaHeadshot.jpg';


function HomePage() {
  // defines the scaleX
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

    return (
      
      <div>
        <motion.div className="progress-bar bg-gradient-to-r from-green-700 to-lime-500 fixed top-0 left-0 right-0 h-2.5 origin-left" style={{ scaleX }} />

        <h1 className="text-black text-[90px] font-bold text-center"> 
          Our Mission
        </h1>
        <article>
          <p className="flex justify-center text-[20px] text-center max-w-md mx-auto pt-10">
            We are making traveling easier than ever! By educating users on 
            budgeting tips and being a one-stop shop for all things budgeting, 
            you can go on your dream vacation with confidence!
            Let's explore the world together! 
          </p>
          <br />
          <br />
          <p className="text-[18px] text-left flex items-center space-x-2">
            <span className="relative w-6 h-6 flex items-center justify-center text-white bg-green-700 rounded-full text-sm font-semibold">
              1
            </span>
            <span>Identify your travel destination</span>
          </p>
          <br />
          <p className="text-[18px] text-left flex items-center space-x-2">
            <span className="relative w-6 h-6 flex items-center justify-center text-white bg-green-700 rounded-full text-sm font-semibold">
              2
            </span>
            <span>Gather your travel buddies</span>
          </p>
          <br />
          <p className="text-[18px] text-left flex items-center space-x-2">
            <span className="relative w-6 h-6 flex items-center justify-center text-white bg-green-700 rounded-full text-sm font-semibold">
              3
            </span>
            <span>Use our website to start budgeting!</span>
          </p>
          <br />
          <br />
          <h1 className="text-black text-[80px] font-bold text-center"> 
          Meet the Team
          </h1>
          <div className="flex justify-center items-center gap-20 mb-4">
            <img className="w-100 h-120 object-cover rounded-2xl" src={alexisImage} />
            
            <img className="w-100 h-120 object-cover rounded-2xl" src={aishwaryaImage} />

          </div>
          <div className="flex justify-center items-center gap-20 mb-4">
            <p className="bg-lime-200 float-left w-100 text-center rounded-2xl">
              Hello! My name is Alexis! I'm a junior at NC State University studying Computer Science and 
              Business Administration. 
            </p>
            <p className="bg-lime-200 float-right w-100 text-center rounded-2xl">
              Hello! My name is Aishwarya! I'm a juinor at NC State University stuying Computer Science and
              Business Administration. 
            </p>
          </div>
            
        </article>

      </div>
    );
}

export default HomePage;