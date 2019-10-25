import React from 'react'
import AkumaView from './AkumaView'
import AkumaChart from './AkumaChart';
import AkumaNotResult from './AkumaNotResult';

class AkumaResult extends React.Component {

    render() {
        const {inputResult} = this.props;
        {if (inputResult === '') return <div></div>}
        {if (isNaN(inputResult)) return <AkumaNotResult />}
        return(
            <div>
                {inputResult > 0? <AkumaView inputValue={this.props.inputResult}/> : <AkumaChart /> }
            </div>
        );
    }
}
export default AkumaResult;