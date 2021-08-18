import { ArchetypesChosenColumnContainer, ArchetypesChosenListContainer, ArchetypesChosenColumnHeaderContainer, ArchetypesChosenColumnHeader, ArchetypesChosenArchetypesListContainer, ArchetypesChosenArchetypeNameContainer } from "./styles";
import { useAppState } from "./state/AppStateContext"
import { Archetype } from "./state/appStateReducer"

type ArchetypesChoseColumnProps = {
	header: string
}

type ArchetypesChosenArchetypeNameProps = {
	arch_name: string
}

export const ArchetypesChosenList = () => {
	return (
		<ArchetypesChosenListContainer>
			<ArchetypesChosenColumn header='I identify as a...' />
			<ArchetypesChosenColumn header='I am looking for a...' />
		</ArchetypesChosenListContainer>
	)
}

const ArchetypesChosenColumn = ({ header }: ArchetypesChoseColumnProps) => {
	return (
		<ArchetypesChosenColumnContainer>
			<ArchetypesChosenColumnHeaderContainer>
				<ArchetypesChosenColumnHeader>
					{header}
				</ArchetypesChosenColumnHeader>
				<ArchetypesChosenArchetypesList />
			</ArchetypesChosenColumnHeaderContainer>
		</ArchetypesChosenColumnContainer>
	)
}
const ArchetypesChosenArchetypesList = () => {
	const { list } = useAppState()
	return (
		<ArchetypesChosenArchetypesListContainer>
			{list.map((item: Archetype) => (
				<ArchetypesChosenArchetypeName arch_name = { item.name } />
			))}
		</ArchetypesChosenArchetypesListContainer>
	)
}

const ArchetypesChosenArchetypeName = ({ arch_name }: ArchetypesChosenArchetypeNameProps) => {
	return (
		<ArchetypesChosenArchetypeNameContainer>
			{ arch_name }
		</ArchetypesChosenArchetypeNameContainer>
	)
}
