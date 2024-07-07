import React, {useEffect, useState} from 'react';
import { Fragment } from 'react';
import Chart from 'react-apexcharts';

const Donut = ({data, height, total}) => {
  const [series, setSeries] = useState([])

  useEffect(() => {
    dataSeries(data)
  }, [data])
  

  const dataSeries = (data)=>{
    let array = []
    for (let index = 0; index < data.length; index++) {
      const valor = ((data[index]/total)*100)
      array.push(valor.toFixed(2))
    }
    setSeries(array)
  }

  const options = {
    colors: ['hsl(357, 69%, 50%)', 'hsl(69, 58%, 48%)', 'hsl(49, 100%, 50%)'],
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      show: true,
      showForSingleSeries: false
    },
    series: [55, 32, 54],
    labels: ['No Voto', 'Si Voto', 'Sin Información'],
    chart: {
      type: 'radialBar'
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
      }
    }]
  };

  return (
    <Fragment>

      <div id="chart">
        <Chart options={options} series={series?series:options.series} type="radialBar" height={height} />
      </div>

  </Fragment>
  );
}

export default Donut;