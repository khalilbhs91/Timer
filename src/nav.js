import React from 'react';
import { Container, Row, Col } from 'reactstrap';
 
export default class Example extends React.Component {
  render() {
    return (
       <Container>
          <div class="row horloge">
          <div class="col-xs-1">00</div>
          <div class="col-xs-1">:</div>
          <div class="col-xs-1">30</div>
          <div class="col-xs-1">:</div>
          <div class="col-xs-1">00</div>
          </div>
          <div class="row">
          <div class="col-xs-4 text-muted">Hour</div>
          <div class="col-xs-4 text-muted">-</div>
          <div class="col-xs-4 text-muted">Minute</div>
          <div class="col-xs-4 text-muted">-</div>
          <div class="col-xs-4 text-muted">Second</div>
          </div>
          
        </Container>

    );
  }
}