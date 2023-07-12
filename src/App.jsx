import React from "react";
import Footer from './containers/Footer/Footer';
import Blog from './containers/Blog/Blog';
import Possibility from './containers/Possibility/Possibility';
import Features from "./containers/Features/Features";
import Header from './containers/Header/Header';
import Brand from './components/Brand/Brand';
import CTA from './components/CTA/CTA';
import Navbar from './components/Navbar/Navbar';
import GPT from './containers/GPT/GPT'
import './App.css'


const  App = () =>{
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand /> 
      <GPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
