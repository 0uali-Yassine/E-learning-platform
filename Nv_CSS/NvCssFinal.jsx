import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../../config/firebase-config";

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
              if(lesson.lessonName === 'CSS Basics'){
                return {...lesson,start:false,completed:true};
              }else if(lesson.lessonName === 'JavaScript Basics'){
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
    <div>
        <h1 className='text-center'>You Finish the Path o CSS BASIC</h1>
        <button onClick={changeTheCourse} className='border border-black'>Move to the CSS Course</button>
    </div>
  )
}

export default NvHtmlFinal;