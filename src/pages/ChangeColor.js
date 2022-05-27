import React, { Component } from 'react'
import InputPanel from '../components/changecolor/InputPanel';
import OutputPanel from '../components/changecolor/OutputPanel';

class ChangeColor extends Component {

  state = {
    index_btn: '',
  }

  getOutColor = (btn_i) => {
    this.setState({
      index_btn: btn_i
    }, () => {
      console.log('index btn async: ', this.state.index_btn); //remember: setState it's asynchronicus 
    });
  }

  render() {
    return (
      <>
        <div>ChangeColor's page</div>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <InputPanel getOutColor={this.getOutColor}/> 
          </div>
          <div style={{ width: '500px', heigth: '600px' }}>
            <OutputPanel index_btn={this.state.index_btn} />
          </div>
        </div>
      </>
    )
  }

}
export default ChangeColor; 
