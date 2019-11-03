import React from 'react'
import AkumaPieChart from './AkumaPieChart';
import AkumaLineChart from './AkumaLineChart';

class AkumaChart extends React.Component {
    render() {
        this.lastAkumaNumberFrequency = this.props.akumaNumberFrequency.slice(-1)[0];

        this.akumaNumberFrequency = {akumaNumber: [], akumaNumberTriple: [], other: [], dx: []};
        this.props.akumaNumberFrequency.forEach(frequency => {
            this.akumaNumberFrequency['akumaNumber'].push(frequency['akumaNumberCount']);
            this.akumaNumberFrequency['akumaNumberTriple'].push(frequency['akumaNumberTripleCount']);
            this.akumaNumberFrequency['other'].push(frequency['otherCount']);
            this.akumaNumberFrequency['dx'].push(frequency['dx']); 
        });

        return(
            <div>
                <AkumaPieChart akumaNumberCount={this.lastAkumaNumberFrequency} />
                <AkumaLineChart akumaNumberFrequency={this.akumaNumberFrequency}/>
           </div>
        );
    }
}

export default AkumaChart;