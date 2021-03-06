import React, { Component } from 'react';
import axios from 'axios';
import ApiComponent from './ApiComponent.js';


export default class CdmEnum extends ApiComponent {
  constructor(props) {
    super(props);
    const enum_name= '';
    const name = '';
    const ref = '';
    const label= '';
    const change_handler= null;
    this.state = {
	enum_options: ''

    };
    //this.handleChange = this.handleChange.bind(this);
    this.initMenu = this.initMenu.bind(this);
	this.initMenu();
  }

  handleChange(event) {
    event.preventDefault();
    //const inputValue = event.target.value;
    //const stateField = event.target.name;

    //this.setState({
      //[stateField]: inputValue,
	    //year_frac:  'working ...'
    //});
    //var sd = (stateField == "start_date") ?   inputValue : this.state.start_date;
    //var ed = (stateField == "end_date") ?  inputValue : this.state.end_date;
    //var d = (stateField == "dcf") ? inputValue : this.state.dcf;
  //var myObj = this;
	//const result = this.makeApiCall( { start_date : `${sd}`, end_date: `${ed}`, dcf: `${d}` } , 
		//function(result) { 
			//alert("got a DCF result of "+ result); 
			//myObj.setState({ year_frac : result });  }
	//);
  }


getEnumOptions (options) 
{
	return options.map(function (n) {
		return <option key={n} value={n} > {n} </option>
	});
}

initMenu() {
  var myObj = this;
	this.makeApiCall( { enum_options : myObj.props.enum_name } , 
		function(result) { 
			//alert("got a enum options of "+ result); 
			myObj.setState({ enum_options : result });  }
	);
}


  render() {
	var options;
	  var optlist;
	  try {
	     options = JSON.parse(this.state.enum_options);
		optlist = this.getEnumOptions(options);	
	} catch (ex) {}
	  var optlen = options ?  options.length : -1;
	  var optlistlen = optlist ?  optlist.length : -1;
    return (
      <div>
	    <span>{this.props.label} &nbsp;</span>
		    <select  name={this.props.name} value={this.state.dcf} ref={this.props.ref} onChange={this.props.change_handler}>
	    { optlist }
	    		</select>
	</div>
    );
  }
}
