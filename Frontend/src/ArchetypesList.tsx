import { FC } from "react"
import { ArchetypeListContainer } from "./styles"
import { Archetype, ArchetypeName } from './archetype'

type ArchList = {
    list: Archetype[];
}

export const appData: ArchList = {
    list: [
        {
            id: '1',
            name: 'Warrior',
            desc: 'love fighting love',
        },
        {
            id: '2',
            name: 'Leader',
            desc: 'I will build this world anew',
        },
    ]
}



export const ArchetypesList: FC = ({ children }) => {
    return (
        <ArchetypeListContainer>
            {children}
        </ArchetypeListContainer>
    )
}

