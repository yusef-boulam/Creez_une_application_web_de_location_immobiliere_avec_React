import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import pictureHome from "../assets/home/pictureHome.png";
import "../styles/Home.css";


  
export default function Home() {
 
useEffect(() => {
  document.title = "Home"
}, []); 

  return (
    <div className="homePage">
      <header>

        <Banner />

        <div className="container-img-h1">
          <img
            src={pictureHome}
            alt="falaises donnant sur la mer"
          />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </header>

      <Gallery />

      <Footer />

    </div>
  );
}
