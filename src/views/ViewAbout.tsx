export const ViewAbout = () => {
  return (
    <section className='bg-[#FFF9F0] w-full h-[90vh] text-white'>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[50%] h-full flex items-center justify-center">
          <div className="p-2 rounded-full flex items-center justify-center">
            <img src="/assets/images/food_1.png" alt="Foody" title="Foody" className="rounded-full w-[90%] h-auto shadow-xl shadow-orange-500/50" />
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col items-center justify-center">
          <div className="w-full h-full flex flex-col items-start justify-center">
            <span className="text-3xl text-orange-500 font-medium mb-3">About us</span>
            <h1 className="text-7xl text-black font-bold tracking-wider mb-6">Simple Way of Eating Delicious</h1>
            <p className="font-semibold text-2xl text-gray-900">The food palace is an neighborhood restaurent serving seasonal global cuisine driven by the faire.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
