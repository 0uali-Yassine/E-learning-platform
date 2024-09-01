import {useEffect} from 'react';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase-config';
import {  useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context';
import { toast } from 'react-toastify';


function UserInfo() {
    const navigation = useNavigate();
    const {dataInfo,dataPath,setDataInfo,setDataPath,setIsSelectedThePath} = useGlobalContext();
    
    const logout = async ()=>{
        try {
            await signOut(auth);
            toast.success(`See you again ${dataInfo.username}!!`);
            setDataInfo({});
            setDataPath([]);
            setIsSelectedThePath(false);
            navigation('/');
        } catch (error) {
            console.log(error.code);
        }
      }

      const fetchUserInfo = async ()=>{
        try {
            const docRef = doc(db, "users",auth.currentUser.uid);
            const docSnap = await getDoc(docRef);
            setDataInfo(docSnap.data());
          } catch (error) {
            console.log(error.code);
          }
      }
     

      useEffect(()=>{
        fetchUserInfo();
      },[]);

     
      
  return (
    <div className="userInfo relative flex justify-center  gap-[10px] text-center p-[10px] bg-green-300">
        <h1 className='header-font'>Hello, <strong className='header-font'>{dataInfo?.username} </strong>{!dataPath[0]?.paths[0]?.pathName ? 'Select your path': `You path is : " ${dataPath[0]?.paths[0]?.pathName} "`}</h1>
        <button onClick={logout} className="absolute right-[10px] border header-font px-[5px] register bg-yellow-300 border-black">Log Out</button>
    </div>
  )
}

export default UserInfo;