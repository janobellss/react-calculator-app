import React from 'react';
import CalculatorComponent from './CalculatorComponent';

class CalculatorComponentLogic extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null,
            result: '0',
            operatorClicked: false,
            operatorUsed: null,
            clickOperatorOnce: false
        }

        this.handleClickNum = this.handleClickNum.bind(this);
        this.handleClickOperator = this.handleClickOperator.bind(this);
        this.calculateOperations = this.calculateOperations.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleBackspace = this.handleBackspace.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        // console.log("COMPONENT DID MOUNT!");

        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        // console.log("COMPONENT WILL UNMOUNT!");

        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(event) {
        // let {keyCode} = event.keyCode;
        const {operatorClicked} = this.state;

        // console.log("KEY CODE: " + keyCode);
        // console.log("HANDLE KEY DOWN " + event.keyCode);

        if(event.keyCode >= 96 && event.keyCode <= 105) {
            this.handleClickNum(event.keyCode - 96);
        } else if(event.keyCode === 8) {
            if(!operatorClicked) {
                this.handleBackspace();
            } else {
                this.handleClear();
            }
        } else if(event.keyCode === 13) {
            this.handleClickOperator('=');
        } else if(event.keyCode === 111) {
            this.handleClickOperator('/');
        } else if(event.keyCode === 106) {
            this.handleClickOperator('*');
        } else if(event.keyCode === 109) {
            this.handleClickOperator('-');
        } else if(event.keyCode === 107) {
            this.handleClickOperator('+');
        } else if(event.keyCode === 110) {
            this.handleDecimal();
        }
    }

    handleClickNum(value) {
        const {result, operatorClicked} = this.state;

        // console.log("VALUE:" + value);
        // console.log("TEMP VALUE: " + result);
        // console.log("OPERATOR CLICKED: " + operatorClicked);

        if(operatorClicked) {
            this.setState({
                result: String(value),
                operatorClicked: false
            });
        } else {
            this.setState({
                result: result === '0' ? String(value) : result + value
            });
        }

        this.setState({
            clickOperatorOnce: true
        });
    }

    handleClickOperator(operator) {
        const {value, result, operatorUsed, clickOperatorOnce} = this.state;

        if(value === null) {
            this.setState({
                value: result
            });
        } else {
            if(clickOperatorOnce) {
                this.calculateOperations(operatorUsed, value, result);
            }
        }

        this.setState({
            operatorClicked: true,
            operatorUsed: operator,
            clickOperatorOnce: false
        });
    }

    calculateOperations(operator, firstValue, secondValue) {
        // console.log(firstValue + operator + secondValue);

        let newValue = 0;

        switch(operator) {
            case '+':
                newValue = parseFloat(firstValue) + parseFloat(secondValue);
            break;

            case '-':
                newValue = parseFloat(firstValue) - parseFloat(secondValue);
            break;

            case '/':
                newValue = parseFloat(firstValue) / parseFloat(secondValue);
            break;

            case '*':
                newValue = parseFloat(firstValue) * parseFloat(secondValue);
            break;

            case '=':
                newValue = parseFloat(secondValue);
            break;
        }

        // console.log("NEW VALUE: " + newValue);

        this.setState({
            result: String(newValue),
            value: newValue
        });
    }

    handleClear() {
        // console.log("HANDLE CLEAR!");

        this.setState({
            value: null,
            result: '0',
            operatorClicked: false,
            operatorUsed: null,
            clickOperatorOnce: false
        });
    }

    handleBackspace() {
        const {result, operatorClicked} = this.state;

        let resultLength = result.length;
        let newResult;

        // console.log("OPERATOR CLICKED: " + operatorClicked);
        // console.log("RESULT LENGTH: " + resultLength);

        if(!operatorClicked) {
            if(resultLength > 1) {
                newResult = result.substring(0, result.length - 1);
    
                // console.log("NEW RESULT: " + newResult);
            } else {
                newResult = '0';
            }
    
            this.setState({
                result: newResult
            });
        }
    }

    handleDecimal() {
        const {result, operatorClicked} = this.state;

        let newResult = result.indexOf(".");

        // console.log("INDEX OF: " + newResult);
        // console.log("OPERATOR CLICKED: " + operatorClicked);

        if(operatorClicked) {
            this.setState({
                result: '0.',
                operatorClicked: false
            });
        } else {
            if(newResult === -1) {
                this.setState({
                    result: result === '0' ? '0.' : result + '.'
                });
            }
        }
    }

    render() {

        return(
            <div className='calc-comp-logic'>
                <CalculatorComponent 
                    data={this.state}
                    handleClickNum={this.handleClickNum}
                    handleClickOperator={this.handleClickOperator}
                    handleClear={this.handleClear}
                    handleBackspace={this.handleBackspace}
                    handleDecimal={this.handleDecimal}
                />
            </div>
        );
    }
}

export default CalculatorComponentLogic;