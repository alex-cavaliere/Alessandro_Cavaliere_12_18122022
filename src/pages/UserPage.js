import './UserPage.css';
import RadarStats from '../components/RadarChart';
import BarStats from '../components/BarChart';
import AreaStats from '../components/AreaChart';
import { useEffect, useState, } from "react";
import { useParams } from 'react-router-dom'
import PieStats from '../components/PieChart';
import kcal from '../assets/kcal.png'
import lipides from '../assets/lipides.png'
import proteines from '../assets/proteines.png'
import glucides from '../assets/glucides.png'
import DataApi from '../api/Api'
import PropTypes from 'prop-types'

/** 
 * React component for User Page 
 * @returns {JSX} informations about user
 */

function UserPage() {
  const {id} = useParams()
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const call = new DataApi()
  useEffect(() => {
    call.get(id, '')
    .then(function (res){
      setData(res)
      setIsLoading(false)
    },[isLoading])
  })

  return (
    <>{!isLoading && (
      <div className='main'>
        <div className="dashboard">
          <h1>Bonjour <span className="firstName">{data.userInfos.firstName}</span></h1>
          <div className="score">
            <BarStats id={id}/>
            <div className='nutriscore'>
              <div>
                <img src={kcal} alt='calories'/>
                <p>{data.keyData.calorieCount + "kcal"}</p>
              </div>
              <div>
                <img src={proteines} alt='proteines'/>
                <p>{data.keyData.proteinCount + "mg"}</p>
              </div>
              <div>
                <img src={glucides} alt='glucides'/>
                <p>{data.keyData.carbohydrateCount + "mg"}</p>
              </div>
              <div>
                <img src={lipides} alt='lipides'/>
                <p>{data.keyData.lipidCount + "mg"}</p>
              </div>
            </div>
          </div>
          <div className='stats'>
            <AreaStats id={id}/>
            <RadarStats id={id}/>
            <PieStats id={id}/>
          </div>
        </div>
      </div>
    )}</>
  );
}


export default UserPage;
