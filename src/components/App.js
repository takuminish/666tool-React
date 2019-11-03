import React from 'react'
import AkumaForm from './AkumaForm'
import AkumaResult from './AkumaResult'
import AKumaComponent from './styledcomponents/AkumaComponent'
import AkumaHeader from './styledcomponents/AkumaHeader'

const App = (props => {
    return (
        <AKumaComponent>   
            <AkumaHeader>数字の真実を…</AkumaHeader>     
            <AkumaForm handleClick={props.setValue} handleChange={props.inputValue} input={props.input}/>
            <AkumaResult inputResult={props.inputResult} akumaNumberResult={props.akumaNumberResult} resultTexts={props.resultTexts} akumaNumberFrequency={props.akumaNumberFrequency}/>
        </AKumaComponent>
    );
});

export default App;