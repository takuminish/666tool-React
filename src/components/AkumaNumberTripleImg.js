import React from 'react'
import Img from '../images/666_mozaiku.jpg'
import ResultImg from './styledcomponents/ResultImg'
import AkumaText from './styledcomponents/AkumaText'

const AkumaNumberTripleImg = (props => {
    return(
        <div>
            <AkumaText>悪魔の数字　フリーメイソン!!</AkumaText>
            <ResultImg src={Img} />        
        </div>
    );
});
export default AkumaNumberTripleImg;