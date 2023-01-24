import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DataApi from '../api/Api';

function AreaStats(){
  const {id} = useParams()
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
  return (
    <>{!isLoading && (
        <div className="areachart">
          <ResponsiveContainer width="100%" aspect={1}>
            <AreaChart
              width={200}
              height={60}
              data={data.sessions}
              >
              <XAxis axisLine={false} tickLine={false} dataKey="day"/>
              <Area type="monotone" strokeWidth={2} dataKey="sessionLength" stroke="#FFFFFF" fill="red" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
    )}</>
  )
}

export default AreaStats