import React from 'react'
import Img from '../images/6_mozaiku.jpg'

class AkumaNumberImg extends React.Component {
    render() {
        return(
            <div>
                <h2>悪魔の数字</h2>
                <img id="akumanumber-img" src={Img} />        
            </div>
        );
    }
}
export default AkumaNumberImg;