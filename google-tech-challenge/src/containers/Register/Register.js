import React, {Component} from 'react';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import {connect} from 'react-redux';
import {postFormData} from '../../store/actions';
import './Steps/Steps.css';
import Mux from '../../hoc/Mux';
class Register extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.backStep.bind(this);
    }

    state = {
        step:1,
        1:{   
            formGridName: '',
            formGridEmail: '',
            formGridPhoneNum: '',
        },
        2:{
            formGridResources:'',
            formGridGetOut:'',
        },
        3:{
            formGridTypeSetting:'',
            formGridTypeResponse:'',
        }

      };
    handleInputChange(event) {
    
        const curStep = this.state.step;
        if(curStep <= 3){
            const updatedStep = this.state[curStep];
            const name = event.target.id || event.target.name;
            updatedStep[name] = event.target.value;
            if(name){
                this.setState({
                    [curStep]: updatedStep,
            });
            }
        }   
        
     }


    handleSubmit(event) {
        event.preventDefault();
        let toNext = true;
        for(const property in this.state[this.state.step]){
            if(!this.state[this.state.step][property]){
                console.log(property);
                toNext = false;
                event.stopPropagation();
            }
        }
        if(toNext){
            if(this.state.step===3){
                this.props.sendForm(this.state[1],this.state[2],this.state[3]);
            }
            this.nextStep();
        }
        

    }
    nextStep(){
        this.setState({
            step: this.state.step + 1,
        })
    }
    backStep(){
        this.setState({
            step: this.state.step - 1,
        })
    }
    render(){
        let step = null;

        switch(this.state.step){
            case 1:
                step =  <Step1 formGridName={this.state[1].formGridName} formGridEmail={this.state[1].formGridEmail} formGridPhoneNum={this.state[1].formGridPhoneNum} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                break;
            case 2:
                step = <Step2 formGridGetOut={this.state[2].formGridGetOut} formGridResources={this.state[2].formGridResources} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleBack = {this.handleBack} />
                break;
            case 3:
                step = <Step3 formGridTypeResponse={this.state[3].formGridTypeResponse} formGridTypeSetting={this.state[3].formGridTypeSetting} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleBack = {this.handleBack} />
                break;
            case 4:
                step = <h1 className="Confirmation">Thanks For Registering! We will send you a confirmation email soon with further details</h1>
                break;
            default:
                return null;
        }
        
        return(<Mux>
            {step}
        </Mux>)
        
        
    }
}

const mapDispatchtoProps = (dispatch) =>{
    return{
        sendForm: (step1,step2,step3)=> dispatch(postFormData(step1.formGridName,step1.formGridEmail,step1.formGridPhoneNum,step2.formGridGetOut,step2.formGridResources,step3.formGridTypeSetting,step3.formGridTypeResponse))
    }
}

export default connect(null,mapDispatchtoProps)(Register);