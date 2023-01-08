import './App.css';
import DataApi from './api/Api';
import RadarStats from './components/radarChart';
import BarStats from './components/barChart';
import logo from './assets/logo.png'
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState();

  useEffect(() => {
    const fetchDatas = new DataApi('./data.js')
    console.log(fetchDatas.get(data))
  }, []);
  return (
    <div className='main'>
      <header>
        <img src={logo} alt='sportsee-logo'/>
      </header>
      <div className="dashboard">
        <RadarStats/>
        <BarStats/>
      </div>
    </div>
  );
}


export default App;
