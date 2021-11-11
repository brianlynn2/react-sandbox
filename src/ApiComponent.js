import React, { Component } from 'react';
import axios from 'axios';


export default class AbsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
	abs_result: ''
    };
    //this.handleChange = this.handleChange.bind(this);
    this.makeApiCall = this.makeApiCall.bind(this);
  }


	makeApiCall(apiInput, result_handler)
	{
		  axios.post('https://quzruch6uh.execute-api.us-east-2.amazonaws.com/default/'
			  ,  apiInput   
		  ).then((response) => { 
			  //alert(JSON.stringify(response, null, "    "));  
			  const resp = response.data;
			  //alert("resp is " + resp);
			  const result = JSON.parse(resp);
			  //alert("parsed response");
			  //alert (result.body);
			  result_handler(result.body);
			  //myObj.setState({ abs_result : result.body });
			  return result.body;
		  }, (error) => { alert(error); } ); 
	}



  render() { return ""; }
}
