import React, { Component } from 'react'

import './assets/Weight.css'

class Weight extends Component{
    

    render(){

        return(
            <div className="Weight" >


                    <input 
                        type="number" 
                        placeholder={this.props.weight}
                        min={70}
                        max={600}
                        onChange={this.props.selectWeight}
                        />
                    <h4>Weight (Lbs)</h4>             
            </div>
        )
    }
}

export default Weight;