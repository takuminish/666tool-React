import React from 'react'

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
                    <button type="button" onClick={() => this.props.handleClick(this.props.input)}>解き明かす…</button>
                </div>
            </div> 
        );
    }

    handleChange = e => {
        this.props.handleChange(e.target.value);
    }
}
export default AkumaForm;