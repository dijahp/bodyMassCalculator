import React, {Component} from 'react';
import './assets/Results.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus, faCalculator, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faMars } from '@fortawesome/free-solid-svg-icons'

class Results extends Component{


    render(){
        const BMI = this.props.bmiResults;
        let healthStatus;
        let healthParagraph;

        if(BMI < 18.5 && BMI > 0){
            healthStatus = <h3 className="healthStatus">Underweight</h3>
            healthParagraph = <p className="healthParagraph">You look great, but may need to put on some more weight to feel your best. You are recommended to ask your doctor or a dietitian for advice.</p>
        } else if(BMI < 24.9 && BMI > 18.5){
            healthStatus = <h3 className="healthStatus">Healthy</h3>
            healthParagraph = <p className="healthParagraph">You are at a healthy weight for your height. By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>
        } else if(BMI < 29.9 && BMI > 25.0){
            healthStatus = <h3 className="healthStatus">Overweight</h3>
            healthParagraph = <p className="healthParagraph">You may be slightly overweight. Note that muscle does weigh more than fat, but if you are not working out you may be advised to lose some weight for health reasons.</p>
        } else if(BMI > 30){
            healthStatus = <h3 className="healthStatus">Obese</h3>
            healthParagraph = <p className="healthParagraph">Your health may be at risk if you do not lose weight. It's recommended to talk to your doctor or a dietitian for advice.</p>
        }

        return(
            <div className="Results slide-top" ref={this.props.wrapperRef}>

             <div className="mainBMI">
                <h1>{BMI}</h1>
                <h4>BMI</h4>
              </div>
              <div className="health-facts">
                    <FontAwesomeIcon icon={faWindowClose} className="closeBtn" onClick={this.props.closeBtn}/>
                  {healthStatus}
                  {healthParagraph}
              </div>
            </div>
        )
    }
}

export default Results;