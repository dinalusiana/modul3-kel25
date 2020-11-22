import React, {Component} from "react";

class Child2 extends Component {
    state = {
        angka: 0
        }
    componentDidMount() {
        alert(`Mount triggered!`)
    }

    tambahAngka = () => {
        this.setState((state) => {
            return {angka: state.angka + 1}
        }
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Component Updates! State angka sebelumnya:
        ${prevState.angka}`)
    }
    
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Haruskah Component ini di-Update?');
    }
    
    componentWillUnmount() {
        alert('I will be gone :(')
    }
           
    render() {
        return (
            <div>
                <p>No Urut</p>
                <button onClick={this.tambahAngka}>Tambah No urut</button>
                <br/>
                <span>{this.state.angka}</span>
            </div>
        );
    }
}
export default Child2;