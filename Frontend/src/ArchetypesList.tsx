import { ArchetypeListContainer } from "./styles"
import { FC } from 'react'
import { useAppState, Archetype } from "./state/AppStateContext"
import { ArchetypeListItem } from "./ArchetypeListItem"

type ArchetypesListProps = {
    updateArchId: (id: string) => void
}

export const ArchetypesList: FC<ArchetypesListProps> = ({ updateArchId }) => {
    const { list } = useAppState()
    return (
        <ArchetypeListContainer>
            {list.map((item: Archetype) => (
                <ArchetypeListItem name={item.name} key={item.id} id={item.id} updateArchId={updateArchId}/>
            ))}
        </ArchetypeListContainer>
    )
}
