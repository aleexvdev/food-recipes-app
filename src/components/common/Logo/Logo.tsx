import { NavLink } from "react-router-dom"

export const Logo = () => {
  return (
    <div className="w-full h-full 2xl:w-[15%]">
      <NavLink  to={'/'} className="w-full h-full flex items-center justify-start relative">
        <h1 className="text-3xl 2xl:text-4xl lg:text-4xl md:text-4xl font-bold text-green-600 logo2"><span className="font-bold text-black logo1">F</span>ood<span className="font-bold text-black logo1">R</span>ecipes<span className="font-bold text-black point">.</span></h1>
        <span className="h-[5px] bg-green-600 w-[70px] 2xl:w-[85px] lg:w-[85px] md:w-[85px] absolute top-[65px] left-0 linespan"></span>
      </NavLink>
    </div>
  )
}
