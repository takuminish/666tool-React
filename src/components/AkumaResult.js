import React from 'react'
import AkumaView from './AkumaView'
import AkumaChart from './AkumaChart';
import AkumaNotResult from './AkumaNotResult';

class AkumaResult extends React.Component {
    render() {
        let akumaResultView;
        
        if (this.props.inputResult === '') {return <div> </div>}

        if (this.props.inputResult >= 0) {
            akumaResultView = <AkumaView akumaNumberResult={this.props.akumaNumberResult} resultTexts={this.props.resultTexts}/>
        } else {
            akumaResultView =  <AkumaChart />
        }

        if (isNaN(this.props.inputResult)) {akumaResultView = <AkumaNotResult />}
        
        return(
            <div> {akumaResultView}</div>
        );
    }
}
export default AkumaResult;