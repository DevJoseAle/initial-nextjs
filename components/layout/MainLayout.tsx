import { FC } from 'react';
import Head from 'next/head'
import Navbar from '../Navbar'
import styles from './MainLayout.module.css';

const MainLayout : FC = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>NEXT APP</title>
            <meta name="description" content="HOME PAGE" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
    
          <main className={styles.main}>
            {children} 
          </main>
    
        </div>
      )
}

export default MainLayout

