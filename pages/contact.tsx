
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';


export default function ContactPage() {
  return (
    <MainLayout>
        <h1>
           Contact Page
        </h1>

        <h2 className="title">
            Ir a  <Link href="/" replace={true}> Index</Link>
        </h2>
    </MainLayout>
  )
}
