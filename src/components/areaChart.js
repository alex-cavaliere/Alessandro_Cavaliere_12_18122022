import React, { PureComponent, useEffect } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DataApi from '../api/Api';

const dataUrl = `http://localhost:3000/user/`
/*
  estendere questa logica per gli altri
*/
export default class AreaStats extends PureComponent {
  constructor(props){
    super(props)
    this.id = props.id
    this.data = props.data
  }
  render() {
    const data = new DataApi(dataUrl).getUserSession(this.id)
    data.then(function (res){
      console.log(res)
    })
    return (
      <div className="areachart">
        <ResponsiveContainer width="100%" aspect={1}>
          <AreaChart
            width={200}
            height={60}
            data={this.data}
            >
            <XAxis axisLine={false} tickLine={false} dataKey="day"/>
            <Area type="monotone" strokeWidth={2} dataKey="uv" stroke="#FFFFFF" fill="red" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
