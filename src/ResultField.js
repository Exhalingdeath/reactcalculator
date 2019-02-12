import React from 'react';
import './ResultField.css';

class ResultField extends React.Component{
    
    render(){
        return(
            <input type="text" value={this.props.val} className='resultfield' disabled></input>
        );
    }
}
export default ResultField;