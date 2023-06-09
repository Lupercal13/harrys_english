import welcome from "../assets/welcoming.svg";
import knowledge from "../assets/Knowledge.svg";
import brainstorming from "../assets/brainstorming_lightbulb.svg";
import success from "../assets/success.svg";
import progress from "../assets/Progress.svg";
import wavePurple from '../assets/Wave-purple.svg'
import {BiYen} from 'react-icons/bi'
import { classes } from "../constants";

const pictures = [
  {photo: knowledge},
  {photo: brainstorming},
  {photo: success},
  {photo: progress},

]

const Classes = () => {
  return (
    <div id="classes">
      <div className="ml-12 mt-20">
        <h1 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 drop-shadow-lg">
          Classes Available
        </h1>
      </div>

      <div className="mt-20 grid sm:grid-cols-2 font-poppins  ">
        {classes.map((item) => (
          <div className="card lg:card-side grid md:grid-cols-2 shadow-xl mb-12 border-2 mx-4 bg-white" key={item.id}>
            <figure className="w-full ">
              <img src={item.image} alt="/" className="h-[200px] md:border-r-2" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions flex justify-between mt-8 gap-4">
                <div className="flex flex-col">
                <p className="flex items-center font-semibold text-primary"><BiYen/>{item.price}</p>
                <p className="text-primary text-sm font-semibold">{item.date}</p>
                </div>
                <a href="#contact">
                <button className="btn btn-primary">Sign Up Now</button></a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src={wavePurple} alt="wave" className="h-[75px] w-full" />
      <img src={wavePurple} alt="wave" className="h-[75px] w-full rotate-180 -mt-1" />


    </div>
  );
};

export default Classes;
