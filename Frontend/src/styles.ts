import styled from "styled-components"

export const AppContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    width: auto;
    padding: 1rem;
    background-color: #3E4046;
    margin: 0;
    flex-grow: 1;
`

export const ColumnContainer = styled.div`
    display: flex;
    background-color: #65C44F;
    border-radius: 10px;
    border: 1px solid black;
    height: 100vh;
    flex-grow: 1;
    margin: 0.5rem;
    padding: 1rem;
    max-width: 100%;
`

export const ArchetypeListContainer = styled.div`
    background-color: #3E4046;
    margin: 1rem;
    height: 85%;
    padding 1rem;
    min-width: 100px;
`
export const ArchetypeContainer = styled.div`
`

export const ArchetypeListItemContainer = styled.div`
    background-color: #3E4046;
    color: #FFEDE7;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    height: 5vh;
    width: 100%;
    border: 1px solid #FFEDE7;
`
export const ArchetypeHorizontalContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #3E4046;
    border: 1px solid #FFEDE7;
    height: 100%;
    flex-grow: 1;
`

export const ArchetypesDescriptionContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    flex-grow: 1;
    margin: 3px;
    margin-bottom: 0;
    padding: 3px;
    height: 100vh;
`
export const ArchetypesChosen = styled.div`
    display: flex;
    background-color: #3E4046;
    flex-direction: column;
    flex-grow: 1;
    height: 50vh;
`

export const ArchetypeDescriptionItemContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    flex-grow: 1;
    margin: 10px;
    padding: 10px;
    flex-direction: column;
    height: 20vh;
`
export const ArchetypeDescriptionName = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3E4046;
    color: #FFEDE7;
    margin: 1rem;
    padding 1rem;
    height: 5vh;

`
export const ArchetypeDescriptionPayload = styled.div`
    display: flex;
    border: 1px solid #FD5C06;
    color: #FFEDE7;
    flex-grow: 1;
    margin: 10px;
    padding 10px;
    overflow-wrap: break-word;
    height: 5vh;
`

export const ArchetypesChosenListContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow; 1;
    background-color: red;
    border: 1px solid black;
    padding: 3px;
    margin: 3px;
    height: 30vh;
`
export const ArchetypesChosenColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: green;
    flex-grow: 1;
    padding: 3px;
    margin: 3px;
    height: 30vh;
`
export const ArchetypesChosenColumnHeaderContainer = styled.div`
    display: flex;
    background-color: green;
    flex-grow: 1;
    border: 1px solid black;
    padding: 3px;
`
export const ArchetypesChosenColumnHeader = styled.div`
    display: flex;
    background-color: blue;
    flex-grow: 1;
    border: 1px solid black;
    padding: 5px;
    margin: 3px;
    overflow-wrap: break-word;
    width: 50px;
    height: 20vh;
    align-items: center;
    justify-content: center;
`
export const ArchetypesChosenArchetypesListContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: cyan;
    flex-grow: 8;
    border: 1px solid black;
    padding: 3px;
    margin: 3px;
`
export const ArchetypesChosenArchetypeNameContainer = styled.div`
    display: flex;
    background-color: white;
    flex-grow: 4;
    border: 1px solid black;
    padding: 3px;
    margin: 3px;
`
export const ArchetypesListItemDelete = styled.button`
    display: flex;
    background-color: red;
    flex-grow: 1;
    border: 1px solid black;
    padding: 3px;
    margin: 3px;
    justify-content: center;
    align-items: center;
`
export const ArchetypesChosenButtonCombiner = styled.div`
    display: flex;
    background-color: yellow;
    flex-grow: 1;
    border: 1px solid black;
    padding: 3px;
    margin: 3px;
`
export const MapProximityGenderSettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3E4046;
    flex-grow: 1;
    border: 1px solid #FFED7;
    padding: 1rem;
    margin: 1rem;
    height: 90vh;
    width: 100vw;
`
export const MapContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    flex-grow: 1;
    border: 1px solid #FFEDE7;
    padding: 1rem;
    margin: 1rem;
`
export const ResultsChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3E4046;
    flex-grow: 1;
    padding: 1rem;
    margin: 1rem;
    height: 80vh;
    width: 100vw;
`
export const ResultsContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    flex-grow: 1;
    border: 1px solid #FFED7;
    padding: 1rem;
    margin: 1rem;
    height: 65vh;
`
// export const ChatContainer = styled.div`
//     display: flex;
//     background-color: cyan;
//     flex-grow: 1;
//     border: 1px solid black;
//     padding: 1rem;
//     margin: 1rem;
//     height: 15vh;
// 
export const LoadingIcon = styled.div`
    display: flex;
    background-color: cyan;
    flex-grow: 1;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`
export const LoadingError = styled.div`
    display: flex;
    background-color: red;
    flex-grow: 1;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`
export const Button = styled.button`
    color: red;
`