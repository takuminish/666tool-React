import React from 'react'
import Img from '../images/isNuN_mozaiku.jpg'
import NotResultImg from './styledcomponents/NotResultImg'
import AkumaText from './styledcomponents/AkumaText'

const AkumaNotResult = (props => {
    return(
        <div>
            <AkumaText>数字以外は入れちゃダメだってこと</AkumaText>
            <NotResultImg src={Img} />
        </div>
    );
});

export default AkumaNotResult;
