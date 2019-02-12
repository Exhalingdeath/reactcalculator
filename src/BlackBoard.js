import React from 'react';
import './BlackBoard.css';

class BlackBoard extends React.Component{
    render(){
        return (
            <div className='downer'>
                <p style={{color: 'white'}}>{this.props.expr}</p>
            </div>
        );
    }
}
export default BlackBoard;