import { SlEnergy } from "react-icons/sl";
import svg from "../assets/undraw_programmer_re_owql.svg";
import { useGlobalContext } from "../Context";
import { NavLink } from "react-router-dom";
import person1 from "../assets/pexels-andersonguerra-1197132.jpg";
import person2 from "../assets/pexels-vinicius-wiesehofer-289347-1090387.jpg";
import person3 from "../assets/pexels-nkhajotia-1516680.jpg";
import { GrGrow } from "react-icons/gr";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiShieldStarLine } from "react-icons/ri";
import { IoAnalyticsSharp } from "react-icons/io5";
import Footer from "./Footer";

function Home() {
  const {isAuth} = useGlobalContext();
  return (
    <main className=''>

      <div className="border  border-black flex h-[300px] hero ">
          <div className='bg-[#38b66d] flex-1 p-[20px]'>
            <div className="w-[80%] flex flex-col gap-[10px] m-auto">
              <h1 className='header-font font-bold  text-[40px]'>Keep learnin & unlock the power of your brain<SlEnergy className="text-yellow-300" size={30}/></h1>
              <p className="main-font">Start your journey to knowledge and skill mastery with
                our interactive and engaging e-learning 
                platform today!
              </p>
              {
                isAuth ? (
                  <NavLink to='/myhome/dashbord'>
                          <button className='bg-yellow-300 w-[fit-content] border border-black px-[10px] register  rounded-md'>Complete</button>
                        </NavLink>
                ):(
                  <NavLink to='/login'>
                          <button className='bg-yellow-300 w-[fit-content] border border-black px-[10px] register  rounded-md'>Start</button>
                        </NavLink>
                )
              }
            </div>
          </div>

          <div className="bg-[#8a40cfe8] flex-1 relative p-[20px]">
            <img src={svg} className="m-auto h-[100%] img_hero  object-cover" alt="svg" />
            <div className="absolute top-[20px] p-[5px] right-[50px] bg-[#38b677] w-[100px] h-[100px] flex flex-col items-center justify-center text-center border border-black rounded-[50%] register">
              <p className="header-font text-[20px] font-medium">50k</p>
              <span className="main-font text-[12px] font-medium">Active Students in Our Coures</span>
            </div>
            <div className="absolute bottom-[50px] p-[5px] left-[50px] bg-[#daab2b] w-[100px] h-[100px] flex flex-col items-center justify-center text-center border border-black rounded-[50%] register">
              <p className="header-font text-[20px] font-medium">20+</p>
              <span className="main-font text-[12px] font-medium">Free Lessons for Students</span>
            </div>
            <div className="absolute bg-[#3c92b4]  gap-[5px] bottom-[30px] p-[5px] right-[60px] w-[150px] h-[70px]  border border-black rounded-md register">
              <div className="flex flex-col gap-[5px]">
                <div className="flex relative"> 
                  <div className="absolute left-[10px] w-[30px] h-[30px] overflow-hidden rounded-[50%] border border-black cursor-pointer">
                    <img src={person1} alt="user"className="w-[100%] h-[100%] object-cover" />
                  </div>
                  <div className="absolute left-[25px] w-[30px] h-[30px] overflow-hidden rounded-[50%] border  border-black cursor-pointer">
                     <img src={person2} alt="user"className="w-[100%] h-[100%] object-cover" />
                  </div>
                  <div className="absolute left-[40px] w-[30px] h-[30px] overflow-hidden rounded-[50%] border  border-black cursor-pointer">
                     <img src={person3} alt="user"className="w-[100%] h-[100%] object-cover" />
                  </div>
                  <div className="absolute left-[55px] w-[30px] h-[30px] rounded-[50%] bg-black border text-white text-[10px] main-font flex justify-center items-center border-black cursor-pointer">13k+</div>
                </div>
                <p className="header-font absolute bottom-0 text-[14px]">Worldwide Students</p>
              </div>
            </div>
          </div>
      </div>


      <div className="Allstatic h-[220px] flex justify-evenly items-center p-[20px] border">

        <div className="static flex flex-col w-[200px]  items-start p-[10px] gap-[10px]">
          <div className="register w-[fit-content] rounded-[50%]  p-[5px] bg-yellow-300">
            <GrGrow size={25}/>
          </div>
          <h1 className="main-font font-bold">Growing Revenue</h1>
          <p className="header-font text-[13px]">Start with signing uo Refersion for free Refersion will set</p>
        </div>

        <div className="static flex flex-col  w-[200px] items-start p-[10px] gap-[10px]">
          <div className="register w-[fit-content] rounded-[50%] p-[5px] bg-yellow-300">
            <MdOutlineVerifiedUser size={25}/>
          </div>
          <h1 className="main-font font-bold">Best in Class Content</h1>
          <p className="header-font text-[13px]">Start with signing uo Refersion for free Refersion will set</p>
        </div>

        <div className="static flex flex-col  w-[200px] items-start p-[10px] gap-[10px]">
          <div className="register w-[fit-content] rounded-[50%] p-[5px] bg-yellow-300">
            <RiShieldStarLine size={25}/>
          </div>
          <h1 className="main-font font-bold">Competitive Advantage</h1>
          <p className="header-font text-[13px]">Start with signing uo Refersion for free Refersion will set</p>
        </div>

        <div className="static flex flex-col  w-[200px] items-start p-[10px] gap-[10px]">
          <div className="register w-[fit-content] rounded-[50%] p-[5px] bg-yellow-300">
            <IoAnalyticsSharp size={25}/>
          </div>
          <h1 className="main-font font-bold">Growth Potential</h1>
          <p className="header-font text-[13px]">Start with signing uo Refersion for free Refersion will set</p>
        </div>
      </div>
      
      <Footer/>
      
    </main>
  )
}

export default Home;