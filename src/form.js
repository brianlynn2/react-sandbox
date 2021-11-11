import React, { Component } from 'react';
import axios from 'axios';
import AbsDisplay from './AbsDisplay.js';
import DcfDisplay from './DcfDisplay.js';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
	stat: 'Ready now',
	    timer: null,
	abs_of: '',
	abs_result: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }


  async handleSubmit(event) {
    event.preventDefault();
    const { name, message, stat, timer, abs_of, abs_result } = this.state;
    this.setState({stat : "Submitting"});
    await axios.post(
      'https://yciq2g0499.execute-api.us-east-2.amazonaws.com/mytest/',
      { key1: `${name}, ${message}` }
    );
//	  alert("submit info");
	  this.setState({stat : "Submitted info!", message : ""});
	  var myObj = this;

	  setTimeout( function() { myObj.setState({ stat : "Ready"}) }, 2000);
  }


	doJava() {
		alert("hi there");
	}


  render() {
    var mycolor = this.state.stat ===  "Submitting" ? "red" : "green";
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label>Message:</label>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />

          <button type="submit">Send</button>
	    <p id="status" style={{color: mycolor }}>Status: {this.state.stat}</p>
	    </form>

	    <hr/>
	    <div class="border">
		    <h3>Absolute Value </h3>
		    <AbsDisplay />
	    </div>
	    <br/>
	    <div class="border">
		    <h3>Day Count Fraction</h3>
		    <DcfDisplay />
	    </div>

          <button onClick={()=> {
		  const myparams = "{ key1: 'aaa', key2: 'bbb', key3: 'ccc' }";
		  //alert("calling lambda");
		  axios.post('https://quzruch6uh.execute-api.us-east-2.amazonaws.com/default/'
			  ,  { key1 : "foo foo"   } 
/*
			  ,
        {
            headers: { 
                'Content-Type' : 'text/plain'
            }
        }
	*/
		  ).then((response) => { 
			  //alert(JSON.stringify(response, null, "    "));  
			  const resp = response.data;
			  //alert("resp is " + resp);
			  const result = JSON.parse(resp);
			  //alert("parsed response");
			  alert (result.body);
		  }, (error) => { alert(error); } ); 
		  //alert("called lambda");
		  //alert("response = " + response);
		  }
	  }>Call Java Lambda!</button>
      </div>
    );
  }
}
		    //'Authorization' : 'Credential=AKIA2M6UVFUITMOKZS4B/20211103/us-east-2/execute-api/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=88803df63db877f85cddae6653a64ba705aacfcc5c7f9fc0e9af7941b729320f'
