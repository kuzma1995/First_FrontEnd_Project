import React from 'react';
import './App.css';
import BannerOne from './components/bannerOne/BannerOne';
import Customers from './components/customers/Customers';
import KnowledgeBase from './components/knowledgeBase/KnowledgeBase';
import Navbar from './components/navbar/Navbar';
import Process from './components/process/Process';
import Representatives from './components/representatives/Representatives';
import SalesProgram from './components/salesProgram/SalesProgram';
import Section from './components/section/Section';
import Svet360 from './components/svet360/Svet360';
import { customers } from './components/customers/customerData';
import Footer from './components/footer/Footer';
import BackToTop from './components/backToTop/BackToTop';


function App() {
  return (
    <>
      <Navbar />
      <BannerOne />
      <SalesProgram />
      <Process />
      <Section />
      <Representatives />
      <Svet360 />
      <KnowledgeBase />
      <Customers customers={customers}/>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
