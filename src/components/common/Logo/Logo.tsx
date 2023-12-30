import { NavLink } from "react-router-dom"

export const Logo = () => {
  return (
    <div className="w-[15%] h-full md:w-[50%] sm:w-10 sm:bg-slate-500">
      <NavLink  to={'/'} className="w-full h-full flex items-center justify-start relative">
        <h1 className="text-3xl 2xl:text-4xl lg:text-4xl md:text-4xl font-bold logo2"><span className="font-bold text-white logo1">F</span>ood<span className="font-bold text-white logo1">R</span>ecipes<span className="font-bold text-orange-500">.</span></h1>
        <span className="h-[5px] bg-white w-[70px] 2xl:w-[85px] lg:w-[85px] md:w-[85px] absolute top-[65px] left-0"></span>
      </NavLink>
    </div>
  )
}
