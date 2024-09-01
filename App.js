import React from "react";
import { BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import avatar from './assets/avatar.png';
import StudyingProcess from './components/StudyingProcess';
import StudyInfo from './components/pages/studyProcess/StudyInfo';
import { useGlobalContext } from "./Context";
import UserInfo from "./components/UserInfo";
import Myhome from "./components/Myhome";
import Dashbord from "./components/pages/Dashbord";
import Mylearning from "./components/pages/Mylearning";
import { FaBarsStaggered } from "react-icons/fa6";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiSquareRemove } from "react-icons/ci";

function App() {
  const {isAuth,dataInfo,isMyHome,loading,setMenu,menu} = useGlobalContext();
  
  

  return (
    <div className="bg-gray-100 relative min-h-[100vh]">
      <BrowserRouter>
        <nav className="flex justify-between items-center border border-b-black px-[10px] py-[15px] bg-gray-100 header-font">
          <div className="flex items-center gap-[15px]">
            <NavLink to='/' className='font-bold text-[20px]'>Educate</NavLink>
            {
              isAuth && isMyHome && <NavLink to='/myhome'>MyHome</NavLink>
            }
          </div>
          {
            !menu ? <div className="nav flex justify-between items-center gap-[20px]">
            <NavLink to='/about' className='font-medium hover:underline'>About</NavLink>
            <NavLink to='/studyin-process' className='font-medium hover:underline'>Studying Process</NavLink>
            <NavLink to='/contact' className='font-medium hover:underline'>Contact</NavLink>
            {
              isAuth ? (
                <div className="flex- flex-col gap-[5px]">
                  <img src={dataInfo?.imgUrl||avatar} alt='user' className="w-[40px] h-[40px] rounded-[50%] border border-green-300 object-cover"/>
                </div>
              ) : (
                <NavLink to='/login' className='border border-black text-[14px] px-[10px] py-[4px] bg-yellow-300 register rounded-md'>Register Now</NavLink>
              )
            }
          </div>:<div className="menu glass-effect fixed flex justify-end top-0 left-0 z-10 w-[102%] h-[100vh] bg-gray-400" onClick={()=> setMenu(false)}>
                <div className="w-[300px] relative  flex flex-col bg-gray-100 border p-[15px] h-[100vh] opacity-100" onClick={e => e.stopPropagation()} >
                      <CiSquareRemove size={30} onClick={()=> setMenu(false)} className="absolute right-2 top-0 cursor-pointer text-red-400"/>
                      <div className=' flex flex-col  gap-[15px] mt-[20px]'>
                          <NavLink to='/' className='font-bold text-[20px]'>Educate</NavLink>
                          {
                            isAuth && isMyHome && <NavLink to='/myhome' className='text-green-500' onClick={()=> setMenu(false)}>MyHome</NavLink>
                          }
                          <NavLink to='/about' onClick={()=> setMenu(false)} className='font-medium hover:underline'>About</NavLink>
                          <NavLink to='/studyin-process' onClick={()=> setMenu(false)} className='font-medium hover:underline'>Studying Process</NavLink>
                          <NavLink to='/contact' onClick={()=> setMenu(false)} className='font-medium hover:underline'>Contact</NavLink>
                    </div>
                </div>
          </div>
          }
            {
              !menu && <FaBarsStaggered size={25} className="menuBar cursor-pointer" onClick={()=> setMenu(prev => !prev)}/>
            }
        </nav>
        {
          loading ? <div className="loader text-center"></div> : (
            <React.Fragment>
              {
                isAuth && <UserInfo/>
              }
              <Routes>
                <Route  path='/'element={<Home/>}/>
                <Route  path='/about'element={<About/>}/>
                <Route  path='/myhome'element={<Myhome/>}>
                  <Route path='/myhome/dashbord' element={<Dashbord/>}/>
                  <Route path='/myhome/mylearning' element={<Mylearning/>}/>
                </Route>
                <Route  path='/studyin-process'element={<StudyingProcess/>}>
                  <Route path='study-path-front-end/:text' element={<StudyInfo/>}/>
                  <Route path='study-path-back-end/:text' element={<StudyInfo/>}/>
                  <Route path='study-path-data/:text' element={<StudyInfo/>}/>
                </Route>
                <Route  path='/contact'element={<Contact/>}/>
                <Route  path='/login'element={<Login/>}/>
              </Routes>
            </React.Fragment>
          
        ) 
      }
      </BrowserRouter>
        <ToastContainer className='absolute bottom-0 rigth-0'/>
    </div>
  );
}

export default App;
