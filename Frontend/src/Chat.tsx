import React from 'react';
import styled from 'styled-components';
//styles the chat container
const ChatStyleContainer = styled.div`
display: flex;
background-color: #3E4046;
color: #FFEDE7;
font-family: 'Space Mono', monospace;
flex-grow: 1;
border: 1px solid #6FAD1D;
padding: .5rem;
margin: .5rem;
align-items: center;
justify-content: center;
border-radius: 10px;
height: 10vh;
width: 40vw;
`;
//creates a chat component which by default has an empty string and a boolean of whether or not show a message
//types should likely be stronger
class Chat extends React.Component<any, any> {
    constructor(props:string){ 
        super(props);
        this.state = {
            message: '',
            showMessage: false
        };
        
    }
    //presents the changes the user made to the string--currently needs to be coordinated with displayMessageHandler
    //because currently once submit is hit once, any changes made to the string appear (not when the user wants to submit them)
    handleOnChange = (event: { target: { value: any; }; }) => {
        this.setState({
          message: event.target.value
        });
      }; 
      //when the user hits submit, this logs their message for future testing. 
    handleFormSubmit = (formSubmitEvent: { preventDefault: () => void; }) => {
        formSubmitEvent.preventDefault();
        console.log('Message sent: ', this.state.message);
        this.setState({showMessage: true});
      }
      //toggles the boolean of whether or not to show the message
      displayMessageHandler = (event: {target: {value: any; };}) => {
        let updatedMessage = event.target.value;
        this.setState({ message: updatedMessage });
         
      }

    render(): JSX.Element {
        return ( 
            <ChatStyleContainer>
               <form>
                <input type="text" value={this.state.message} onChange={this.handleOnChange} />
                <input type="submit" onClick={this.handleFormSubmit} />
                {this.state.showMessage && <p>{this.state.message}</p>}
                </form>
            </ChatStyleContainer>
        )
    }
}

export default Chat;
