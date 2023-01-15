import './UserPage.css';
import DataApi from '../api/Api';
import RadarStats from '../components/radarChart';
import BarStats from '../components/barChart';
import AreaStats from '../components/areaChart';
import { useEffect, useState, } from "react";
import PieStats from '../components/pieChart';

function UserPage() {
  const [data, setdata] = useState();

  useEffect(() => {

  }, []);
  return (
    <div className='main'>
      <div className="dashboard">
        <BarStats/>
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
