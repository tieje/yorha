import { Action } from './actions'

export type Archetype = {
	id: string;
	name: string;
	desc: string;
}
export type AppState = {
	hoverItemId: string
	list: Archetype[];
	identifyAs: string[]
	lookingFor: string[]
}

export const appStateReducer = (state: AppState, action: Action): AppState => {
	switch (action.type) {
		case "ADD_ARCH_IDENTIFY_AS": {
			let ln = state.identifyAs.length

			if (state.identifyAs) {

			}
			return {
				...state,
				identifyAs: [
					...state.
				]
			}
		}
		default:
			return state
	}
}
