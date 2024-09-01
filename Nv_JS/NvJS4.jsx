import React from 'react'
import { useGlobalContext } from '../../../../Context';


function NvJS4({course}) {
  const {nextStepsLessons} = useGlobalContext();
  const nextStep = async ()=>{
    nextStepsLessons();
  }
  return (
    <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] text-center'>{course?.lessonName}</h1>
        <h1 className='text-[20px]'>JS 444</h1>
        <button onClick={nextStep} className='border'>Next</button>
    </div>
  )
}

export default NvJS4;