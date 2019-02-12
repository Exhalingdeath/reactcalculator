import React from "react";
import './SideFrame.css';

class SideFrame extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    componentDidUpdate(){
        this.myRef.current.style.height = this.props.sideHeight;
    }
    render(){ 
        return(
            <div className='sideframe' ref={this.myRef}>
                <h1 style={{color: 'white'}}>MAD CALCULATOR</h1>
            </div>
        );
    }
}
export default SideFrame;