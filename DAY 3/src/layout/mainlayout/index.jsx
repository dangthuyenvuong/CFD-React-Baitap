import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Nav from '../../components/nav';

export default function MainLayout({children}) {
    return (
        <>
        <Header/>
        <Nav/>
        {children}
        <Footer/>
        </>
    )
}
