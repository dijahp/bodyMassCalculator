import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './assets/Height.css'

class Height extends Component{
    

    render(){

        return(
            <div className="Height" >

                <div className="height-feet">
                    <input 
                        type="number" 
                        placeholder={this.props.feet}
                        min={3}
                        max={8}
                        maxLength={2}
                        onChange={this.props.handleFeetChange}/>
                    <h4>Feet</h4>
                </div>
                <div className="height-inches">
                    <input 
                    type="number" 
                    placeholder={this.props.inches}
                    min={0}
                    max={12}

                    onChange={this.props.handleInchesChange}/>
                    <h4>Inches</h4>
                </div>
              
                
            </div>
        )
    }
}

export default Height;