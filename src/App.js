import './App.css';
import DataApi from './api/Api';
import RadarStats from './components/radarChart';
import BarStats from './components/barChart';
import LineStats from './components/lineChart';
import logo from './assets/logo.png'
import icon1 from './assets/meditation_logo.png'
import icon2 from './assets/swim_logo.png'
import icon3 from './assets/bike_logo.png'
import icon4 from './assets/gym_logo.png'
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
        <nav>
          <ul>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
          </ul>
        </nav>
      </header>
      <aside>
        <img src={icon1} alt='icon-1'></img>
        <img src={icon2} alt='icon-2'></img>
        <img src={icon3} alt='icon-3'></img>
        <img src={icon4} alt='icon-4'></img>
      </aside>
      <div className="dashboard">
        <BarStats/>
        <div className='stats'>
          <LineStats/>
          <RadarStats/>
        </div>
      </div>
    </div>
  );
}


export default App;
