import React from 'react'

class CalculateView extends React.Component {
    render() {
        return (
            <div>
              <h2>{this.props.resultText}</h2>
              <h2>↓</h2>
            </div>
        );
    }
}

export default CalculateView;