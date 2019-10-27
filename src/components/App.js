import React from 'react'
import AkumaForm from './AkumaForm'
import AkumaResult from './AkumaResult'
import AKumaComponent from './styledcomponents/AkumaComponent'

const App = (props => {
    return (
        <AKumaComponent>        
            <AkumaForm handleClick={props.setValue} handleChange={props.inputValue} input={props.input}/>
            <AkumaResult inputResult={props.inputResult} akumaNumberResult={props.akumaNumberResult} resultTexts={props.resultTexts}/>
        </AKumaComponent>
    );
});

export default App;