import { useAppState } from "./state/AppStateContext"
import { ArchetypesDescriptionContainer } from "./styles"
import { Archetype } from "./state/AppStateContext"
import { ArchetypeDescriptionItem } from "./ArchetypeDescriptionItem"

type ArchetypeDescriptionProps = {
	id: string
}

export const ArchetypeDescription = ({ id }: ArchetypeDescriptionProps) => { 
	const { getItemByListId } = useAppState()
	const arch_object = getItemByListId(id)
	return (
	<ArchetypesDescriptionContainer>
		<ArchetypeDescriptionItem arch_object={ arch_object } />
	</ArchetypesDescriptionContainer>
	)
}
