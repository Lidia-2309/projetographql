import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="container">
      <Header text="Países de Destino"/>
      <main className="main">
        <Form/>
      </main>
       
    </div>
  );
}

export default App;
