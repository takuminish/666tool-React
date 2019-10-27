import React from 'react'
import AkumaText from './styledcomponents/AkumaText'

class CalculateView extends React.Component {
    render() {
        return (
            <div>
              <AkumaText>{this.props.resultText}</AkumaText>
              <AkumaText>↓</AkumaText>
            </div>
        );
    }
}

export default CalculateView;