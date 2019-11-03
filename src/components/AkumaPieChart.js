import React from 'react'
import {Line} from 'react-chartjs-2'

class AkumaPieChart extends React.Component {
    render() {
        const data = {
          labels: ['April', 'May', 'June', 'July', 'August', 'September'],
          datasets: [
            {
              data: [67, 79, 52, 41, 66, 43],
              // 省略
            },
          ],
        };
        const options = {
          // 省略
        };
        return (
          <Line data={data} options={options} />
        );
      
    }
}

export default AkumaPieChart;