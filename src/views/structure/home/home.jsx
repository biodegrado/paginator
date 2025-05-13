import './home.scss';
import React , {useEffect,useState} from "react";
import Header from "../../../components/components/header/header";
import Footer from "../../../components/components/footer/footer";
import HomeBody from "../../../components/components/home-body/home-body";
import Tabella from "../../../components/components/tabella/tabella";
function Home() {
  

  return (
    <div className="page-home">
        <Header/>
        <Tabella/>
        <Footer/>
    </div>
  );
}

export default Home;