import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import Head from "next/head";
import {useRouter} from "next/router";


 const MainLayout = ({ children }) => {
      const router = useRouter();
      const noAccess=["/login","/","/employer-sign-up","/employee-sign-up"]
  return (
    <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>دانشگاه صنعتی شیراز</title>
      <meta name='description' content='description' />
      <meta charSet='utf-8' />  
      <link
        rel='icon'
        href='/sutech.png'
      />    
    </Head>
    {noAccess.includes(router.pathname) ? "" : <Navbar/>}
      <main className='w-full'>{children}</main>
    <Footer/>
    </>
    
  )
}

export default MainLayout;
