export const login = (dispatch, user) => (dispatch({ type: 'login', payload: { user: user } }));
export const logout = (dispatch) => (dispatch({ type: 'logout' }));
