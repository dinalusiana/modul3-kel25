import React from 'react';
import './App.css';
import Parent from "./modul3/Parent";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 style={{color: "black"}}>Kelompok 25</h1>
        <h1 style={{color: "black"}}>Selamat Datang di Rumah Sakit Kami</h1>
        <p>Antrian Pasien Rumah Sakit Keluarga Sehat</p>
        <Parent />
      </div>
    )
  }
}
export default App;