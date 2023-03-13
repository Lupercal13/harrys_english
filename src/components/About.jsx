import { purple } from "@mui/material/colors";
import avatar from "../assets/me_avatar_transparent.png";
import purpleWave from '../assets/Wave-purple.svg'
import sprinkleBg from '../assets/Sprinkle.svg'

const About = () => {
  return (
    <section id="about" className={`sm:my-8 font-poppins `}>
  
      <div className=" relative z-10 bg-white/70">

        <div className="flex justify-center items-center mb-8 pt-20">
            <h1 className="  px-4 text-7xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 drop-shadow-lg">Nice to meet you!</h1>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-12 sm:mb-20 lg:text-xl">
        <div className=" mr-4">
          <img src={avatar} alt="avatar" className="rounded-full mx-auto pt-12" />
        </div>
        <div className="py-4 mx-8 mt-8 sm:pr-8 sm:mr-8 font-semibold text-gray-600 tracking-wide leading-relaxed">
            <p className="sm:text-center pb-8 sm:text-3xl">I'm <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 sm:text-3xl drop-shadow-lg ">Harrison Payne</span>.</p>
          <p>
            I have been teaching English in Aichi and Gifu for over 8 years! I
            am very passionate about making the best learning environment
            possible for my students. Lessons include a wide variety of content
            and learning methods including: <span className="text-primary italic">Listening, Speaking, Reading, TPR,
            and Games</span>.
          </p>
          <br/>
          <p>
            If you are looking for a fun English learning experience with a
            veteran native English instructor then look no further!
          </p>
        </div>
      </div>
      <div className="">
        <img src={purpleWave} alt="purple wave" className="h-[75px] w-full" />
        <img src={purpleWave} alt="purple wave" className="h-[75px] w-full rotate-180 -mt-1" />
      </div>
      </div>
    </section>
  );
};

export default About;
