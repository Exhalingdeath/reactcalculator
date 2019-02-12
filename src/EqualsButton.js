import React from 'react';
import './OperationButton.css';

class EqualsButton extends React.Component{
    handleEqualsClick = () => {
        this.props.eq();
    }
    render(){
        return(
            <button onClick={this.handleEqualsClick} className='operationbutton'>=</button>
        );
    }
}
export default EqualsButton;