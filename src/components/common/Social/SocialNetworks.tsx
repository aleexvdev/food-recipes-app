import { networks } from '../../../data/networks'
import { Link } from 'react-router-dom'

export const SocialNetworks = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      {
        networks.map( (network, index) => (
          <Link
            to={network.url}
            key={index}
            className='w-10 mx-2'
            target='_blank'
          >
            <img 
              src={`/src/assets/icons/IconsSocial/${network.icon}.svg`} 
              alt={network.social_network} 
              title={network.social_network} 
              
            />
          </Link>
        ))
      }
    </div>
  )
}
