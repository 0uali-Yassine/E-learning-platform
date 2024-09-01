import React, { useRef, useState } from 'react'
import { useGlobalContext } from '../../../../Context';
import { PiTestTubeFill } from "react-icons/pi";
import { SiVerizon } from "react-icons/si";

function NvHTML6({course}) {
  const {nextStepsLessons} = useGlobalContext();
  const [quizSteps, setquizSteps] = useState({quiz1:0,quiz2:0,quiz3:0,total:0});
  const paraRefQuizOne1 = useRef(null);
  const paraRefQuizOne2 = useRef(null);
  const paraRefQuizOne3 = useRef(null);
  const paraRefQuizOne4 = useRef(null);

  const paraRefQuizTwo1 = useRef(null);
  const paraRefQuizTwo2 = useRef(null);
  const paraRefQuizTwo3 = useRef(null);
  const paraRefQuizTwo4 = useRef(null);

  const paraRefQuizThree1 = useRef(null);
  const paraRefQuizThree2 = useRef(null);
  const paraRefQuizThree3 = useRef(null);
  const paraRefQuizThree4 = useRef(null);

  

  const nextStep = async ()=>{
    nextStepsLessons();
  }

  const quizOne = (e)=>{
    const reponse = e.target.dataset.name;
    if(reponse !== '<table>'){
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
    if(reponse !== '<tr>'){
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

  const quizThree = (e)=>{
    const reponse = e.target.dataset.name;
    if(reponse !== '<thead>'){
      paraRefQuizThree1.current.style.border ='1px solid red';
      paraRefQuizThree2.current.style.border ='1px solid red';
      paraRefQuizThree3.current.style.border ='2px solid green';
      paraRefQuizThree4.current.style.border ='1px solid red';
    }else{
      setquizSteps(prev => ({...prev,quiz3:1,total:prev.total+25}))
      paraRefQuizThree3.current.style.border ='2px solid green';
      paraRefQuizThree1.current.style.border ='1px solid black';
      paraRefQuizThree4.current.style.border ='1px solid black';
      paraRefQuizThree2.current.style.border ='1px solid black';
    }
  }

  

  return (
    <div className='flex flex-col gap-[10px] p-[10px]'>
        <h1 className='text-[20px] text-center header-font'>{course?.lessonName}</h1>
        <h1 className='text-[20px] header-font text-center flex justify-center items-center gap-[5px]'>HTML Tables <PiTestTubeFill/></h1>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>Which HTML element is used to define a table?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px] rounded-md'>
            <p onClick={quizOne} ref={paraRefQuizOne1} data-name="Hyper Text Markdown Language" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<tble>`}</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizOne} ref={paraRefQuizOne2} data-name="<table>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md inline'>{`<table>`}</p>
              {
                quizSteps.quiz1 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
            <p onClick={quizOne} ref={paraRefQuizOne3} data-name="<tab>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<tab>`}</p>
            <p onClick={quizOne} ref={paraRefQuizOne4} data-name="<t>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<t>`}</p>
          </div>
        </div>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>Which HTML element is used to define a table row?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px]'>
            <p onClick={quizTwo} ref={paraRefQuizTwo1} data-name="<th>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<th>`}</p>
            <p onClick={quizTwo} ref={paraRefQuizTwo2} data-name="<t>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<t>`}</p>
            <p onClick={quizTwo} ref={paraRefQuizTwo3} data-name="<td>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<td>`}</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizTwo} ref={paraRefQuizTwo4} data-name="<tr>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<tr>`}</p>
              {
                quizSteps.quiz2 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>Which HTML element is used to define a table header?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px]'>
            <p onClick={quizThree} ref={paraRefQuizThree1} data-name="<th>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<th>`}</p>
            <p onClick={quizThree} ref={paraRefQuizThree2} data-name="<head>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<head>`}</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizThree} ref={paraRefQuizThree3} data-name="<thead>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<thead>`}</p>
              {
                quizSteps.quiz3 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
            <p onClick={quizThree} ref={paraRefQuizThree4} data-name="<theader>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<theader>`}</p>
          </div>
        </div>


        <button onClick={nextStep} className={`border border-black register p-[5px] font-medium header-font bg-yellow-300 ${quizSteps.total < 60 && 'cursor-not-allowed'}`} disabled={quizSteps.total < 60}>Next</button>
    </div>
  )
}

export default NvHTML6