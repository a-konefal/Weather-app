import React, {Component} from 'react';
import Form from './Form'
import Result from './Result';
import Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//klucz API
const APIKey = '0f3f71668619dbcda1c2b0e1bab31610'

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    weather:'',
    humidity:'',
    err: false,
  }

  handleImputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault()
    const API =  `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error("Nie udało się")
    
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString()
      this.setState(state => ({ 
        err: false,
        date: time,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        city: state.value,
        humidity: data.main.humidity,
        weather: data.weather[0].main,
      }))
    })
    .catch(err => { 
      console.log(err);
      this.setState(prevState => ({
        err: true,
        city: prevState.value,
      }))
  })
}

  render() {
    return (
    <div className="App">
      <Form 
        value={this.state.value} 
        change={this.handleImputChange}
        submit={this.handleCitySubmit}
      />
      <Result weather={this.state} />
    </div>
    );
  }
}


export default App;
