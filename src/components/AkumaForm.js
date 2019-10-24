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
                    <input type="text" value={this.state.input} onChange={this.handleChange}/>
                    <button type="button" onClick={this.handleClick}>解き明かす…</button>
                </div>
            </div> 
        );
    }

    handleChange = e => {
        this.setState({input: e.currentTarget.value});
    }

    handleClick = e => {
        console.log(this.state.input);
    }
}
export default AkumaForm;