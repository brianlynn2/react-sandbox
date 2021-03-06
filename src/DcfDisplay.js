import React, { Component } from 'react';
import axios from 'axios';
import ApiComponent from './ApiComponent.js';
import CdmEnum from './CdmEnum.js';


export default class DcfDisplay extends ApiComponent {
  constructor(props) {
    super(props);
    this.state = {
	dcf_options: '',
	start_date: '',
	end_date: '', 
	dcf: '',
	year_frac: '',
	stat: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.initMenu = this.initMenu.bind(this);
	this.initMenu();
  }

  handleChange(event) {
    event.preventDefault();
    const inputValue = event.target.value;
    const stateField = event.target.name;
	  //alert("input value is " + inputValue + " and state field is " + stateField);

    this.setState({
      [stateField]: inputValue,
	    year_frac:  'working ...'
    });
    var sd = (stateField == "start_date") ?   inputValue : this.state.start_date;
    var ed = (stateField == "end_date") ?  inputValue : this.state.end_date;
    var d = (stateField == "dcf") ? inputValue : this.state.dcf;
  var myObj = this;
	const result = this.makeApiCall( { start_date : `${sd}`, end_date: `${ed}`, dcf: `${d}` } , 
		function(result) { 
			//alert("got a DCF result of "+ result); 
			myObj.setState({ year_frac : result });  }
	);
  }


getDcfOptions (options) 
{
	return options.map(function (n) {
		return <option key={n} value={n} > {n} </option>
	});
}

initMenu() {
  var myObj = this;
	this.makeApiCall( { dcf_options : 'true' } , 
		function(result) { 
			//alert("got a DCF options of "+ result); 
			myObj.setState({ dcf_options : result });  }
	);
}


  render() {
	var options;
	  var optlist;
	  try {
	     options = JSON.parse(this.state.dcf_options);
		optlist = this.getDcfOptions(options);	
	} catch (ex) {}
	  var optlen = options ?  options.length : -1;
	  var optlistlen = optlist ?  optlist.length : -1;
    return (
      <div>
	    <table>
	    <tr>
	    <td>Start Date</td>
	    <td>
	    <input type="date" name="start_date" onChange={this.handleChange} value={this.state.start_date} />
	    </td>
	    <td>End Date</td>
	    <td>
	    <input type="date" name="end_date" onChange={this.handleChange} value={this.state.end_date} />
	    </td>
	    </tr>
	    </table>
	    <br/>
	    <CdmEnum enum_name="cdm.base.datetime.daycount.DayCountFractionEnum" 
		    label="Day Count Frac" 
		    name="dcf" value={this.state.dcf} ref="selectDcf"
		    ref="selectDCF" 
	    	    change_handler={this.handleChange}
		    />
	    <br/>
	    <br/>

	    


	    <p>DCF response:  {this.state.year_frac } </p>
	</div>
    );
  }
}
