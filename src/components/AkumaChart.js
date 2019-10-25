import React from 'react'
import AkumaPieChart from './AkumaPieChart';
import AkumaLineChart from './AkumaLineChart';

class AkumaChart extends React.Component {
    render() {
        return(
            <div>
                <AkumaPieChart />
                <AkumaLineChart />
           </div>
        );
    }
}

export default AkumaChart;