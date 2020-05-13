import React from 'react';

class CalculatorComponent extends React.Component {
    render() {

        return(
            <div className='calc-comp'>
                <div className='calc-display'>
                    <div className='calc-display-result'>
                        {this.props.data.result}
                    </div>
                </div>

                <div className='calc-keypad'>
                    <div className='calc-keypad-row-1'>
                        <div className='calc-btn clear' onClick={this.props.handleClear}>CLR</div>
                        <div className='calc-btn backspace' onClick={this.props.handleBackspace}>DEL</div>
                        <div className='calc-btn operator' onClick={() => {this.props.handleClickOperator('/')}}>/</div>
                    </div>

                    <div className='calc-keypad-row-2'>
                        <div className='calc-btn number' onClick={() => {this.props.handleClickNum(7)}}>7</div>
                        <div className='calc-btn number' onClick={() => {this.props.handleClickNum(8)}}>8</div>
                        <div className='calc-btn number' onClick={() => {this.props.handleClickNum(9)}}>9</div>
                        <div className='calc-btn operator' onClick={() => {this.props.handleClickOperator('*')}}>X</div>
                    </div>

                    <div className='calc-keypad-row-3'>
                        <div className='calc-btn number' onClick={() => {this.props.handleClickNum(4)}}>4</div>
                        <div className='calc-btn number' onClick={() => {this.props.handleClickNum(5)}}>5</div>
                        <div className='calc-btn number' onClick={() => {this.props.handleClickNum(6)}}>6</div>
                        <div className='calc-btn operator' onClick={() => {this.props.handleClickOperator('-')}}>-</div>
                    </div>
                    
                    <div className='calc-keypad-row-4'>
                        <div className='calc-btn number' onClick={() => {this.props.handleClickNum(1)}}>1</div>
                        <div className='calc-btn number' onClick={() => {this.props.handleClickNum(2)}}>2</div>
                        <div className='calc-btn number' onClick={() => {this.props.handleClickNum(3)}}>3</div>
                        <div className='calc-btn operator' onClick={() => {this.props.handleClickOperator('+')}}>+</div>
                    </div>
                    
                    <div className='calc-keypad-row-5'>
                        <div className='calc-btn number number-0' onClick={() => {this.props.handleClickNum(0)}}>0</div>
                        <div className='calc-btn decimal' onClick={this.props.handleDecimal}>.</div>
                        <div className='calc-btn operator' onClick={() => {this.props.handleClickOperator('=')}}>=</div>
                    </div>
                </div>

                {/*<div>
                    <p>VALUE: {this.props.data.value}</p>
                    <p>RESULT: {this.props.data.result}</p>
                    <p>OPERATOR CLICKED: {this.props.data.operatorClicked}</p>
                    <p>OPERATOR USED: {this.props.data.operatorUsed}</p>
                    <p>CLICK OPERATOR ONCE: {this.props.data.clickOperatorOnce}</p>
                </div>*/}
            </div>
        );
    }
}

export default CalculatorComponent;