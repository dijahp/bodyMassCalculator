import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus } from '@fortawesome/free-solid-svg-icons';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import './assets/Gender.css'

class Gender extends Component{
    

    render(){
        const gender = this.props.gender;
        let select;

        if(gender === this.props.genderPick){
            select = "gen-back"
        } 

        return(
            <div className={`Gender ${select}`} onClick={() => this.props.selectGender(gender)}>
                <h1 className="Gender-name">{gender}</h1>               
                {gender === "Female" ? <FontAwesomeIcon icon={faVenus} className={`Gender-symbol female-color ${gender === this.props.genderPick ? "female-color-selected" : null}`}/> : <FontAwesomeIcon icon={faMars} className={`Gender-symbol male-color ${gender === this.props.genderPick ? "male-color-selected" : null}`}/>}
            </div>
        )
    }
}

export default Gender;