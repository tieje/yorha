import { AppContainer } from './styles';
import { Column } from './Column';

export const App = () => {
    return (
        <AppContainer>
            <Column>
                stuff
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
