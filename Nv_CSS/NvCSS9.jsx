import { useGlobalContext } from "../../../../Context";

function NvCSS9() {
  const {nextStepsLessons} = useGlobalContext();
  
  const nextStep = ()=> {
    nextStepsLessons();
  }

  return (
    <div>
      <h1 className='text-center'>Nv CSS 9999</h1>
      <button onClick={nextStep} className='border border-black'>Next</button>
    </div>
  )
}

export default NvCSS9;