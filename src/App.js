import React from 'react';
import ButtonFrame from './ButtonFrame';
import SideFrame from './SideFrame';
import './App.css';
import BlackBoard from './BlackBoard';

class App extends React.Component {
   constructor(props){
      super(props);
      this.getMiddleHeight = this.getMiddleHeight.bind(this);
      this.getExpression = this.getExpression.bind(this);
      this.state = {
         sideheight: '',
         expression: '',
      }
   }
   getMiddleHeight(height){
      this.setState({
         sideheight: height+'px',
      });
   }
   getExpression(expr){
      this.setState({
         expression: this.state.expression+expr,
      });   
   }
   render() {
      return (
         <div>
            <div className='upper'>
               <SideFrame sideHeight={this.state.sideheight}></SideFrame>
               <ButtonFrame buttonHeight={this.getMiddleHeight} expr={this.getExpression}></ButtonFrame>
               <SideFrame sideHeight={this.state.sideheight}></SideFrame>          
            </div>
            <BlackBoard expr={this.state.expression}>

            </BlackBoard>
         </div>
      );
   }
}
export default App;