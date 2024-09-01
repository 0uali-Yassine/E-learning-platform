import React, { useRef, useState } from 'react'
import { useGlobalContext } from '../../../../Context';
import { PiTestTubeFill } from "react-icons/pi";
import { SiVerizon } from "react-icons/si";

function NvHTML4({course}) {
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
    if(reponse !== 'It specifies the version of HTML being used.'){
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
    if(reponse !== '<!DOCTYPE html>'){
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
    if(reponse !== 'Anchor'){
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
    if(reponse !== 'href'){
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
        <h1 className='text-[20px] header-font text-center flex justify-center items-center gap-[5px]'>HTML Document Standards <PiTestTubeFill/></h1>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>What is the purpose of the <span>"{`<!DOCTYPE>`}"</span> declaration in an HTML document?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px] rounded-md'>
            <p onClick={quizOne} ref={paraRefQuizOne1} data-name="It defines the title of the document." className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>It defines the title of the document.</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizOne} ref={paraRefQuizOne2} data-name="It specifies the version of HTML being used." className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md inline'>It specifies the version of HTML being used.</p>
              {
                quizSteps.quiz1 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
            <p onClick={quizOne} ref={paraRefQuizOne3} data-name="It links to the CSS file." className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>It links to the CSS file.</p>
            <p onClick={quizOne} ref={paraRefQuizOne4} data-name=" It provides metadata about the document." className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'> It provides metadata about the document.</p>
          </div>
        </div>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>Which of the following is the correct syntax for an HTML5 <span>{`<!DOCTYPE>`}</span> declaration?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px]'>
            <p onClick={quizTwo} ref={paraRefQuizTwo1} data-name="<heading>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`}</p>
            <p onClick={quizTwo} ref={paraRefQuizTwo2} data-name="<h6>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<!DOCTYPE html5>`}</p>
            <p onClick={quizTwo} ref={paraRefQuizTwo3} data-name="<!" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<!<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`}</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizTwo} ref={paraRefQuizTwo4} data-name="<!DOCTYPE html>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<!DOCTYPE html>`}</p>
              {
                quizSteps.quiz2 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>What does the <span>{`<a>`}</span> tag in HTML stand for?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px]'>
            <p onClick={quizThree} ref={paraRefQuizThree1} data-name="Adresse" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`Adresse`}</p>
            <p onClick={quizThree} ref={paraRefQuizThree2} data-name="Link" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`Link`}</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizThree} ref={paraRefQuizThree3} data-name="Anchor" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`Anchor`}</p>
              {
                quizSteps.quiz3 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
            <p onClick={quizThree} ref={paraRefQuizThree4} data-name="<par>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`Address`}</p>
          </div>
        </div>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>Which attribute of the <span>{`<a>`}</span> tag is used to define the URL of the page the link goes to?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px]'>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizFour} ref={paraRefQuizFour1} data-name="href" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`href`}</p>
              {
                quizSteps.quiz4 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
            <p onClick={quizFour} ref={paraRefQuizFour2} data-name="<strong>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`Link`}</p>
            <p onClick={quizFour} ref={paraRefQuizFour3} data-name="<italic>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`src`}</p>
            <p onClick={quizFour} ref={paraRefQuizFour4} data-name="<emm>" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`url`}</p>
          </div>
        </div>

        


        <button onClick={nextStep} className={`border border-black register p-[5px] font-medium header-font bg-yellow-300 ${quizSteps.total < 100 && 'cursor-not-allowed'}`} disabled={quizSteps.total < 100}>Next</button>
    </div>
  )
}

export default NvHTML4