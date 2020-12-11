import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  state = {
    homeState: ''
  };

  // GET
  // componentDidMount (the GET request) runs after App.js is rendered on the page
  // Note: status of 200 means that the data fetch was a success
  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(data => this.setState({homeState: data}))
      .catch(err => console.log(err));
  };

  // POST
  // The POST request here uses the same exact route as the GET request does
  // Data object below follows the same format as found in our GET data
  // POST request example - creating a new account
  postData = () => {
    const data = {
      'userId': 233,
      'id': 233,
      'title': 'Okay dexter post',
      'body': "Hello, my name is Priscilla, and I am currently following Okay Dexter's axios tutorial"
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  // PUT
  // Similar to the POST handler, the PUT handler also has a data variable that you have to pass in
  // The URL is different from the one used for GET and POST
  updateData = () => {
    const data = {
      'userId': '2234',
      'id': '2223',
      'title': 'Okay dexter update',
      'body': "This is the updated data."
    };

    axios.put('https://jsonplaceholder.typicode.com/posts/1', data)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  // DELETE
  // The URL is the same as the one used for PUT
  delData = () => {
    const data = {
      'userId': '2234',
      'id': '2223',
      'title': 'Okay dexter update',
      'body': "This is the updated data."
    };

    axios.delete('https://jsonplaceholder.typicode.com/posts/1', data)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render () {
    return (
      <div className="App">
        <h1>Home Page</h1>
        <p>Welcome to Axios Demo</p>
        <button onClick={this.postData}>Submit</button>
        <button onClick={this.updateData}>Update</button>
        <button onClick={this.delData}>Delete</button>
      </div>
    );    
  }
}