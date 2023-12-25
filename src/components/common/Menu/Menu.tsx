import { IconMenu } from "../../../assets/icons/IconMenu"

export const Menu = () => {
  return (
    <div className="w-[15%] h-full md:w-[10%] block">
      <div className="w-full h-full flex items-center justify-end">
        <IconMenu 
          className="text-orange-500 text-4xl"
        />
      </div>
    </div>
  )
}
