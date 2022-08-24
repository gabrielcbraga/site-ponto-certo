import React from "react"

import './App.css'

import { Header, Main, About, Galery, Footer, Copyright } from './components'

function App() {

  const slides = [
    { url: 'http://localhost:3000/image1.jpeg', title: "Image 1"},
    { url: 'http://localhost:3000/image2.jpeg', title: "Image 2"},
    { url: 'http://localhost:3000/image3.jpeg', title: "Image 3"},
  ]

  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <div className="galery-container">
        <div className="galery-text">
          <h2>Galeria</h2>
        </div>
        <div className="container-style">
          <Galery slides={slides}/>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
