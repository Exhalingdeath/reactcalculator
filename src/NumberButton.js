import React from 'react';
import './NumberButton.css';

class NumberButton extends React.Component{
    constructor(props){
        super(props);
        this.number = props.buttonValue;
    }
    inFun = () =>{
        this.props.t(this.number);
    }
    render(){
        return(
            <button onClick={this.inFun} className='numberbutton'>{this.number}</button>
        );
    }
}
export default NumberButton;