import React from 'react'
import {Pie} from 'react-chartjs-2'

class AkumaPieChart extends React.Component {
    render() {
        const data = {
          labels: ['6', '666', 'other'],
          datasets: [
            {
              data: [
                  this.props.akumaNumberCount['akumaNumberCount'], 
                  this.props.akumaNumberCount['akumaNumberTripleCount'], 
                  this.props.akumaNumberCount['otherCount']
                ],
              backgroundColor: [
                  '#9400d3',  // darkViolet
                  '#ffff00',  // yellow
                  '#808080'   //gray
              ,]

            },
          ],
        };
        const options = {
            legend: {
                labels: {
                    fontColor: "white"
                }
            }
        };
        return (
          <Pie data={data} options={options} />
        );
      
    }
}

export default AkumaPieChart;