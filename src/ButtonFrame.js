import React from 'react';
import NumberButton from './NumberButton';
import ResultField from './ResultField';
import SignButton from './SignButton';
import EqualsButton from './EqualsButton';
import ExpressionField from './ExpressionField';
import OperationButton from './OperationButton';
import './ButtonFrame.css';

class ButtonFrame extends React.Component{
    constructor(){
        super();
        this.state = {
            valueFromChild: '',
            expressionValue: [],
        };
        this.myRef = React.createRef();
        this.onNumberUpdate = this.onNumberUpdate.bind(this);
        this.onOperationUpdate = this.onOperationUpdate.bind(this);
        this.onEqualsUpdate = this.onEqualsUpdate.bind(this);
        this.onSignUpdate = this.onSignUpdate.bind(this);
    }
    onEqualsUpdate(){
        if(this.state.valueFromChild !== ''){
            if(this.state.expressionValue.length == 0){
                return;
            }
            else{
                let tempExpr = this.state.expressionValue.slice();
                tempExpr.push(this.state.valueFromChild);
                let tempResult = +tempExpr[0];
                for(let i = 1; i < tempExpr.length-1;i+=2){
                    switch(tempExpr[i]){
                        case '*':
                            tempResult*= +tempExpr[i+1];
                            break;
                        case '+':
                            tempResult+= +tempExpr[i+1];
                            break;
                        case '-':
                            tempResult-=tempExpr[i+1];
                            break;
                    }
                }
                this.props.expr(tempExpr.join(' ')+' = '+tempResult+'; ');
                this.setState({
                    valueFromChild: tempResult,
                    expressionValue: [],
                });
            }
        }
    }
    componentDidMount = () =>{
        this.props.buttonHeight(this.myRef.current.clientHeight);
    }
    onSignUpdate(){
        let temp = -(+this.state.valueFromChild);
        this.setState({
            valueFromChild: temp,
        });
    }
    onNumberUpdate(value){  
        if(value == '.' && (+this.state.valueFromChild % 1 !== 0)){
            return;
        }
        this.setState({
            valueFromChild: this.state.valueFromChild+value,
        })
    }
    onOperationUpdate(operation){
        this.setState({
            expressionValue: [...this.state.expressionValue,this.state.valueFromChild,operation],
            valueFromChild: '',
        })
    }
    render (){
        return (
            <div className='buttonframe' ref={this.myRef}>
                <div>
                    <ExpressionField val={this.state.expressionValue.join(" ")}></ExpressionField>
                </div>
                <div>
                    <ResultField val={this.state.valueFromChild}></ResultField>
                </div>
                <div>
                    <NumberButton buttonValue="7" t={this.onNumberUpdate}></NumberButton>
                    <NumberButton buttonValue="8" t={this.onNumberUpdate}></NumberButton>
                    <NumberButton buttonValue="9" t={this.onNumberUpdate}></NumberButton>
                    <OperationButton op={this.onOperationUpdate} opButton="*"></OperationButton>
                </div>
                <div>
                    <NumberButton buttonValue="4" t={this.onNumberUpdate}></NumberButton>
                    <NumberButton buttonValue="5" t={this.onNumberUpdate}></NumberButton>
                    <NumberButton buttonValue="6" t={this.onNumberUpdate}></NumberButton>
                    <OperationButton op={this.onOperationUpdate} opButton="+"></OperationButton>
                </div>
                <div>
                    <NumberButton buttonValue="1" t={this.onNumberUpdate}></NumberButton>
                    <NumberButton buttonValue="2" t={this.onNumberUpdate}></NumberButton>
                    <NumberButton buttonValue="3" t={this.onNumberUpdate}></NumberButton>
                    <OperationButton op={this.onOperationUpdate} opButton="-"></OperationButton>
                </div>
                <div>
                    <NumberButton buttonValue="0" t={this.onNumberUpdate}></NumberButton>
                    <SignButton signSwitch={this.onSignUpdate}></SignButton>
                    <NumberButton buttonValue='.' t={this.onNumberUpdate}></NumberButton>
                    <EqualsButton eq={this.onEqualsUpdate}></EqualsButton>
                </div>
            </div>
        );
    }
}
export default ButtonFrame;