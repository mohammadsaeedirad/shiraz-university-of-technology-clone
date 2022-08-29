import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import Head from "next/head";
import {useRouter} from "next/router";


 const MainLayout = ({ children }) => {
      const router = useRouter();
  return (
    <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>TEST</title>
      <meta name='description' content='description' />
      <meta charSet='utf-8' />      
    </Head>
    <Navbar/>
      <main className='w-full'>{children}</main>
    <Footer/>
    </>
    
  )
}

export default MainLayout;
