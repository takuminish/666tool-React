import React from 'react'
import {pure} from 'recompose'
import Img from '../images/6_mozaiku.jpg'
import ResultImg from './styledcomponents/ResultImg'
import AkumaText from './styledcomponents/AkumaText'

const AkumaNumberImg = (props => {
    return(
        <div>
            <AkumaText>悪魔の数字</AkumaText>
            <ResultImg id="akumanumber-img" src={Img} />        
        </div>
    );
});

const PureAkumaNumberImg = pure(AkumaNumberImg);

export default PureAkumaNumberImg;