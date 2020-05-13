import React, {Component} from 'react';
import axios from 'axios';
import './assets/Calculator.css';
import Results from './Results';
import Gender from './Gender';
import Height from './Height';
import Weight from './Weight';
import CalculateBtn from './CalculateBtn';


class Calculator extends Component{

    state = {
        heightFeet: 5,
        heightInches: 7,
        weight: 130,
        gender: null,
        show: false,
        BMI: null
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      } 

    // Change handler for Gender
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
// Changes Weight in state to user input
    changeWeight = (e) => {
        console.log(e.target.value)
        const userWeight = e.target.value;
        this.setState({weight: userWeight})
    }
// Calculates BMI and sets it to state. Also changes show to true to show results
    calculate = () => {
        const state = this.state;
        if(state.gender != null){
        const weightCalc = state.weight * .45;
        const heightInches = state.heightFeet * 12 + parseInt(state.heightInches);
        const heightCalc = heightInches * 0.025;
        const squarerootOfHeight = heightCalc **2;
        const totalBMI = weightCalc / squarerootOfHeight;
        console.log(totalBMI)
        this.setState({
            BMI: totalBMI.toFixed(2)
        })
        this.setState({
            show: true
        })
    }
    }
    //Sets the wrapper ref
    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }
    //Alert if clicked outside of element
    handleClickOutside = (e) => {
      if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.setState({show:false})
     }
    }
    handleCloseBtnClick = () => {
        this.setState({show:false})
    }


    render(){
        return(
        <div className="Calculator">
                    <h1 className="BodyMassName">Body Mass Calculator</h1>
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
        <div className="Weight-container">
            <Weight weight={this.state.weight} selectWeight={this.changeWeight} />
        </div>
            <CalculateBtn calc={this.calculate}/>
            {this.state.show ? <Results 
            className="slide-top" 
            bmiResults={this.state.BMI} 
            wrapperRef={this.setWrapperRef}
            closeBtn={this.handleCloseBtnClick}
            /> : null}
        </div>
        )
    }
}

export default Calculator;