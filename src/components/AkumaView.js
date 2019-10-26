import React from 'react'
import CalculateView from './CalculateView'
import AkumaNumberImg from './AkumaNumberImg';
import AkumaNumberTripleImg from './AkumaNumberTripleImg';

class AkumaView extends React.Component {
    render() {
        let akumaNumberImg;

        switch(this.props.akumaNumberResult) {
            case 6:
                akumaNumberImg = <AkumaNumberImg />
            break;

            case 666:
                akumaNumberImg = <AkumaNumberTripleImg />

            break;
        }
        return(
            <div>
                {this.props.resultTexts.map((resultText, i) => <CalculateView key={i} resultText={resultText} />)}
                {akumaNumberImg}
            </div>
        );
    }
}
export default AkumaView;