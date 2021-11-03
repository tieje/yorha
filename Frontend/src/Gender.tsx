import { Component } from 'react';
import styled from 'styled-components';


class GenderSelect extends Component<any,any>{
//constructs the gender selection class, default value for the options is an empty string.
//types should be stronger

  constructor(props:string){
    super(props);
    this.state = {
      selectedOption: ''
    };
    }
    //when the user selects an option, it sets the state to pass the selected option string rather than an empty one
  handleOptionChange = (changeEvent: { target: { value: any; }; }) => {
  this.setState({
    selectedOption: changeEvent.target.value
  });
}; 
//styles the gender container
GenderStyleContainer=styled.div`
  display: flex;
  background-color: #3E4046;
  color: #FFEDE7;
  font-family: 'Space Mono', monospace;
  flex-grow: 1;
  border: 1px solid #FFEDE7;
  padding: 1rem;
  margin: .8rem;
`
//styles the input--should be stronger and expanded
GenderInput=styled.input`
  cursor: pointer;
`
//on submit it passes the selected option string to the console log for further testing 
handleFormSubmit = (formSubmitEvent: { preventDefault: () => void; }) => {
  formSubmitEvent.preventDefault();
  console.log('Pronouns selected: ', this.state.selectedOption);
};

 render(): JSX.Element {
  return (
    <this.GenderStyleContainer>
      <form onSubmit={this.handleFormSubmit}>
        <p> Select pronouns:</p>
        <div className = "form-check">
          <label>
            {/* does the heavy lifting of selecting and passing values */}
          <this.GenderInput
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
          <this.GenderInput 
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
          <this.GenderInput 
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
            <button type="submit">
              Submit
            </button>
          </div>
    </form>
    </this.GenderStyleContainer>
  );
  }

}

export default GenderSelect;


