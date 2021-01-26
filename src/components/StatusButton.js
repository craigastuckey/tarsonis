import React from 'react'

class StatusButton extends React.Component {
    state = {
        result: []
    }
    constructor() {     
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        fetch('https://rfgxy4efvc.execute-api.us-east-1.amazonaws.com/test/minecraft/start')
        .then(res => res.json())
        .then((data) => {
            this.setState({ results: data })
        })
        .catch(console.log)
    }

    render() {
        return(
            <div className='status'>
                <div className='button prompt'>
                    <h1>The server is currently...</h1>
                </div>
                <div className='button result'>
                    <h2>{this.state.result}</h2>
                </div>
                <div className='status button'>
                    <button onClick={this.handleClick}>Status</button>
                </div>
            </div>
        )
    }

}

export default StatusButton