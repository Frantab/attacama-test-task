export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_PATIENT':
            return [...state, action.payload];
        case 'REMOVE_PATIENT':
            return state.filter(patient => patient['Identification number'] !== action.payload);
        default:
            return state;
    }
};