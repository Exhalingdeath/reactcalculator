import React from 'react';
import './OperationButton.css';

class SignButton extends React.Component{
    handleSign = () =>{
        this.props.signSwitch();
    }
    render(){
        return(
            <button onClick={this.handleSign} className='operationbutton'>+/-</button>
        );
    }
}
export default SignButton;