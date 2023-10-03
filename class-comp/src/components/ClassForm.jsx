import React, { Component } from 'react'

export default class ClassForm extends Component {
    constructor(){
        super();
    }


  render() {
    return (
      <div>
        <h1>ClassForm</h1>
        <form action="">
            <label>Account Number</label>
                <input type="text" placeholder={this.props.accountNumber}/>
            <label>ID</label>
                <input type="text" placeholder={this.props.Id}/>
            <label>Birth Date</label>
                <input type="date" placeholder={this.props.birthDate}/>
        <button type='submit'>SUBMIT </button>
        </form>
      </div>
    )
  }
}
