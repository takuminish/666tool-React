import React from 'react'
import {Line} from 'react-chartjs-2'

class AkumaLineChart extends React.Component {
    render() {
        const data = {
            labels: this.props.akumaNumberFrequency['dx'],
            datasets: [{
                label: '6',
                borderColor: '#9400d3',      // darkViolet
                fill: false,
                backgroundColor: '#9400d3',  // darkViolet
                data: this.props.akumaNumberFrequency['akumaNumber']
            }, {
                label: '666',
                borderColor: '#ffff00',      // yellow
                fill: false,
                backgroundColor: '#ffff00',  // yellow
                data: this.props.akumaNumberFrequency['akumaNumberTriple']
            },
            {
                label: 'other',
                borderColor: '#808080',      // gray
                fill: false,
                backgroundColor: '#808080',  // gray
                data: this.props.akumaNumberFrequency['other']
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
            },
            maintainAspectRatio: true,
            responsive: true
        };
        return (
            <div style={{width: '75%', margin: 'auto'}}>
                <Line data={data} options={options}/>
            </div>
        );
      
    }
}

export default AkumaLineChart;