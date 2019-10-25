import React from 'react'
import AkumaView from './AkumaView'
import AkumaChart from './AkumaChart';
import AkumaNotResult from './AkumaNotResult';

class AkumaResult extends React.Component {

    render() {
        const {inputValue} = this.props;
        {if (inputValue === '') return <div></div>}
        {if (isNaN(inputValue)) return <AkumaNotResult />}
        return(
            <div>
                {inputValue > 0? <AkumaView inputValue={this.props.inputValue}/> : <AkumaChart /> }
            </div>
        );
    }
}
export default AkumaResult;