import React, { Component } from 'react';
import InputTemp from '../components/converter/InputTemp';
import Alert from '../components/Alert';
import Modal from '../components/Modal';

class Converter extends Component {
  state = {
    temp: {
      value: '',
      unit: '',
    },
    active: false,
    alert: null,
    temps: []
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

  getTemperature = (temp) => {
    this.setState({
      temp: {
        value: temp.value,
        unit: temp.unit
      }
    }, () => {
      console.log('updating temp async: ', this.state.temp); //remember: setState it is asynchronicus 
      this.calculateTemperature(this.state.temp);
    });
  }

  calculateTemperature = (temp) => {
    switch (temp.unit) {
      case '°C':
        let c_f = temp.value * 1.8 + 32; // c_f: centigrade --> farenheit
        let c_k = parseFloat(temp.value) + parseFloat(273);       // c_k: centigrade --> kelvin
        let t_c_f = {                    //t_c_f: temperature_celcius_to_farenheit
          value: c_f.toFixed(1),
          unit: '°F'
        }
        let t_c_k = {                    //t_c_k: temperature_celcius_to_kelvin 
          value: c_k.toFixed(1),
          unit: 'K'
        }
        let temps_c = [t_c_f, t_c_k];    //temps_c: temperatures converted from celcius 
        this.setState({
          temps: temps_c
        }, () => {
          console.log('temps: ', this.state.temps); //remember: setState it's asynchronicus 
        })
        break;
      case '°F':
        let f_c = (temp.value - 32) / 1.8;
        let f_k = (temp.value - 32) / 1.8 + 273;
        let t_f_c = {
          value: f_c.toFixed(1),
          unit: '°C'
        }
        let t_f_k = {
          value: f_k.toFixed(1),
          unit: 'K'
        }
        let temps_f = [t_f_c, t_f_k];
        this.setState({
          temps: temps_f
        }, () => {
          console.log('temps: ', this.state.temps); //remember: setState it is asynchronicus 
        })
        break;
      case 'K':
        let k_c = temp.value - 273;
        let k_f = (temp.value - 273) * 1.8 + 32;
        let t_k_c = {
          value: k_c.toFixed(2),
          unit: '°C'
        }
        let t_k_f = {
          value: k_f.toFixed(2),
          unit: '°F'
        }
        let temps_k = [t_k_c, t_k_f];
        this.setState({
          temps: temps_k
        })
        break;
      default:
        console.log('Contrólate');
    }
  }

  render() {
    return (
      <>
        <Alert alert={this.state.alert} />
        <div>Converter's page</div>
        <InputTemp getTemperature={this.getTemperature} toggle={this.toggle} setAlert={this.setAlert} active={this.state.active} />
        <Modal active={this.state.active} toggle={this.toggle} titleModal = 'Temperatures 4U'>
          <div className="modal-body">
            <p><span className='bolded'>u temp: </span>{this.state.temp.value} {this.state.temp.unit}</p>
            {this.state.temps.map((t, i) => {
              return (
                <p key={i}><span className='bolded'>temp {t.unit} : </span> {t.value}</p>
              )
            })
            }
          </div>
        </Modal>

      </>
    )
  }
}

export default Converter;