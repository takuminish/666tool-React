import React from 'react'
import Img from '../images/isNuN_mozaiku.jpg'
import '../css/style.css'

class AkumaNotResult extends React.Component {
    render() {
        return(
            <div>
                <h2>数字以外は入れちゃダメだってこと</h2>
                <img id="not-result-img"src={Img}></img>
            </div>
        );
    }
}

export default AkumaNotResult;
