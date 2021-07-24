import { ArchetypeListItemContainer  } from "./styles";

type ArchetypeListItemProps = {
    id: string
    name: string
}

export const ArchetypeListItem = ({ name }: ArchetypeListItemProps) => {
    return (
        <ArchetypeListItemContainer>{name}</ArchetypeListItemContainer>
    )
}

