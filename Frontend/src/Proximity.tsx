import React from 'react';
import styled from 'styled-components';

const ProxStyleContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    color: #FFEDE7;
    font-family: 'Space Mono', monospace;
    flex-grow: 1;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`;

class Proximity extends React.Component {
    state = {
        value: 0
    }
    
    handleOnChange = (e:any) => this.setState({ value: ((e.target as HTMLInputElement).value )})
    
    handleFormSubmit = (formSubmitEvent: { preventDefault: () => void; }) => {
        formSubmitEvent.preventDefault();
        console.log(this.state.value)
      };
    render (){
        return ( 
            <ProxStyleContainer>
                <input type="range" min={0} max={50} value={this.state.value} className="slider" onChange={this.handleOnChange} />
                <div className="value">{this.state.value}</div>
            </ProxStyleContainer>
        )
    }
}

export default Proximity;

