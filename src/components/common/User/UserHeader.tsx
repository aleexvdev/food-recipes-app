import IconCircleUser from "../../../assets/icons/IconUser"

export const UserHeader = () => {
  return (
    <div className="w-[15%] h-full">
      <div className="w-full h-full flex items-center justify-end">
        <IconCircleUser 
          className="text-orange-500 text-4xl"
        />
      </div>
    </div>
  )
}
