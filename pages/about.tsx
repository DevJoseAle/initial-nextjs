
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import DarkLayout from '../components/layout/DarkLayout';


export default function AboutPage() {
  return (
    <>
      <h1>
          About Page
      </h1>

      <h2 className="title">
            Ir a  <Link href="/" replace={true}> Index</Link>
      </h2>
    </>

    
  )

}


AboutPage.getLayout = function getLayout(page){
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}