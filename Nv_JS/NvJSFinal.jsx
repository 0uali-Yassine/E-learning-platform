import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../../config/firebase-config";

function NvJSFinal() {
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
              if(lesson.lessonName === 'JavaScript Basics'){
                return {...lesson,start:false,completed:true};
              }else if(lesson.lessonName === 'React.js Basics'){
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
        <h1 className='text-center'>You Finish the Path oF javascript BASIC</h1>
        <button onClick={changeTheCourse} className='border border-black'>Move to the React Course</button>
    </div>
  )
}

export default NvJSFinal;