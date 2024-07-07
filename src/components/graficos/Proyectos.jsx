'use client'
import React, { PureComponent } from 'react';
import {
  BarChart, Bar,  Tooltip,ResponsiveContainer, 
} from 'recharts';


const CustomTooltip = ({active, payload, fill, fill_2, fill_3}) => {
  if (active && payload) {
    if (payload[1]) {
      
        if (
          document.getElementById('label1') &&
          document.getElementById('label2') &&
          document.getElementById('label3')
        ) {
          document.getElementById('label1').style.backgroundColor=fill
          document.getElementById('label2').style.backgroundColor=fill_2
          document.getElementById('label2').style.backgroundColor=fill_3
        }
        
      return (
      <div className="box degradado-morado-transparent" id="box">
        <p className ="text-white">{payload[0].payload.estado}</p>
        <p className="label text-white is-size-7"><span id="label2"></span>{`Sin Información: ${payload[1].value}`}</p>
        <p className="label text-white is-size-7"><span id="label1"></span>{`Votantes: ${payload[0].value}`}</p>
        <p className="label text-white is-size-7"><span id="label3"></span>{`No Votantes: ${payload[2].value}`}</p>
      </div>
    )
    }else{
      return (
      <div className="box degradado-morado-transparent">
        <p className ="text-white">{payload[0].payload.estado}</p>
        <p className="label text-white is-size-7"><span id="label1"></span>{`${payload[0].dataKey} : ${payload[0].value}`}</p>
      </div>
    );
    }
  }
  return null
}

export default class BarGraf extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

  render() {
    return (
    <ResponsiveContainer width={this.props.ancho} aspect={4.0/1}>
      <BarChart
        
        data={this.props.graficosReducer}
        margin={{
          top: 15, right:30 , left:30 , bottom: 15,
        }}
        barSize={20}
        innerRadius={100}
        outerRadius = {100}
      >  
        <Tooltip content={<CustomTooltip fill= {this.props.fill} fill_2= {this.props.fill_2}/>} cursor={{stroke:this.props.fill, fill:"none"}}/>
        <Bar dataKey="total" stackId="a" fill={this.props.fill_2} radius={[0 ,0, 20, 20]} barSize={6} background={{ fill: this.props.background, radius:20}}/>
        <Bar dataKey="total_sin" stackId="a" fill={this.props.fill} radius={[0,0, 0,0]} barSize={6} background={{ fill: this.props.background, radius:20}}/>
        <Bar dataKey="total_no" stackId="a" fill={this.props.fill_3} radius={[20 ,20, 0,0]} barSize={6} background={{ fill: this.props.background, radius:20}}/>
       
      </BarChart>
      </ResponsiveContainer>
    );
  }
}




