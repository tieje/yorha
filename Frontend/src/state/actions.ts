//Action types
type Adding = {
	index: number
	name: string
}

export type Action =
	| {
		type: "ADD_ARCH_IDENTIFY_AS"
		payload: Adding
	}
	| {
		type: "REMOVE_ARCH_IDENTIFY_AS"
		payload: number
	}
	| {
		type: "ADD_ARCH_LOOKING_FOR"
		payload: Adding
	}
	| {
		type: "REMOVE_ARCH_LOOKING_FOR"
		payload: number
	}
// These actions are created using action action creators below.
export const addArchIdentity = (index: number, name: string): Action => ({
	type: "ADD_ARCH_IDENTIFY_AS",
	payload: {index, name}
})

export const removeArchIdentity = (index: number): Action => ({
	type: "REMOVE_ARCH_IDENTIFY_AS",
	payload: index
})
export const addArchLooking = (index: number, name: string): Action => ({
	type: "ADD_ARCH_LOOKING_FOR",
	payload: {index, name}
})
export const removeArchLooking = (index: number): Action => ({
	type: "REMOVE_ARCH_LOOKING_FOR",
	payload: index
})
