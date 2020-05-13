import React, { Component } from 'react'

import './assets/CalculateBtn.css'

class CalculateBtn extends Component{
    

    render(){

        return(
            <div className="CalculateBtn" >
                <button onClick={this.props.calc}>Calculate</button>
            </div>
        )
    }
}

export default CalculateBtn;