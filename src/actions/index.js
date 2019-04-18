export const addPatient = payload => (dispatch, getState) => {
    dispatch({ type: 'ADD_PATIENT', payload });
};

export const removePatient = id => (dispatch, getState) => {
    dispatch({ type: 'REMOVE_PATIENT', payload: id });
};

export const addRelative = payload => (dispatch, getState) => {
    dispatch({ type: 'ADD_RELATIVE', payload });
};

export const removeRelative = id => (dispatch, getState) => {
    dispatch({ type: 'REMOVE_RELATIVE', payload: id });
};

export const addPhone = payload => (dispatch, getState) => {
    dispatch({ type: 'ADD_PHONE', payload });
};

export const removePhone = id => (dispatch, getState) => {
    dispatch({ type: 'REMOVE_PHONE', payload: id });
};