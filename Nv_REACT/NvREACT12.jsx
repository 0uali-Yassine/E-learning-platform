import { useGlobalContext } from '../../../../Context';

function NvREACT12({course}) {
  
  const {nextStepsLessons} = useGlobalContext();
  const nextStep =  () => {
    nextStepsLessons();
  };
  
  return (
    <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] text-center'>{course?.lessonName}</h1>
        <h1 className='text-[20px]'>REACT 12 12 12</h1>
        <button onClick={nextStep} className='border border-black'>Next</button>
    </div>
  )
}

export default NvREACT12;