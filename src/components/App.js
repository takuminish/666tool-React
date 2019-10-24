import React from 'react'
import AkumaForm from './AkumaForm'

class App extends React.Component {
    render() {
        return (
            <div>
                <AkumaForm />

                <div id="akuma-view">
                    <div id="result"></div>
                </div>
                <div id="akuma-chart">
                    <div id="pie_chart_result"></div>
                    <div id="line_chart_result"></div>
                </div>
            </div>
        );
    }
}

export default App;