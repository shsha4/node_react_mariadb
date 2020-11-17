import React, {Component} from 'react';

class Counter extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // number 값이 5의 배수라면 리렌더링을 하지 않음
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate (deprecated)');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    handleIncrease = () => {
        this.setState(
            ({number}) => ({
                number: number + 1
            })
        );
    }
    handleDecrease = () => {
        this.setState(
            ({number}) => ({
                number: number - 1
            })
        );
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }

}

export default Counter;