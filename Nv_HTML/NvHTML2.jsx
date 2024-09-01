import React, { useRef, useState } from 'react'
import { useGlobalContext } from '../../../../Context';
import { PiTestTubeFill } from "react-icons/pi";
import { SiVerizon } from "react-icons/si";

function NvHTML2({course}) {
  const {nextStepsLessons} = useGlobalContext();
  const [quizSteps, setquizSteps] = useState({quiz1:0,quiz2:0,quiz3:0,quiz4:0,total:0});
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

  const paraRefQuizFour1 = useRef(null);
  const paraRefQuizFour2 = useRef(null);
  const paraRefQuizFour3 = useRef(null);
  const paraRefQuizFour4 = useRef(null);

  const nextStep = async ()=>{
    nextStepsLessons();
  }

  const quizOne = (e)=>{
    const reponse = e.target.dataset.name;
    if(reponse !== 'Hyper Text Markup Language'){
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
    if(reponse !== '<h1>'){
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
    if(reponse !== '<p>'){
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

  const quizFour = (e)=>{
    const reponse = e.target.dataset.name;
    if(reponse !== '<em>'){
      paraRefQuizFour1.current.style.border ='2px solid green';
      paraRefQuizFour2.current.style.border ='1px solid red';
      paraRefQuizFour3.current.style.border ='1px solid red';
      paraRefQuizFour4.current.style.border ='1px solid red';
    }else{
      setquizSteps(prev => ({...prev,quiz4:1,total:prev.total+25}))
      paraRefQuizFour1.current.style.border ='2px solid green';
      paraRefQuizFour3.current.style.border ='1px solid black';
      paraRefQuizFour4.current.style.border ='1px solid black';
      paraRefQuizFour2.current.style.border ='1px solid black';
    }
  }

  return (
    <div className='flex flex-col gap-[10px] p-[10px]'>
        <h1 className='text-[20px] text-center header-font'>{course?.lessonName}</h1>
        <h1 className='text-[20px] header-font text-center flex justify-center items-center gap-[5px]'>Introduction to HTML Quiz <PiTestTubeFill/></h1>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>What does HTML stand for?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px] rounded-md'>
            <p onClick={quizOne} ref={paraRefQuizOne1} data-name="Hyper Text Markdown Language" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>Hyper Text Markdown Language</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizOne} ref={paraRefQuizOne2} data-name="Hyper Text Markup Language" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md inline'>Hyper Text Markup Language</p>
              {
                quizSteps.quiz1 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
            <p onClick={quizOne} ref={paraRefQuizOne3} data-name=" Hyperlinks and Text Markup Language" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'> Hyperlinks and Text Markup Language</p>
            <p onClick={quizOne} ref={paraRefQuizOne4} data-name="Home Tool Markup Language" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>Home Tool Markup Language</p>
          </div>
        </div>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>Which of the following is the correct HTML element for the largest heading?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px]'>
            <p onClick={quizTwo} ref={paraRefQuizTwo1} data-name="<heading>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<heading>`}</p>
            <p onClick={quizTwo} ref={paraRefQuizTwo2} data-name="<h6>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<h6>`}</p>
            <p onClick={quizTwo} ref={paraRefQuizTwo3} data-name="<head>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<head>`}</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizTwo} ref={paraRefQuizTwo4} data-name="<h1>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<h1>`}</p>
              {
                quizSteps.quiz2 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>Which HTML element is used to define a paragraph?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px]'>
            <p onClick={quizThree} ref={paraRefQuizThree1} data-name="<para>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<para>`}</p>
            <p onClick={quizThree} ref={paraRefQuizThree2} data-name="<paragraph>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<paragraph>`}</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizThree} ref={paraRefQuizThree3} data-name="<p>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<p>`}</p>
              {
                quizSteps.quiz3 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
            <p onClick={quizThree} ref={paraRefQuizThree4} data-name="<par>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<par>`}</p>
          </div>
        </div>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>Which HTML element is used to style text to italic?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px]'>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizFour} ref={paraRefQuizFour1} data-name="<em>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<em>`}</p>
              {
                quizSteps.quiz4 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
            <p onClick={quizFour} ref={paraRefQuizFour2} data-name="<strong>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<strong>`}</p>
            <p onClick={quizFour} ref={paraRefQuizFour3} data-name="<italic>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<italic>`}</p>
            <p onClick={quizFour} ref={paraRefQuizFour4} data-name="<emm>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<emm>`}</p>
          </div>
        </div>

        


        <button onClick={nextStep} className={`border border-black register p-[5px] font-medium header-font bg-yellow-300 ${quizSteps.total < 100 && 'cursor-not-allowed'}`} disabled={quizSteps.total < 100}>Next</button>
    </div>
  )
}

export default NvHTML2