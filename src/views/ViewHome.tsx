import { CircleImage } from '../components/common/Foods/CircleImage'

export const ViewHome = () => {
  return (
    <section className='bg-[#FFFEFC] w-full h-[100vh] text-white'>
      <div className="w-full h-full flex items-center justify-center pb-20">
        <div className="w-[50%] h-full flex flex-col items-center justify-center">
          <div className="w-full h-full flex flex-col items-start justify-center">
            <span className="text-3xl text-orange-500 font-medium mb-3">Recipes</span>
            <h1 className="text-8xl text-black font-bold tracking-wider mb-6">Good Food</h1>
            <h1 className="text-8xl text-black font-bold tracking-wider mb-10">Good Mood</h1>
            <p className="font-semibold text-2xl text-gray-900">The food palace is an neighborhood restaurent serving seasonal global cuisine driven by the faire.</p>
          </div>
        </div>
        <div className="w-[50%] h-full flex items-center justify-center py-20">
          <div className="w-full h-full flex items-center justify-center">
            <CircleImage />
          </div>
        </div>
      </div>
    </section>
  )
}
