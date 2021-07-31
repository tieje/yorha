import { AppContainer, ArchetypeHorizontalContainer, ArchetypesChosen, ChatContainer, MapContainer, MapProximityGenderSettingsContainer, ProximityGenderContainer, ResultsChatContainer, ResultsContainer } from './styles'
import { ArchetypesList } from './ArchetypesList';
import { ArchetypesChosenList } from './ArchetypesChosenList'
import { Column } from './Column';
// state
import { useAppState } from './state/AppStateContext';
import { ArchetypeDescription } from './ArchetypeDescription';
import { useState } from 'react'


export const App = () => {
    const { hoverItemId } = useAppState()
    const [ hoverId, setHoverId] = useState(hoverItemId)
    const updateArchId = (id: string): void => {
        setHoverId(id)
        console.log(id)
    }
    return (
        <AppContainer>
            <Column>
                <ArchetypeHorizontalContainer>
                    <ArchetypesList updateArchId={updateArchId}/>
                    <ArchetypesChosen>
                        <ArchetypeDescription id={hoverId}/>
                        <ArchetypesChosenList>
                            OH
                        </ArchetypesChosenList>
                    </ArchetypesChosen>
                </ArchetypeHorizontalContainer>
            </Column>
            <Column>
                <MapProximityGenderSettingsContainer>
                    <MapContainer>
                        other stuff
                    </MapContainer>
                    <ProximityGenderContainer>
                        there
                    </ProximityGenderContainer>
                </MapProximityGenderSettingsContainer>
            </Column>
            <Column>
                <ResultsChatContainer>
                    <ResultsContainer>
                        perfect
                    </ResultsContainer>
                    <ChatContainer>
                        ok
                    </ChatContainer>
                </ResultsChatContainer>
            </Column>
        </AppContainer>
    );
}
