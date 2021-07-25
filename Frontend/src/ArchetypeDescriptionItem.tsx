import { Archetype } from "./state/AppStateContext"
import { ArchetypeDescriptionItemContainer, ArchetypeDescriptionName, ArchetypeDescriptionPayload } from "./styles"

type ArchetypeDescriptionItemProps = {
	arch_object: Archetype | undefined
}

export const ArchetypeDescriptionItem = ({ arch_object }: ArchetypeDescriptionItemProps) => {
	return (
		<ArchetypeDescriptionItemContainer>
			<ArchetypeDescriptionName>
				<h4>{arch_object?.name}</h4>
			</ArchetypeDescriptionName>
			<ArchetypeDescriptionPayload>
				<p>{arch_object?.desc}</p>
			</ArchetypeDescriptionPayload>
		</ArchetypeDescriptionItemContainer>
	)
}
