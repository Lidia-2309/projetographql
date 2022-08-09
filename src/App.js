import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import CountrySelect from "./components/Graph"
import Calendar from "./components/Calendar"
import './App.css';

function App() {
  return (
    <div className="container">
      <Header text="Países de Destino"/>
      <main className="main">
        <Form/>

        <div className="calendar">
            <Calendar/>
        </div>

        

      </main>
    
    </div>
  );
}

export default App;
