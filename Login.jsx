
import { useState } from 'react';
import avatar from '../assets/avatar.png';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { auth, db } from '../config/firebase-config';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import uploadfile from '../config/storage';
import { useGlobalContext } from '../Context';
import { toast } from 'react-toastify';
import svg from '../assets/undraw_access_account_re_8spm.svg';


function Login() {
    const {setLoading,setDataInfo,setDataPath,
        setIsSelectedThePath,setIsMyHome} = useGlobalContext();
    const [isSignUp,setIsSignUp] = useState(false);
    const navigate = useNavigate();
    const [avatarFile,setAvatarFile] = useState({
        file:null,
        url:''
    });
   

    const UplodImage = (e)=> {
        setAvatarFile({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0]),
        });
    }

    const SignUp = async e=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const {username,email,password} = Object.fromEntries(formData);
        try {
            setLoading(true);
            const response = await createUserWithEmailAndPassword(auth,email,password);
            const image = await uploadfile(avatarFile.file);
            await setDoc(doc(db,'users',response.user.uid),{
                username,
                email,
                imgUrl:image,
                userId:response.user.uid,
                Data:[{
                    paths:[{
                        pathId:'front-end',
                        pathName:'Front-End Development',
                        progress:0,// Percentage of Path completed
                        lessons: [
                            {
                              lessonId: "html-basics",
                              lessonName: "HTML Basics",
                              start:true,
                              nv:1,
                              nbLessons:6,
                              nbQuiz:5,
                              completed: false,
                              progress: 0,  // Percentage of the lesson completed
                             
                            },
                            {
                              lessonId: "css-basics",
                              lessonName: "CSS Basics",
                              start:false,
                              nv:1,
                              nbLessons:8,
                              nbQuiz:5,
                              completed: false,
                              progress: 0,  // Percentage of the lesson completed
                            },
                            {
                              lessonId: "javascript-basics",
                              lessonName: "JavaScript Basics",
                              start:false,
                              nv:1,
                              nbLessons:11,
                              nbQuiz:9,
                              completed: false,
                              progress: 0,  // Percentage of the lesson completed
                            },
                            {
                                lessonId: "Reactjs",
                                lessonName: "React.js Basics",
                                start:false,
                                nv:1,
                                nbLessons:10,
                                nbQuiz:8,
                                completed: false,
                                progress: 0,  // Percentage of the lesson completed
                            }

                        ]
                    }]
                }],
            })
            setLoading(false);
            navigate('/studyin-process');
            toast.success("Welcom and ope you select the correct  path");
        } catch (error) {
            setLoading(false);
            console.log(error.code);
            toast.warning(error.code);
        }
    }
    const feacthData = async ()=>{
        const docRef = doc(db, "users",auth.currentUser.uid);

        try {
            const docSnap = await getDoc(docRef);
            setDataInfo(docSnap.data().Data);
            setDataPath(docSnap.data().Data);
            setIsSelectedThePath(true);
            setIsMyHome(true);
        } catch (error) {
            console.log(error.code);
        }
    }

    const signIn = async(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const {email,password} = Object.fromEntries(formData);
        try {
            await signInWithEmailAndPassword(auth,email,password);
            feacthData();
            navigate('/myhome/dashbord');
            toast.success("Continue Learning");
        } catch (error) {
            console.log(error.code);
            toast.warning(error.code);
        }

    }
    

   
  return (
    <div className="login w-[500px] p-[10px] flex justify-between items-center h-[fit-content] bg-white mt-[30px] rounded-md border-[2px] border-black m-auto">
       <div className='border-r-[1px] p-[5px] pr-[15px] border-black'>
        {
                !isSignUp ? (
                    <form onSubmit={SignUp} className="flex flex-col gap-[20px]">
                        <h1 className="text-center header-font text-[18px] font-medium">Sign Up</h1>
                        <div className='flex justify-center items-center gap-[10px]'>
                            <img src={avatarFile.url || avatar} className='w-[60px] h-[60px] rounded-[50%] object-cover' alt="avatar" />
                            <input onChange={UplodImage} id="file" type="file" className="hidden" required/>
                            <label htmlFor="file"className='underline main-font'>Upload Image</label>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="username" className='main-font font-medium'>UserName</label>
                            <input name="username" id="username" type="text" className='main-font text-[15px] outline-none border border-black rounded-md px-[10px] py-[5px]' placeholder="username..." required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email"  className='main-font font-medium'>Email</label>
                            <input name="email" id="email" type="email" className='main-font text-[15px] outline-none border border-black rounded-md px-[10px] py-[5px]' placeholder="email..." required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password"  className='main-font font-medium'>Password</label>
                            <input name="password" id="password" type="password" className='main-font text-[15px] outline-none border border-black rounded-md px-[10px] py-[5px]' placeholder="Password..." required/>
                        </div>
                        <button className="border border-black header-font bg-yellow-300 register text-[18px] ">Create Account</button>
                        <h1 className='text-[13px] main-font'>Already Have an account? <span  className='cursor-pointer header-font text-blue-300' onClick={()=> setIsSignUp(true)}>Sign In</span></h1>
                    </form>

                ):(
                    <form onSubmit={signIn} className="flex flex-col gap-[20px]">
                        <h1 className="text-center header-font text-[18px] font-medium">Sign In</h1>
                        <div className="flex flex-col">
                            <label htmlFor="email" className='main-font font-medium'>Email</label>
                            <input name="email" id="email" type="email" className='main-font text-[15px] outline-none border border-black rounded-md px-[10px] py-[5px]'  placeholder="email..." />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className='main-font font-medium'>Pssword</label>
                            <input name="password" id="password" type="password"  className='main-font text-[15px] outline-none border border-black rounded-md px-[10px] py-[5px]' placeholder="Password..." />
                        </div>
                        <button className="border border-black header-font bg-yellow-300 register text-[18px] ">Sign In</button>
                        <h1 className='text-[13px] main-font'>You Don't have an account? <span className='cursor-pointer header-font text-blue-300' onClick={()=> setIsSignUp(false)}>Sign Up</span></h1>
                    </form>
                )
            }
        
       </div>

       <div className='w-[50%]'>
        <img src={svg} alt="svg" className='w-full' />
       </div>
        
    </div>
  )
}

export default Login;