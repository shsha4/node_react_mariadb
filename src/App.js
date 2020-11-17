import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from "./MyName";
import Counter from "./Counter";

class App extends Component {
    state = {username: null};

    componentDidMount() {
        // 외부 라이브러리 연동: D3, masonry, etc
        // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
        // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
        fetch('/api/getUsername')
            .then(res => res.json())
            .then(user => this.setState({username: user.username}));
    }

    render() {
        const {username} = this.state;
        const style = {
            backgroundColor: 'black',
            padding: '16px',
            color: 'white',
            fontSize: '12px'
        };
        return (
            <Fragment>
                <h1 className="App">{username}</h1>
                <MyName name="tester"/>
                <Counter/>
            </Fragment>
        );
    }
}

export default App;
