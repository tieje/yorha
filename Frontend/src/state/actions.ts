//Action types
export type Action =
| {
	type: "ADD_ARCH_IDENTIFY_AS"
	payload: string
}
| {
	type: "REMOVE_ARCH_IDENTIFY_AS"
	payload?: string
}
| {
	type: "ADD_ARCH_LOOKING_FOR"
	payload: string
}
| {
	type: "REMOVE_ARCH_LOOKING_FOR"
	payload?: string
}
// These actions are created using action action creators below.
export const addArchIdentity = (
	name: string
): Action => ({
	type: "ADD_ARCH_IDENTIFY_AS",
	payload: name
})

export const removeArchIdentity = (): Action => ({
	type: "REMOVE_ARCH_IDENTIFY_AS",
	payload: ""
})
export const addArchLooking = (
	name: string
): Action => ({
	type: "ADD_ARCH_LOOKING_FOR",
	payload: name
})

export const removeArchLooking = (): Action => ({
	type: "REMOVE_ARCH_LOOKING_FOR",
	payload: ""
})
