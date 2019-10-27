import React from 'react'
import AkumaText from './styledcomponents/AkumaText'

const CalculateView = (props => {
    return(
        <div>
            <AkumaText>{props.resultText}</AkumaText>
            <AkumaText>↓</AkumaText>
      </div>
    );
});

export default CalculateView;