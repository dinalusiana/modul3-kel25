import { Component } from "react";
import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
class Parent extends Component {
    state = {
        komponenMuncul1: false,
        komponenMuncul2: false
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Component Updates!`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Apakah harus diupdate ?');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponenMuncul1: !this.state.komponenMuncul1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponenMuncul2: !this.state.komponenMuncul2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponenMuncul1 ? <Child1 /> : ''}
                <button onClick={this.ubahkomponen1}>{this.state.komponenMuncul1 ? 'Hide' : 'Show'} Nama</button>
                <br/>
                {this.state.komponenMuncul2 ? <Child2 /> : ''}
                <button onClick={this.ubahkomponen2}>{this.state.komponenMuncul2 ? 'Hide' : 'Show'} No Urut</button>
            </div>
        );
    }
}
export default Parent;