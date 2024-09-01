import { useGlobalContext } from '../../../../Context';

function NvREACT13({course}) {
  
  const {nextStepsLessons} = useGlobalContext();
  const nextStep =  () => {
    nextStepsLessons();
  };
  
  return (
    <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] text-center'>{course?.lessonName}</h1>
        <h1 className='text-[20px]'>REACT 13 13 13</h1>
        <button onClick={nextStep} className='border border-black'>Next</button>
    </div>
  )
}

export default NvREACT13;