import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <div className="w-[15%] h-full">
      <Link to={'/home'} className="w-full h-full flex items-center justify-start relative">
        <h1 className="text-4xl font-bold"><span className="font-bold text-orange-500">F</span>ood<span className="font-bold text-orange-500">R</span>ecipes<span className="font-bold text-orange-500">.</span></h1>
        <span className="h-[5px] bg-orange-500 w-[85px] absolute top-[65px] left-0"></span>
      </Link>
    </div>
  )
}
