//feat-mvp: select out of the three top pronouns (he/she/they)(check)
//each is an array in order: he/him/his (not attached yet to backend)
//populated according to position in array? (not attached to backend)

//bonus mode: options to add your own pronouns, paid feature to sort 
//according to gender, (all non-standard being rolled into the "they" option, presented
//as "other" or something like that? 


//something like:
import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

class GenderSelect extends Component<any,any>{
  constructor(props:string){
    super(props);
    this.state = {
      selectedOption: ''
    };
    }
  handleOptionChange = (changeEvent: { target: { value: any; }; }) => {
  this.setState({
    selectedOption: changeEvent.target.value
  });
}; 

handleFormSubmit = (formSubmitEvent: { preventDefault: () => void; }) => {
  formSubmitEvent.preventDefault();
  console.log('Pronouns selected: ', this.state.selectedOption);
};

 render() {
  return (
      <form onSubmit={this.handleFormSubmit}>
        <p> Select pronouns:</p>
        <div className = "form-check">
          <label>
          <input 
            type="radio" 
            name="gender-select"
            id="man" 
            value="he/him/his" 
            checked={this.state.selectedOption === "he/him/his"}
            onChange={this.handleOptionChange}
            className="form-check-input" 
            />
            he/him/his
          </label>
          </div>

          <div className = "form-check">
          <label>
          <input 
            type="radio" 
            name="gender-select"
            id="woman" 
            value="she/her/hers" 
            checked={this.state.selectedOption === "she/her/hers"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            />
            she/her/hers
          </label>
          </div>
          <div className = "form-check">
          <label>
          <input 
            type="radio" 
            name="gender-select"
            id="other" 
            value="they/them/theirs" 
            checked={this.state.selectedOption === "they/them/theirs"}
            onChange={this.handleOptionChange} 
            className="form-check-input"
            />
            they/them/theirs
          </label>
          </div>
          <div className="form-group">
            <button className="btn btn-primary mt-2" type="submit">
              Submit
            </button>
          </div>
    </form>
   );
  }
}

export default GenderSelect;

//to do:add styling,  connect to backend 
