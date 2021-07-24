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
	return (
		<AppStateContext.Provider value={{ list }}>
			{children}
		</AppStateContext.Provider>
	)
}

export const useAppState = () => {
	return useContext(AppStateContext)
}
