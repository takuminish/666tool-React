import React from 'react'
import Img from '../images/666_mozaiku.jpg'

class AkumaNumberTripleImg extends React.Component {
    render() {
        return(
            <div>
                <h2>悪魔の数字　フリーメイソン!!</h2>
                <img id="akumanumber-triple-img" src={Img} />        
            </div>
            );
    }
}
export default AkumaNumberTripleImg;