import { ArchetypeListContainer } from "./styles"
import { useAppState, Archetype } from "./state/AppStateContext"
import { ArchetypeListItem } from "./ArchetypeListItem"

export const ArchetypesList = () => {
    const { list } = useAppState()
    return (
        <ArchetypeListContainer>
            {list.map((item: Archetype) => (
                <ArchetypeListItem name={item.name} key={item.id} id={item.id}/>
            ))}
        </ArchetypeListContainer>
    )
}
