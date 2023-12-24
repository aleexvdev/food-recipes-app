
export const AboutPage = () => {
  return (
    <section className='w-full h-[100vh] container text-white pb-24 px-32'>
      <div className="w-full h-full flex items-center justify-center gap-10">
        <div className="w-[40%] flex flex-col items-center justify-center">
          <div className="w-full h-full flex flex-col items-start justify-center">
            <span className="text-2xl text-orange-500 font-medium">About</span>
            <h1 className="text-4xl text-black font-bold">Why We Are Best for You</h1>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-center mt-10">
            <p className="font-medium text-xl text-gray-800">Te proporcionamos información detallada sobre recetas culinarias y una variedad de platos. Además, de datos esenciales que incluyen detalles nutricionales como las calorías y las etiquetas de salud y dieta.</p>
            <p className="font-medium text-xl text-gray-800 mt-5">En resumen, te brindamos de manera completa y accesible datos esenciales para los amantes de la cocina, desde detalles prácticos hasta consideraciones nutricionales y medioambientales.</p>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-center mt-10">
            <button className="px-5 py-3 text-white bg-orange-500 rounded-2xl text-xl font-medium hover:bg-orange-600">Learn More</button>
          </div>
        </div>
        <div className="w-[60%] h-full flex items-center justify-center py-20">
          <div className="w-full h-full flex items-center justify-start">
            <img src="/assets/images/food_1.png" alt="Foody" title="Foody" className="rounded-full w-auto h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
