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
        <h3 className="factoid">Web Solutions</h3>
        </tr>
        <tr>
        <h3 className="factoid">Custom API and Backend Frameworks</h3>
        </tr>
        <tr>
        <h3 className="factoid">Mobile development</h3>
        </tr>
      </tbody>
    </Table>
);}}