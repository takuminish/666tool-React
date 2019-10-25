import React from 'react'
import AkumaForm from './AkumaForm'
import AkumaView from './AkumaView'
import AkumaChart from './AkumaChart'

class App extends React.Component {
    render() {
        return (
            <div>
                <AkumaForm />

                <AkumaView />

                <AkumaChart />
            </div>
        );
    }
}

export default App;