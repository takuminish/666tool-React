import React from 'react'
import {Pie} from 'react-chartjs-2'

class AkumaPieChart extends React.Component {
    render() {
        const data = {
          labels: ['6', '666', 'other'],
          datasets: [
            {
              data: [10,10,10],
              backgroundColor: [
                  '#9400d3',  // darkViolet
                  '#ffff00',  // yellow
                  '#808080'   //gray
              ,]
              // 省略
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