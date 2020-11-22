import React, { Component } from "react";

class Child1 extends Component {
    state = {
        nama : "dina"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ubahnama = () => {
        this.setState((state) => { 
            if (state.nama === "dina") {
                return { nama : "faiz"}
            } else {
                return { nama: "dina"}                 
            }
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Component Updates! State nama sebelumnya:
        ${prevState.nama}`)
    }
    
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Haruskah Component ini di-Update?');
    }

    componentWillUnmount() {
        alert('child 1 will be gone :(')
    }
    render() {
        return (
            <div>
                <h4>Nama</h4>
                <button onClick={this.ubahnama}>Ubah nama</button>
                <br />
                <h4>{this.state.nama}</h4>
            </div>
        );
    }
}
export default Child1;