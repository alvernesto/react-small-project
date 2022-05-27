import React, { Component } from 'react';
import InputNum from '../components/factorial/InputNum';
import TableOut from '../components/factorial/TableOut';

class Factorial extends Component {
    state = {
        number: null,
        factorial: [],
    }

    getNumber = (num) => {
        this.setState({
            number: num,
        });
        this.getFactorial(num);
    }

    getFactorial = (num) => {
        let factorial =[]; 
        for( let i = 0 ; i <= num ; i++){
            if(i===0) {
                factorial[0]=1;
            } else {
                factorial[i]= factorial[i-1]*(i+1);
            }
            console.log(`${i} number: ${factorial[i]}` )
        }
        this.setState({
            factorial: factorial
        }); 
    }

    render() {
        return (
            <>
                <h1>Factorial calculator</h1>
                <div className= 'container' align='center'>
                <InputNum getNumber={this.getNumber}/>
                <TableOut  showElement={this.state.factorial.length > 0 ? true : false} factorial = {this.state.factorial}/>
                </div>
                
            </>
        )
    }
}

export default Factorial; 
