export const HomePage = () => {

  return (
    <section className='w-full h-[100vh] container text-white pb-24'>
      <div className="w-full h-full flex items-center justify-center gap-10">
        <div className="w-[40%] flex flex-col items-center justify-end">
          <div className="w-full h-full flex flex-col items-end justify-center">
            <span className="text-4xl text-black font-medium">foddy</span>
            <h1 className="text-8xl text-orange-500 font-bold">Hungry !</h1>
          </div>
          <div className="w-full h-full flex flex-col items-end justify-center mt-10">
            <p className="font-bold text-2xl text-gray-800">Deliciuos <span className="text-orange-500">food</span> and best service</p>
            <p className="font-bold text-2xl text-gray-800">We offer the best <span className="text-orange-500">meals</span> at the best <span className="text-orange-500">value</span></p>
          </div>
        </div>
        <div className="w-[60%] h-full flex items-center justify-center py-20">
          <div className="w-full h-full flex items-center justify-start">
            <img src="/src/assets/images/food_1.png" alt="Foody" title="Foody" className="rounded-full w-auto h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
