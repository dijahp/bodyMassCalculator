import React, {Component} from 'react';
import './assets/Calculator.css';
import Results from './Results';
import Gender from './Gender';
import Height from './Height'

class Calculator extends Component{

    state = {
        heightFeet: 5,
        heightInches: 7,
        weight: null,
        gender: null
    }

    selectGender = (g) => {
    if(g === "Female"){
     this.setState({gender: "Female"})
    } else if(g === "Male"){
        this.setState({gender: "Male"})
    }
}
    //Changes Feet in state to whatever number user inputs as height
    changeFeet = (e) => {
    console.log(e.target.value)
    const userHeightFt = e.target.value;
    this.setState({heightFeet: userHeightFt})
    }
    changeInches = (e) => {
    console.log(e.target.value)
    const userHeightIn = e.target.value;
    this.setState({heightInches: userHeightIn})
    }
    render(){
        return(
        <div className="Calculator">
         <div className="Gender-container">
            <Gender gender="Female" selectGender={this.selectGender} genderPick={this.state.gender}/>
            <Gender gender="Male" selectGender={this.selectGender} genderPick={this.state.gender}/>   
        </div>
        <div className="Height-container">
            <Height 
            feet={this.state.heightFeet} 
            inches={this.state.heightInches}
            handleFeetChange={this.changeFeet}
            handleInchesChange={this.changeInches}/>
        </div>

            <Results/>
        </div>
        )
    }
}

export default Calculator;