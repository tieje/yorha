import { AppContainer, ArchetypeHorizontalContainer, ArchetypesChosen, ChatContainer, MapContainer, MapProximityGenderSettingsContainer, ResultsChatContainer} from './styles'
import { Results } from './Results';
import { ArchetypesList } from './ArchetypesList';
import { ArchetypesChosenList } from './ArchetypesChosenList'
import { Column } from './Column';
// state
import { useAppState } from './state/AppStateContext';
import { ArchetypeDescription } from './ArchetypeDescription';
import { useState } from 'react'
import { Map } from './GoogleMap';
import GenderSelect from './Gender';
import GenderStyleContainer from './Gender';
import ProxStyleContainer from './Proximity';
import Proximity from './Proximity';
import { Chat } from './Chat';




export const App = () => {
    const { hoverItemId } = useAppState()
    const [hoverId, setHoverId] = useState(hoverItemId)
    const updateArchId = (id: string): void => {
        setHoverId(id)
    }
    return (
        <AppContainer>
            <Column>
                <ArchetypeHorizontalContainer>
                    <ArchetypesList key={Math.floor(Math.random() * 100)} updateArchId={updateArchId} />
                    <ArchetypesChosen>
                        <ArchetypeDescription id={hoverId} />
                        <ArchetypesChosenList />
                    </ArchetypesChosen>
                </ArchetypeHorizontalContainer>
            </Column>
            <Column>
                <MapProximityGenderSettingsContainer>
                    <MapContainer>
                        <Map />
                    </MapContainer>
                    <GenderStyleContainer>
                        <GenderSelect />
                    </GenderStyleContainer>
                    <ProxStyleContainer>
                        <Proximity />
                    </ProxStyleContainer>
                </MapProximityGenderSettingsContainer>
            </Column>
            <Column>
                <ResultsChatContainer>
                    <Results />
                    <ChatContainer>
                       <Chat />
                    </ChatContainer>
                </ResultsChatContainer>
            </Column>
        </AppContainer>
    );
}
