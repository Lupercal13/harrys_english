import { useState } from "react";
import { navLinks } from "../constants";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(<AiOutlineMenu/>);

  return (
    <header className="fixed w-full top-0 z-50 h-fit ">

    <nav className="w-full flex py-6 justify-between items-center navbar shadow-md relative bg-white">
      <h1 className="ml-8 font-poppins text-xl">Harry's English</h1>
      <ul className="list-none ss:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-blue-500" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-10" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='ss:hidden flex flex-1 justify-end items-center mr-4'>
        <button>
            { toggle ? <AiOutlineMenu onClick={() => {
                setToggle(!toggle)
            }} size={20}/> : <AiOutlineClose onClick={() => {
                setToggle(!toggle)
            }} size={20}/>}
        </button>
        
        <div className={`${toggle ? 'hidden' :'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-slate-200/95`}>
        <ul className="list-none flex justify-end item-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-purple-600 font-semibold" : "text-black"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() =>{ setActive(nav.title),setToggle(!toggle)}}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>


        </div>

      </div>
    </nav>
    </header>
  );
};

export default Navbar;
