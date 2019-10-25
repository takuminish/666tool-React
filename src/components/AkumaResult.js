import React from 'react'
import AkumaView from './AkumaView'
import AkumaChart from './AkumaChart';

class AkumaResult extends React.Component {

    render() {
        const {inputValue} = this.props;
        return(
            <div>
                {inputValue > 0? <AkumaView /> : <AkumaChart /> }
            </div>
        );
    }
}
export default AkumaResult;