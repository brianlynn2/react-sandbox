import React, { Component } from 'react';
import axios from 'axios';

import ApiComponent from './ApiComponent.js';

export default class AbsDisplay extends ApiComponent {
  constructor(props) {
    super(props);
    this.state = {
	abs_result: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    event.preventDefault();
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
  var myObj = this;
	const result = this.makeApiCall( { abs_of :  `${inputValue}` } , 
		function(result) { 
		//	alert("got a result of "+ result); 
			myObj.setState({ abs_result : result });  }
	);
  }




  render() {
    return (
      <div>
	    <input type="number" name="abs_of" onChange={this.handleChange} value={this.state.abs_of} />
	    <p>Absolute response:  {this.state.abs_result } </p>
	</div>
    );
  }
}
