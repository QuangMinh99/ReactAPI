import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
 
class App extends Component {    
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons);
      })
      .catch(error => console.log(error));
  }
  renderUsers = () => { let persons = this.state.persons.map((data, index) => 
    <tr key={data.id}> 
      <td>{data.id}</td> 
      <td>{data.name}</td> 
      <td>{data.email}</td> 
      <td>{data.website}</td> 
    </tr> 
    ); 
    return persons; }
  render(){
    return(
        <div>
          <table>
            <thead>
              <tr>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {this.renderUsers()}
            </tbody>
          </table>
        </div>
    );
  }
}

export default App;
