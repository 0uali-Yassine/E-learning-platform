import { useGlobalContext } from "../../../../Context";

function NvCSS7() {
  const {nextStepsLessons} = useGlobalContext();
  
  const nextStep = ()=> {
    nextStepsLessons();
  }

  return (
    <div>
      <h1 className='text-center'>Nv CSS 777</h1>
      <button onClick={nextStep} className='border border-black'>Next</button>
    </div>
  )
}

export default NvCSS7;