import React from 'react'

class StatusButton extends React.Component {
    constructor() {     
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    
    handleClick() {
        console.log('STATUS')
    }

    render() {
        return(
            <div className='status'>
                <div className='button prompt'>
                    <h1>The server is currently...</h1>
                </div>
                <div className='status button'>
                    <button onClick={this.handleClick}>Status</button>
                </div>
            </div>
        )
    }

}

export default StatusButton