import Link from 'next/link'
import MainLayout from '../components/layout/MainLayout'

export default function Home() {
  return (
    <MainLayout>

        <h1>
         Index Page
        </h1>
        <h2 className={'title'}>
          Ir a <Link href="/about"> About</Link>
        </h2>


    </MainLayout>
  )
}

// 227825100
// recaudaciones@banmedica.cl