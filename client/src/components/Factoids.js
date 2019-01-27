import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class Factoids extends Component {
render(){return(
      <Table>
      <thead>
        <tr ><h1 className="myName">Mike McGowan</h1></tr>
      </thead>
      <tbody className="factoid">
        <tr>
        <h4 className="factoid">Web Solutions</h4>
        </tr>
        <tr>
        <h4 className="factoid">Custom API and Backend Frameworks</h4>
        </tr>
        <tr>
        <h4 className="factoid">Mobile development</h4>
        </tr>
      </tbody>
    </Table>
);}}