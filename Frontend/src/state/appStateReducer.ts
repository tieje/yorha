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
    markerPosition: google.maps.MapMouseEvent.latLng
}

export const appStateReducer = (state: AppState, action: Action): AppState => {
	switch (action.type) {
		case "ADD_ARCH_IDENTIFY_AS": {
			 let newState = {...state}
			 newState.identifyAs[action.payload.index] = action.payload.name
			return newState
		}
		case "REMOVE_ARCH_IDENTIFY_AS": {
			 let newState = {...state}
			 newState.identifyAs[action.payload] = ''
			return newState
		}
		case "ADD_ARCH_LOOKING_FOR": {
			 let newState = {...state}
			 newState.lookingFor[action.payload.index] = action.payload.name
			return newState
		}
		case "REMOVE_ARCH_LOOKING_FOR": {
			 let newState = {...state}
			 newState.lookingFor[action.payload] = ''
			return newState
		}
		default:
			return state
	}
}
