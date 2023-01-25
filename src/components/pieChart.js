import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import DataApi from '../api/Api';

/** 
 * React component for user today score
 * @param {number} props User Id
 * @returns {JSX}    
 */

const COLORS = ["#E60000", "#FFFFFF"];

export default function PieStats(props) {
  const id = props.id
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const call = new DataApi()
  useEffect(() => {
    call.get(id, '')
    .then(function (res){
      setData(res)
      setIsLoading(false)
    },[isLoading, data])
  })
  const score = [
    { name: "start", value: Number(data.todayScore)},
    { name: "range", value: 1 }
  ];
  return (
    <div className='piechart'>
      <p>Score</p>
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart width={800} height={400}>
          <Pie
            data={score}
            cx={140}
            cy={90}
            cornerRadius={50}
            innerRadius={80}
            outerRadius={90}
            startAngle={180}
            endAngle={-360}
            paddingAngle={4}
            dataKey="value"
          >
            {score.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <Label value={score[0].value * 100 + '%  de votre objectif'} position="center" width={50}/>
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
