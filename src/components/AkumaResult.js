import React from 'react'
import AkumaView from './AkumaView'
import AkumaChart from './AkumaChart';
import AkumaNotResult from './AkumaNotResult';

class AkumaResult extends React.Component {
    render() {
        {if (this.props.inputResult === '') return <div></div>}
        {if (isNaN(this.props.inputResult)) return <AkumaNotResult />}
        return(
            <div>
                {this.props.inputResult > 0? <AkumaView akumaNumberResult={this.props.akumaNumberResult} resultTexts={this.props.resultTexts}/> : <AkumaChart /> }
            </div>
        );
    }
}
export default AkumaResult;