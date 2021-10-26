import styled from "styled-components"
export const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: yellow;
    flex-grow: 1;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`
const ResultItemContainer = styled.div`
    display: flex;
    background-color: red;
    flex-grow: 1;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`
const ResultsHeader = styled.div`
    display: flex;
    background-color: cyan;
    flex-grow: 1;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`
const ResultsLoadMore = styled.div`
    display: flex;
    background-color: white;
    flex-grow: 1;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`
const ResultsLoadMorePrev = styled.div`
    display: flex;
    background-color: cyan;
    flex-grow: 1;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`
const ResultsLoadMoreAfter = styled.div`
    display: flex;
    background-color: yellow;
    flex-grow: 1;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
    flex-direction: row-reverse;
`

const state = [
    {
        id: '1',
        username: 'keysmusicians',
        identifyAs: ['1', '2', '3'],
        lookingFor: ['1', '2', '3'],
        proximity: 5,
        gender: 'male'
    },
    {
        id: '2',
        username: 'nels',
        identifyAs: ['1', '2', '3'],
        lookingFor: ['1', '2', '3'],
        proximity: 5,
        gender: 'non-binary'
    },
    {
        id: '3',
        username: 'krydon',
        identifyAs: ['1', '2', '3'],
        lookingFor: ['1', '2', '3'],
        proximity: 5,
        gender: 'male'
    },
    {},
    {}
]
type ResultItemProps = {
    id?: string,
    username?: string,
    identifyAs?: string[],
    lookingFor?: string[],
    proximity?: number,
    gender?: string
}
export const Results = () => {
    return (
        <ResultsContainer>
            <ResultsHeader>
                Results Header
            </ResultsHeader>
            {state.map((item: ResultItemProps) => {
                return(<ResultItem key={item.id} id={item.id} username={item.username}/>
                )
            })}
            <ResultsLoadMore>
                <ResultsLoadMorePrev>
                    <button>&lt;</button>
                </ResultsLoadMorePrev>
                <ResultsLoadMoreAfter>
                    <button>&gt;</button>
                </ResultsLoadMoreAfter>
            </ResultsLoadMore>
        </ResultsContainer>
    )
}
const ResultItem = ({ id, username }: ResultItemProps) => {
    return (
        <ResultItemContainer>
            {username}
        </ResultItemContainer>
    )
}
