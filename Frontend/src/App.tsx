import { AppContainer, ArchetypeHorizontalContainer, ArchetypesChosenListContainer, ChatContainer, MapContainer, MapProximityGenderSettingsContainer, ProximityGenderContainer, ResultsChatContainer, ResultsContainer } from './styles'
import { ArchetypesList } from './ArchetypesList';
import { ArchetypesChosen } from './ArchetypesChosen'
import { Column } from './Column';
// state
import { useAppState } from './state/AppStateContext';
import { useState } from 'react'
import { ArchetypeDescription } from './ArchetypeDescription';

export const App = () => {
    const { list } = useAppState()
    const [hover, ArchHover] = useState('')
    return (
        <AppContainer>
            <Column>
                <ArchetypeHorizontalContainer>
                    <ArchetypesList />
                    <ArchetypesChosen>
                        <ArchetypeDescription id={'1'}/>
                        <ArchetypesChosenListContainer>
                            OH
                        </ArchetypesChosenListContainer>
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
