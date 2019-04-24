export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_RELATIVE':
			return [...state, action.payload];
		case 'REMOVE_RELATIVE':
			return state.filter(relative => relative['Relative ID'] !== action.payload);
		default:
			return state;
	}
};
