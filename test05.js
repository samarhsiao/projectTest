/** Can you explain the problem with the following code, and how to fix
it. **/
class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.handleAddCount = this.handleAddCount.bind(this);
    }
    handleAddCount() {
        
        // 1.setState改變狀態的寫法應該改成 this.setState((oldVal)=>({ count: oldVal + 1 })); 確保每次變動狀態都是以最近一次的狀態進行變動
        // 2.同上，所以function連續執行3次setState，也只會+1若改成下面寫法就能達到連續+3的效果
        this.setState((oldVal) => ({ count: oldVal.count + 1 }));
        this.setState((oldVal) => ({ count: oldVal.count + 1 }));
        this.setState((oldVal) => ({ count: oldVal.count + 1 }));
        // this.setState({ count: this.state.count + 1 });
        // this.setState({ count: this.state.count + 1 });
        // this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleAddCount}>Add</button>
            </div>
        );
    }
}
ReactDOM.render(
    <Count />,
    document.getElementById('root')
);