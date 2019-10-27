import React from 'react'
import {Button} from 'react-bootstrap'
import AkumaHeader from './styledcomponents/AkumaHeader'

class AkumaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
    }
    render() {
        return(
            <div id="akuma-form">
                <div>
                    <input type="text" value={this.state.input} onChange={this.handleChange}/>
                    <Button variant="dark" onClick={() => this.props.handleClick(this.state.input)}>解き明かす…</Button>
                </div>
            </div> 
        );
    }

    handleChange = e => {
        this.setState({input: e.target.value});
    }
}
export default AkumaForm;