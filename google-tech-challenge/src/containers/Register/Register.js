import React, {Component} from 'react';

export default class Register extends Component{
    constructor(props){
        super(props);
        this.setState({
            step: 1,
        });
    }
    nextStep(){
        this.setState({
            state: this.state+1,
        })
    }
    render(){
        switch(this.state.step){
            case 1:
                return <div>1</div>
            case 2:
                return <div>2</div>
            case 3:
                return <div>3</div>
            case 4:
                return <div>4</div>
        }
        
    }
}