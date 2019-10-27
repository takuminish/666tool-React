import React from 'react'
import {Button} from 'react-bootstrap'
import AkumaHeader from './styledcomponents/AkumaHeader'

class AkumaForm extends React.Component {
    render() {
        return(
            <div id="akuma-form">
                <AkumaHeader>数字の真実を…</AkumaHeader>
                <div>
                    <input type="text" value={this.props.input} onChange={this.handleChange}/>
                    <Button variant="dark" onClick={() => this.props.handleClick(this.props.input)}>解き明かす…</Button>
                </div>
            </div> 
        );
    }

    handleChange = e => {
        this.props.handleChange(e.target.value);
    }
}
export default AkumaForm;