import { createContext, useContext, useEffect, useState } from "react";
import { auth,db} from "./config/firebase-config";
import { onSnapshot,doc, getDoc, updateDoc } from "firebase/firestore";


const myContext = createContext();

function Context({children}) {
  const [isAuth,setIsAuth] = useState(false);
  const [loading,setLoading] = useState(false);
  const [dataPath,setDataPath] = useState([]);
  const [dataInfo,setDataInfo] = useState({});
  const [isMyHome,setIsMyHomeState] = useState(JSON.parse(localStorage.getItem('isSelectedThePath')) || false);
  const [menu,setMenu] = useState(false);
  // when the refreach the page or sign Up the select path not show in first
  const [isSelectedThePath, setIsSelectedThePathState] = useState(JSON.parse(localStorage.getItem('isSelectedThePath')) || false);


  // next step from lesson to lesson and course
  const nextStepsLessons  = async () =>{
    const userRef = doc(db,'users',auth?.currentUser?.uid);
    try {
      // Fetch current user data
      const userDoc = await getDoc(userRef);
      if(userDoc.exists()){
        const userData = userDoc.data();
         // Find the lesson with start: true and update its nv property
        const upDateData = userData.Data.map(path=>({
          ...path,
          paths: path.paths.map(p =>({
            ...p,
            lessons: p.lessons.map(lesson =>{
              if(lesson.start && lesson.lessonName === 'HTML Basics'){
                return {...lesson,nv:lesson.nv+1,progress:lesson.progress+9.09}
              }else if(lesson.start && lesson.lessonName === 'CSS Basics'){
                return {...lesson,nv:lesson.nv+1,progress:lesson.progress+7.96}
              }else if(lesson.start && lesson.lessonName === 'JavaScript Basics'){
                return {...lesson,nv:lesson.nv+1,progress:lesson.progress+5}
              }else if(lesson.start && lesson.lessonName === 'React.js Basics'){
                return {...lesson,nv:lesson.nv+1,progress:lesson.progress+5.55}
              }else{
                return lesson;
              }
            } 
              //lesson.start ? {...lesson,nv:lesson.nv+1} : lesson
            )
          }))
             
        }));
         // Update the user data in Firestore
         await updateDoc(userRef,{Data:upDateData});
      }else{
        console.log('no such Document');
      }
      
    } catch (error) {
      console.log(error.code);
    }
  }

  useEffect(()=>{
    const unSub = auth.onAuthStateChanged(user =>{
      if(user){
        setIsAuth(true);
        //get RealTime data Updates
        const unSnapshot = onSnapshot(doc(db, "users", auth.currentUser.uid), (doc) => {
          //setDataInfo(doc.data());
         
          setDataInfo(doc.data());
          if(isSelectedThePath){
            setDataPath(doc?.data()?.Data);
          }
        });
        return ()=> unSnapshot();
      }else{
        setIsAuth(false);
        setIsMyHome(false);
        
      }
    })
    return ()=> unSub();
  },[isSelectedThePath])
  
  
  const setIsSelectedThePath = (value) => {
    localStorage.setItem("isSelectedThePath", JSON.stringify(value));
    setIsSelectedThePathState(value);
  };

  const setIsMyHome = (value) => {
    localStorage.setItem("isSelectedThePath", JSON.stringify(value));
    setIsMyHomeState(value);
  };

   // for menu when is falls within the specified range
   useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 652 && width <= 1200) {
        setMenu(false)
      }
    }

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <myContext.Provider value={{setIsAuth,isAuth,setDataPath,dataPath,setDataInfo,dataInfo
      ,setIsSelectedThePath,nextStepsLessons,setIsMyHome,isMyHome,setLoading,loading,setMenu,menu
    }}>
      {children}
    </myContext.Provider>
  )
}

export const useGlobalContext = () =>{
  return useContext(myContext);
}
export default Context;