export const RecipePage = () => {
  return (
    <section className='w-full h-[100vh] container text-white pb-24 px-32'>
      <div className="w-full h-full flex items-center justify-center gap-10">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-3xl text-orange-500 font-medium">Recipes</span>
            <h1 className="text-4xl text-black font-bold">Most Popular Items</h1>
          </div>
          <div className="w-full h-full flex items-center justify-center mt-10 gap-10">
            
          </div>
          <div className="w-full h-full flex items-center justify-center mt-10">
            <button className="px-5 py-3 text-white bg-orange-500 rounded-2xl text-xl font-medium hover:bg-orange-600">See More Recipes</button>
          </div> 
        </div>
      </div>
    </section>
  )
}
