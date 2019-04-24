export const addPatient = payload => dispatch => {
	dispatch({type: 'ADD_PATIENT', payload});
};

export const removePatient = id => dispatch => {
	dispatch({type: 'REMOVE_PATIENT', payload: id});
};

export const addRelative = payload => dispatch => {
	dispatch({type: 'ADD_RELATIVE', payload});
};

export const removeRelative = id => dispatch => {
	dispatch({type: 'REMOVE_RELATIVE', payload: id});
};

export const addPhone = payload => dispatch => {
	dispatch({type: 'ADD_PHONE', payload});
};

export const removePhone = id => dispatch => {
	dispatch({type: 'REMOVE_PHONE', payload: id});
};
