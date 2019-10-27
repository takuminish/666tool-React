import React from 'react'
import Img from '../images/6_mozaiku.jpg'
import ResultImg from './styledcomponents/ResultImg'
import AkumaText from './styledcomponents/AkumaText'

class AkumaNumberImg extends React.Component {
    render() {
        return(
            <div>
                <AkumaText>悪魔の数字</AkumaText>
                <ResultImg id="akumanumber-img" src={Img} />        
            </div>
        );
    }
}
export default AkumaNumberImg;