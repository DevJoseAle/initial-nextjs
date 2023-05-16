import Link from 'next/link'
import MainLayout from '../../components/layout/MainLayout'


export default function PricingPage() {
  return (
    <MainLayout>

        <h1>
         Pricing Page
        </h1>
        <h2 className={'title'}>
          Ir a <Link href="/"> Index.js</Link>
        </h2>


    </MainLayout>
  )
}
