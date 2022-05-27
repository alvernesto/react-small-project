import React, { Component } from 'react';
import InputNum from '../components/factorial/InputNum';
import TableOut from '../components/factorial/TableOut';
import Alert from '../components/Alert';

class Factorial extends Component {
    state = {
        number: null,
        factorial: [],
        alert: null,
    }

    setAlert = (msg, type) => {
        this.setState({
            alert: {
                msg: msg,
                type: type
            }
        })
        setTimeout(() => this.setState({ alert: null }), 5000);
    }

    getNumber = (num) => {
        this.setState({
            number: num,
        });
        this.getFactorial(num);
    }

    getFactorial = (num) => {
        let factorial = [];
        for (let i = 0; i <= num; i++) {
            if (i === 0) {
                factorial[0] = 1;
            } else {
                factorial[i] = factorial[i - 1] * (i);
            }
            console.log(`${i} number: ${factorial[i]}`)
        }
        this.setState({
            factorial: factorial
        });
    }

    render() {
        return (
            <>
                <h1>Factorial calculator</h1>
                <Alert alert={this.state.alert} />
                <div className='container' align='center'>
                    <InputNum getNumber={this.getNumber} setAlert={this.setAlert}/>
                    <TableOut showElement={this.state.factorial.length > 0 ? true : false} factorial={this.state.factorial} />
                </div>

            </>
        )
    }
}

export default Factorial; 
