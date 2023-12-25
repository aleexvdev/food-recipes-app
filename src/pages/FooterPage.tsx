import { Link } from "react-router-dom"
import { SocialNetworks } from "../components/common/Social/SocialNetworks"

export const FooterPage = () => {
  return (
    <footer className='bg-orange-500/30 h-auto py-5'>
      <div className="w-full h-full flex flex-col items-center justify-center container">
        <div className='flex flex-col items-center justify-center 2xl:flex-row lg:flex-row md:flex-row'>
          <div className='flex flex-col items-start justify-start pt-2 px-10'>
            <div className='flex flex-col flex-wrap justify-center w-full items-center'>
              <span className={`text-black font-medium text-lg pb-3 tracking-wide`}>Recipe data provided by</span>
              <Link 
                to={'https://www.edamam.com/'}
                target="_blank"
                className={`p-3 bg-white rounded-xl`}
              >
                <img src={'https://www.edamam.com/assets/img/logo.png'} alt="Edaman" title="Edaman" />
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start pt-5 px-3 2xl:pt-2 lg:pt-2 md:pt-2'>
            <div className='flex flex-col flex-wrap justify-center w-full items-center'>
              <span className={`text-black font-medium text-lg pb-3 tracking-wide`}>Touch here 👇🏻</span>
              <SocialNetworks />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center pt-5">
          <p className="font-medium text-lg">Made with ❤️ by <Link to={'https://github.com/aleexvdev'} className="hover:text-orange-700">@alexvdev</Link></p>
        </div>
      </div>
    </footer>
  )
}
