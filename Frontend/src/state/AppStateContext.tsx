import { createContext, useContext, FC } from "react"

export type Archetype = {
    id: string;
    name: string;
    desc: string;
}
export type ArchList = {
    list: Archetype[];
}

type AppStateContextProps = {
	list: Archetype[]
    getItemByListId(id: string): Archetype | undefined
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

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
		{
			id: '3',
			name: 'Steward',
			desc: 'Help one and all.'
		}
    ]
}

export const AppStateProvider: FC = ({ children }) => {
	const { list } = appData
    const getItemByListId = (id: string) => {
        const arch_object = list.find((item) => item.id === id)
        return (arch_object)
    }
	return (
		<AppStateContext.Provider value={{ list, getItemByListId }}>
			{children}
		</AppStateContext.Provider>
	)
}

export const useAppState = () => {
	return useContext(AppStateContext)
}
