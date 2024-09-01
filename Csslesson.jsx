import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FiBook } from "react-icons/fi";
import { PiTestTubeFill } from "react-icons/pi";
import { useGlobalContext } from '../../../Context';

function Csslesson() {
  const {dataPath} = useGlobalContext();
  const [showInfo,setShowInfo] = useState(false);

  const course = dataPath[0]?.paths[0]?.lessons.find(lesson =>{
    if(lesson.lessonName === 'CSS Basics'){
      return lesson;
    }
  })
  return (
    <div className='p-[10px] '>
      <div onClick={()=> setShowInfo(prev =>!prev)} className={`${course?.start && 'bg-yellow-300'} flex justify-between items-center rounded-md p-[5px] mb-[5px] border border-black cursor-pointer`}>
       <h1 className='header-font font-bold'>CSS Basics</h1>
       {
        !showInfo ? <IoIosArrowDown size={20}/> : <IoIosArrowUp size={20}/>
       }
      </div>
      <div className={`flex flex-col gap-[10px] ${showInfo ? 'flex':'hidden'}`}>

        <div className='flex items-center gap-[5px] cursor-pointer'>
          <div className={`${course?.nv > 1 && 'bg-yellow-400'} icon flex items-center justify-center p-[2px] w-[20px] h-[20px] border border-black rounded-[50%]`}>
            <FiBook/>
          </div>
          <h1 className="lesson underline main-font font-medium">Setup and Syntax</h1>
        </div>

        <div className='flex items-center gap-[5px] cursor-pointer'>
          <div className={`${course?.nv > 2 && 'bg-yellow-400'} icon flex items-center justify-center p-[2px] w-[20px] h-[20px] border border-black rounded-[50%]`}>
            <FiBook/>
          </div>
          <h1 className="lesson underline main-font font-medium">Selector</h1>
        </div>

        <div className='flex items-center gap-[5px] cursor-pointer'>
          <div className={`${course?.nv > 3 && 'bg-yellow-400'} icon flex items-center justify-center p-[2px] w-[20px] h-[20px] border border-black rounded-[50%]`}>
            <PiTestTubeFill/>
          </div>
          <h1 className="lesson main-font font-medium">Quiz</h1>
        </div>

        <div className='flex items-center gap-[5px] cursor-pointer'>
          <div className={`${course?.nv > 4 && 'bg-yellow-400'} icon flex items-center justify-center p-[2px] w-[20px] h-[20px] border border-black rounded-[50%]`}>
            <FiBook/>
          </div>
          <h1 className="lesson underline main-font font-medium">Visual Rules</h1>
        </div>

        <div className='flex items-center gap-[5px] cursor-pointer'>
          <div className={`${course?.nv > 5 && 'bg-yellow-400'} icon flex items-center justify-center p-[2px] w-[20px] h-[20px] border border-black rounded-[50%]`}>
            <PiTestTubeFill/>
          </div>
          <h1 className="lesson main-font font-medium">Quiz</h1>
        </div>

        <div className='flex items-center gap-[5px] cursor-pointer'>
          <div className={`${course?.nv > 6 && 'bg-yellow-400'} icon flex items-center justify-center p-[2px] w-[20px] h-[20px] border border-black rounded-[50%]`}>
            <FiBook/>
          </div>
          <h1 className="lesson underline main-font font-medium">The Box Model</h1>
        </div>

        <div className='flex items-center gap-[5px] cursor-pointer'>
          <div className={`${course?.nv > 7 && 'bg-yellow-400'} icon flex items-center justify-center p-[2px] w-[20px] h-[20px] border border-black rounded-[50%]`}>
            <FiBook/>
          </div>
          <h1 className="lesson underline main-font font-medium">Changing the Box Model</h1>
        </div>

        <div className='flex items-center gap-[5px] cursor-pointer'>
          <div className={`${course?.nv > 8 && 'bg-yellow-400'} icon flex items-center justify-center p-[2px] w-[20px] h-[20px] border border-black rounded-[50%]`}>
            <PiTestTubeFill/>
          </div>
          <h1 className="lesson main-font font-medium">Quiz</h1>
        </div>

        <div className='flex items-center gap-[5px] cursor-pointer'>
          <div className={`${course?.nv > 9 && 'bg-yellow-400'} icon flex items-center justify-center p-[2px] w-[20px] h-[20px] border border-black rounded-[50%]`}>
            <FiBook/>
          </div>
          <h1 className="lesson underline main-font font-medium">Display and Positioning</h1>
        </div>

        <div className='flex items-center gap-[5px] cursor-pointer'>
          <div className={`${course?.nv > 10 && 'bg-yellow-400'} icon flex items-center justify-center p-[2px] w-[20px] h-[20px] border border-black rounded-[50%]`}>
            <PiTestTubeFill/>
          </div>
          <h1 className="lesson main-font font-medium main-font">Quiz</h1>
        </div>

        <div className='flex items-center gap-[5px] cursor-pointer'>
          <div className={`${course?.nv > 11 && 'bg-yellow-400'} icon flex items-center justify-center p-[2px] w-[20px] h-[20px] border border-black rounded-[50%]`}>
            <FiBook/>
          </div>
          <h1 className="lesson underline main-font font-medium">Color</h1>
        </div>

        <div className='flex items-center gap-[5px] cursor-pointer'>
          <div className={`${course?.nv > 12 && 'bg-yellow-400'} icon flex items-center justify-center p-[2px] w-[20px] h-[20px] border border-black rounded-[50%]`}>
            <PiTestTubeFill/>
          </div>
          <h1 className="lesson main-font font-medium">Quiz</h1>
        </div>
        <div className='flex items-center gap-[5px] cursor-pointer'>
          <div className={`${course?.nv > 13 && 'bg-yellow-400'} icon flex items-center justify-center p-[2px] w-[20px] h-[20px] border border-black rounded-[50%]`}>
            <FiBook/>
          </div>
          <h1 className="lesson underline main-font font-medium">Typography</h1>
        </div>

      </div>
    </div>
  )
}

export default Csslesson;