import React from 'react'
import {Button} from 'react-bootstrap'

class AkumaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }
    render() {
        return(
            <div id="akuma-form">
                <h1>数字の真実を…</h1>
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