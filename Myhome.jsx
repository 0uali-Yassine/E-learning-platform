import { NavLink, Outlet, useLocation } from "react-router-dom";

function Myhome() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isDashboard = currentPath.includes('/myhome/dashbord');
  const isLearning = currentPath.includes('/myhome/mylearning');
  return (
    <div className="flex flex-col gap-[10px] p-[10px]">
      <NavLink to='/myhome/dashbord' className={`header-font ${isDashboard && 'underline'}`}>Dashbord</NavLink>
      <NavLink to='/myhome/mylearning' className={`header-font ${isLearning && 'underline'}`}>My learning</NavLink>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Myhome;