import { ArchetypeContainer } from './styles'

export type Archetype = {
    id: string;
    name: string;
    desc: string;
}

export const ArchetypeName = ( arch: Archetype) => {
    return(
        <ArchetypeContainer>
            {arch.name}
        </ArchetypeContainer>
    )
}
