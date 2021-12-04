import React from 'react'
import './style.css'
import Header from "./comp/Header/Header";
import HeaderMenu from "./comp/Header/HeaderMenu";
import Second from "./comp/second/Second";
import Apple from "./comp/Apple/Apple";

function App() {
  return (
    <div className="App">
            <Header/>
            <main>
               <Second/>
                <Apple/>
            </main>
    </div>
  );
}

export default App;
