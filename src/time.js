import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';


export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Second : 0,
      minute : 0,
      hour : 0,
      intervalId:0
    }
    }

    starttimer=()=>
    { 
      let intervalId=setInterval(
        () => {
          if (this.state.Second >= 60) {
            this.setState({
             minute : this.state.minute+1,
             Second : 0
    
            })  
            }
            if (this.state.minute >= 60) {
              this.setState({
               hour : this.state.hour+1,
               Second : 0,
               minute : 0
      
              })  
            }
          this.setState({
            Second: this.state.Second + 1
          })
        },
        1000
      )
      this.setState({ intervalId: intervalId })
    }

    
    timerpause=()=> {
      clearInterval(this.state.intervalId)
     
        }


    timerReset=()=>{
      this.setState({
        Second : 0,
         minute :0,
         hour : 0,
       })
       clearInterval(this.setInterval)
    }
    

  render() {
    return (
       <Container>
          <div className="row horloge">
          {this.state.hour} : {this.state.minute} : {this.state.Second}
          </div>
          <div className="row">
          <div className="col-xs-4 text-muted">Hour</div>
          <div className="col-xs-4 text-muted">-</div>
          <div className="col-xs-4 text-muted">Minute</div>
          <div className="col-xs-4 text-muted">-</div>
          <div className="col-xs-4 text-muted">Second</div>
          </div>
          <button onClick={this.starttimer}>Start</button>
          <button onClick={this.timerpause}>Pause</button>
          <button onClick={this.timerReset}>reset</button>

          
        </Container>

);
}
}
