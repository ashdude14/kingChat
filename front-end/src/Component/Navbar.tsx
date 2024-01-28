import logo from "../assets/app-name/logo-white.svg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigat=useNavigate();
  const clickHnadler= () => {
     navigat("/lobby")
  }
  return (
    <div className="bg-black sm:h-[150px] h-[90px] w-[100wh] flex items-center justify-between sm:p-12 p-6 z-0">
      <figure >
        <img  className="w-[90px] sm:w-[150px] cursor-pointer" src={logo} alt="logo" />
      </figure>
       <div className="sm:block">
       <button className="bg-[#845695] rounded-sm w-[150px] h-10 hidden sm:block cursor-pointer" onClick={()=>clickHnadler()}>Create room</button>
      </div>
      <div className="sm:hidden cursor-pointer inline-block hover:text-[#845695]" onClick={()=>clickHnadler()} >
       <IoMdAddCircleOutline size={32} />
      </div>
     </div>
  )
}

export default Navbar
