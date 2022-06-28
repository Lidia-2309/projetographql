import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import CountrySelect from "./components/Graph"
import './App.css';

function App() {
  return (
    <div className="container">
      <Header text="Países de Destino"/>
      <main className="main">
        <Form/>
        <div className="graph">
            <CountrySelect/>
        </div>
      </main>
    
    </div>
  );
}

export default App;
