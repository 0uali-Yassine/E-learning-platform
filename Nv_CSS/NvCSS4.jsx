import { useRef, useState } from "react";
import { useGlobalContext } from "../../../../Context";
import { SiVerizon } from "react-icons/si";
import { PiTestTubeFill } from "react-icons/pi";


function NvCSS4({course}) {
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
    console.log(reponse !== "p {color: blue;}");
    console.log(reponse);
    if(reponse !== 'p{color: blue;}'){
      paraRefQuizOne1.current.style.border ='1px solid red';
      paraRefQuizOne2.current.style.border ='2px solid green';
      paraRefQuizOne3.current.style.border ='1px solid red';
      paraRefQuizOne4.current.style.border ='1px solid red';
    }else{
      setquizSteps(prev => ({...prev,quiz1:1,total:prev.total+25}))
      paraRefQuizOne1.current.style.border ='1px solid black';
      paraRefQuizOne2.current.style.border ='2px solid green';
      paraRefQuizOne3.current.style.border ='1px solid black';
      paraRefQuizOne4.current.style.border ='1px solid black';
    }
  }

  const quizTwo = (e)=>{
    const reponse = e.target.dataset.name;
    if(reponse !== '<link rel="stylesheet" href="styles.css">'){
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
    console.log(reponse);
    if(reponse !== '#header {color: red;}'){
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
    if(reponse !== '.active {background-color: yellow;}'){
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
        <h1 className='text-[20px] header-font text-center flex justify-center items-center gap-[5px]'>Selector Quiz <PiTestTubeFill/></h1>


        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>How do you link an external CSS file to an HTML document?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px]'>
            <p onClick={quizTwo} ref={paraRefQuizTwo1} data-name='<style href="styles.css">' className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<style href="styles.css">`}</p>
            <p onClick={quizTwo} ref={paraRefQuizTwo2} data-name='<script src="styles.css"></script>' className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<script src="styles.css"></script>`}</p>
            <p onClick={quizTwo} ref={paraRefQuizTwo3} data-name='<css link="styles.css">' className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<css link="styles.css">`}</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizTwo} ref={paraRefQuizTwo4} data-name='<link rel="stylesheet" href="styles.css">' className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<link rel="stylesheet" href="styles.css">`}</p>
              {
                quizSteps.quiz2 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>What is the correct syntax for applying a CSS rule to all <span>`{`<p>`}`</span> elements?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px] rounded-md'>
            <p onClick={quizOne} ref={paraRefQuizOne1} data-name="<p> {color: blue;}" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`<p> {color: blue;}`}</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizOne} ref={paraRefQuizOne2} data-name="p{color: blue;}" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md inline'><span>{`p {color: blue;}`}</span></p>
              {
                quizSteps.quiz1 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
            <p onClick={quizOne} ref={paraRefQuizOne3} data-name="p: {color: blue;}" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`p: {color: blue;}`}</p>
            <p onClick={quizOne} ref={paraRefQuizOne4} data-name="p = {color: blue;}" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`p = {color: blue;}`}</p>
          </div>
        </div>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>How do you apply a CSS rule to an element with the id "header"?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px]'>
            <p onClick={quizThree} ref={paraRefQuizThree1} data-name=".header {color: red;}" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`.header {color: red;}`}</p>
            <p onClick={quizThree} ref={paraRefQuizThree2} data-name="header {color: red;}" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`header {color: red;}`}</p>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizThree} ref={paraRefQuizThree3} data-name="#header {color: red;}" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`#header {color: red;}`}</p>
              {
                quizSteps.quiz3 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
            <p onClick={quizThree} ref={paraRefQuizThree4} data-name="*header {color: red;}" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`*header {color: red;}`}</p>
          </div>
        </div>

        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-[15px] main-font'>How do you apply a CSS rule to all elements with the class "active"?</h1>
          <div className='border border-black p-[10px] bg-[#263563] flex flex-col gap-[10px]'>
            <div className='flex gap-[10px] items-center'>
              <p onClick={quizFour} ref={paraRefQuizFour1} data-name=".active {background-color: yellow;}" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`.active {background-color: yellow;}`}</p>
              {
                quizSteps.quiz4 > 0  && <SiVerizon className='bg-green-400 text-white p-[2px] rounded-md'/>
              }
            </div>
            <p onClick={quizFour} ref={paraRefQuizFour2} data-name="#active {background-color: yellow;}" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`#active {background-color: yellow;}`}</p>
            <p onClick={quizFour} ref={paraRefQuizFour3} data-name="active {background-color: yellow;}" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`active {background-color: yellow;}`}</p>
            <p onClick={quizFour} ref={paraRefQuizFour4} data-name="*active {background-color: yellow;}" className='border border-black w-[fit-content] px-[5px] cursor-pointer hover:shadow-lg bg-white rounded-md'>{`*active {background-color: yellow;}`}</p>
          </div>
        </div>

        
        <button onClick={nextStep} className={`border border-black register p-[5px] font-medium header-font bg-yellow-300 ${quizSteps.total < 100 && 'cursor-not-allowed'}`} disabled={quizSteps.total < 100}>Next</button>
    </div>
    
  )
}

export default NvCSS4;