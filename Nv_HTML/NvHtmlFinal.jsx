import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../../config/firebase-config";
import finishSvg from '../../../../assets/undraw_completing_re_i7ap.svg';

function NvHtmlFinal() {

  const changeTheCourse = async()=>{
    const userRef = doc(db,'users',auth?.currentUser?.uid);
    
    try {
      const userDoc = await getDoc(userRef);
      if(userDoc.exists()){
        const userData = userDoc.data();
        const upDateData = userData.Data.map(path=>({
          ...path,
          paths:path.paths.map(p=>({
            ...p,
            lessons:p.lessons.map(lesson => {
              if(lesson.lessonName === 'HTML Basics'){
                return {...lesson,start:false,completed:true};
              }else if(lesson.lessonName === 'CSS Basics'){
                return {...lesson,start:true};
              }else{
                return lesson;
              }
            })
          }))
        }))
        await updateDoc(userRef,{Data:upDateData})
      }else{
        console.log('no ducument');
      } 
    } catch (error) {
      console.log(error.code);
    }
  }
  return (
    <div className="w-full">
        <h1 className='text-center header-font text-[20px]'>You Finish the Path o HTML BASIC</h1>
        <img src={finishSvg} alt="svg" className="w-[50%] m-auto" />
        <button onClick={changeTheCourse} className='border border-black header-font px-[5px]  ml-[35%] mb-[10px] register bg-yellow-300'>Move to the CSS Course</button>
    </div>
  )
}

export default NvHtmlFinal;