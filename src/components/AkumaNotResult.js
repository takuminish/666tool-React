import React from 'react'
import Img from '../images/isNuN_mozaiku.jpg'

class AkumaNotResult extends React.Component {
    render() {
        return(
            <div>
                <h2>数字以外は入れちゃダメだってこと</h2>
                <img src={Img}></img>
            </div>
        );
    }
}

export default AkumaNotResult;
