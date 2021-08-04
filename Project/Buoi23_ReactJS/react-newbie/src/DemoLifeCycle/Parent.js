import React, { Component } from 'react'
import Child from './Child'

/**
 * LIFE CYCLE: Vòng đời Components
* Bao gồm 2 bộ chính:
- Creation: Khởi chạy tại thời điểm ban đầu, gồm 4 function:
    + constructor 
    + componentWillMount
    + render
    + componentDidMount
- Update: Khởi chạy khi render lại giao diện (state vs props thay đổi), gồm 3 function:
    + shouldComponentUpdate(nextProps, nextState)
    + render
    + componentDidUpdate(prevProps, prevState)
- PureComponent: Khi component parent update thì check điều kiện xem Child có liên quan đến Parent ko (chung Props, State, ...), nếu không thì không cần render lại => nâng cao performance của ứng dụng
    + Cũng như Redux, PureComponent sử dụng phương pháp Shallow Comparision 
    => không phát hiện sự thay đổi dủa object vs array 
    => Khuyên dùng khi props không chứa object hoặc array
    => Nên tách component
- componentWillUnmount: chủ yếu chứa những đoạn code dùng để dọn dẹp, chạy tại thời điểm component bị hủy
- ErrorBoundary: static getDerivedStateFromError(error) => Nhận vào error throw ra từ component con cháu và return về state mới
 */

let timer;

export default class Parent extends Component {
    counter = { value: 1};

    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            test: { key: 1},
            counter: this.counter,
            counter1: 0,
            counter2: 0,
            childList: [
                {title: "title1", author:"dung"},
                {title: "title2", author:"hieu"},
                {title: "title3", author:"nam"},
            ]
        }
    }

    componentWillMount() {
        console.log("will mount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log("should update", this.state, nextState);
        return true;
    }

    increaseCounter = () => {
        this.counter.value += 1;
        this.setState({
            key: this.state.key + 1,
            counter: this.counter,
        })
    }
    increaseCounter1 = () => {
        this.setState({
            counter1: this.state.counter1 + 1,
        })
    }
    increaseCounter2 = () => {
        this.setState({
            counter2: this.state.counter2 + 1,
        })
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>Parent Component</h1>
                <hr noshade="1"></hr>
                <button onClick={this.increaseCounter1}>Increase1</button>
                <button onClick={this.increaseCounter2}>Increase2</button>
                <Child counter2={this.state.counter2}></Child>
            </div>
        )
    }

    componentDidMount() {
        console.log("did mount");

        console.log("call api");

        setTimeout(() => {
            // throw new Error("API failed1!")
        }, 2000)

        timer = setInterval(() => {
            console.log("Interval");
        },1000)
        timer = setInterval(() => {
            console.log("Interval");
        },4000)
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("did update", prevState);
        throw new Error("API failed2!")

    }

    componentWillUnmount() {
        clearInterval(timer);
    }

    componentDidCatch(error, infor) {
        console.log("did catch",error,infor)
    }
}
