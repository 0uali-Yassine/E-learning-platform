import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import svgFrontend from '../assets/undraw_pair_programming_re_or4x.svg';
import svgBackend from '../assets/undraw_server_cluster_jwwq.svg';
import svgData from '../assets/undraw_segment_re_a3e7.svg';

function StudyingProcess() {

  
  return (
    <div className='flex flex-col gap-[10px] relative'>
      <h1 className='text-center header-font font-bold text-[19px] mt-[10px]'>Studying Process</h1>
      <div className='studyProcess flex justify-center w-[fit-content] m-auto p-[10px] mt-[30px] gap-[10px]'>
        <NavLink to='study-path-front-end/Front-End Development' className='flex flex-col gap-[5px] w-[200px] p-[5px] h-[160px] shadow-md bg-white'>
          <h1 className='header-font text-center'>Front-End Development</h1>
          <img src={svgFrontend} alt="svgFront-end" />
        </NavLink>
        <NavLink to='study-path-back-end/Back-End Development' className='flex flex-col gap-[5px] w-[200px] p-[5px] h-[160px] shadow-md bg-white'>
          <h1 className='header-font text-center'>Back-End Development</h1>
          <img src={svgBackend} alt="svgBack-end" className='h-[122px]' />
        </NavLink>
        <NavLink to='study-path-data/Data Science' className='flex flex-col gap-[5px] w-[200px] p-[5px] h-[160px] shadow-md bg-white'>
          <h1 className='header-font text-center'>Data Science</h1>
          <img src={svgData} alt="svgBack-end" />
        </NavLink>
      </div>
      <Outlet/>   
    </div>
  )
}

export default StudyingProcess;