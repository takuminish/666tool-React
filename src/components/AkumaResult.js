import React from 'react'
import AkumaView from './AkumaView'
import AkumaChart from './AkumaChart';
import AkumaNotResult from './AkumaNotResult';
import { thisExpression } from '@babel/types';

class AkumaResult extends React.Component {

    constructor(props) {
        super(props);
        let {inputResult} = this.props;
        this.inputResult = inputResult;
    }
    render() {
        {if (this.inputResult === '') return <div></div>}
        {if (isNaN(this.inputResult)) return <AkumaNotResult />}
        return(
            <div>
                {this.inputResult > 0? <AkumaView inputValue={this.inputResult}/> : <AkumaChart /> }
            </div>
        );
    }
}
export default AkumaResult;