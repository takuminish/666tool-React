import React from 'react'
import Img from '../images/isNuN_mozaiku.jpg'
import NotResultImg from './styledcomponents/NotResultImg'

class AkumaNotResult extends React.Component {
    render() {
        return(
            <div>
                <h2>数字以外は入れちゃダメだってこと</h2>
                <NotResultImg src={Img} />
            </div>
        );
    }
}

export default AkumaNotResult;
