import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import DataApi from '../api/Api';

/** 
 * React component for user performance
 * @param {number} props User Id
 * @returns {JSX}    
 */

const tata = [
    {
        subject: "Intensité",
        A: 120,
        B: 110,
        fullMark: 150
    },
    {
        subject: "Vitesse",
        A: 98,
        B: 130,
        fullMark: 150
    },
    {
        subject: "Force",
        A: 86,
        B: 130,
        fullMark: 150
    },
    {
        subject: "Endurance",
        A: 99,
        B: 100,
        fullMark: 150
    },
    {
        subject: "Energie",
        A: 85,
        B: 90,
        fullMark: 150
    },
    {
        subject: "Cardio",
        A: 65,
        B: 85,
        fullMark: 150
    }
]

function RadarStats(props){
  const id = props.id
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const call = new DataApi()
  useEffect(() => {
    call.get(id, '/performance')
    .then(function (res){
      setData(res)
      setIsLoading(false)
    },[isLoading, data])
  })
  return (
    <>{!isLoading && (
      <div className='radarchart'>
      <ResponsiveContainer width="100%" aspect={1}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind'/>
          <Radar dataKey='value' stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
    )}</>
  );
}

export default RadarStats

