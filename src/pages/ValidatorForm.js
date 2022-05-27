import React, { Component } from 'react'
//import Form from '../components/forms/Form';
import AutomForm from '../components/forms/AutomForm';
import Alert from '../components/Alert';
import Modal from '../components/Modal';

class ValidatorForm extends Component {

  state = {
    dataForm: {},
    active: false,
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

  toggle = () => {
    this.setState({
      active: !this.state.active,
    })
  }

  getDataForm = (data) => {
    this.setState({
      dataForm: data,

    }, () => {
      console.log('updating temp async: ', this.state.temp); //remember: setState it is asynchronicus 
      this.calculateTemperature(this.state.temp);
    });

  }

  render() {
    return (
      <>
        <Alert alert={this.state.alert} /> {/** Output: Message invalidations */}
        <AutomForm getDataForm={this.getDataForm}/>
        {/* <Form setAlert={this.setAlert}/> * Input: Form */}
        <Modal active={this.state.active} toggle={this.toggle} titleModal='Validation Form'> {/** Output: Message success */}
          <div className="modal-body">
            <h1>Success!!</h1>
          </div>
        </Modal>
      </>
    )
  }
}

export default ValidatorForm; 