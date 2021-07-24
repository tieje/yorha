import { AppContainer, ArchetypeHorizontalContainer, ArchetypesChosenListContainer, ArchetypesDescriptionContainer, ChatContainer, MapContainer, MapProximityGenderSettingsContainer, ProximityGenderContainer, ResultsChatContainer, ResultsContainer } from './styles'
import { ArchetypesList } from './ArchetypesList';
import { ArchetypesChosen } from './ArchetypesChosen'
import { Column } from './Column';
// state
import { useAppState } from './state/AppStateContext';

export const App = () => {
    const { list } = useAppState()
    return (
        <AppContainer>
            <Column>
                <ArchetypeHorizontalContainer>
                    <ArchetypesList />
                    <ArchetypesChosen>
                        <ArchetypesDescriptionContainer>
                            meh
                        </ArchetypesDescriptionContainer>
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
