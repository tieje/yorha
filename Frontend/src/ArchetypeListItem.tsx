import { ArchetypeListItemContainer } from "./styles";

type ArchetypeListItemProps = {
    id: string
    name: string
    updateArchId: (id: string) => void
}

export const ArchetypeListItem = ({ id, name, updateArchId }: ArchetypeListItemProps) => {
    const handleMouseOver = () => {
        updateArchId(id)
    }
    return (
        <ArchetypeListItemContainer onMouseOver={handleMouseOver}>{name}</ArchetypeListItemContainer>
    )
}
