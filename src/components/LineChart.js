import PropTypes from "prop-types"
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import DataApi from '../api/Api';

/** 
 * @function LineStats React component for user average sessions
 * @param {number} props user Id
 * @returns {JSX} informations for line chart
 */

const days = ['L','M','M','J','V','S','D']

function LineStats(props){
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
  if(!isLoading){
    data.sessions.forEach((session, id) => session.day = days[id])
  }
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
          <p className="label">{`${payload[0].value} min`}</p>
      )
    }
  }
  return (
    <>{!isLoading && (
        <div className="linechart">
          <p className='description'>Durée moyenne des sessions</p>
          <ResponsiveContainer width="100%" aspect={1.8}>
            <LineChart
            width={500}
            height={300}
            data={data.sessions}
            >
              <XAxis axisLine={false} tickLine={false} dataKey="day" stroke='#FFFFFF' style={{opacity: 0.6}}/>
              <Tooltip cursor={false} content={<CustomTooltip />}/>
              <Line type="basis" dataKey="sessionLength" strokeWidth={3} stroke="#FFFFFF" style={{opacity: 0.6,}}/>
          </LineChart>
        </ResponsiveContainer>
        </div>
    )}</>
  )
}

LineStats.propTypes = {
  id: PropTypes.string.isRequired
}

export default LineStats