import './UserPage.css';
import RadarStats from '../components/RadarChart';
import BarStats from '../components/BarChart';
import AreaStats from '../components/AreaChart';
import { useEffect, useState, } from "react";
import {useNavigate, useParams} from 'react-router-dom'
import PieStats from '../components/PieChart';
import kcal from '../assets/kcal.png'
import lipides from '../assets/lipides.png'
import proteines from '../assets/proteines.png'
import glucides from '../assets/glucides.png'
import DataApi from '../api/Api'

function UserPage() {
  const [data, setdata] = useState();
  const {id} = useParams()
  const onNavigate = useNavigate()
  useEffect(() => {
  }, []);

  return (
    <div className='main'>
      <div className="dashboard">
        <h1>Bonjour </h1>
        <div className="score">
          <BarStats/>
          <div className='nutriscore'>
            <div>
              <img src={kcal} alt='calories'/>
              <p>195</p>
            </div>
            <div>
              <img src={proteines} alt='proteines'/>
              <p>155</p>
            </div>
            <div>
              <img src={glucides} alt='glucides'/>
              <p>96</p>
            </div>
            <div>
              <img src={lipides} alt='lipides'/>
              <p>56</p>
            </div>
          </div>
        </div>
        <div className='stats'>
          <AreaStats/>
          <RadarStats/>
          <PieStats/>
        </div>
      </div>
    </div>
  );
}


export default UserPage;
