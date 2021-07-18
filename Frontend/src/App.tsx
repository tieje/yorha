import { AppContainer } from './styles'
import { ArchetypesList } from './ArchetypesList';
import { Column } from './Column';



export const App = () => {
    return (
        <AppContainer>
            <Column>
                stuff
                <ArchetypesList>
                    more stuff
                </ArchetypesList>
            </Column>
            <Column>
                other stuff
            </Column>
            <Column>
                ok
            </Column>
        </AppContainer>
    );
}
