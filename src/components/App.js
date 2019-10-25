import React from 'react'
import AkumaForm from './AkumaForm'
import AkumaResult from './AkumaResult'

class App extends React.Component {
    render() {
        return (
            <div>        
                <AkumaForm handleClick={this.props.handleClick}/>
                <AkumaResult inputValue={this.props.input}/>
            </div>
        );
    }

}

export default App;