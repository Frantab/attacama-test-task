export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_PHONE':
			return [...state, action.payload];
		case 'REMOVE_PHONE':
			return state.filter(phone => phone['Phone ID'] !== action.payload);
		default:
			return state;
	}
};
