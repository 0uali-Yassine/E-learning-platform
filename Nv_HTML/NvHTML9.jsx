import React, { useRef, useState } from 'react'
import { useGlobalContext } from '../../../../Context';
import { PiTestTubeFill } from "react-icons/pi";
import { SiVerizon } from "react-icons/si";

function NvHTML9({course}) {
  const {nextStepsLessons} = useGlobalContext();
  const [quizSteps, setquizSteps] = useState({quiz1:0,quiz2:0,total:0});
  const paraRefQuizOne1 = useRef(null);
  const paraRefQuizOne2 = useRef(null);
  const paraRefQuizOne3 = useRef(null);
  const paraRefQuizOne4 = useRef(null);

  const paraRefQuizTwo1 = useRef(null);
  const paraRefQuizTwo2 = useRef(null);
  const paraRefQuizTwo3 = useRef(null);
  const paraRefQuizTwo4 = useRef(null);

  

  const nextStep = async ()=>{
    nextStepsLessons();
  }

  const quizOne = (e)=>{
    const reponse = e.target.dataset.name;
    if(reponse !== 'To ensure the HTML document is well-formed and adheres to standards'){
      paraRefQuizOne1.current.style.border ='1px solid red';
      paraRefQuizOne2.current.style.border ='2px solid green';
      paraRefQuizOne3.current.style.border ='1px solid red';
      paraRefQuizOne4.current.style.border ='1px solid red';
    }else{
      setquizSteps(prev => ({...prev,quiz1:1,total:prev.total+25}))
      paraRefQuizOne2.current.style.border ='2px solid green';
      paraRefQuizOne1.current.style.border ='1px solid black';
      paraRefQuizOne3.current.style.border ='1px solid black';
      paraRefQuizOne4.current.style.border ='1px solid black';
    }
  }

  const quizTwo = (e)=>{
    const reponse = e.target.dataset.name;
    if(reponse !== 'W3C Markup Validation Service'){
      paraRefQuizTwo1.current.style.border ='1px solid red';
      paraRefQuizTwo2.current.style.border ='1px solid red';
      paraRefQuizTwo3.current.style.border ='1px solid red';
      paraRefQuizTwo4.current.style.border ='2px solid green';
    }else{
      setquizSteps(prev => ({...prev,quiz2:1,total:prev.total+25}))
      paraRefQuizTwo4.current.style.border ='2px solid green';
      paraRefQuizTwo1.current.style.border ='1px solid black';
      paraRefQuizTwo3.current.style.border ='1px solid black';
      paraRefQuizTwo2.current.style.border ='1px solid black';
    }
  }

  
  return (
    <div className='flex flex-col gap-[10px] p-[10px]'>
        <h1 className='text-[20px] text-center header-font'>{course?.lessonName}</h1>
        <h1 className='text-[20px] header-font text-center flex justify-center items-center gap-[5px]'>Form Validation Quiz <PiTestTubeFill/></h1>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>What is the purpose of HTML validation?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px] rounded-md'>
            <p onClick={quizOne} ref={paraRefQuizOne1} data-name="Hyper Text Markdown Language" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>To check for spelling errors in the document</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizOne} ref={paraRefQuizOne2} data-name="To ensure the HTML document is well-formed and adheres to standards" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md inline'>To ensure the HTML document is well-formed and adheres to standards</p>
              {
                quizSteps.quiz1 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
            <p onClick={quizOne} ref={paraRefQuizOne3} data-name="To optimize the HTML for faster loading" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>To optimize the HTML for faster loading</p>
            <p onClick={quizOne} ref={paraRefQuizOne4} data-name="To add custom styles to the HTML document" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>To add custom styles to the HTML document</p>
          </div>
        </div>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>Which of the following tools can be used for HTML validation?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px]'>
            <p onClick={quizTwo} ref={paraRefQuizTwo1} data-name="Google Chrome Developer Tools" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`Google Chrome Developer Tools`}</p>
            <p onClick={quizTwo} ref={paraRefQuizTwo2} data-name="Adobe Photoshop" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`Adobe Photoshop`}</p>
            <p onClick={quizTwo} ref={paraRefQuizTwo3} data-name="<head>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`Microsoft Word`}</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizTwo} ref={paraRefQuizTwo4} data-name="W3C Markup Validation Service" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`W3C Markup Validation Service`}</p>
              {
                quizSteps.quiz2 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
          </div>
        </div>

        

        


        <button onClick={nextStep} className={`border border-black register p-[5px] font-medium header-font bg-yellow-300 ${quizSteps.total < 45 && 'cursor-not-allowed'}`} disabled={quizSteps.total < 45}>Next</button>
    </div>
  )
}

export default NvHTML9