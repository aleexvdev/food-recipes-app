export const ViewAbout = () => {
  //2xl:bg-[#FFF9F0]
  return (
    <section className='2xl:bg-[#FFF9F0] lg:bg-[#FFF9F0] md:bg-[#FFF9F0] w-full 2xl:h-[80vh] lg:h-[80vh] md:h-[50vh] text-white 2xl:px-44 lg:px-28 md:px-16'>
      <div className="w-full h-full flex items-center justify-center container">
        <div className="w-[50%] h-full flex items-center justify-center">
          <div className="p-2 rounded-full flex items-center justify-center">
            <img src="/assets/images/food_1.png" alt="Foody" title="Foody" className="rounded-full w-[90%] h-auto shadow-xl shadow-orange-500/50" />
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col items-center justify-center">
          <div className="w-full h-full flex flex-col items-start justify-center">
            <span className="2xl:text-5xl lg:text-4xl md:text-4xl text-orange-500 font-medium mb-3">About us</span>
            <h1 className="2xl:text-7xl lg:text-6xl md:text-5xl text-black font-bold tracking-wider mb-6">Simple Way of Eating Delicious</h1>
            <p className="2xl:text-4xl lg:text-3xl md:text-2xl font-semibold text-gray-900">The food palace is an neighborhood restaurent serving seasonal global cuisine driven by the faire.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
