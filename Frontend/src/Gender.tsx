//feat-mvp: select out of the three top pronouns (he/she/they)(check)
//each is an array in order: he/him/his (not attached yet to backend)
//populated according to position in array? (not attached to backend)

//bonus mode: options to add your own pronouns, paid feature to sort 
//according to gender, (all non-standard being rolled into the "they" option, presented
//as "other" or something like that? 


//something like:
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Form = props => {
  const [gender, setGender] = useState();
  const selectGender = e => {
    const target = e.target;
    if (target.checked) {
      setGender(target.value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(gender);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
	  <input type="radio" value="he/him/his" checked={gender == "he/him/his"}
	         onChange={selectGender} />
          <span>He/him/his</span>
	</label>
        <label>
	  <input type="radio" value="she/her/hers" checked={gender == "she/her/hers"}
	         onChange={selectGender} />
          <span>She/her/hers</span>
        </label>
	<label>
	  <input type="radio" value="they/them/theirs" checked={gender == "they/them/theirs"}
	         onChange={selectGender} />
          <span>They/them/theirs</span>
	</label>
	</div>
	<button type="submit">Submit</button>
	</form>
	);
};

//to do:add typescript, add styling, clean up component documentation and file structure, connect to backend 
