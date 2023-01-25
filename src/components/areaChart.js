import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import DataApi from '../api/Api';

/** 
 * React component for user average sessions
 * @param {number} props user Id
 * @returns {JSX}
 */

function AreaStats(props){
  const id = props.id
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const call = new DataApi()
  useEffect(() => {
    call.get(id, '/average-sessions')
    .then(function (res){
      setData(res)
      setIsLoading(false)
    },[isLoading, data])
  })
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
          <p className="label">{`${payload[0].value} min`}</p>
      );
    }
  };
  console.log(data.sessions)
  return (
    <>{!isLoading && (
        <div className="areachart">
          <p className='description'>Durée moyenne des sessions</p>
          <ResponsiveContainer width="100%" aspect={1.8}>
            <LineChart
            width={500}
            height={300}
            data={data.sessions}
            >
              <XAxis axisLine={false} tickLine={false} dataKey="day" stroke='#FFFFFF' style={{opacity: 0.6}}/>
              <Tooltip content={<CustomTooltip />}/>
              <Line type="monotone" dataKey="sessionLength" strokeWidth={3} stroke="#FFFFFF" style={{opacity: 0.6,}}/>
          </LineChart>
        </ResponsiveContainer>
        </div>
    )}</>
  )
}

export default AreaStats