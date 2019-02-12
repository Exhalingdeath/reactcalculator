import React from 'react';
import './OperationButton.css';

class OperationButton extends React.Component{
    constructor(props){
        super(props);
        this.operation = this.props.opButton;
    }
    handleOnClick = () => {
        this.props.op(this.operation);
    }
    render(){
        return(
            <button onClick={this.handleOnClick} className='operationbutton'>{this.operation}</button>
        );
    }
}
export default OperationButton;