import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';


export default class Time extends React.Component {
  constructor (props) {
    super(props)
    this.state = {Second: 0,
    minute: 0,
  hour:0}
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  tick () {
    this.setState({Second: (this.state.Second + 1)})
  }
  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  stopTimer () {
    clearInterval(this.timer)
  }
  render () {
    return (
      <Container>
      <p><h1>{this.state.hour} : {this.state.minute} : {this.state.Second}</h1></p> 
        <div>
        <div className="row">
          <div className="col-xs-4 text-muted">Hour</div>
          <div className="col-xs-4 text-muted">-</div>
          <div className="col-xs-4 text-muted">Minute</div>
          <div className="col-xs-4 text-muted">-</div>
          <div className="col-xs-4 text-muted">Second</div>
          </div>
          <button onClick={this.startTimer.bind(this)}>Start</button>
          <button onClick={this.stopTimer.bind(this)}>Stop</button>
        </div>
      </Container>
    )
  }
}


       
