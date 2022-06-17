import { UserCircleIcon } from '@heroicons/react/solid';
import { Subscribe } from '../components/Subscribe'
import { GetStaticProps } from 'next'
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home( {product}: HomeProps ) {
  return (
    <div className='bg-black'>
      <div className="flex items-center justify-between min-h-screen px-8 mx-auto text-4xl text-white max-w-7xl">
        <div className='space-y-4'>
          <div>
            <span>Welcome!</span>
          </div>
          <div>
            <span>{ product.amount } </span>
          </div>
          <div>
            <Subscribe priceId={product.priceId}/>
          </div>
        </div>
        <div>
          <UserCircleIcon className="w-32 h-32 " />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1LBVZTD7g9nnFchQiDNPF8yk', {
    expand: ['product']
  })
  
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidade: 60 * 60 * 24 // 24 hours
  }
}