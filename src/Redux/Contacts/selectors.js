export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state=> state.contacts.contacts.isLoading;
export const selectFilter = state => state.contacts.filter;
export const selectUser = state => state.auth.user
export const selectIsOnline = state => state.auth.online
export const selectUserLoading = state => state.auth.loading

export const selectFilterdData = state => {
	const contacts = selectContacts(state)
	const filter = selectFilter(state)
	return contacts.filter(contact => contact.name.toLowerCase().includes(filter))
}
