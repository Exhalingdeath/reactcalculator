import React from 'react';
import './ExpressionField.css';

class ExpressionField extends React.Component{
    render(){
        return(
            <input type="text" value={this.props.val} className='expressionfield' disabled></input>
        );
    }
}
export default ExpressionField;