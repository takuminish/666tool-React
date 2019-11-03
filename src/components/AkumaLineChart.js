import React from 'react'
import {Line} from 'react-chartjs-2'

class AkumaLineChart extends React.Component {
    render() {
        const data = {
            labels: 'test',
            datasets: [{
                label: '6',
                borderColor: '#ffff00',      // yellow
                fill: false,
                backgroundColor: '#ffff00',  // yellow
                data: [1,2,3,4,5]
            }, {
                label: '666',
                borderColor: '#9400d3',      // darkViolet
                fill: false,
                backgroundColor: '#9400d3',  // darkViolet
                data: [2,4,5,5,5]
            }]
        };

        const options = {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        };
        return (
          <Line data={data} options={options} />
        );
      
    }
}

export default AkumaLineChart;